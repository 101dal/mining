class MoreMaths {
  getInfo() {
    return {
      id: 'equal',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'More math',

      blocks: [
        {
          opcode: 'Equal',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is strictely equal to [TWO]'
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  Equal(args) {
    return args.ONE == args.TWO;
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new Moremaths());
