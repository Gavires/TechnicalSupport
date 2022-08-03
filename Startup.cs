using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using TechnicalSupport.DataBase;
using Microsoft.EntityFrameworkCore;

namespace TechnicalSupport {
    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=TechnicalSupportdb;Trusted_Connection=True;";
            services.AddDbContext<DataBaseContext>(options => options.UseSqlServer(connectionString));

            services.AddControllers();

            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            if (!env.IsDevelopment()) {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });

            app.UseSpa(spa => {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment()) {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
