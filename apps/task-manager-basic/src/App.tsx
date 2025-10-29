import { useEffect, useRef, useState } from "react";
import { api } from "./api";

type Task = { id:number; description:string; isCompleted:boolean; createdAt:string };
export default function App(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [q, setQ] = useState("");
  const [snack, setSnack] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    fetchTasks();
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==="/"){ e.preventDefault(); inputRef.current?.focus(); }
      if(e.key.toLowerCase()==="n"){ inputRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  },[]);

  async function fetchTasks(){ const {data} = await api.get<Task[]>("/api/tasks"); setTasks(data); }
  async function addTask(desc:string){ if(!desc.trim()) return; const {data} = await api.post<Task>("/api/tasks", {description:desc}); setTasks(v=>[data,...v]); setSnack("Task added. Undo?"); }
  async function toggle(id:number){ await api.patch(`/api/tasks/${id}/toggle`); setTasks(v=>v.map(t=>t.id===id?{...t,isCompleted:!t.isCompleted}:t)); }
  async function del(id:number){ const t=tasks.find(x=>x.id===id); await api.delete(`/api/tasks/${id}`); setTasks(v=>v.filter(x=>x.id!==id)); setSnack(`Deleted “${t?.description}”`); }

  const filtered = tasks.filter(t=> t.description.toLowerCase().includes(q.toLowerCase()) );

  return (
    <div className="min-h-screen">
      <div className="blob"/>
      <header className="header p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <h1 className="text-2xl font-bold">Task Manager • <span className="opacity-70">Manav Gupts</span></h1>
          <input ref={inputRef} className="input ml-auto" placeholder="/ to search, N to add…" value={q} onChange={e=>setQ(e.target.value)} />
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-4">
        <AddBar onAdd={addTask} />
        <div className="card">
          {filtered.length===0 ? (
            <p className="opacity-70">Nothing here yet—press <kbd>N</kbd> to add your first task.</p>
          ) : filtered.map(t=> (
            <div key={t.id} className="list-row group">
              <input type="checkbox" className="checkbox" checked={t.isCompleted} onChange={()=>toggle(t.id)} title="Alt+Click to quick toggle"/>
              <div className={"flex-1 " + (t.isCompleted?"line-through opacity-60":"")}>
                {t.description}
              </div>
              <button className="btn" onClick={()=>del(t.id)}>Delete</button>
            </div>
          ))}
        </div>
      </main>

      {snack && <div className="snackbar" onClick={()=>setSnack(null)}>{snack}</div>}
    </div>
  );
}

function AddBar({onAdd}:{onAdd:(d:string)=>void}){
  const [text,setText]=useState("");
  return (
    <div className="card flex gap-2 items-center">
      <input className="input" placeholder="Describe your task…" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter'){ onAdd(text); setText(""); }}} />
      <button className="btn" onClick={()=>{ onAdd(text); setText(""); }}>Add</button>
    </div>
  );
}
