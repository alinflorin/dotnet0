using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetZero.Engine.Dto
{
    public class MonacoCommand
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Tooltip { get; set; }
        public IEnumerable<object> Arguments { get; set; }
    }
}
