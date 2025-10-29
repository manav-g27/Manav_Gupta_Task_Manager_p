using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p
    .AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();
app.UseCors();

var tasks = new List<TaskItem>();
var idSeq = 1;

app.MapGet("/api/tasks", () => Results.Ok(tasks));

app.MapPost("/api/tasks", ([FromBody] CreateTaskDto dto) =>
{
    var item = new TaskItem
    {
        Id = idSeq++,
        Description = dto.Description.Trim(),
        IsCompleted = false,
        CreatedAt = DateTime.UtcNow
    };
    tasks.Add(item);
    return Results.Created($"/api/tasks/{item.Id}", item);
});

app.MapPatch("/api/tasks/{id:int}/toggle", (int id) =>
{
    var t = tasks.FirstOrDefault(x => x.Id == id);
    if (t is null) return Results.NotFound();
    t.IsCompleted = !t.IsCompleted;
    return Results.Ok(t);
});

app.MapDelete("/api/tasks/{id:int}", (int id) =>
{
    var idx = tasks.FindIndex(x => x.Id == id);
    if (idx < 0) return Results.NotFound();
    tasks.RemoveAt(idx);
    return Results.NoContent();
});

var port = Environment.GetEnvironmentVariable("PORT") ?? "6207";
app.Urls.Add($"http://0.0.0.0:{port}");

app.Run();

record TaskItem
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
    public DateTime CreatedAt { get; set; }
}

record CreateTaskDto
{
    public string Description { get; set; } = string.Empty;
}
