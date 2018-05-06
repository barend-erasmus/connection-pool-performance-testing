import * as net from 'net';

(async () => {
    const server: net.Server = await startServer();

    const numberOfRequests: number = 5000;

    const startTimestamp: number = new Date().getTime();

    for (let count = 0; count < numberOfRequests; count++) {
        const socket: net.Socket = await connect('127.0.0.1', 8081);
        await request(socket);
        socket.destroy();
    }

    const endTimestamp: number = new Date().getTime();

    console.log(`${endTimestamp - startTimestamp} ms`);
    console.log(`${(endTimestamp - startTimestamp) / numberOfRequests} ms/request`);
    console.log(`${1000 / ((endTimestamp - startTimestamp) / numberOfRequests)} requests/second`);

    server.close();
})();

function connect(host: string, port: number): Promise<net.Socket> {
    return new Promise((resolve: (socket: net.Socket) => void, reject: (err: Error) => void) => {
        const socket: net.Socket = new net.Socket();

        socket.connect(port, host, () => {
            resolve(socket);
        });
    });
}

function request(socket: net.Socket): Promise<void> {
    return new Promise((resolve: () => void, reject: (err: Error) => void) => {
        let numberOfReceivedBytes: number = 0;

        socket.on('data', (buffer: Buffer) => {
            numberOfReceivedBytes += buffer.length;

            if (numberOfReceivedBytes >= 11) {
                socket.removeAllListeners();
                resolve();
            }
        });

        socket.write('Hello World');
    });
}

function startServer(): Promise<net.Server> {
    return new Promise((resolve: (server: net.Server) => void, reject: (err: Error) => void) => {
        const server: net.Server = net.createServer((socket: net.Socket) => {
            socket.pipe(socket);
        });

        server.listen(8081, '127.0.0.1', () => {
            resolve(server);
        });
    });
}
