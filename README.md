# Express.js and PostgreSQL SUT

## Jak uruchomić

1. Upewnij się, że masz zainstalowany Docker i Docker Compose.
2. Wykonaj polecenie `docker-compose up`.
3. Aplikacja Express.js będzie dostępna pod adresem `localhost:3000`.

## Przykładowe zapytania

1. **Wyświetlenie wszystkich danych w tabeli**
    - Adres: `http://localhost:3000/data`

2. **Wyświetlenie n-tego wiersza w tabeli**
    - Adres: `http://localhost:3000/data/1`

3. **Policzenie średniej z pola liczba całkowita**
    - Adres: `http://localhost:3000/data/average`
