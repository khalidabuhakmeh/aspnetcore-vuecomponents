using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnetcore_vuecomponents.ViewComponents
{
    public class HelloWorld : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}