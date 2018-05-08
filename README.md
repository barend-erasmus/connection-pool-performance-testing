# Connection Pool Performance Testing

We often, unconsciously, create a new socket connection for each HTTP Requests, Database Requests, TCP Requests and Cache Requests without knowing the consequences. Socket connections are considered an expensive operation as it requires a three-ways handshake, apart from the addtional CPU and memory, before any payload packets can be sent

This can be easily optimized by making use of the `Object Pool Design Pattern`.

Here is a few implementations of the `Object Pool Design Pattern`

* [CSharp](https://github.com/barend-erasmus/connection-pool-performance-testing/blob/master/src/examples/ObjectPool.cs)
* [node.js](https://github.com/barend-erasmus/connection-pool-performance-testing/blob/master/src/examples/object-pool.ts)

## Non-Connection Pool Implementation

Below are the metrics for creating a new socket connection for each request.

| Number of Request | Milliseconds per Request | Requests per Second |
| ----------------- | ------------------------ | ------------------- |
| 1000              | 0.476                    | 2100.840            |
| 2000              | 0.444                    | 2249.718            |
| 3000              | 0.420                    | 2377.179            |
| 4000              | 0.396                    | 2520.478            |
| 5000              | 0.396                    | 2522.704            | 

## Connection Pool Implementation

Below are the metrics creating a single socket connection and reusing. For parallel requests, make use of the `Object Pool Design Pattern`.

| Number of Request | Milliseconds per Request | Requests per Second |
| ----------------- | ------------------------ | ------------------- |
| 1000              | 0.111                    | 9009.009            |
| 2000              | 0.091                    | 10989.010           |
| 3000              | 0.087                    | 11450.381           |
| 4000              | 0.081                    | 12345.679           |
| 5000              | 0.078                    | 12722.646           | 

## Conclusion

By making use of a single socket connection, we have gained an average of 79.06 % in performance.

| Number of Request |                      |
| ----------------- | -------------------- |
| 1000              | Increased by 76.68 % |
| 2000              | Increased by 79.50 % |
| 3000              | Increased by 79.28 % |
| 4000              | Increased by 79.54 % |
| 5000              | Increased by 80.30 % |