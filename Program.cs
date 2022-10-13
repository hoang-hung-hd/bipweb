using BipWebVn.Models;
using BipWebVn.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
{
    var services = builder.Services;
    var env = builder.Environment;
    services.AddDbContext<AppDbContext>(options =>
    {
        string connectString = builder.Configuration.GetConnectionString("AppDbContext");
        options.UseSqlServer(connectString);
    });

    services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(o =>
    {
        var Key = Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("JWT:Key"));
        o.SaveToken = true;
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration.GetValue<string>("JWT:Issuer"),
            ValidAudience = builder.Configuration.GetValue<string>("JWT:Audience"),
            IssuerSigningKey = new SymmetricSecurityKey(Key)
        };
    });
    services.AddSession(options =>
    {
        options.IdleTimeout = TimeSpan.FromMinutes(30);
    });

    services.AddScoped<CarouselService, CarouselService>();
    services.AddScoped<AboutService, AboutService>();
    services.AddScoped<OurServiceService, OurServiceService>();
    services.AddScoped<CategoryService, CategoryService>();
    services.AddScoped<ProductService, ProductService>();
    services.AddScoped<ContactService, ContactService>();
    services.AddScoped<UploadFileService, UploadFileService>();
    services.AddScoped<LanguageService, LanguageService>();

}

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseFileServer(new FileServerOptions
{
    FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "FileUpload")),
    RequestPath = "/files",
    EnableDirectoryBrowsing = true
});
app.UseRouting();
app.UseSession();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
