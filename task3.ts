// Добавить в задачу 1 валидацию на то, чтобы любая сторона была больше 0, если например ширина меньше 0 - выводим ошибку: ${sideName} must be greater than 0`

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  // Добавление защитного свойства type при создании класса
  constructor(protected readonly type: string) {}

  // Добавление публичного метода получения type
  getType(): string {
    return this.type;
  }

  protected validateSide(side: number, sideName: string): void {
    if (side <= 0) {
      console.log(`${sideName} must be greater than 0`);
    }
  }

  // Добавление публичных абстрактный методов для фигур - получение площади и периметра
  abstract getArea(): number;
  abstract getPerimeter(): number;

  // Добавление публичного метода описание класса
  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square);

    this.validateSide(side, "Square side");
  }

  // Получение площади
  getArea(): number {
    return this.side * this.side;
  }

  // Получение периметра
  getPerimeter(): number {
    return 4 * this.side;
  }

  // Получение описания
  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle);

    this.validateSide(width, "Rectangle width");
    this.validateSide(height, "Rectangle height");
  }

  // Получение площади
  getArea(): number {
    return this.height * this.width;
  }

  // Получение периметра
  getPerimeter(): number {
    return 2 * this.height + 2 * this.width;
  }

  // Получение описания
  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

//Класс Triangle
class Triangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Triangle);

    this.validateSide(side1, "Triangle side1");
    this.validateSide(side2, "Triangle side2");
    this.validateSide(side3, "Triangle side3");
  }

  // Получение площади
  getArea(): number {
    const p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  // Получение описания
  getDescription(): string {
    return `Triangle with ${this.side1}, ${this.side2} and ${this.side3}`;
  }
}

// Пример использования
const square = new Square(-1);
console.log(square.getArea());
console.log("-----------");

const rectangle = new Rectangle(0, 2);
console.log(rectangle.getArea());
console.log("-----------");

const triangle = new Triangle(3, 1, 0);
console.log(triangle.getArea());
