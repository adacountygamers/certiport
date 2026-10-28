window.QB = (window.QB || []).concat([
  // ---------- 1.1 main() ----------
  {
    id: "a01", obj: "1.1", type: "mc",
    q: "You are creating a Java console application. Which method declaration will the `java` command accept as the program's entry point?",
    options: [
      "`public static void main(String[] args)`",
      "`public void main(String[] args)`",
      "`public static int main(String[] args)`",
      "`public static void Main(String[] args)`"
    ],
    answer: 0,
    why: "The JVM looks for `public static void main(String[] args)`. Without `static` the launcher errors out (no object exists yet), a non-void return type is rejected, and `Main` is a different name because Java is case-sensitive."
  },
  {
    id: "a02", obj: "1.1", type: "multi",
    q: "Which two declarations are also valid entry points for a Java application? (Choose two.)",
    options: [
      "`public static void main(String args[])`",
      "`public static void main(String... args)`",
      "`public static void main(String args)`",
      "`public static void main(string[] args)`",
      "`private static void main(String[] args)`"
    ],
    answer: [0, 1],
    why: "`String args[]` is just the C-style array syntax and `String...` is varargs, which is also a `String[]`. A single `String` isn't an array, `string` (lowercase) is not a type, and `private` hides main from the JVM."
  },
  {
    id: "a03", obj: "1.1", type: "type",
    q: "The program is run with the command `java Calc 5 3`. What is the output?",
    code: String.raw`public class Calc {
    public static void main(String[] args) {
        System.out.println(args.length);
        System.out.println(args[0] + args[1]);
        System.out.println(Integer.parseInt(args[0]) + Integer.parseInt(args[1]));
    }
}`,
    answer: "2\n53\n8",
    why: "Command-line arguments are always Strings, so `args[0] + args[1]` concatenates to `53`. Only after `Integer.parseInt` do you get numeric addition (`8`). The class name `Calc` is NOT in `args`, so the length is 2."
  },
  {
    id: "a04", obj: "1.1", type: "mc",
    q: "A program contains `System.out.println(args[2]);` in its `main` method. You run it with `java Report sales 2026`. What happens?",
    options: [
      "An `ArrayIndexOutOfBoundsException` is thrown at runtime",
      "`null` is printed",
      "An empty line is printed",
      "The program fails to compile"
    ],
    answer: 0,
    why: "Two arguments means valid indexes are 0 and 1, so `args[2]` throws `ArrayIndexOutOfBoundsException`. The compiler can't know how many arguments will be passed, so it compiles fine."
  },
  {
    id: "a05", obj: "1.1", type: "yn",
    q: "You have a source file named `Payroll.java`. For each statement, select Yes if true, No if false.",
    statements: [
      "`javac Payroll.java` creates a bytecode file named `Payroll.class`",
      "To run the program you type `java Payroll.class`",
      "`main` is `static` so the JVM can call it without first creating a `Payroll` object"
    ],
    answer: [true, false, true],
    why: "`javac` compiles `.java` into `.class` bytecode. You run it with the class name only: `java Payroll` (no extension). `static` lets the JVM call main with no instance."
  },
  {
    id: "a06", obj: "1.1", type: "type",
    q: "The program is run with: `java Greet \"Ada Lovelace\" 7`. What is the output?",
    code: String.raw`public class Greet {
    public static void main(String[] args) {
        System.out.println(args.length + " " + args[0]);
    }
}`,
    answer: "2 Ada Lovelace",
    why: "Quotes group words into one argument, so `args` is `{\"Ada Lovelace\", \"7\"}` and its length is 2, not 3."
  },

  // ---------- 1.2 I/O ----------
  {
    id: "a07", obj: "1.2", type: "type",
    q: "What is the output?",
    code: String.raw`System.out.print("A");
System.out.println("B");
System.out.print("C");
System.out.print("D\n");
System.out.print("E");`,
    answer: "AB\nCD\nE",
    why: "`print` leaves the cursor on the same line; `println` adds a newline after its text. `\\n` inside a string also ends the line, so `E` starts on line 3."
  },
  {
    id: "a08", obj: "1.2", type: "mc",
    q: "The variable `double price = 7.5;` holds an item's price. You need to display it exactly as `$7.50`. Which statement should you use?",
    options: [
      "`System.out.printf(\"$%.2f\", price);`",
      "`System.out.printf(\"$%2f\", price);`",
      "`System.out.printf(\"$%d\", price);`",
      "`System.out.printf(\"$%.2d\", price);`"
    ],
    answer: 0,
    why: "`%.2f` means 2 digits after the decimal point. `%2f` sets a minimum WIDTH of 2 and keeps the default 6 decimals (`$7.500000`). `%d` is for integers and throws `IllegalFormatConversionException` with a double."
  },
  {
    id: "a09", obj: "1.2", type: "type",
    q: "What is the output?",
    code: String.raw`int n = 1234;
System.out.printf("%05d|%,d%n", n, n * 1000);
System.out.println(String.format("%.1f", 2.75));`,
    answer: "01234|1,234,000\n2.8",
    why: "`%05d` pads with zeros to width 5, `%,d` adds grouping commas, `%n` is a newline. `%.1f` rounds 2.75 half-up to `2.8`."
  },
  {
    id: "a10", obj: "1.2", type: "type",
    q: "What is the output?",
    code: String.raw`System.out.println("C:\\temp\\new");
System.out.println("She said \"go\"");`,
    answer: "C:\\temp\\new\nShe said \"go\"",
    why: "`\\\\` prints one backslash and `\\\"` prints a double quote. Because each backslash is escaped, `\\n` in `new` is NOT a newline here."
  },
  {
    id: "a11", obj: "1.2", type: "mc",
    q: "The user types `17` and presses Enter when prompted for age. What happens?",
    code: String.raw`Scanner in = new Scanner(System.in);
System.out.print("Age: ");
int age = in.nextInt();
System.out.print("Name: ");
String name = in.nextLine();
System.out.println(name + " is " + age);`,
    options: [
      "The program does not wait for a name; it prints ` is 17` because `name` is an empty string",
      "The program waits for the user to type a name, then prints it",
      "An `InputMismatchException` is thrown",
      "The code does not compile because `nextLine` cannot follow `nextInt`"
    ],
    answer: 0,
    why: "`nextInt()` reads `17` but leaves the Enter (newline) in the buffer. `nextLine()` immediately consumes that leftover newline and returns `\"\"`. Fix: call an extra `in.nextLine();` after `nextInt()`."
  },
  {
    id: "a12", obj: "1.2", type: "mc",
    q: "You need to read keyboard input with the `Scanner` class. Which import statement is required?",
    options: [
      "`import java.util.Scanner;`",
      "`import java.io.Scanner;`",
      "`import java.lang.Scanner;`",
      "`import java.input.Scanner;`"
    ],
    answer: 0,
    why: "`Scanner` lives in `java.util`. `java.lang` is imported automatically, but Scanner is not in it. `java.io` has file/stream classes, not Scanner."
  },
  {
    id: "a13", obj: "1.2", type: "multi",
    q: "`in` is a `Scanner` reading `System.in`. Which two methods return a `String`? (Choose two.)",
    options: [
      "`in.next()`",
      "`in.nextLine()`",
      "`in.nextInt()`",
      "`in.nextDouble()`",
      "`in.nextBoolean()`"
    ],
    answer: [0, 1],
    why: "`next()` returns the next word (stops at whitespace) and `nextLine()` returns the rest of the line including spaces. The others return primitives."
  },
  {
    id: "a14", obj: "1.2", type: "type",
    q: "The user enters `12 7.5 hello world` on one line. What is the output?",
    code: String.raw`Scanner in = new Scanner(System.in);
int a = in.nextInt();
double b = in.nextDouble();
String c = in.next();
System.out.println(a + b);
System.out.println(c);`,
    answer: "19.5\nhello",
    why: "`a + b` is int + double, so it's numeric addition giving a double `19.5`. `next()` reads only one token, `hello`, and stops at the space."
  },

  // ---------- 1.3 scope ----------
  {
    id: "a15", obj: "1.3", type: "mc",
    q: "What is the result?",
    code: String.raw`for (int i = 0; i < 3; i++) {
    int total = i * 2;
}
System.out.println(i);`,
    options: [
      "Compilation fails",
      "`3` is printed",
      "`2` is printed",
      "A runtime exception is thrown"
    ],
    answer: 0,
    why: "`i` is declared in the `for` header, so its scope ends with the loop. Using it afterwards is a compile error (`cannot find symbol`). To use it later, declare `int i;` before the loop."
  },
  {
    id: "a16", obj: "1.3", type: "type",
    q: "What is the output?",
    code: String.raw`public class Counter {
    private int count = 10;
    public void update(int count) {
        count = count + 5;
        System.out.println(count);
        System.out.println(this.count);
    }
    public static void main(String[] args) {
        new Counter().update(1);
    }
}`,
    answer: "6\n10",
    why: "The parameter `count` shadows the field, so `count = count + 5` changes only the parameter (1 + 5 = 6). `this.count` refers to the field, which is still 10."
  },
  {
    id: "a17", obj: "1.3", type: "mc",
    q: "What is the result?",
    code: String.raw`int score = 70;
int total;
if (score > 50) {
    total = 100;
}
System.out.println(total);`,
    options: [
      "Compilation fails because `total` might not have been initialized",
      "`100` is printed",
      "`0` is printed",
      "A `NullPointerException` is thrown"
    ],
    answer: 0,
    why: "Local variables get NO default value. The compiler sees a path (if the condition is false) where `total` is never assigned, so it refuses to compile. Only fields default to 0."
  },
  {
    id: "a18", obj: "1.3", type: "yn",
    q: "For each statement about variable scope, select Yes if true, No if false.",
    statements: [
      "A variable declared inside an `if` block can be used after the block ends",
      "An instance variable can be used by every instance method in its class",
      "A local variable declared in `main` can be used directly inside another static method of the same class"
    ],
    answer: [false, true, false],
    why: "Block variables die at the closing `}`. Instance variables have class-wide scope. Locals in `main` belong only to `main`; another method needs them passed as parameters."
  },
  {
    id: "a19", obj: "1.3", type: "mc",
    q: "What is the result?",
    code: String.raw`int x = 5;
{
    int x = 10;
    System.out.println(x);
}`,
    options: [
      "Compilation fails",
      "`10` is printed",
      "`5` is printed",
      "`10` and then `5` are printed"
    ],
    answer: 0,
    why: "Java does not let an inner block redeclare a local variable that's still in scope (`variable x is already defined`). Only a field can be shadowed by a local."
  },
  {
    id: "a20", obj: "1.3", type: "type",
    q: "What is the output?",
    code: String.raw`public class Ticket {
    static int sold = 0;
    int id;
    Ticket() { sold++; id = sold; }
    public static void main(String[] args) {
        Ticket a = new Ticket();
        Ticket b = new Ticket();
        Ticket c = new Ticket();
        System.out.println(a.id + " " + c.id + " " + a.sold);
    }
}`,
    answer: "1 3 3",
    why: "`sold` is static, so one copy is shared by all objects and ends at 3. `id` is per-object: `a` got 1 and `c` got 3. `a.sold` reads the shared value 3."
  },

  // ---------- 2.1 primitives ----------
  {
    id: "a21", obj: "2.1", type: "mc",
    q: "Which declaration compiles?",
    options: [
      "`float price = 19.99f;`",
      "`float price = 19.99;`",
      "`long big = 3000000000;`",
      "`int count = 5L;`"
    ],
    answer: 0,
    why: "A decimal literal is a `double` by default, so a `float` needs the `f` suffix. `3000000000` is too big for an int literal and needs `L`. `5L` is a long and can't go into an int without a cast."
  },
  {
    id: "a22", obj: "2.1", type: "multi",
    q: "Which two declarations compile? (Choose two.)",
    options: [
      "`byte b = 127;`",
      "`char c = 65;`",
      "`byte b = 128;`",
      "`short s = 40000;`",
      "`boolean flag = 0;`"
    ],
    answer: [0, 1],
    why: "`byte` holds -128 to 127 and `char` can be assigned an int constant 0 to 65535 (65 is `'A'`). 128 overflows byte, 40000 exceeds short's max of 32767, and Java booleans are only `true`/`false`."
  },
  {
    id: "a23", obj: "2.1", type: "type",
    q: "What is the output?",
    code: String.raw`char c = 'A';
System.out.println(c + 2);
System.out.println((char)(c + 2));
c += 1;
System.out.println(c);`,
    answer: "67\nC\nB",
    why: "`char + int` is promoted to int, so `'A' + 2` prints 67. Casting back to `char` prints `C`. `c += 1` has a built-in cast, so `c` stays a char and becomes `B`."
  },
  {
    id: "a24", obj: "2.1", type: "type",
    q: "What is the output?",
    code: String.raw`int max = Integer.MAX_VALUE;
max++;
System.out.println(max);
byte b = (byte) 130;
System.out.println(b);`,
    answer: "-2147483648\n-126",
    why: "Integer overflow wraps around silently with no exception: MAX_VALUE + 1 becomes MIN_VALUE. Casting 130 to byte wraps too: 130 - 256 = -126."
  },
  {
    id: "a25", obj: "2.1", type: "mc",
    q: "A class declares the fields `int count; double rate; boolean active; String name;` without assigning them. In `main`, you create an object `t` and run `System.out.println(t.count + \" \" + t.rate + \" \" + t.active + \" \" + t.name);`. What is printed?",
    options: [
      "`0 0.0 false null`",
      "`0 0 false null`",
      "`0 0.0 false` followed by a blank",
      "Nothing; compilation fails because the fields are not initialized"
    ],
    answer: 0,
    why: "FIELDS get default values: numeric 0 / 0.0, boolean `false`, objects `null` (printed as the word `null`). Only LOCAL variables must be initialized before use."
  },
  {
    id: "a26", obj: "2.1", type: "yn",
    q: "For each statement about primitive types, select Yes if true, No if false.",
    statements: [
      "An `int` is stored in 32 bits",
      "A `char` stores a 16-bit Unicode character",
      "A `long` variable can be assigned to an `int` variable without a cast"
    ],
    answer: [true, true, false],
    why: "int = 32 bits, char = 16 bits (unsigned Unicode). Going from long (64-bit) to int is narrowing, so it needs an explicit `(int)` cast."
  },
  {
    id: "a27", obj: "2.1", type: "mc",
    q: "Which assignment does NOT compile without an explicit cast?",
    options: [
      "`int i = 9.0;`",
      "`double d = 10;`",
      "`long l = 'x';`",
      "`float f = 100L;`"
    ],
    answer: 0,
    why: "`9.0` is a double; double to int is narrowing and needs `(int)`. The others are widening conversions (int to double, char to long, long to float), which Java does automatically."
  },
  {
    id: "a28", obj: "2.1", type: "type",
    q: "What is the output?",
    code: String.raw`double avg = 17 / 4;
System.out.println(avg);
int pct = (int) (0.29 * 100);
System.out.println(pct);`,
    answer: "4.0\n28",
    why: "`17 / 4` is integer division (4) BEFORE it's stored in the double, so you get `4.0`, not 4.25. `0.29 * 100` is really 28.999999999999996 in floating point, and the `(int)` cast truncates it to 28."
  },

  // ---------- 2.4 parsing / casting / conversion ----------
  {
    id: "a29", obj: "2.4", type: "type",
    q: "What is the output?",
    code: String.raw`String a = "12";
String b = "3";
System.out.println(a + b);
System.out.println(Integer.parseInt(a) + Integer.parseInt(b));
System.out.println(Integer.parseInt(a + b) / 2);`,
    answer: "123\n15\n61",
    why: "String + String concatenates (`123`). Parsing each first gives 12 + 3 = 15. `parseInt(\"123\") / 2` is integer division: 61."
  },
  {
    id: "a30", obj: "2.4", type: "mc",
    q: "What is the result of `int n = Integer.parseInt(\"4.0\");`?",
    options: [
      "A `NumberFormatException` is thrown at runtime",
      "`n` is `4`",
      "Compilation fails",
      "`n` is `0`"
    ],
    answer: 0,
    why: "`parseInt` only accepts whole-number text. `\"4.0\"` has a decimal point, so it throws `NumberFormatException`. It compiles fine because the argument is a valid String."
  },
  {
    id: "a31", obj: "2.4", type: "multi",
    q: "The variable `int count = 42;` must be converted to a `String`. Which three expressions will work? (Choose three.)",
    options: [
      "`String.valueOf(count)`",
      "`Integer.toString(count)`",
      "`\"\" + count`",
      "`(String) count`",
      "`count.toString()`"
    ],
    answer: [0, 1, 2],
    why: "`String.valueOf`, `Integer.toString`, and concatenating with `\"\"` all produce `\"42\"`. You can't cast a primitive to String, and a primitive has no methods (`int cannot be dereferenced`)."
  },
  {
    id: "a32", obj: "2.4", type: "type",
    q: "What is the output?",
    code: String.raw`System.out.println((int) 3.99);
System.out.println((int) -3.99);
System.out.println(Math.round(3.5));
System.out.println(Math.round(-3.5));`,
    answer: "3\n-3\n4\n-3",
    why: "Casting to int truncates toward zero, it does not round. `Math.round` rounds half UP (toward positive infinity): 3.5 to 4, but -3.5 to -3."
  },
  {
    id: "a33", obj: "2.4", type: "mc",
    q: "In the code `Integer x = 5; int y = x + 2;`, the `Integer` object is automatically converted to an `int` when computing `x + 2`. What is this called?",
    options: ["Unboxing", "Autoboxing", "Explicit casting", "Parsing"],
    answer: 0,
    why: "Wrapper object to primitive is unboxing. Primitive to wrapper (`Integer x = 5`) is autoboxing. Parsing converts a String to a number."
  },
  {
    id: "a34", obj: "2.4", type: "mc",
    q: "The variable `String s = \"7.25\";` holds user input. You need to store its numeric value in a `double`. Which statement should you use?",
    options: [
      "`double d = Double.parseDouble(s);`",
      "`double d = (double) s;`",
      "`double d = s.toDouble();`",
      "`double d = Integer.parseInt(s);`"
    ],
    answer: 0,
    why: "`Double.parseDouble` converts text to a double. A String can't be cast to a primitive, String has no `toDouble()` method, and `parseInt` throws `NumberFormatException` on `\"7.25\"`."
  },
  {
    id: "a35", obj: "2.4", type: "yn",
    q: "For each statement, select Yes if true, No if false.",
    statements: [
      "`Integer.parseInt(\" 42\")` (with a leading space) returns `42`",
      "`Integer.valueOf(\"42\")` returns an `Integer` object",
      "`Double.parseDouble(\"7\")` returns `7.0`"
    ],
    answer: [false, true, true],
    why: "`parseInt` does not trim whitespace, so `\" 42\"` throws `NumberFormatException`. `valueOf` returns the wrapper object; `parseInt` returns a primitive. `parseDouble` happily reads whole numbers."
  },

  // ---------- 2.5 arithmetic ----------
  {
    id: "a36", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`System.out.println(17 / 5);
System.out.println(17 % 5);
System.out.println(17 / 5.0);
System.out.println(-17 % 5);`,
    answer: "3\n2\n3.4\n-2",
    why: "int / int drops the decimal (3). `%` is the remainder (2). One double operand makes it decimal division (3.4). The sign of a `%` result follows the LEFT operand, so -17 % 5 is -2."
  },
  {
    id: "a37", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`int a = 4, b = 6;
System.out.println(a + b + "!" + a + b);
System.out.println("" + a * b + a);`,
    answer: "10!46\n244",
    why: "`+` runs left to right: `4 + 6` is numeric (10) until a String appears, then everything after is concatenation (`46`). On line 2, `*` binds tighter than `+`, so `a * b` = 24 first, then `\"24\" + 4`."
  },
  {
    id: "a38", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`int x = 5;
int y = x++ + ++x;
System.out.println(x + " " + y);`,
    answer: "7 12",
    why: "`x++` uses 5 and then bumps x to 6. `++x` bumps x to 7 and uses 7. y = 5 + 7 = 12, and x ends at 7."
  },
  {
    id: "a39", obj: "2.5", type: "mc",
    q: "`int total = 10;` has been declared. Which statement is true?",
    options: [
      "`total += 2.5;` compiles and sets `total` to 12, but `total = total + 2.5;` does not compile",
      "Both statements compile and set `total` to 12.5",
      "Both statements compile and set `total` to 12",
      "`total += 2.5;` does not compile, but `total = total + 2.5;` does"
    ],
    answer: 0,
    why: "Compound operators (`+=`, `-=`, `*=`, ...) include a hidden cast back to the variable's type, so 12.5 is truncated to 12. The long form yields a double that can't go into an int without a cast."
  },
  {
    id: "a40", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`int r = 2 + 3 * 4 - 8 / 3 % 2;
System.out.println(r);
System.out.println(10 - 4 - 3);
System.out.println((2 + 3) * 4 / 3);`,
    answer: "14\n3\n6",
    why: "`*`, `/`, `%` go first, left to right: 3*4 = 12, 8/3 = 2, 2%2 = 0, so 2 + 12 - 0 = 14. Same-level operators go left to right: (10-4)-3 = 3. Parentheses first: 5*4 = 20, 20/3 = 6 (integer division)."
  },
  {
    id: "a41", obj: "2.5", type: "mc",
    q: "You are simulating a die roll. You need a random integer from 1 through 6, inclusive. Which expression should you use?",
    options: [
      "`(int) (Math.random() * 6) + 1`",
      "`(int) Math.random() * 6 + 1`",
      "`(int) (Math.random() * 7)`",
      "`(int) (Math.random() * 6)`"
    ],
    answer: 0,
    why: "`Math.random()` returns 0.0 up to (but not including) 1.0; times 6 gives 0 to 5.99, cast gives 0 to 5, +1 gives 1 to 6. Without the parentheses the cast hits `Math.random()` alone (always 0), so the result is always 1. `* 7` gives 0 to 6; no `+1` gives 0 to 5."
  },
  {
    id: "a42", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`System.out.println(Math.pow(2, 3));
System.out.println(Math.sqrt(49));
System.out.println(Math.max(-4, Math.abs(-9)));
System.out.println(Math.ceil(4.1) + Math.floor(4.9));`,
    answer: "8.0\n7.0\n9\n9.0",
    why: "`Math.pow` and `Math.sqrt` always return double (`8.0`, `7.0`). `max` of two ints returns an int (9). `ceil(4.1)` = 5.0 and `floor(4.9)` = 4.0, both doubles, sum 9.0."
  },
  {
    id: "a43", obj: "2.5", type: "type",
    q: "What is the output?",
    code: String.raw`int n = 20;
n -= 4;
n *= 2;
n /= 3;
n %= 4;
System.out.println(n);`,
    answer: "2",
    why: "20 - 4 = 16; 16 * 2 = 32; 32 / 3 = 10 (integer division); 10 % 4 = 2."
  },
  {
    id: "a44", obj: "2.5", type: "multi",
    q: "Which two expressions evaluate to `2.5`? (Choose two.)",
    options: [
      "`5 / 2.0`",
      "`(double) 5 / 2`",
      "`5 / 2`",
      "`(double) (5 / 2)`",
      "`(int) 5.0 / 2`"
    ],
    answer: [0, 1],
    why: "One double operand forces decimal division. `(double) 5 / 2` casts 5 BEFORE dividing. `(double) (5 / 2)` divides first as ints (2) and then gives 2.0. `(int) 5.0 / 2` is int division (2)."
  },
  {
    id: "a45", obj: "2.5", type: "yn",
    q: "For each statement, select Yes if true, No if false.",
    statements: [
      "`10 % 3` evaluates to `1`",
      "`Math.pow(3, 2)` returns the `int` value `9`",
      "`(double) 7 / 2` evaluates to `3.5`"
    ],
    answer: [true, false, true],
    why: "10 / 3 is 3 remainder 1. `Math.pow` always returns a double (`9.0`), so storing it in an int needs a cast. The cast applies to 7 before dividing, so it's decimal division."
  }
]);
