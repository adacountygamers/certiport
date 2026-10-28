window.QB = (window.QB || []).concat([
  // ---------- 2.2 Strings ----------
  {
    id: "b01", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`String s = "java";
s.toUpperCase();
s.concat("21");
System.out.println(s + s.length());`,
    answer: "java4",
    why: "Strings are immutable. `toUpperCase()` and `concat()` return NEW strings, but the results are never assigned back to `s`, so `s` is still `\"java\"` (length 4). To keep the change you must write `s = s.toUpperCase();`."
  },
  {
    id: "b02", obj: "2.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`String a = "Hi";
String b = "Hi";
String c = new String("Hi");
System.out.println((a == b) + " " + (a == c) + " " + a.equals(c));`,
    options: ["`true false true`", "`true true true`", "`false false true`", "`true false false`"],
    answer: 0,
    why: "`a` and `b` are both literals, so they point to the same pooled object (`==` is true). `new String(\"Hi\")` creates a separate object, so `a == c` is false even though the text matches. `equals()` compares characters, so it is true. Always use `.equals()` to compare string content."
  },
  {
    id: "b03", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`String w = "certification";
System.out.println(w.substring(4, 8) + w.substring(10));`,
    answer: "ificion",
    why: "Index from 0: c0 e1 r2 t3 i4 f5 i6 c7 a8 t9 i10 o11 n12. `substring(4, 8)` takes indexes 4–7 (end is EXCLUSIVE) = `ific`. `substring(10)` takes index 10 to the end = `ion`."
  },
  {
    id: "b04", obj: "2.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`String s = "banana";
System.out.println(s.indexOf("an") + " " + s.lastIndexOf('a') + " " + s.indexOf("x"));`,
    options: ["`1 5 -1`", "`1 5 0`", "`2 6 -1`", "`1 3 -1`"],
    answer: 0,
    why: "b0 a1 n2 a3 n4 a5. The first `\"an\"` starts at index 1, the last `'a'` is at index 5, and a search that finds nothing returns `-1` (not 0, and not an exception)."
  },
  {
    id: "b05", obj: "2.2", type: "mc",
    q: "What happens when the following code segment runs?",
    code: String.raw`String code = "ABC";
for (int i = 0; i <= code.length(); i++) {
    System.out.print(code.charAt(i));
}`,
    options: ["`ABC` is printed, then a `StringIndexOutOfBoundsException` is thrown", "`ABC` is printed", "`AB` is printed", "The code does not compile"],
    answer: 0,
    why: "Valid indexes are 0 to `length() - 1` (0–2). The loop uses `<=`, so on the last pass it calls `charAt(3)` after already printing `ABC`, which throws `StringIndexOutOfBoundsException` at runtime. It compiles fine; the bug is off-by-one."
  },
  {
    id: "b06", obj: "2.2", type: "type",
    q: "What is the output? (Type each line on its own line.)",
    code: String.raw`char c = 'A';
System.out.println(c + 1);
System.out.println("" + c + 1);
System.out.println((char) (c + 1));`,
    answer: "66\nA1\nB",
    why: "`char + int` is numeric addition: `'A'` is 65, so `c + 1` is `66`. Once a String is on the left (`\"\" + c`), `+` becomes concatenation left-to-right, giving `A1`. Casting 66 back to `char` gives `B`."
  },
  {
    id: "b07", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`String name = null;
String msg = "Hello " + name;
System.out.println(msg.length());`,
    answer: "10",
    why: "Concatenating `null` does NOT throw; it inserts the text `null`, so `msg` is `\"Hello null\"` (10 characters). Only calling a method ON a null reference (like `name.length()`) throws a `NullPointerException`."
  },
  {
    id: "b08", obj: "2.2", type: "mc",
    q: "What happens when the following code segment runs?",
    code: String.raw`String answer = null;
if (answer.equals("yes")) {
    System.out.println("Y");
} else {
    System.out.println("N");
}`,
    options: ["A `NullPointerException` is thrown", "`N` is printed", "`Y` is printed", "The code does not compile"],
    answer: 0,
    why: "Calling any method on a `null` reference throws `NullPointerException` at runtime. It compiles because `answer` is a valid `String` variable. The safe version is `\"yes\".equals(answer)`, which just returns false."
  },
  {
    id: "b09", obj: "2.2", type: "mc",
    q: "After the following code runs, which statement about `r` is true?",
    code: String.raw`String x = "apple";
String y = "Apple";
int r = x.compareTo(y);`,
    options: ["`r` is a positive number", "`r` is 0", "`r` is a negative number", "The code does not compile because `compareTo` returns a `boolean`"],
    answer: 0,
    why: "`compareTo` returns an `int`: negative if the caller comes first, 0 if equal, positive if it comes after. Lowercase `'a'` (97) is greater than uppercase `'A'` (65), so `\"apple\".compareTo(\"Apple\")` is positive (32). `compareToIgnoreCase` would return 0."
  },
  {
    id: "b10", obj: "2.2", type: "multi",
    q: "You need to test whether the user's input `cmd` is the word quit, regardless of capitalization. Which two expressions should you use? (Choose two.)",
    options: [
      "`cmd.equalsIgnoreCase(\"QUIT\")`",
      "`cmd.toLowerCase().equals(\"quit\")`",
      "`cmd == \"quit\"`",
      "`cmd.equals(\"Quit\")`",
      "`cmd.toLowerCase() == \"quit\"`"
    ],
    answer: [0, 1],
    why: "`equalsIgnoreCase` ignores case, and lowercasing first then using `equals` also works. `==` compares references (and `toLowerCase()` creates a new object), so it is unreliable. `equals(\"Quit\")` is case-sensitive."
  },
  {
    id: "b11", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`StringBuilder sb = new StringBuilder("code");
sb.append(42).insert(0, "#").reverse();
System.out.println(sb);`,
    answer: "24edoc#",
    why: "Unlike `String`, `StringBuilder` is mutable, so each call changes `sb` itself: `code` → `code42` → `#code42` (insert at index 0) → reversed `24edoc#`."
  },
  {
    id: "b12", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`String s = "  java rocks  ";
s = s.trim().replace('a', 'o').toUpperCase();
System.out.println(s + "|" + s.length());`,
    answer: "JOVO ROCKS|10",
    why: "This time the result IS assigned back. `trim()` removes leading/trailing spaces (not the middle one) → `java rocks`; `replace('a','o')` replaces every `a` → `jovo rocks`; then uppercase. Length is 10 including the middle space."
  },
  {
    id: "b13", obj: "2.2", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "`\"Java\".length()` returns `4`.",
      "Calling `s.replace('a', 'b');` on its own line changes the contents of `s`.",
      "`\"abc\".substring(1, 1)` returns an empty string."
    ],
    answer: [true, false, true],
    why: "`length()` counts characters (4). Strings are immutable, so `replace` returns a new string; unless you assign it (`s = s.replace(...)`), `s` is unchanged. `substring(1, 1)` has begin == end, which is legal and returns `\"\"`."
  },
  {
    id: "b14", obj: "2.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`double price = 7.5;
int qty = 3;
System.out.println(String.format("%d x $%.2f = $%.1f", qty, price, qty * price));`,
    options: ["`3 x $7.50 = $22.5`", "`3 x $7.5 = $22.50`", "`3 x $7.50 = $22.50`", "An `IllegalFormatConversionException` is thrown"],
    answer: 0,
    why: "`%d` formats the int 3. `%.2f` rounds to 2 decimals (`7.50`), `%.1f` to 1 decimal (`22.5`). The exception would only happen if a type didn't match its specifier, e.g. passing a `double` to `%d`."
  },
  {
    id: "b15", obj: "2.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`String file = "Report2024.java";
boolean a = file.endsWith(".java");
boolean b = file.startsWith("report");
boolean c = file.contains("20");
System.out.println(a + " " + b + " " + c);`,
    answer: "true false true",
    why: "`startsWith`, `endsWith` and `contains` are all case-sensitive. The file starts with `Report` (capital R), so `startsWith(\"report\")` is false. `\"20\"` appears inside `2024`."
  },
  {
    id: "b16", obj: "2.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int a = 3, b = 4;
System.out.println(a + b + "=" + a + b);`,
    options: ["`7=34`", "`34=34`", "`7=7`", "`34=7`"],
    answer: 0,
    why: "`+` evaluates left to right. `a + b` are both ints, so that is math: 7. After the String `\"=\"` joins in, everything else is concatenation: `\"7=\" + 3` → `\"7=3\"`, then `+ 4` → `\"7=34\"`. Use parentheses `(a + b)` to force math."
  },
  {
    id: "b17", obj: "2.2", type: "multi",
    q: "Given `String s = \"Hello\";`, which two expressions evaluate to `true`? (Choose two.)",
    options: [
      "`s.indexOf('l') == 2`",
      "`s.charAt(4) == 'o'`",
      "`s.substring(1, 3).equals(\"ell\")`",
      "`s.length() == 6`",
      "`s.toLowerCase() == \"hello\"`"
    ],
    answer: [0, 1],
    why: "H0 e1 l2 l3 o4. The first `l` is at 2, and `charAt(4)` is `o`. `substring(1, 3)` is `el` (end exclusive). Length is 5. `toLowerCase()` makes a new object, so `==` is false even though the text matches."
  },
  {
    id: "b18", obj: "2.2", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "`s1.equals(s2)` compares the characters of two strings.",
      "`\"Cat\".compareTo(\"Dog\")` returns a negative number.",
      "`str.charAt(str.length())` returns the last character of `str`."
    ],
    answer: [true, true, false],
    why: "`equals` compares content. `C` comes before `D`, so `compareTo` is negative. The last character is at `str.length() - 1`; `charAt(str.length())` throws `StringIndexOutOfBoundsException`."
  },

  // ---------- 2.3 Arrays & ArrayList ----------
  {
    id: "b19", obj: "2.3", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int[] nums = new int[3];
boolean[] flags = new boolean[2];
String[] names = new String[2];
System.out.println(nums[1] + " " + flags[0] + " " + names[1]);`,
    answer: "0 false null",
    why: "Array elements get default values automatically: `0` for int, `0.0` for double, `false` for boolean, `'\\u0000'` for char, and `null` for objects like `String`. (Local variables, by contrast, have NO default and must be initialized.)"
  },
  {
    id: "b20", obj: "2.3", type: "mc",
    q: "You have `int[] arr`, `String s`, and `ArrayList<String> list`. Which option correctly gets the number of elements/characters in each, in that order?",
    options: [
      "`arr.length`, `s.length()`, `list.size()`",
      "`arr.length()`, `s.length()`, `list.size()`",
      "`arr.length`, `s.length`, `list.length()`",
      "`arr.size()`, `s.length()`, `list.length`"
    ],
    answer: 0,
    why: "Arrays use the field `length` (no parentheses). Strings use the method `length()`. ArrayLists use the method `size()`. Mixing these up is a compile error."
  },
  {
    id: "b21", obj: "2.3", type: "mc",
    q: "What happens when the following code segment runs?",
    code: String.raw`int[] scores = {90, 85, 77};
int total = 0;
for (int i = 0; i <= scores.length; i++) {
    total += scores[i];
}
System.out.println(total);`,
    options: ["An `ArrayIndexOutOfBoundsException` is thrown and nothing is printed", "`252` is printed", "`167` is printed", "The code does not compile"],
    answer: 0,
    why: "The array has indexes 0–2. With `<=`, the loop reaches `scores[3]`, which throws `ArrayIndexOutOfBoundsException` BEFORE the `println` runs. Fix: `i < scores.length`."
  },
  {
    id: "b22", obj: "2.3", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int[][] g = new int[3][4];
g[2][3] = 9;
System.out.println(g.length + " " + g[0].length + " " + g[2][3] + " " + g[1][1]);`,
    options: ["`3 4 9 0`", "`4 3 9 0`", "`3 4 9 null`", "`2 3 9 0`"],
    answer: 0,
    why: "`new int[3][4]` is 3 rows × 4 columns. `g.length` is the number of rows (3); `g[0].length` is the columns in row 0 (4). Unset int elements default to 0, not null."
  },
  {
    id: "b23", obj: "2.3", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int[][] t = { {1, 2}, {3, 4, 5}, {6} };
int sum = 0;
for (int r = 0; r < t.length; r++) {
    sum += t[r][t[r].length - 1];
}
System.out.println(sum);`,
    answer: "13",
    why: "This is a jagged array: each row has its own length. `t[r][t[r].length - 1]` is the LAST element of each row: 2 + 5 + 6 = 13."
  },
  {
    id: "b24", obj: "2.3", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int[] vals = {1, 2, 3};
for (int v : vals) {
    v = v * 10;
}
System.out.println(vals[0] + vals[1] + vals[2]);`,
    answer: "6",
    why: "Trap #1: in a for-each loop, `v` is a COPY of each element, so changing `v` does not change the array. Trap #2: `vals[0] + vals[1] + vals[2]` is int addition (1 + 2 + 3 = 6), not concatenation, because no String is involved."
  },
  {
    id: "b25", obj: "2.3", type: "multi",
    q: "You need to create an empty list that will hold whole numbers. Which two declarations compile? (Choose two.)",
    options: [
      "`ArrayList<Integer> list = new ArrayList<>();`",
      "`ArrayList<Integer> list = new ArrayList<Integer>();`",
      "`ArrayList<int> list = new ArrayList<int>();`",
      "`ArrayList<Integer> list = new ArrayList<Integer>[];`",
      "`ArrayList list<Integer> = new ArrayList();`"
    ],
    answer: [0, 1],
    why: "Generics only accept object types, so you must use the wrapper class `Integer`, not the primitive `int`. The diamond `<>` lets Java infer the type. `[]` makes it an array creation, not a list, and the type parameter belongs on the type, not the variable name."
  },
  {
    id: "b26", obj: "2.3", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add(0, "C");
list.set(1, "D");
list.remove("B");
System.out.println(list);`,
    answer: "[C, D]",
    accept: ["[C,D]"],
    why: "[A] → [A, B] → `add(0, \"C\")` INSERTS and shifts: [C, A, B] → `set(1, \"D\")` REPLACES index 1: [C, D, B] → `remove(\"B\")` removes by value: [C, D]. `println` on an ArrayList prints it in brackets."
  },
  {
    id: "b27", obj: "2.3", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`ArrayList<Integer> nums = new ArrayList<>();
nums.add(10);
nums.add(20);
nums.add(1);
nums.remove(1);
System.out.println(nums);`,
    options: ["`[10, 1]`", "`[10, 20]`", "`[20, 1]`", "An `IndexOutOfBoundsException` is thrown"],
    answer: 0,
    why: "With an `ArrayList<Integer>`, `remove(1)` passes an `int`, so Java calls `remove(int index)` and removes the element AT INDEX 1 (20). To remove the value 1 you would write `nums.remove(Integer.valueOf(1))`."
  },
  {
    id: "b28", obj: "2.3", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`ArrayList<Integer> list = new ArrayList<>();
list.add(2); list.add(4); list.add(5); list.add(6);
for (int i = 0; i < list.size(); i++) {
    if (list.get(i) % 2 == 0) {
        list.remove(i);
    }
}
System.out.println(list);`,
    answer: "[4, 5]",
    accept: ["[4,5]"],
    why: "Removing while looping forward SKIPS elements. i=0: remove 2 → [4, 5, 6], and 4 slides into index 0. i=1: 5 is odd. i=2: remove 6 → [4, 5]. The 4 was never checked. Loop backward (or use `i--` after removing) to fix it."
  },
  {
    id: "b29", obj: "2.3", type: "mc",
    q: "What happens when the following code segment runs?",
    code: String.raw`ArrayList<String> items = new ArrayList<>();
items.add("pen");
items.add("ink");
System.out.println(items.get(items.size()));`,
    options: ["An `IndexOutOfBoundsException` is thrown", "`ink` is printed", "`null` is printed", "`pen` is printed"],
    answer: 0,
    why: "`size()` is 2, but the valid indexes are 0 and 1. `get(2)` throws `IndexOutOfBoundsException`. The last element is `items.get(items.size() - 1)`."
  },
  {
    id: "b30", obj: "2.3", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "An `ArrayList` grows automatically as elements are added.",
      "`list.indexOf(\"x\")` returns `-1` if `\"x\"` is not in the list.",
      "After `list.clear()` runs, `list.isEmpty()` returns `false`."
    ],
    answer: [true, true, false],
    why: "ArrayLists resize themselves (arrays cannot). `indexOf` returns -1 when the item is missing. `clear()` removes every element, so `isEmpty()` returns true."
  },
  {
    id: "b31", obj: "2.3", type: "multi",
    q: "You need to declare an array that holds five `int` values. Which three statements compile? (Choose three.)",
    options: [
      "`int[] a = new int[5];`",
      "`int a[] = new int[5];`",
      "`int[] a = {0, 0, 0, 0, 0};`",
      "`int[5] a = new int[];`",
      "`int[] a = new int();`",
      "`int a = new int[5];`"
    ],
    answer: [0, 1, 2],
    why: "The size goes on the right side with `new`, and `int a[]` is a legal (older) style. An initializer list `{...}` sets both size and values. You can never put the size in the declared type (`int[5] a`), and `int a` is not an array type."
  },
  {
    id: "b32", obj: "2.3", type: "type",
    q: "Assume `java.util.Arrays` is imported. What is the output?",
    code: String.raw`int[] a = {5, 3, 9, 1};
Arrays.sort(a);
System.out.println(a[0] + a[a.length - 1] + " " + Arrays.toString(a));`,
    answer: "10 [1, 3, 5, 9]",
    accept: ["10 [1,3,5,9]"],
    why: "After sorting, the array is [1, 3, 5, 9]. `a[0] + a[3]` is int math (1 + 9 = 10) because it happens before any String. `Arrays.toString` prints the elements in brackets."
  },
  {
    id: "b33", obj: "2.3", type: "mc",
    q: "What is printed by the following code segment?",
    code: String.raw`int[] data = {1, 2, 3};
System.out.println(data);`,
    options: ["Text such as `[I@1b6d3586` (a type code and hash code)", "`[1, 2, 3]`", "`123`", "Nothing; the code does not compile"],
    answer: 0,
    why: "Printing an array variable prints its reference (type `[I` = int array, then `@` and a hash), not its contents. Use `Arrays.toString(data)` or a loop to print the values. ArrayLists, by contrast, DO print as `[1, 2, 3]`."
  },
  {
    id: "b34", obj: "2.3", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "`int[] a = new int[0];` compiles and creates an empty array.",
      "The index of the last element of array `a` is `a.length`.",
      "An array's size cannot change after the array is created."
    ],
    answer: [true, false, true],
    why: "Zero-length arrays are legal. The last index is `a.length - 1`. Arrays are fixed-size; use an `ArrayList` when you need to add or remove elements."
  },

  // ---------- 3.1 Branching ----------
  {
    id: "b35", obj: "3.1", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int score = 85;
if (score >= 60) {
    System.out.println("D");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 90) {
    System.out.println("A");
}`,
    options: ["`D` only", "`B` only", "`D` and then `B`", "`A` only"],
    answer: 0,
    why: "In an if / else-if chain, only the FIRST true branch runs and the rest are skipped. 85 >= 60 is true, so it prints `D`. This is a logic error: the conditions should be checked from highest to lowest."
  },
  {
    id: "b36", obj: "3.1", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int x = 3;
if (x > 5)
    System.out.print("big ");
    System.out.print("value ");
System.out.print("done");`,
    answer: "value done",
    why: "Without braces, an `if` controls ONLY the next single statement. The indentation of the second `print` is misleading; it runs no matter what. Java ignores indentation."
  },
  {
    id: "b37", obj: "3.1", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int a = 5, b = 10;
if (a > 7)
    if (b > 7)
        System.out.println("X");
else
    System.out.println("Y");
System.out.println("Z");`,
    answer: "Z",
    why: "Dangling else: an `else` always pairs with the NEAREST unmatched `if` (the inner `if (b > 7)`), regardless of indentation. Since `a > 7` is false, the whole inner if/else is skipped and only `Z` prints."
  },
  {
    id: "b38", obj: "3.1", type: "mc",
    q: "What is the result of compiling and running the following code segment?",
    code: String.raw`int x = 4;
if (x = 5) {
    System.out.println("five");
}`,
    options: ["Compilation error: `int` cannot be converted to `boolean`", "`five` is printed", "Nothing is printed", "A runtime exception is thrown"],
    answer: 0,
    why: "`=` is assignment, `==` is comparison. `x = 5` produces an `int`, and an `if` condition must be a `boolean`, so it does not compile. (With a `boolean` variable, `if (flag = true)` WOULD compile, which is a sneaky logic bug.)"
  },
  {
    id: "b39", obj: "3.1", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int day = 2;
switch (day) {
    case 1: System.out.print("Mon ");
    case 2: System.out.print("Tue ");
    case 3: System.out.print("Wed ");
        break;
    case 4: System.out.print("Thu ");
    default: System.out.print("Other");
}`,
    answer: "Tue Wed",
    why: "Execution jumps to `case 2` and then FALLS THROUGH into `case 3` because there is no `break` after `Tue`. The `break` after `Wed` stops it."
  },
  {
    id: "b40", obj: "3.1", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int n = 7;
switch (n) {
    case 1: System.out.print("one ");
    default: System.out.print("def ");
    case 2: System.out.print("two ");
        break;
    case 3: System.out.print("three ");
}`,
    options: ["`def two`", "`def`", "`one def two`", "Compilation error: `default` must be the last label"],
    answer: 0,
    why: "`default` can appear anywhere in a switch. No case matches 7, so execution starts at `default`, prints `def `, then falls through into `case 2` and prints `two ` before the `break`."
  },
  {
    id: "b41", obj: "3.1", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`String cmd = "Stop";
switch (cmd) {
    case "stop": System.out.println("Halting"); break;
    case "go": System.out.println("Going"); break;
    default: System.out.println("Unknown");
}`,
    options: ["`Unknown`", "`Halting`", "`Going`", "Compilation error: you cannot switch on a `String`"],
    answer: 0,
    why: "Switching on a String is legal (Java 7+), but matching uses `equals`, which is case-sensitive. `\"Stop\"` does not equal `\"stop\"`, so `default` runs."
  },
  {
    id: "b42", obj: "3.1", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int count = 0;
int x = 0;
if (x != 0 && 10 / x > 1) {
    count++;
}
if (x == 0 || ++count > 5) {
    count += 10;
}
System.out.println(count);`,
    answer: "10",
    why: "Short-circuit: `&&` stops when the left side is false, so `10 / x` never runs (no divide-by-zero). `||` stops when the left side is true, so `++count` never runs. Only `count += 10` executes."
  },
  {
    id: "b43", obj: "3.1", type: "mc",
    q: "What happens when the following code segment runs?",
    code: String.raw`int x = 0;
if (x != 0 & 10 / x > 1) {
    System.out.println("yes");
} else {
    System.out.println("no");
}`,
    options: ["An `ArithmeticException` is thrown", "`no` is printed", "`yes` is printed", "The code does not compile"],
    answer: 0,
    why: "A single `&` is NOT short-circuit: both sides are always evaluated. So `10 / x` runs with `x == 0`, and integer division by zero throws `ArithmeticException`. With `&&` it would print `no`."
  },
  {
    id: "b44", obj: "3.1", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int t = 72;
String s = t > 80 ? "hot" : t > 60 ? "warm" : "cold";
boolean r = !(t > 70) || t < 75 && t % 2 == 1;
System.out.println(s + " " + r);`,
    answer: "warm false",
    why: "Ternary: 72 > 80 is false, so check 72 > 60 → `warm`. For `r`, `&&` binds tighter than `||`: `!(true)` is false, and `(t < 75 && t % 2 == 1)` is `true && false` = false, so `false || false` = false."
  },
  {
    id: "b45", obj: "3.1", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "A `case` label can use a regular (non-final) variable, such as `case limit:`.",
      "If a `case` has no `break`, execution continues into the next case.",
      "If `flag` is a `boolean` variable, `if (flag = true)` compiles."
    ],
    answer: [false, true, true],
    why: "Case labels must be compile-time constants (literals or `final` constants). Missing `break` causes fall-through. `flag = true` assigns true and evaluates to a boolean, so it compiles (and is always true, a classic logic bug)."
  },
  {
    id: "b46", obj: "3.1", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`double a = 0.1 + 0.2;
if (a == 0.3) {
    System.out.println("equal");
} else {
    System.out.println("not equal");
}`,
    options: ["`not equal`", "`equal`", "`0.3`", "The code does not compile"],
    answer: 0,
    why: "Floating-point values are approximations: `0.1 + 0.2` is actually `0.30000000000000004`. Comparing doubles with `==` is unreliable; compare the difference to a small tolerance instead."
  },
  {
    id: "b47", obj: "3.1", type: "multi",
    q: "You need to print `Valid` only when `age` is between 18 and 65, inclusive. Which two conditions should you use? (Choose two.)",
    options: [
      "`if (age >= 18 && age <= 65)`",
      "`if (!(age < 18 || age > 65))`",
      "`if (18 <= age <= 65)`",
      "`if (age >= 18 || age <= 65)`",
      "`if (age > 18 && age < 65)`"
    ],
    answer: [0, 1],
    why: "Both correct options say the same thing (De Morgan's law). `18 <= age <= 65` does not compile in Java (you can't compare a boolean to an int). The `||` version is true for every age. `>`/`<` exclude 18 and 65, which the word inclusive forbids."
  },

  // ---------- 3.2 Loops ----------
  {
    id: "b48", obj: "3.2", type: "mc",
    q: "How many times does the body of the following loop run?",
    code: String.raw`int count = 0;
for (int i = 3; i <= 15; i += 3) {
    count++;
}`,
    options: ["5", "4", "6", "15"],
    answer: 0,
    why: "`i` takes the values 3, 6, 9, 12, 15 (15 is included because of `<=`). That's 5 passes. With `<` it would be 4."
  },
  {
    id: "b49", obj: "3.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int n = 10;
do {
    System.out.print(n + " ");
    n++;
} while (n < 5);
System.out.print(n);`,
    answer: "10 11",
    why: "A `do-while` checks its condition AFTER the body, so the body always runs at least once even though `10 < 5` is false. It prints `10 `, increments to 11, then stops."
  },
  {
    id: "b50", obj: "3.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int i = 1;
int steps = 0;
while (i < 100) {
    i *= 3;
    steps++;
}
System.out.println(steps + " " + i);`,
    options: ["`5 243`", "`4 81`", "`5 81`", "`4 243`"],
    answer: 0,
    why: "i goes 1 → 3 → 9 → 27 → 81 → 243 (5 steps). At 81 the condition `81 < 100` is still true, so the loop runs once more and `i` ends at 243."
  },
  {
    id: "b51", obj: "3.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    if (i == 8) break;
    System.out.print(i + " ");
}`,
    answer: "1 2 4 5 7",
    why: "`continue` skips the rest of the current pass (3 and 6 are skipped). `break` ends the whole loop, so when `i` reaches 8 nothing else prints."
  },
  {
    id: "b52", obj: "3.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int total = 0;
for (int r = 0; r < 4; r++) {
    for (int c = r; c < 4; c++) {
        total++;
    }
}
System.out.println(total);`,
    options: ["`10`", "`16`", "`6`", "`12`"],
    answer: 0,
    why: "The inner loop starts at `r`, so it runs 4, then 3, then 2, then 1 times: 4 + 3 + 2 + 1 = 10. It would be 16 only if the inner loop always started at 0."
  },
  {
    id: "b53", obj: "3.2", type: "type",
    q: "What is the output? (Type each line on its own line.)",
    code: String.raw`for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i * j);
    }
    System.out.println();
}`,
    answer: "1\n24\n369",
    why: "Row `i` prints `i * j` for j = 1..i with no spaces: row 1 → `1`; row 2 → `2` `4`; row 3 → `3` `6` `9`. `println()` after the inner loop ends each line."
  },
  {
    id: "b54", obj: "3.2", type: "mc",
    q: "Which code segment results in an infinite loop?",
    options: [
      "`int i = 0; while (i < 5) { System.out.print(i); }`",
      "`for (int i = 0; i < 5; i++) { System.out.print(i); }`",
      "`int i = 5; do { i--; } while (i > 0);`",
      "`int i = 0; while (i < 5) i += 2;`"
    ],
    answer: 0,
    why: "In the first option nothing inside the loop changes `i`, so `i < 5` stays true forever. The others all move `i` toward ending the loop."
  },
  {
    id: "b55", obj: "3.2", type: "mc",
    q: "What is the result of compiling and running the following code segment?",
    code: String.raw`for (int i = 0; i < 5; i++) {
    System.out.print(i);
}
System.out.println(i);`,
    options: ["Compilation error", "`012345`", "`01234`", "`012344`"],
    answer: 0,
    why: "A variable declared in the `for` header only exists inside the loop. Using `i` after the loop is a compile error (cannot find symbol). Declare `int i;` before the loop if you need it afterward."
  },
  {
    id: "b56", obj: "3.2", type: "type",
    q: "What is the output of the following code segment?",
    code: String.raw`int i;
int sum = 0;
for (i = 10; i > 2; i -= 3) {
    sum += i;
}
System.out.println(i + " " + sum);`,
    answer: "1 21",
    why: "Here `i` is declared outside, so it survives the loop. The body runs for i = 10, 7, 4 (sum = 21). Then `i` becomes 1, `1 > 2` is false, and the loop ends with `i` = 1."
  },
  {
    id: "b57", obj: "3.2", type: "type",
    q: "Assume `java.util.ArrayList` is imported. What is the output?",
    code: String.raw`ArrayList<String> words = new ArrayList<>();
words.add("tree"); words.add("a"); words.add("forest"); words.add("oak");
String longest = "";
for (String w : words) {
    if (w.length() > longest.length()) {
        longest = w;
    }
}
System.out.println(longest + longest.length());`,
    answer: "forest6",
    why: "A for-each loop visits each list element in order, keeping the longest seen so far: tree (4) → forest (6). `oak` is shorter. The output joins the word and its length with no space."
  },
  {
    id: "b58", obj: "3.2", type: "multi",
    q: "You need to print `5 4 3 2 1` (each number followed by a space). Which two code segments should you use? (Choose two.)",
    options: [
      "`for (int i = 5; i > 0; i--) System.out.print(i + \" \");`",
      "`int i = 5; while (i > 0) { System.out.print(i + \" \"); i--; }`",
      "`for (int i = 5; i >= 0; i--) System.out.print(i + \" \");`",
      "`int i = 5; while (i > 0) { i--; System.out.print(i + \" \"); }`",
      "`for (int i = 5; i > 0; i++) System.out.print(i + \" \");`"
    ],
    answer: [0, 1],
    why: "`>= 0` also prints 0. Decrementing BEFORE printing prints `4 3 2 1 0`. `i++` moves away from the stop condition and loops (nearly) forever."
  },
  {
    id: "b59", obj: "3.2", type: "yn",
    q: "For each statement, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "A `do-while` loop always executes its body at least once.",
      "`continue` immediately exits the loop entirely.",
      "A for-each loop can iterate over an `ArrayList`."
    ],
    answer: [true, false, true],
    why: "The `do-while` condition is checked after the body. `continue` only skips to the NEXT iteration; `break` exits the loop. For-each works on arrays and on collections like `ArrayList`."
  },
  {
    id: "b60", obj: "3.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int n = 4096;
int digits = 0;
int sum = 0;
while (n > 0) {
    sum += n % 10;
    n /= 10;
    digits++;
}
System.out.println(digits + " " + sum);`,
    options: ["`4 19`", "`3 19`", "`4 4096`", "`4 13`"],
    answer: 0,
    why: "`n % 10` grabs the last digit and `n /= 10` (integer division) drops it: 6, 9, 0, 4 → sum 19 over 4 passes. The loop stops when `n` becomes 0."
  },
  {
    id: "b61", obj: "3.2", type: "mc",
    q: "What is the output of the following code segment?",
    code: String.raw`int count = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 5; j++) {
        if (j == 2) break;
        count++;
    }
}
System.out.println(count);`,
    options: ["`6`", "`2`", "`15`", "`9`"],
    answer: 0,
    why: "`break` exits only the INNERMOST loop. Each of the 3 outer passes counts j = 0 and j = 1, then breaks: 3 × 2 = 6."
  },
  {
    id: "b62", obj: "3.2", type: "mc",
    q: "You need to add up the values in `int[] values`, skipping any negative numbers. `sum` is already declared and set to 0. Which code segment should you use?",
    options: [
      "`for (int v : values) { if (v < 0) continue; sum += v; }`",
      "`for (int v : values) { if (v < 0) break; sum += v; }`",
      "`for (int i = 1; i <= values.length; i++) { if (values[i] >= 0) sum += values[i]; }`",
      "`for (int v : values) { if (v < 0) sum += v; }`"
    ],
    answer: 0,
    why: "`continue` skips just the negative value and keeps going. `break` would stop at the first negative. Starting at 1 and using `<=` skips index 0 and goes out of bounds. The last option adds ONLY the negatives."
  }
]);
