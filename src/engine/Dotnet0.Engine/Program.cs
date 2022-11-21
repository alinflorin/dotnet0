using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Dotnet0.Engine;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");


await builder.Build().RunAsync();
