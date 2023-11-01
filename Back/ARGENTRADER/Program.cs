using ARGENTRADER.Repositories;
using ARGENTRADER.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle



var configuration = new ConfigurationBuilder()
           .AddJsonFile("appsettings.json")
           .Build();


var connectionString = configuration.GetConnectionString("connMyDB");

builder.Services.AddDbContext<DBRepository>(opt =>
    opt.UseSqlServer(connectionString));
builder.Services.AddScoped<UserServices>();
builder.Services.AddScoped<OperationService>();
builder.Services.AddScoped<WalletService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
    
builder.Services.AddRouting(options => {
    options.LowercaseUrls = true;
    options.LowercaseQueryStrings = true;
});


builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();

    });
});
var app = builder.Build();

app.UseCors();

//builder.Services.AddCors(options =>
//{

//    options.AddDefaultPolicy(builder =>
//    {
//        builder.AllowAnyOrigin()
//        .AllowAnyMethod()
//        .AllowAnyHeader();

//    });
//});
//app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
