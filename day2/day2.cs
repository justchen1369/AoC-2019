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

   /* input:
   1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,2,9,23,27,
   1,6,27,31,1,31,9,35,2,35,10,39,1,5,39,43,2,43,9,47,1,5,47,51,
   1,51,5,55,1,55,9,59,2,59,13,63,1,63,9,67,1,9,67,71,2,71,10,75,
   1,75,6,79,2,10,79,83,1,5,83,87,2,87,10,91,1,91,5,95,1,6,95,99,
   2,99,13,103,1,103,6,107,1,107,5,111,2,6,111,115,1,115,13,119,
   1,119,2,123,1,5,123,0,99,2,0,14,0
   (newlines added for formatting)
   */
