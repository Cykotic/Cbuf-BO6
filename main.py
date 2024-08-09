from ps4debug import PS4Debug
import asyncio

CMD_TEXT_ADDRESS = 0x400000 + 0x0000000004D6C350
CMD_TEXT_SIZE_ADDRESS = CMD_TEXT_ADDRESS + 0x10004

async def write_command(ps4, pid, command):
    command_bytes = command.encode("ascii")
    length_bytes = len(command).to_bytes(4, byteorder="little")

    await ps4.write_memory(pid, CMD_TEXT_ADDRESS, command_bytes)
    await ps4.write_memory(pid, CMD_TEXT_SIZE_ADDRESS, length_bytes)
    print(f"Executed command: {command}")
async def main():
    try:
        ps4 = PS4Debug("192.168.137.151")
        print("Connected to PS4.")

        await ps4.notify("Hello World!")

        processes = await ps4.get_processes()
        if not processes:
            print("No processes running.")
            return

        process_name = "eboot.bin"
        pid = next((p.pid for p in processes if p.name == process_name), None)

        if pid is None:
            print(f"{process_name} is not running!")
            return

        print(f"PID for {process_name}: {pid}")

        async def execute_commands():
            commands = [
                ("xstartlobby", 20),
                ("xstartlobby;xpartygo", 12),
                ("#x3ef237da69bb64ef6 mp_t10_island", 15),
                ("#x38badbb201f2e8588 1", 20)
            ]

            for command, delay_time in commands:
                await write_command(ps4, pid, command)
                await asyncio.sleep(delay_time)

        await execute_commands()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
