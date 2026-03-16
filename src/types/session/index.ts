/**
 * The type for active sessions to the CNC
 * @remarks Note that the permission set is not stored here
 */
export type Session = {
  /**
   * The session UID
   */
  id: string;
  /**
   * When the session was created
   */
  connectedAt: number;
  /**
   * The remote address of the client (client IP)
   */
  remoteAddress?: string;
  /**
   * Any tags the user has, useful for custom plugins
   */
  tags: string[];
};
