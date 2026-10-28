window.QB = (window.QB || []).concat([
  // ---------- 4.1 Class definitions ----------
  {
    id: "c01", obj: "4.1", type: "mc",
    q: "You create the following class and then run the statement shown in `main`. What is the result?",
    code: String.raw`public class Car {
    private String model;

    public void Car(String m) {
        model = m;
    }
}

// in main:
Car c = new Car("Civic");`,
    options: [
      "Compilation fails because no constructor of `Car` accepts a `String`",
      "A `Car` object is created with `model` set to `\"Civic\"`",
      "It compiles, but `model` stays `null`",
      "It compiles, but throws a `NullPointerException` at runtime"
    ],
    answer: 0,
    why: "A constructor has NO return type. `public void Car(String m)` is an ordinary method that happens to share the class name, so the only constructor is the default no-arg one, and `new Car(\"Civic\")` doesn't compile."
  },
  {
    id: "c02", obj: "4.1", type: "mc",
    q: "Given the class below, what happens when `main` runs `Book b = new Book();`?",
    code: String.raw`public class Book {
    private String title;

    public Book(String title) {
        this.title = title;
    }
}`,
    options: [
      "Compilation fails because `Book` has no no-argument constructor",
      "`b.title` is `null`",
      "`b.title` is an empty string `\"\"`",
      "A runtime exception is thrown"
    ],
    answer: 0,
    why: "Java only supplies the free default constructor when you write NO constructors. Once you write `Book(String)`, `new Book()` is a compile error unless you also write `Book()` yourself."
  },
  {
    id: "c03", obj: "4.1", type: "type",
    q: "What is the output?",
    code: String.raw`class Player {
    private int score;

    public Player(int score) {
        score = score;
    }

    public int getScore() { return score; }
}

// in main:
Player p = new Player(25);
System.out.println(p.getScore());`,
    answer: "0",
    why: "Inside the constructor, `score` means the PARAMETER (it shadows the field), so `score = score;` assigns the parameter to itself. The field keeps its default `0`. Fix: `this.score = score;`."
  },
  {
    id: "c04", obj: "4.1", type: "mc",
    q: "You are writing a constructor for a class named `Customer`. The constructor has a parameter named `name` and the class has a field named `name`. You need to store the parameter in the field. Which statement should you use?",
    options: [
      "`this.name = name;`",
      "`name = this.name;`",
      "`name = name;`",
      "`this(name);`"
    ],
    answer: 0,
    why: "`this.name` is the field; plain `name` is the parameter. `name = this.name` copies the wrong direction, `name = name` does nothing, and `this(name)` calls another constructor."
  },
  {
    id: "c05", obj: "4.1", type: "type",
    q: "What is the output?",
    code: String.raw`class Box {
    int w, h;
    Box() {
        this(3);
        System.out.print("A");
    }
    Box(int s) {
        this(s, s * 2);
        System.out.print("B");
    }
    Box(int w, int h) {
        this.w = w;
        this.h = h;
        System.out.print("C");
    }
}

// in main:
Box b = new Box();
System.out.println(" " + (b.w * b.h));`,
    answer: "CBA 18",
    why: "`this(...)` runs the other constructor FIRST, then control returns. `Box()` → `Box(3)` → `Box(3, 6)` prints C, then back in `Box(int)` prints B, then back in `Box()` prints A. 3 × 6 = 18."
  },
  {
    id: "c06", obj: "4.1", type: "mc",
    q: "What is the result of compiling this constructor?",
    code: String.raw`public Box(int s) {
    System.out.println("Creating box");
    this(s, s);
}`,
    options: [
      "Compilation fails because the call to `this(...)` must be the first statement",
      "It compiles and prints `Creating box`, then calls `Box(int, int)`",
      "It compiles, but `this(s, s)` is ignored",
      "It compiles, but throws an exception at runtime"
    ],
    answer: 0,
    why: "Under the Java rules the exam tests, `this(...)` and `super(...)` must be the FIRST statement in a constructor. Anything before it is a compile error."
  },
  {
    id: "c07", obj: "4.1", type: "mc",
    q: "A file named `Shapes.java` contains the code below. What happens when you run `javac Shapes.java`?",
    code: String.raw`public class Circle {
}

class Square {
}`,
    options: [
      "Compilation fails: public class `Circle` must be declared in a file named `Circle.java`",
      "It compiles and creates `Shapes.class`",
      "It compiles and creates `Circle.class` and `Square.class`",
      "Compilation fails because a file can contain only one class"
    ],
    answer: 0,
    why: "A public top-level class must live in a file with exactly its name. A file CAN hold several classes, but only one may be public, and the file name must match it."
  },
  {
    id: "c08", obj: "4.1", type: "multi",
    q: "Which two statements about Java source files are true? (Choose two.)",
    options: [
      "A source file can contain at most one `public` top-level class.",
      "If a source file contains a `public` class, the file name must match that class name.",
      "A source file must contain exactly one class.",
      "The file name must always match the class that contains `main`.",
      "File names are not case-sensitive, so `account.java` can hold `public class Account`."
    ],
    answer: [0, 1],
    why: "One public class per file, and the file is named after it (case-sensitive). Extra non-public classes are allowed, and `main` can be in any class."
  },
  {
    id: "c09", obj: "4.1", type: "type",
    q: "What is the output?",
    code: String.raw`class Animal {
    String sound() { return "..."; }
    String speak() { return "Animal says " + sound(); }
}

class Dog extends Animal {
    @Override
    String sound() { return "Woof"; }
}

// in main:
Animal a = new Dog();
System.out.println(a.speak());`,
    answer: "Animal says Woof",
    why: "The object is really a `Dog`, so the overridden `sound()` runs, even though it's called from inside `Animal.speak()` through an `Animal` reference. The object type picks the overridden method, not the variable type."
  },
  {
    id: "c10", obj: "4.1", type: "type",
    q: "What is the output?",
    code: String.raw`class Vehicle {
    Vehicle() { System.out.print("V"); }
}

class Truck extends Vehicle {
    Truck() { System.out.print("T"); }
    Truck(int axles) {
        this();
        System.out.print(axles);
    }
}

// in main:
new Truck(3);`,
    answer: "VT3",
    why: "`Truck(3)` calls `this()` first. `Truck()` has an invisible `super()` as its first line, so `Vehicle()` prints V, then T, then back in `Truck(int)` prints 3. The parent constructor always finishes first."
  },
  {
    id: "c11", obj: "4.1", type: "mc",
    q: "What is the result of compiling this code?",
    code: String.raw`class Account {
    private double balance = 100;
}

class Savings extends Account {
    void addInterest() {
        balance = balance * 1.05;
    }
}`,
    options: [
      "Compilation fails because `balance` has private access in `Account`",
      "It compiles, and `addInterest()` sets `balance` to `105.0`",
      "It compiles, but `balance` is unchanged",
      "It compiles, but throws an exception at runtime"
    ],
    answer: 0,
    why: "`private` members aren't accessible in subclasses. `Savings` would need `protected` access or a public/protected getter and setter in `Account`."
  },
  {
    id: "c12", obj: "4.1", type: "mc",
    q: "Class `Animal` declares `public String describe(int level)`. Class `Dog extends Animal`. Which method in `Dog` OVERRIDES it?",
    options: [
      "`public String describe(int lvl)`",
      "`public String describe(double level)`",
      "`public void describe(int level)`",
      "`public String Describe(int level)`"
    ],
    answer: 0,
    why: "Overriding needs the same name and parameter types (parameter NAMES don't matter) and a compatible return type. `double` makes it an overload, `void` is a compile error (incompatible return type), and `Describe` is a different name because Java is case-sensitive."
  },
  {
    id: "c13", obj: "4.1", type: "yn",
    q: "For each statement, select Yes if it is true, or No if it is false.",
    statements: [
      "Every class in Java directly or indirectly extends `Object`.",
      "A constructor must declare a return type of `void`.",
      "If a subclass constructor does not call `super(...)` or `this(...)`, Java automatically calls the superclass's no-argument constructor."
    ],
    answer: [true, false, true],
    why: "`Object` is the root of every class. Constructors have NO return type, not even `void`. The compiler inserts `super();` when you don't write it."
  },

  // ---------- 4.2 Data fields ----------
  {
    id: "c14", obj: "4.2", type: "mc",
    q: "You are creating a class named `Employee`. The `salary` field must be accessible ONLY from code inside the `Employee` class. Which access modifier should you use?",
    options: ["`private`", "`protected`", "`public`", "No modifier (package-private)"],
    answer: 0,
    why: "`private` = this class only. No modifier = same package. `protected` = same package plus subclasses. `public` = everyone."
  },
  {
    id: "c15", obj: "4.2", type: "yn",
    q: "For each statement, select Yes if it is true, or No if it is false.",
    statements: [
      "A `protected` field can be accessed by a subclass in a different package.",
      "A field with no access modifier can be accessed by any class in the same package.",
      "A `private` field can be accessed directly by a subclass."
    ],
    answer: [true, true, false],
    why: "Least to most open: private (class) → default (package) → protected (package + subclasses anywhere) → public (everyone). Subclasses never see `private` members directly."
  },
  {
    id: "c16", obj: "4.2", type: "type",
    q: "What is the output?",
    code: String.raw`class Ticket {
    static int count = 0;
    int id;

    Ticket() {
        count++;
        id = count;
    }
}

// in main:
Ticket t1 = new Ticket();
Ticket t2 = new Ticket();
Ticket t3 = new Ticket();
System.out.println(t1.id + " " + t3.id + " " + Ticket.count);`,
    answer: "1 3 3",
    why: "`count` is `static`, so all objects share one copy that reaches 3. Each object's own `id` is a snapshot taken when it was built: t1 got 1, t3 got 3."
  },
  {
    id: "c17", obj: "4.2", type: "type",
    q: "What is the output?",
    code: String.raw`class Counter {
    static int shared = 0;
    int own = 0;

    void hit() {
        shared++;
        own++;
    }
}

// in main:
Counter a = new Counter();
Counter b = new Counter();
a.hit();
a.hit();
b.hit();
System.out.println(a.own + "," + b.own + "," + a.shared);`,
    answer: "2,1,3",
    why: "Each object has its own `own` (a: 2, b: 1). There's only one `shared` for the whole class, and it counts all three calls, no matter which reference you read it through."
  },
  {
    id: "c18", obj: "4.2", type: "mc",
    q: "What is the result?",
    code: String.raw`public class Config {
    public static final int MAX_USERS = 50;

    public static void main(String[] args) {
        MAX_USERS = MAX_USERS + 10;
        System.out.println(MAX_USERS);
    }
}`,
    options: [
      "Compilation fails",
      "`60`",
      "`50`",
      "A runtime exception is thrown"
    ],
    answer: 0,
    why: "A `final` variable can be assigned only once. Reassigning it is a COMPILE error (\"cannot assign a value to final variable\"), not a runtime error."
  },
  {
    id: "c19", obj: "4.2", type: "mc",
    q: "You need a tax rate constant that is shared by all instances of a class, can never change, and follows Java naming conventions. Which declaration should you use?",
    options: [
      "`public static final double TAX_RATE = 0.07;`",
      "`public final double taxRate = 0.07;`",
      "`public static double TAX_RATE = 0.07;`",
      "`public final static double taxRate;`"
    ],
    answer: 0,
    why: "`static` = shared by all instances, `final` = can't change, ALL_CAPS_WITH_UNDERSCORES = constant naming convention. The others are missing `static` or `final`, or use the wrong naming."
  },
  {
    id: "c20", obj: "4.2", type: "multi",
    q: "You are creating a class named `Student` with a field `gpa`. Other classes must be able to read `gpa`, but may change it only through a method that rejects values outside 0.0–4.0. Which three actions should you perform? (Choose three.)",
    options: [
      "Declare `gpa` as `private`.",
      "Create a `public double getGpa()` method that returns `gpa`.",
      "Create a `public void setGpa(double g)` method that checks the range before assigning.",
      "Declare `gpa` as `public`.",
      "Declare `gpa` as `final`."
    ],
    answer: [0, 1, 2],
    why: "That's encapsulation: a private field, a public getter to read it, and a public setter that validates. `public` would let anyone bypass the check, and `final` would stop the setter from ever changing it."
  },
  {
    id: "c21", obj: "4.2", type: "type",
    q: "What is the output?",
    code: String.raw`class Item {
    int qty;
    double price;
    boolean sold;
    String name;
}

// in main:
Item it = new Item();
System.out.println(it.qty + " " + it.price + " " + it.sold + " " + it.name);`,
    answer: "0 0.0 false null",
    why: "FIELDS get default values: numbers 0 / 0.0, boolean `false`, char `'\\u0000'`, objects (including String) `null`. LOCAL variables get no defaults, and using one before you assign it is a compile error."
  },
  {
    id: "c22", obj: "4.2", type: "mc",
    q: "Class `Bank` declares `public static double rate;`. From another class, you need to set the rate to 0.03 WITHOUT creating a `Bank` object. Which statement should you use?",
    options: [
      "`Bank.rate = 0.03;`",
      "`Bank b; b.rate = 0.03;`",
      "`this.rate = 0.03;`",
      "`new Bank.rate = 0.03;`"
    ],
    answer: 0,
    why: "Static members belong to the class, so use `ClassName.member`. `Bank b; b.rate` fails because `b` was never initialized, and there's no `this` in another class's context."
  },

  // ---------- 4.3 Methods ----------
  {
    id: "c23", obj: "4.3", type: "mc",
    q: "The method below does not compile. You need it to send the doubled value back to the caller. What should you change?",
    code: String.raw`public static void doubleIt(int n) {
    return n * 2;
}`,
    options: [
      "Change `void` to `int`",
      "Remove the `return` keyword",
      "Change `return n * 2;` to `n = n * 2;`",
      "Remove the `static` keyword"
    ],
    answer: 0,
    why: "A `void` method can't return a value (\"unexpected return value\"). The return type must match what's returned. Changing `n` inside the method wouldn't affect the caller."
  },
  {
    id: "c24", obj: "4.3", type: "mc",
    q: "What is the result of compiling this method?",
    code: String.raw`public static String grade(int score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    }
}`,
    options: [
      "Compilation fails with a \"missing return statement\" error",
      "It compiles and returns `null` for scores below 80",
      "It compiles and returns `\"\"` for scores below 80",
      "It compiles, but throws an exception for scores below 80"
    ],
    answer: 0,
    why: "Every path through a non-void method must return a value. A score of 70 matches neither branch, so javac rejects it. Add a final `return \"C\";` or an `else`."
  },
  {
    id: "c25", obj: "4.3", type: "type",
    q: "What is the output?",
    code: String.raw`static void bump(int x) {
    x = x + 10;
    System.out.print(x + " ");
}

// in main:
int n = 5;
bump(n);
System.out.println(n);`,
    answer: "15 5",
    why: "Java is pass-by-value. `bump` gets a COPY of 5 and changes only its copy, so `n` in main is still 5."
  },
  {
    id: "c26", obj: "4.3", type: "type",
    q: "What is the output?",
    code: String.raw`static void change(int[] arr) {
    arr[0] = 99;
    arr = new int[] {7, 7, 7};
    arr[1] = 42;
}

// in main:
int[] data = {1, 2, 3};
change(data);
System.out.println(data[0] + " " + data[1]);`,
    answer: "99 2",
    why: "The method gets a copy of the REFERENCE. `arr[0] = 99` changes the shared array. After `arr = new int[]...`, `arr` points to a different array, so `arr[1] = 42` never touches `data`."
  },
  {
    id: "c27", obj: "4.3", type: "type",
    q: "What is the output?",
    code: String.raw`static void edit(StringBuilder sb, String s) {
    sb.append("!");
    s = s + "!";
}

// in main:
StringBuilder a = new StringBuilder("hi");
String b = "hi";
edit(a, b);
System.out.println(a + " " + b);`,
    answer: "hi! hi",
    why: "`StringBuilder` is mutable, so `append` changes the caller's object. `String` is immutable: `s + \"!\"` makes a NEW string and points only the local `s` at it."
  },
  {
    id: "c28", obj: "4.3", type: "mc",
    q: "What is the result?",
    code: String.raw`public class Game {
    int lives = 3;

    public static void main(String[] args) {
        lives--;
        System.out.println(lives);
    }
}`,
    options: [
      "Compilation fails",
      "`2`",
      "`3`",
      "A runtime exception is thrown"
    ],
    answer: 0,
    why: "`main` is `static`, so it has no object and can't reach the instance field `lives` (\"non-static variable cannot be referenced from a static context\"). Create a `Game` object first, or make `lives` static."
  },
  {
    id: "c29", obj: "4.3", type: "mc",
    q: "Class `Game` has an instance method `public void play()`. You need to call `play()` from `public static void main(String[] args)` in the same class. Which code should you use?",
    options: [
      "`Game g = new Game(); g.play();`",
      "`play();`",
      "`Game.play();`",
      "`this.play();`"
    ],
    answer: 0,
    why: "Instance methods need an object. In a static method there's no `this`, so `play()` and `this.play()` don't compile, and `Game.play()` only works for static methods."
  },
  {
    id: "c30", obj: "4.3", type: "type",
    q: "What is the output?",
    code: String.raw`static String f(int x)    { return "int"; }
static String f(long x)   { return "long"; }
static String f(double x) { return "double"; }

// in main:
System.out.println(f(5) + " " + f(5L) + " " + f(5.0f) + " " + f('A'));`,
    answer: "int long double int",
    why: "Java picks the closest match by widening. `5` → int, `5L` → long, `5.0f` (float) widens to double, `'A'` (char) widens to int. There's no exact float or char version, so it takes the nearest wider type."
  },
  {
    id: "c31", obj: "4.3", type: "mc",
    q: "A class contains both of these methods. What is the result?",
    code: String.raw`public int calc(int a) { return a * 2; }
public double calc(int a) { return a * 2.5; }`,
    options: [
      "Compilation fails because `calc(int)` is already defined",
      "It compiles; this is valid overloading",
      "It compiles; the second method overrides the first",
      "It compiles; the compiler picks the method based on the variable the result is stored in"
    ],
    answer: 0,
    why: "Overloads must differ in their PARAMETER LIST (number, type, or order of types). A different return type alone isn't enough."
  },
  {
    id: "c32", obj: "4.3", type: "multi",
    q: "Class `Shape` contains `public double area(double r)`. Which two methods can be added to `Shape` as valid overloads? (Choose two.)",
    options: [
      "`public double area(double w, double h)`",
      "`public double area(int side)`",
      "`public int area(double r)`",
      "`private double area(double radius)`",
      "`public static double area(double x)`"
    ],
    answer: [0, 1],
    why: "Only a different parameter list makes an overload. Changing just the return type, the access modifier, `static`, or the parameter NAME gives a duplicate method, which is a compile error."
  },

  // ---------- 4.4 Objects ----------
  {
    id: "c33", obj: "4.4", type: "type",
    q: "What is the output?",
    code: String.raw`class Pt {
    int x;
    Pt(int x) { this.x = x; }
}

// in main:
Pt a = new Pt(4);
Pt b = a;
b.x = 10;
a = new Pt(1);
System.out.println(a.x + " " + b.x);`,
    answer: "1 10",
    why: "`b = a` copies the reference, so both point at ONE object, and `b.x = 10` changes it. Then `a` is pointed at a brand-new Pt(1), while `b` still points at the old object with x = 10."
  },
  {
    id: "c34", obj: "4.4", type: "type",
    q: "What is the output?",
    code: String.raw`class Pt {
    int x;
    Pt(int x) { this.x = x; }
}

// in main:
Pt p = new Pt(2);
Pt q = new Pt(2);
Pt r = p;
System.out.println((p == q) + " " + (p == r));`,
    answer: "false true",
    why: "`==` on objects compares REFERENCES (same object?), not contents. `p` and `q` are two separate objects with equal data, so the result is false. `r` refers to the same object as `p`, so the result is true."
  },
  {
    id: "c35", obj: "4.4", type: "mc",
    q: "What is the result?",
    code: String.raw`class Robot {
    String name;

    void hello() {
        System.out.println("Hi " + name.toUpperCase());
    }
}

// in main:
Robot r = new Robot();
r.hello();`,
    options: [
      "A `NullPointerException` is thrown at runtime",
      "`Hi NULL`",
      "`Hi null`",
      "Compilation fails because `name` is not initialized"
    ],
    answer: 0,
    why: "The field `name` defaults to `null` (fields get defaults, so it compiles). Calling a method on `null` (`.toUpperCase()`) throws a NullPointerException. Plain `\"Hi \" + name` would print `Hi null`."
  },
  {
    id: "c36", obj: "4.4", type: "mc",
    q: "At line X, which object(s) are eligible for garbage collection?",
    code: String.raw`Phone p1 = new Phone();   // object A
Phone p2 = new Phone();   // object B
p1 = p2;
p2 = null;
// line X`,
    options: [
      "Only object A",
      "Only object B",
      "Both A and B",
      "Neither object"
    ],
    answer: 0,
    why: "After `p1 = p2`, nothing refers to A anymore, so A is eligible. `p2 = null` only clears one of B's two references, and `p1` still points to B."
  },
  {
    id: "c37", obj: "4.4", type: "yn",
    q: "For each statement about garbage collection, select Yes if it is true, or No if it is false.",
    statements: [
      "Calling `System.gc()` guarantees that garbage collection runs immediately.",
      "An object becomes eligible for garbage collection when no reference variable refers to it.",
      "A Java program must explicitly free an object's memory when it is finished with it."
    ],
    answer: [false, true, false],
    why: "The JVM manages memory automatically. `System.gc()` is only a REQUEST that the JVM may ignore. Objects with no remaining references become eligible for collection."
  },
  {
    id: "c38", obj: "4.4", type: "type",
    q: "What is the output?",
    code: String.raw`class Pet {
    String name;
    Pet(String n) { name = n; }

    public String toString() {
        return "Pet[" + name + "]";
    }
}

// in main:
Pet p = new Pet("Rex");
System.out.println(p);
System.out.println("My " + p);`,
    answer: "Pet[Rex]\nMy Pet[Rex]",
    why: "Printing an object, or concatenating it with a String, calls its `toString()` automatically. Because `Pet` overrides `toString()`, you get the custom text."
  },
  {
    id: "c39", obj: "4.4", type: "mc",
    q: "Class `Lamp` does NOT override `toString()`. What does `System.out.println(new Lamp());` print?",
    options: [
      "Something like `Lamp@7229724f` (the class name, `@`, and a hex hash code)",
      "An empty line",
      "The values of all of `Lamp`'s fields",
      "Nothing; compilation fails because `Lamp` has no `toString()`"
    ],
    answer: 0,
    why: "Every class inherits `toString()` from `Object`, which returns ClassName@hashcode. It always compiles."
  },

  // ---------- 5.1 Debugging ----------
  {
    id: "c40", obj: "5.1", type: "yn",
    q: "For each line of code, select Yes if it causes a COMPILE-TIME (syntax) error, or No if it does not.",
    statements: [
      "`int count = 4.0;`",
      "`int result = 10 / 0;`",
      "`String s = null; int n = s.length();`"
    ],
    answer: [true, false, false],
    why: "`int = double` is a compile error (possible lossy conversion; it needs a cast). `10 / 0` compiles fine and throws ArithmeticException at RUNTIME. Calling a method on `null` compiles fine and throws NullPointerException at RUNTIME."
  },
  {
    id: "c41", obj: "5.1", type: "mc",
    q: "This code is supposed to print the average of three test scores. What type of error does it contain, and what does it print?",
    code: String.raw`int a = 80, b = 90, c = 100;
double avg = a + b + c / 3;
System.out.println(avg);`,
    options: [
      "A logic error; it prints `203.0`",
      "A syntax error; it does not compile",
      "A runtime error; it throws an `ArithmeticException`",
      "No error; it prints `90.0`"
    ],
    answer: 0,
    why: "`/` runs before `+`, and `100 / 3` is int division = 33, so 80 + 90 + 33 = 203, which is stored as 203.0. It compiles and runs but gives the wrong answer: that's a LOGIC error. Fix: `(a + b + c) / 3.0`."
  },
  {
    id: "c42", obj: "5.1", type: "type",
    q: "What is the output?",
    code: String.raw`double x = 5.0 / 0;
double y = 0.0 / 0;
System.out.println(x + " " + y);`,
    answer: "Infinity NaN",
    why: "Only INTEGER division by zero throws ArithmeticException. Floating-point division by zero gives `Infinity` (or `-Infinity`), and 0.0 / 0 gives `NaN` (not a number)."
  },
  {
    id: "c43", obj: "5.1", type: "mc",
    q: "A program stops with the message below. Which statement is true?",
    code: String.raw`Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
    at Roster.printLast(Roster.java:12)
    at Roster.main(Roster.java:6)`,
    options: [
      "The exception was thrown on line 12 in `printLast`, which was called from line 6 in `main`",
      "The exception was thrown on line 6 in `main`",
      "The compiler reported a syntax error on line 12",
      "The array has 6 elements, and index 5 is invalid"
    ],
    answer: 0,
    why: "Read a stack trace from the TOP: the first `at` line is where it was thrown, and the lines below show who called it. It's a runtime exception, not a compile error. Length 5 means valid indexes are 0–4."
  },
  {
    id: "c44", obj: "5.1", type: "mc",
    q: "You run `javac Inventory.java` and receive `Inventory.java:8: error: ';' expected`. Which statement is true?",
    options: [
      "No `Inventory.class` file is created; you must fix line 8 and compile again",
      "`Inventory.class` is created, but the program will crash when it reaches line 8",
      "This is a runtime exception reported by the `java` command",
      "The program runs and skips line 8"
    ],
    answer: 0,
    why: "`javac` reports COMPILE (syntax) errors as File.java:line: error, and produces no .class file until they're fixed. The `java` command is what reports runtime exceptions."
  },
  {
    id: "c45", obj: "5.1", type: "multi",
    q: "Which two code segments compile but throw an exception at runtime? (Choose two.)",
    options: [
      "`int n = Integer.parseInt(\"4.5\");`",
      "`int[] a = new int[3]; a[3] = 1;`",
      "`int x = 7 / 2;`",
      "`String s = 'hello';`",
      "`double d = 7 / 0.0;`"
    ],
    answer: [0, 1],
    why: "\"4.5\" isn't an int, so `parseInt` throws NumberFormatException. Index 3 in a length-3 array throws ArrayIndexOutOfBoundsException. `7 / 2` is just 3, `'hello'` is a compile error (single quotes are for one char), and `7 / 0.0` is Infinity."
  },
  {
    id: "c46", obj: "5.1", type: "mc",
    q: "What is the result?",
    code: String.raw`int[] nums = {3, 6, 9};
int sum = 0;
for (int i = 1; i <= nums.length; i++) {
    sum += nums[i];
}
System.out.println(sum);`,
    options: [
      "An `ArrayIndexOutOfBoundsException` is thrown",
      "`15`",
      "`18`",
      "Compilation fails"
    ],
    answer: 0,
    why: "Two off-by-one bugs. Starting at 1 skips index 0, and `<= nums.length` reaches index 3, which doesn't exist, so it throws before printing. The correct loop is `for (int i = 0; i < nums.length; i++)`."
  },

  // ---------- 5.2 Exception handling ----------
  {
    id: "c47", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`try {
    System.out.print("A");
    int x = 10 / 0;
    System.out.print("B");
} catch (ArithmeticException e) {
    System.out.print("C");
} finally {
    System.out.print("D");
}
System.out.println("E");`,
    answer: "ACDE",
    why: "The exception jumps straight to the catch, so the rest of the try (B) is skipped. `finally` always runs, and because the exception was handled, execution continues after the try statement (E)."
  },
  {
    id: "c48", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`try {
    System.out.print("1");
    int[] a = new int[2];
    a[1] = 5;
    System.out.print("2");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.print("3");
} finally {
    System.out.print("4");
}
System.out.println("5");`,
    answer: "1245",
    why: "`a[1]` is valid for a length-2 array, so no exception is thrown and the catch is skipped. `finally` runs whether or not an exception occurred."
  },
  {
    id: "c49", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`static int test() {
    try {
        System.out.print("try ");
        return 1;
    } finally {
        System.out.print("finally ");
    }
}

// in main:
System.out.println(test());`,
    answer: "try finally 1",
    why: "`finally` runs even when the try block returns. It runs before control goes back to the caller, so \"finally \" prints before main prints the returned 1."
  },
  {
    id: "c50", obj: "5.2", type: "mc",
    q: "What happens when this code runs?",
    code: String.raw`try {
    String s = null;
    System.out.print("X");
    s.length();
    System.out.print("Y");
} catch (ArithmeticException e) {
    System.out.print("Z");
} finally {
    System.out.print("F");
}
System.out.print("END");`,
    options: [
      "It prints `XF`, then the program stops with a `NullPointerException`",
      "It prints `XZFEND`",
      "It prints `XFEND`",
      "It prints `XYFEND`"
    ],
    answer: 0,
    why: "The NullPointerException doesn't match `catch (ArithmeticException)`, so it isn't handled. `finally` still runs (F), then the exception crashes the program, so END never prints."
  },
  {
    id: "c51", obj: "5.2", type: "mc",
    q: "What is the result of compiling this code?",
    code: String.raw`try {
    int n = Integer.parseInt(input);
} catch (Exception e) {
    System.out.println("General");
} catch (NumberFormatException e) {
    System.out.println("Bad number");
}`,
    options: [
      "Compilation fails because `NumberFormatException` has already been caught",
      "It compiles and prints `General` for bad input",
      "It compiles and prints `Bad number` for bad input",
      "It compiles and prints both messages for bad input"
    ],
    answer: 0,
    why: "Catch blocks must go from MOST specific to LEAST specific. `Exception` already catches NumberFormatException, so the second block is unreachable, which is a compile error. Swap the two blocks to fix it."
  },
  {
    id: "c52", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`String[] vals = {"10", "x", "0"};
for (String v : vals) {
    try {
        int n = Integer.parseInt(v);
        System.out.print(100 / n + " ");
    } catch (NumberFormatException e) {
        System.out.print("NF ");
    } catch (ArithmeticException e) {
        System.out.print("AR ");
    }
}`,
    answer: "10 NF AR",
    why: "\"10\" → 100 / 10 = 10. \"x\" → parseInt throws NumberFormatException. \"0\" parses fine, but 100 / 0 throws ArithmeticException. Each exception is handled, so the loop keeps going."
  },
  {
    id: "c53", obj: "5.2", type: "yn",
    q: "For each statement, select Yes if it is true, or No if it is false.",
    statements: [
      "`NullPointerException` is a checked exception that must be caught or declared.",
      "`IOException` is a checked exception.",
      "`ArithmeticException` is a subclass of `RuntimeException`."
    ],
    answer: [false, true, true],
    why: "CHECKED exceptions (IOException, FileNotFoundException) must be caught or declared with `throws`, or the code won't compile. UNCHECKED exceptions are RuntimeException and its subclasses (NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, NumberFormatException, InputMismatchException)."
  },
  {
    id: "c54", obj: "5.2", type: "mc",
    q: "What is the result of compiling this code?",
    code: String.raw`import java.io.*;

public class Reader {
    public static void main(String[] args) {
        FileReader fr = new FileReader("data.txt");
    }
}`,
    options: [
      "Compilation fails: unreported exception `FileNotFoundException`; must be caught or declared to be thrown",
      "It compiles; a `FileNotFoundException` occurs at runtime only if data.txt is missing",
      "It compiles and runs with no errors",
      "It compiles, but throws a `NullPointerException`"
    ],
    answer: 0,
    why: "`FileNotFoundException` is CHECKED, so the compiler forces you to handle it even if the file exists. Either wrap the call in try/catch or add `throws` to main."
  },
  {
    id: "c55", obj: "5.2", type: "multi",
    q: "Refer to the `Reader` class in the previous question (`new FileReader(\"data.txt\")` in `main`). Which two changes allow the code to compile? (Choose two.)",
    options: [
      "Change the `main` declaration to `public static void main(String[] args) throws FileNotFoundException`",
      "Put the statement in a `try` block followed by `catch (FileNotFoundException e)`",
      "Put the statement in a `try` block followed by `catch (ArithmeticException e)`",
      "Put the statement in a `try` block followed by only a `finally` block",
      "Add `import java.util.*;`"
    ],
    answer: [0, 1],
    why: "Checked exceptions must be caught (by a matching catch) or declared with `throws`. Catching an unrelated exception, or using try/finally with no catch, still leaves the exception unhandled."
  },
  {
    id: "c56", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`try {
    throw new IllegalArgumentException("Age must be positive");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
    System.out.println(e);
}`,
    answer: "Age must be positive\njava.lang.IllegalArgumentException: Age must be positive",
    why: "`getMessage()` returns ONLY the message text. Printing `e` calls `toString()`, which gives the full class name, a colon, and the message. `printStackTrace()` would also print the `at ...` lines."
  },
  {
    id: "c57", obj: "5.2", type: "mc",
    q: "Which class is the direct superclass of `ArithmeticException`?",
    options: ["`RuntimeException`", "`Exception`", "`Throwable`", "`Error`"],
    answer: 0,
    why: "The hierarchy is Throwable → Exception → RuntimeException → ArithmeticException. `Error` is a separate branch under Throwable for serious JVM problems like OutOfMemoryError."
  },
  {
    id: "c58", obj: "5.2", type: "mc",
    q: "You need ONE catch block to handle both `NumberFormatException` and `ArithmeticException`. Which statement should you use?",
    options: [
      "`catch (NumberFormatException | ArithmeticException e)`",
      "`catch (NumberFormatException || ArithmeticException e)`",
      "`catch (NumberFormatException e, ArithmeticException e)`",
      "`catch (NumberFormatException & ArithmeticException e)`"
    ],
    answer: 0,
    why: "Multi-catch uses a SINGLE pipe `|` between the types and one variable name."
  },
  {
    id: "c59", obj: "5.2", type: "mc",
    q: "You are writing `setAge(int age)`. When `age` is negative, the method must stop and signal the caller with an `IllegalArgumentException`. Which statement should you use?",
    options: [
      "`throw new IllegalArgumentException(\"Age cannot be negative\");`",
      "`throws new IllegalArgumentException(\"Age cannot be negative\");`",
      "`throw IllegalArgumentException(\"Age cannot be negative\");`",
      "`return new IllegalArgumentException(\"Age cannot be negative\");`"
    ],
    answer: 0,
    why: "`throw` (a statement) + `new` exception object. `throws` (with an s) only goes in a method HEADER to declare exceptions. Without `new` it doesn't compile, and `return` just hands back an object without throwing anything."
  },
  {
    id: "c60", obj: "5.2", type: "type",
    q: "What is the output?",
    code: String.raw`static int divide(int a, int b) {
    System.out.print("in ");
    int r = a / b;
    System.out.print("out ");
    return r;
}

// in main:
try {
    System.out.print(divide(8, 2) + " ");
    System.out.print(divide(8, 0) + " ");
} catch (ArithmeticException e) {
    System.out.print("caught ");
}
System.out.println("done");`,
    answer: "in out 4 in caught done",
    why: "The first call prints \"in out \", then main prints \"4 \". The second call prints \"in \", then 8 / 0 throws. The exception travels up to main's catch, so \"out\" and the second result never print."
  },
  {
    id: "c61", obj: "5.2", type: "mc",
    q: "The user types `twenty` and presses Enter. What happens?",
    code: String.raw`Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
System.out.println(age);`,
    options: [
      "An `InputMismatchException` is thrown",
      "A `NumberFormatException` is thrown",
      "`0` is printed",
      "Compilation fails"
    ],
    answer: 0,
    why: "Scanner's `nextInt()` throws InputMismatchException (from java.util) for non-numeric input. `Integer.parseInt(\"twenty\")` would throw NumberFormatException instead, so know which one goes with which."
  },

  // ---------- Comments (1.2) ----------
  {
    id: "c62", obj: "1.2", type: "mc",
    q: "Which comment style is read by the `javadoc` tool to generate HTML documentation?",
    options: ["`/** ... */`", "`/* ... */`", "`// ...`", "`<!-- ... -->`"],
    answer: 0,
    why: "Javadoc comments start with `/**` (two stars). `/* */` is a regular block comment, `//` is a single-line comment, and `<!-- -->` is HTML, not Java."
  },
  {
    id: "c63", obj: "1.2", type: "mc",
    q: "You are documenting `public double getTotal(int qty)` with a Javadoc comment. Which tags describe the parameter and the value the method returns?",
    options: [
      "`@param qty` and `@return`",
      "`@parameter qty` and `@return`",
      "`@param qty` and `@output`",
      "`@input qty` and `@result`"
    ],
    answer: 0,
    why: "The standard Javadoc tags are `@param name description` and `@return description`. Others you may see: `@author`, `@version`, `@throws`."
  },
  {
    id: "c64", obj: "1.2", type: "type",
    q: "What is the output?",
    code: String.raw`int x = 5; // x = 10;
/* x = 20;
x = 30; */
x = x + 1; // add one
System.out.println(x);`,
    answer: "6",
    why: "Everything after `//` on a line, and everything between `/*` and `*/`, is ignored by the compiler. Only `x = 5` and `x = x + 1` run."
  },
  {
    id: "c65", obj: "1.2", type: "yn",
    q: "For each statement about comments, select Yes if it is true, or No if it is false.",
    statements: [
      "A single-line comment begins with `//` and ends at the end of the line.",
      "Comments are compiled into the .class file and slow the program down.",
      "A comment that begins with `/*` can span multiple lines."
    ],
    answer: [true, false, true],
    why: "The compiler throws comments away completely, so they have no effect on the .class file or on speed. `/* ... */` and `/** ... */` can span many lines, while `//` covers one line."
  }
]);
