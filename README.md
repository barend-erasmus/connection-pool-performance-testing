# Connection Pool Performance Testing

## Non Connection Pool Implementation

| Number of Request | Milliseconds per Request | Requests per Second |
| ----------------- | ------------------------ | ------------------- |
| 1000              | 0.476                    | 2100.840            |
| 2000              | 0.444                    | 2249.718            |
| 3000              | 0.420                    | 2377.179            |
| 4000              | 0.396                    | 2520.478            |
| 5000              | 0.396                    | 2522.704            | 

## Connection Pool Implementation

| Number of Request | Milliseconds per Request | Requests per Second |
| ----------------- | ------------------------ | ------------------- |
| 1000              | 0.111                    | 9009.009            |
| 2000              | 0.091                    | 10989.010           |
| 3000              | 0.087                    | 11450.381           |
| 4000              | 0.081                    | 12345.679           |
| 5000              | 0.078                    | 12722.646           | 

## Conclusion

| Number of Request | Milliseconds per Request | Requests per Second |
| ----------------- | ------------------------ | ------------------- |
| 1000              | 0.111                    | 9009.009            |
| 2000              | 0.091                    | 10989.010           |
| 3000              | 0.087                    | 11450.381           |
| 4000              | 0.081                    | 12345.679           |
| 5000              | 0.078                    | 12722.646           | 