using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_clhwang.models
{
    public class GradeCalculatorModel
    {
        [Required]
        public int Assignments { get; set; }
        public int Quizzes { get; set; }
        public int Projects { get; set; }
        public int Intex { get; set; }
        public int Midterm { get; set; }
        public int Final { get; set; }


    }
}
