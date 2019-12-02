using System;
using System.Linq;

//part two manually searched, by tweaking the two vars. did a little bit of linear systems stuff before though.
class MainClass {
 public static void Main(string[] args) {
  string[] SplitText = System.IO.File.ReadAllText("thingy.txt").Split(",");

  int[] commands = new int[SplitText.Length];

  for (int i = 0; i < SplitText.Length; i++) {
   commands[i] = Int32.Parse(SplitText[i]);
  }

  for (int i = 0; i < commands.Length; i++) {

    int TargetLocation = 0;
    int Val1 = 0;
    int Val2 = 0;

    if(i + 3 < commands.Length) {
      TargetLocation = commands[i + 3];
      Val1 = commands[commands[i + 1]];
      Val2 = commands[commands[i + 2]];
    }

   if (commands[i] == 1) {
    commands[TargetLocation] = Val1 + Val2;
    i += 3;
    continue;

   } else if (commands[i] == 2) {
    commands[TargetLocation] = Val1 * Val2;
    i += 3;
    continue;

   } else if (commands[i] == 99) {
    break;
   }
   
  }

  Console.WriteLine("Final arr:");
  Console.WriteLine("[{0}]", string.Join(", ", commands));

  Console.WriteLine();
  Console.WriteLine(commands[0]);
 }
}
