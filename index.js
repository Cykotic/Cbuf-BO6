const { writeMemory, connect, notify, getProcessList, disconnect } = require('nodeps4debug');

const CMD_TEXT_ADDRESS = 0x400000 + 0x0000000004D6C350;
const CMD_TEXT_SIZE_ADDRESS = CMD_TEXT_ADDRESS + 0x10004;

async function writeCommand(pid, command) {
    const cmdBytes = Buffer.from(command, 'ascii');
    const lenBytes = Buffer.alloc(4);
    lenBytes.writeUInt32LE(command.length, 0);

    const commandData = [
        { address: CMD_TEXT_ADDRESS, data: cmdBytes },
        { address: CMD_TEXT_SIZE_ADDRESS, data: lenBytes }
    ];

    for (const { address, data } of commandData) {
        await writeMemory(pid, address, data);
        console.log(`Memory written to PID: ${pid}, Address: ${address.toString(16)}, Data: ${data.toString('hex')}`);
    }
}

async function main() {
    try {
        const ip = '192.168.137.151'; // IP
        await connect(ip);
        console.log('Connected to PS4.');
        await notify('Hello World!');

        const { processArray } = await getProcessList();
        const process = processArray.find(p => p.name === 'eboot.bin');
        if (!process) console.log('eboot.bin is not running!');
        const pid = process.id;

        const commands = [
            ['xstartlobby', 20],
            ['xstartlobby;xpartygo', 12],
            ['#x3ef237da69bb64ef6 mp_t10_island', 15],
            ['#x38badbb201f2e8588 1', 20]
        ];

        for (const [command, delayTime] of commands) {
            console.log(`Executing command: ${command}`);
            await writeCommand(pid, command);
            console.log(`Command executed: ${command}`);
            await new Promise(resolve => setTimeout(resolve, delayTime * 1000));
        }

    } catch (e) {
        console.error(`Error: ${error.message}`);
    } finally {
        disconnect();
    }
}

main();
