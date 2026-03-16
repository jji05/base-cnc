/**
 * The command context payload type
 */
export type CommandContext = {
  /**
   * Used to track the session and user data (supposedly in-memory stored)
   */
  sessionId: string;
  /**
   * The raw command parsed
   */
  raw: string;
  /**
   * The arguments passed through to core
   */
  args: string[];
  /**
   * Used to keep track of when commands are ran
   */
  timestamp: number;
  /**
   * Any additional metadata that custom commands can use
   */
  metadata: Record<string, string>;
};

/**
 * An semantic result payload type
 */
export type CommandResult = {
  /**
   * If the command was successfully executed
   * @type boolean
   */
  ok: boolean;
  /**
   * Any outputs from the core after a command execution
   * @remarks Note that the output may be refactored to be using a formal type instead of just string
   */
  output?: string;
  /**
   * Any errors that the core dumps
   * @remarks Note that the error output may be refactored to be using a formal type instead of just string
   */
  error?: string;
};

/**
 * A command handler function type
 */
export type CommandHandler<
  TOptions extends Record<string, unknown> = Record<string, never>,
> = (
  /**
   * The command context
   */
  ctx: CommandContext,
  /**
   * The command options
   */
  options: TOptions,
) => Promise<CommandResult> | CommandResult;

/**
 * A command definition type
 */
export type CommandDefinition<
  TOptions extends Record<string, unknown> = Record<string, never>,
> = {
  /**
   * The name of the command
   */
  name: string;
  /**
   * Any aliases the command has
   */
  aliases?: string[];
  /**
   * A longer description to be displayed as part of help command
   */
  longDescription?: string;
  /**
   * A description of the command
   */
  description?: string;
  /**
   * The command options
   */
  options?: TOptions;
  /**
   * The command handler
   */
  handler: CommandHandler<TOptions>;
};
