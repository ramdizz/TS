abstract class Publisher {
	constructor(
		public title: string,
		public author: string,
		public pubYear: number,
		public copies: number
	) {}

	getTitle(): string {
		return this.title
	}

	setTitle(title: string): void {
		this.title = title
	}

	getAuthor(): string {
		return this.author
	}

	setAuthor(author: string): void {
		this.author = author
	}

	getPubYear(): number {
		return this.pubYear
	}

	setPubYear(pubYear: number): void {
		this.pubYear = pubYear
	}

	getCopies(): number {
		return this.copies
	}

	setCopies(copies: number): void {
		this.copies = copies
	}

	abstract info(): void
}

//2. Создайте подклассы Book (Книга) и Magazine (Журнал), унаследованные от класса Publisher:

class Book extends Publisher {
	constructor(
		title: string,
		author: string,
		pubYear: number,
		copies: number,
		public pages: number
	) {
		super(title, author, pubYear, copies)
	}

	info(): void {
		console.log(
			`Book: ${this.title} by ${this.author}, ${this.pages} pages, ${this.copies} copies available`
		)
	}
}

class Magazine extends Publisher {
	constructor(
		title: string,
		author: string,
		pubYear: number,
		copies: number,
		public issue: number
	) {
		super(title, author, pubYear, copies)
	}

	info(): void {
		console.log(
			`Magazine: ${this.title}, Issue ${this.issue}, ${this.copies} copies available`
		)
	}
}

//3. Создайте интерфейс Reception (Выдача) с методами delivery (выдать) и receive (принять):

interface Reception {
	delivery(): void
	receive(): void
}

//4. Опишите класс Reader (Читатель) с полями и методами для хранения информации о читателе:

class Reader {
	constructor(
		public firstName: string,
		public lastName: string,
		public items: Publisher[] = []
	) {}

	borrowPublication(publication: Publisher): void {
		if (this.items.length < 3 && publication.getCopies() > 0) {
			this.items.push(publication)
			publication.setCopies(publication.getCopies() - 1)
			console.log(`${this.firstName} borrowed ${publication.getTitle()}.`)
		} else {
			console.log('Unable to borrow publication.')
		}
	}

	returnPublication(publication: Publisher): void {
		const index = this.items.indexOf(publication)
		if (index !== -1) {
			this.items.splice(index, 1)
			publication.setCopies(publication.getCopies() + 1)
			console.log(`${this.firstName} returned ${publication.getTitle()}.`)
		} else {
			console.log('Publication not found in items.')
		}
	}
}

//5. Создайте класс Library (Библиотека) для хранения всех изданий:

class Library {
	private publications: Publisher[] = []

	addPublication(publication: Publisher): void {
		this.publications.push(publication)
		console.log(`Added ${publication.getTitle()} to the library.`)
	}

	removePublication(publication: Publisher): void {
		const index = this.publications.indexOf(publication)
		if (index !== -1) {
			this.publications.splice(index, 1)
			console.log(`Removed ${publication.getTitle()} from the library.`)
		} else {
			console.log('Publication not found in the library.')
		}
	}
}

//6. Создайте объекты и протестируйте методы:

// Создание объектов
const book1 = new Book('TypeScript Basics', 'Jane Doe', 2022, 5, 200)
const magazine1 = new Magazine('Tech Review', 'Tech Publications', 2022, 10, 30)
const reader1 = new Reader('Alesha', 'Johnson')
const library = new Library()

// Добавление изданий в библиотеку
library.addPublication(book1)
library.addPublication(magazine1)

// Выдача изданий читателю
reader1.borrowPublication(book1)
reader1.borrowPublication(magazine1)
reader1.borrowPublication(magazine1) // Попытка взять еще один журнал

// Возврат издания читателем
reader1.returnPublication(book1)
reader1.returnPublication(book1) // Попытка вернуть уже возвращенное издание

// Удаление издания из библиотеки
library.removePublication(magazine1)
