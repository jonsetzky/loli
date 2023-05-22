export type AggregationType = "average" | "none" | "sum";
export interface AlertDTO {
  alertTime: number;
}
export interface BannedChampion {
  championId: number;
  teamId: number;
  pickTurn: number;
}
export interface BasePlayerDTO {
  code: number;
  message: string;
  data: MatchedPlayerDTO;
}
/**
 * Represents a cancelled asynchronous operation. */
export interface BindingAsyncCancelEvent {
  asyncToken: number;
}
/**
 * Represents a failed asynchronous operation. */
export interface BindingAsyncFailureEvent {
  asyncToken: number;
  error: string;
}
/**
 * Possible states of an asynchronous operation. */
export type BindingAsyncState =
  | "Cancelled"
  | "Cancelling"
  | "Failed"
  | "None"
  | "Running"
  | "Succeeded";
/**
 * Represents the parameters of a call to a provided callback. */
export interface BindingCallbackEvent {
  id: number;
  parameters: object[];
}
/**
 * Describes the exposed native API. */
export interface BindingFullApiHelp {
  functions: BindingFullFunctionHelp[];
  types: BindingFullTypeHelp[];
  events: BindingFullEventHelp[];
}
/**
 * Describes a function parameter. */
export interface BindingFullArgumentHelp {
  name: string;
  description: string;
  type: BindingFullTypeIdentifier;
  optional: boolean;
}
/**
 * Describes an enumerator. */
export interface BindingFullEnumValueHelp {
  name: string;
  description: string;
  value: number;
}
/**
 * Describes an event. */
export interface BindingFullEventHelp {
  name: string;
  nameSpace: string;
  type: BindingFullTypeIdentifier;
  description: string;
  tags: string[];
}
/**
 * Describes a member of a struct. */
export interface BindingFullFieldHelp {
  name: string;
  description: string;
  offset: number;
  type: BindingFullTypeIdentifier;
  optional: boolean;
}
/**
 * Describes a function. */
export interface BindingFullFunctionHelp {
  name: string;
  nameSpace: string;
  arguments: BindingFullArgumentHelp[];
  returns: BindingFullTypeIdentifier;
  description: string;
  help: string;
  threadSafe: boolean;
  async: string;
  tags: string[];
}
/**
 * Describes a struct or enum type. */
export interface BindingFullTypeHelp {
  name: string;
  nameSpace: string;
  size: number;
  description: string;
  tags: string[];
  fields: BindingFullFieldHelp[];
  values: BindingFullEnumValueHelp[];
}
/**
 * Describes the type of a value. */
export interface BindingFullTypeIdentifier {
  type: string;
  elementType: string;
}
/**
 * Represents generic data for an asynchronous event. */
export interface BindingGenericAsyncEvent {
  asyncToken: number;
  data: object;
}
/**
 * Represents generic data for an event. */
export interface BindingGenericEvent {
  data: object;
}
/**
 * Help format for binding functions and types. */
export type BindingHelpFormat = "Epytext" | "Full";
export interface BoostTeamSkinRentalDTO {
  summonerName: string;
  skinUnlockMode: string;
  price: number;
  ipReward: number;
  ipRewardForPurchaser: number;
  availableSkins: number[];
  unlocked: boolean;
}
export interface Bracket {
  version: number;
  tournamentId: number;
  phaseId: number;
  id: number;
  size: number;
  matches: BracketMatch[];
  rosters: BracketRoster[];
}
export interface BracketMatch {
  id: number;
  round: number;
  order: number;
  rosterId1: number;
  rosterId2: number;
  resultHistory: string;
  lowestPossiblePosition: number;
  highestPossiblePosition: number;
  roundStartTime: number;
  gameStartTime: number;
  status: ClientBracketMatchStatus;
  winnerId: number;
  gameId: number;
  loserBracket: boolean;
  forfeitRosterId: number;
  failRosterStatus: number;
}
export interface BracketRoster {
  rosterId: number;
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
}
export interface BuildInfo {
  branch: string;
  patchline: string;
  version: string;
  patchlineVisibleName: string;
}
export type CapacityEnum = "FULL" | "HIGH" | "LOW" | "MEDIUM";
export interface ChampSelectLcdsGameDTO {
  id: number;
  gameState: string;
  queueTypeName: string;
  roomName: string;
  roomPassword: string;
  mucJwtDto: MucJwtDto;
  name: string;
  playerChampionSelections: ChampSelectLcdsPlayerChampionSelectionDTO[];
  bannedChampions: BannedChampion[];
  teamOne: object[];
  teamTwo: object[];
  statusOfParticipants: string;
  optimisticLock: number;
  pickTurn: number;
  spectatorDelay: number;
  gameMutators: string[];
}
export interface ChampSelectLcdsGameTimerDTO {
  currentGameState: string;
  remainingTimeInMillis: number;
}
export interface ChampSelectLcdsObfuscatedParticipant {
  gameUniqueId: number;
}
export interface ChampSelectLcdsPlayerChampionSelectionDTO {
  summonerInternalName: string;
  championId: number;
  selectedSkinIndex: number;
  spell1Id: number;
  spell2Id: number;
}
export interface ChampSelectLcdsPlayerParticipant {
  summonerName: string;
  summonerInternalName: string;
  summonerId: number;
  pickMode: number;
  pickTurn: number;
}
export interface ChampSelectLcdsPointSummary {
  pointsToNextRoll: number;
  currentPoints: number;
  numberOfRolls: number;
  maxRolls: number;
  pointsCostToRoll: number;
}
export interface ChampSelectLcdsPotentialTradersDTO {
  potentialTraders: string[];
}
export interface ChampSelectLcdsRollResult {
  championId: number;
  pointSummary: ChampSelectLcdsPointSummary;
}
export interface ChampSelectLcdsTradeContractDTO {
  requesterInternalSummonerName: string;
  responderInternalSummonerName: string;
  requesterChampionId: number;
  responderChampionId: number;
  state: string;
}
export interface ChampionMasteryPublicDTO {
  championId: number;
  championLevel: number;
  championPoints: number;
}
export interface ChampionScoutingDTO {
  championId: number;
  winCount: number;
  gameCount: number;
  kda: number;
}
export interface ClashEventData {
  earnedDate: string;
  rewardType: string;
  tournamentId: number;
  tournamentName: string;
  tier: string;
  bracket: number;
  seasonId: number;
  theme: string;
  rosterId: number;
  teamName: string;
  teamShortName: string;
  teamLogoName: string;
  teamLogoChromaId: string;
  playerUUIDs: string[];
  rewardSpec: ClashRewardSpec;
}
export interface ClashOfflineNotification {
  tournamentId: number;
  reason: string;
  metaData: Map<string, string>;
}
export interface ClashRewardConfigClient {
  name: string;
  keyDef: ClashRewardKeyType[];
  entries: ClashRewardConfigEntry[];
}
export interface ClashRewardConfigEntry {
  key: string;
  vals: ClashRewardOutput[];
}
export interface ClashRewardDefinition {
  rewardType: ClashRewardType;
  rewardSpec: ClashRewardSpec;
}
export type ClashRewardKeyType =
  | "CUP"
  | "LOWEST_POSITION"
  | "POINTS"
  | "SEASON_FLAG_COUNT"
  | "SEASON_VP"
  | "THEME_VP"
  | "TICKET_COUNT"
  | "TICKET_TYPE"
  | "TIER"
  | "TOC_STATE"
  | "TOURNAMENT_WIN_POS"
  | "WINS";
export interface ClashRewardOutput {
  primary: ClashRewardDefinition;
  alternative: ClashRewardDefinition;
  grant: ClashRewardTime;
  show: ClashRewardTime;
}
export interface ClashRewardSpec {
  pedestal: string;
  cup: string;
  gem: string;
  tier: string;
  bracket: string;
  theme: string;
  level: string;
  seasonId: string;
  name: string;
  quantity: string;
}
export type ClashRewardTime = "EOB" | "EOG" | "EOT" | "NONE";
export type ClashRewardType =
  | "FLAG"
  | "FRAME"
  | "LOGO"
  | "LOOT"
  | "TOC"
  | "TROPHY"
  | "VP";
export interface ClashSeasonRewardResult {
  playerId: number;
  seasonId: number;
  seasonVp: number;
  banned: boolean;
  honorLevel: number;
  eligible: boolean;
  rewards: ClashRewardDefinition[];
}
export type ClientBracketMatchStatus = "COMPLETED" | "STARTED" | "UPCOMING";
export interface ClientConfigAuthenticatedConnection {
  connectionId: number;
  subscribed: boolean;
  authToken: string;
}
export interface ClientConfigBuildInfo {
  contentBuildId: number;
  codeBuildId: number;
  gameDataBuildId: number;
  branch: string;
  branchFull: string;
  gameBranch: string;
  gameBranchFull: string;
  patchline: string;
  version: string;
  patchlineVisibleName: string;
}
export interface ClientConfigClientConfig {
  params: ClientConfigConfigParams;
  data: Map<string, object>;
  updateTime: number;
}
export interface ClientConfigConfigNamespaceUpdate {
  public: string[];
  player: string[];
}
export interface ClientConfigConfigParams {
  type: ClientConfigConfigType;
  appName: string;
  version: string;
  patchline: string;
  region: string;
  namespace: string;
}
export type ClientConfigConfigReadinessEnum = "Disabled" | "NotReady" | "Ready";
export interface ClientConfigConfigStatus {
  readiness: ClientConfigConfigReadinessEnum;
  updateId: number;
}
export type ClientConfigConfigType = "player" | "public";
export interface ClientConfigDataPaths {
  userDataRoot: string;
  configRoot: string;
  dataRoot: string;
  localSettingsPath: string;
  privateSettingsPath: string;
}
export interface ClientConfigDepInjectorEntitlements {
  accessToken: string;
  token: string;
  subject: string;
  issuer: string;
  entitlements: string[];
}
export interface ClientConfigDepInjectorEntitlementsUpdate {
  EntitlementsUpdateType: ClientConfigDepInjectorEntitlementsUpdateType;
  EntitlementsTokenResource: ClientConfigDepInjectorEntitlements;
}
export type ClientConfigDepInjectorEntitlementsUpdateType =
  | "Create"
  | "Delete"
  | "Update";
export interface ClientConfigEntitlements {
  accessToken: string;
  token: string;
  subject: string;
  issuer: string;
  entitlements: string[];
}
export interface ClientConfigEntitlementsUpdate {
  UpdateType: ClientConfigUpdateType;
  EntitlementsTokenResource: ClientConfigEntitlements;
}
export interface ClientConfigSession {
  productId: string;
  patchlineId: string;
  version: string;
  isInternal: boolean;
  connections: ClientConfigAuthenticatedConnection[];
}
export type ClientConfigUpdateType = "Create" | "Delete" | "Update";
export interface ClientDynamicConfig {
  configs: string;
  delta: boolean;
  compressed: boolean;
}
export type ClientRequestError =
  | "ALREADY_DECLINED"
  | "ALREADY_DECLINE_WITHDRAW"
  | "ALREADY_INVITED"
  | "ALREADY_IN_GAME"
  | "ALREADY_IN_PHASE"
  | "ALREADY_MEMBER"
  | "ALREADY_SUGGESTED"
  | "ALREADY_VOTE_WITHDRAW"
  | "CAPTAIN_NOT_ALLOWED"
  | "CLASH_BANNED"
  | "CLASH_BANNED_INVITEE"
  | "ELIGIBILITY_SERVER_ERROR"
  | "FAIL_INVITE"
  | "FAIL_SUGGESTINVITE"
  | "HONOR_INELIGIBILITY"
  | "INACTIVE_PHASE"
  | "INACTIVE_REGISTRATION"
  | "INTERNAL_ERROR"
  | "INVALID_BRACKET"
  | "INVALID_BUY_BACK"
  | "INVALID_CHECKELIGIBILITY_SIZE"
  | "INVALID_INVITEE"
  | "INVALID_LOGO"
  | "INVALID_LOGOCOLOR"
  | "INVALID_MATCHID"
  | "INVALID_MATCHSTATUS_FORGAMEEND"
  | "INVALID_NAME"
  | "INVALID_PHASE"
  | "INVALID_PLAYER"
  | "INVALID_POSITION"
  | "INVALID_REWARD_CONFIG_NAME"
  | "INVALID_ROSTER"
  | "INVALID_ROSTER_MEMBER_SIZE"
  | "INVALID_SEASON"
  | "INVALID_SHORTNAME"
  | "INVALID_TOURNAMENT"
  | "INVALID_Tier"
  | "INVALID_WITHDRAW"
  | "IN_OTHER_PENDINGROSTER"
  | "IN_OTHER_PHASE_OF_PERIOD"
  | "IN_OTHER_ROSTER"
  | "LOGOCOLOR_NOT_ALLOWED"
  | "LOGO_NOT_ALLOWED"
  | "MAX_INVITED"
  | "MAX_ROSTER_FETCHSIZE"
  | "NOT_ALLOWED_DELETE_TOURNAMENT"
  | "NOT_ALLOWED_DELETE_TOURNAMENT_REWARD_CONFIG"
  | "NOT_CAPTAIN"
  | "NOT_ENOUGH_TICKETS"
  | "NOT_INVITEE"
  | "NOT_MEMBER"
  | "NOT_SEED_INTO_LEAGUE"
  | "NO_AVAILABLE_PHASE"
  | "NO_MORE_RECOMMEND"
  | "NO_PERMISSION"
  | "NO_SAME_PLAYER"
  | "OVER_INVITE"
  | "OVER_SUGGESTION_INVITE"
  | "PENDING_ROSTER_CLOSE"
  | "PENDING_ROSTER_FULL"
  | "PENDING_ROSTER_NOT_READY"
  | "PHASE_CANCELLED"
  | "PHASE_FULL"
  | "ROSTER_DISBAND_NOT_ALLOWED"
  | "ROSTER_ELIMINATED"
  | "SMS_NOT_VERIFIED"
  | "SUGGEST_INVITEE_NOT_EXIST"
  | "SUMMONER_LEVEL_REQUIREMENT_NOT_MET"
  | "TICKET_ALREADY_SET"
  | "TICKET_NOT_SET"
  | "TICKET_OFFER_INVALID_COUNT"
  | "TICKET_OFFER_NOT_EXIST"
  | "VOICE_NOT_AVAILABLE"
  | "WITHDRAW_CANCEL_NOT_ALLOWED"
  | "WITHDRAW_LOCKOUT"
  | "WITHDRAW_NOT_ALLOWED";
export interface CollectionsLcdsChampionDTO {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  sources: string[];
  active: boolean;
  botEnabled: boolean;
  championId: number;
  championSkins: CollectionsLcdsChampionSkinDTO[];
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  f2pRewardSources: string[];
  owned: boolean;
  purchased: number;
  rankedPlayEnabled: boolean;
}
export interface CollectionsLcdsChampionSkinDTO {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  sources: string[];
  championId: number;
  freeToPlayReward: boolean;
  f2pRewardSources: string[];
  lastSelected: boolean;
  owned: boolean;
  skinId: number;
  stillObtainable: boolean;
}
export interface CollectionsLcdsClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}
export interface CollectionsLcdsRentalUpdateNotification {
  inventoryType: string;
  data: object;
}
export interface CollectionsLcdsStoreFulfillmentNotification {
  inventoryType: string;
  data: object;
}
export interface ContentItemIdentifier {
  itemId: number;
  inventoryType: string;
}
export interface CraftLootRefTransactionDTO {
  clientId: string;
  puuid: string;
  playerId: number;
  accountId: number;
  recipeName: string;
  lootNameRefIds: LootNameRefId[];
  repeat: number;
}
export interface CrashReportingEnvironment {
  environment: string;
  userName: string;
  userId: string;
}
export interface CriticalFlowCapture {
  timestampInUs: number;
  expected: boolean;
  succeeded: boolean;
  idChain: string;
  qualifierChain: string;
  payloadString: string;
}
export interface CriticalFlowExpectation {
  idChain: string;
  qualifierChain: string;
}
export interface CriticalFlowSummary {
  activeFlows: string[];
  activeFlowEvents: CriticalFlowExpectation[];
  events: CriticalFlowCapture[];
  errors: string[];
}
export interface DownloadUrlRequestV2 {
  platformId: string;
  gameId: number;
}
export interface DownloadUrlResponseV2 {
  url: string;
}
export type ElevationAction = "FixBrokenPermissions";
export interface ElevationRequest {
  action: ElevationAction;
}
export interface EndOfGameLcdsClientReportV1 {
  offenderSummonerId: number;
  gameId: number;
  offenses: string;
  comments: string;
}
export interface EndOfGameLcdsEndOfGameStats {
  difficulty: string;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: string[];
  gameType: string;
  invalid: boolean;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  roomName: string;
  roomPassword: string;
  mucJwtDto: MucJwtDto;
  myTeamInfo: EndOfGameLcdsTeamInfo;
  otherTeamInfo: EndOfGameLcdsTeamInfo;
  teamPlayerParticipantStats: EndOfGameLcdsPlayerParticipantStatsSummary[];
  otherTeamPlayerParticipantStats: EndOfGameLcdsPlayerParticipantStatsSummary[];
  myTeamStatus: string;
  leveledUp: boolean;
  newSpells: EndOfGameLcdsSpell[];
  previousLevel: number;
  rpEarned: number;
  skinIndex: number;
  skinId: number;
  summonerName: string;
  userId: number;
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  firstWinBonus: number;
  ipEarned: number;
  ipTotal: number;
  boostXpEarned: number;
  experienceEarned: number;
  experienceTotal: number;
  loyaltyBoostXpEarned: number;
  previousXpTotal: number;
  timeUntilNextFirstWinBonus: number;
  causedEarlySurrender: boolean;
  earlySurrenderAccomplice: boolean;
  teamEarlySurrendered: boolean;
  gameEndedInEarlySurrender: boolean;
}
export interface EndOfGameLcdsHarassmentReport {
  gameId: number;
  reportSource: string;
  reportingSummonerId: number;
  reportedSummonerId: number;
  offense: string;
  comment: string;
}
export interface EndOfGameLcdsPlayerParticipantStatsSummary {
  puuid: string;
  level: number;
  userId: number;
  teamId: number;
  gameId: number;
  leaver: boolean;
  summonerName: string;
  skinName: string;
  profileIconId: number;
  wins: number;
  leaves: number;
  losses: number;
  botPlayer: boolean;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  skinIndex: number;
  selectedPosition: string;
  detectedTeamPosition: string;
  statistics: EndOfGameLcdsRawStatDTO[];
}
export interface EndOfGameLcdsPointsPenalty {
  type: string;
  penalty: number;
}
export interface EndOfGameLcdsRawStatDTO {
  value: number;
  statTypeName: string;
}
export interface EndOfGameLcdsSpell {
  spellId: number;
}
export interface EndOfGameLcdsTeamId {
  fullId: string;
}
export interface EndOfGameLcdsTeamInfo {
  teamId: EndOfGameLcdsTeamId;
  name: string;
  tag: string;
  secondsUntilEligibleForDeletion: number;
  memberStatusString: string;
}
export interface EntitlementsToken {
  accessToken: string;
  token: string;
  subject: string;
  issuer: string;
  entitlements: string[];
}
export interface EogLcdsGameDTO {
  id: number;
  gameState: string;
  teamOne: PlayerParticipant[];
  teamTwo: PlayerParticipant[];
  bannedChampions: BannedChampion[];
}
export type ExternalPluginsAvailability =
  | "Connected"
  | "Error"
  | "NotAvailable"
  | "Preparing"
  | "Recovering";
export interface ExternalPluginsResource {
  state: ExternalPluginsAvailability;
  errorString: string;
}
export interface FailedInvite {
  playerId: number;
  exception: ClientRequestError;
}
export type GameQueuesLcdsAllowSpectators =
  | "ALL"
  | "DROPINONLY"
  | "LOBBYONLY"
  | "NONE";
export interface GameQueuesLcdsGameQueueConfig {
  disallowFreeChampions: boolean;
  gameMode: string;
  gameMutators: string[];
  gameTypeConfigId: number;
  id: number;
  mapId: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  numPlayersPerTeam: number;
  queueState: string;
  ranked: boolean;
  supportedMapIds: number[];
  type: string;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export interface GameflowLcdsGameDTO {
  id: number;
  mapId: number;
  gameState: string;
  queueTypeName: string;
  gameMode: string;
  gameTypeConfigId: number;
  maxNumPlayers: number;
  gameType: string;
  spectatorDelay: number;
  gameQueueConfigId: number;
  teamOne: object[];
  teamTwo: object[];
  playerChampionSelections: object[];
}
export interface GameflowLcdsPlayerCredentialsDto {
  gameId: number;
  serverIp: string;
  serverPort: number;
  encryptionKey: string;
  observer: boolean;
  observerServerIp: string;
  observerServerPort: number;
  observerEncryptionKey: string;
  summonerId: number;
}
export interface GameflowLcdsReconnectInfoDto {
  playerCredentials: GameflowLcdsPlayerCredentialsDto;
  game: GameflowLcdsGameDTO;
  reconnectDelay: number;
}
export interface IdsDTO {
  missionIds: string[];
  seriesIds: string[];
}
export type InviteType =
  | "FREEAGENT"
  | "FRIEND"
  | "NONE"
  | "SELFJOIN"
  | "SUGGEST";
export interface LCDSBroadcastNotification {
  broadcastMessages: LolServiceStatusBroadcastMessage[];
}
export interface LCDSChampionReward {
  championId: number;
  skins: number[];
}
export interface LCDSGlobalRewards {
  allChampions: boolean;
}
export interface LCDSLoyaltyRewards {
  champions: LCDSChampionReward[];
  global: LCDSGlobalRewards;
  ipBoost: number;
  xpBoost: number;
}
export interface LCDSLoyaltyStateChangeNotification {
  accountId: number;
  notificationCategory: LCDSLoyaltyStateChangeNotificationCategory;
  rewards: LCDSLoyaltyRewards;
}
export type LCDSLoyaltyStateChangeNotificationCategory =
  | "change"
  | "disabled"
  | "expiry"
  | "grant"
  | "legacy"
  | "revoke";
export interface LCDSPlayerMessagingSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  titleCode: string;
  bodyCode: string;
  params: string[];
}
export interface LCDSPlayerMessagingSimpleMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface LcdsBotParticipant {
  summonerId: number;
  summonerName: string;
  summonerInternalName: string;
  botSkillLevel: number;
  teamId: string;
}
export interface LcdsFailedJoinPlayer {
  summoner: LcdsSummoner;
  reasonFailed: string;
}
export interface LcdsGameDTO {
  id: number;
  name: string;
  mapId: number;
  gameTypeConfigId: number;
  gameType: string;
  gameMode: string;
  maxNumPlayers: number;
  spectatorsAllowed: string;
  ownerSummary: LcdsPlayerParticipant;
  teamOne: LcdsPlayerParticipant[];
  teamTwo: LcdsPlayerParticipant[];
  observers: LcdsPlayerParticipant[];
  practiceGameRewardsDisabledReasons: string[];
  gameMutators: string[];
  roomName: string;
  roomPassword: string;
  mucJwtDto: MucJwtDto;
  passbackUrl: string;
  passbackDataPacket: string;
  optimisticLock: number;
  gameState: string;
}
export interface LcdsGameInviteBaseRuntimeException {
  rootCauseClassname: string;
}
export interface LcdsGameMap {
  mapId: number;
  name: string;
  displayName: string;
  description: string;
  minCustomPlayers: number;
  totalPlayers: number;
}
export interface LcdsGameNotification {
  type: string;
  messageCode: string;
  messageArgument: string;
}
export interface LcdsInvitationRequest {
  invitationId: string;
  owner: LcdsPlayer;
  inviter: LcdsInviter;
  invitationState: LcdsInvitationState;
  gameMetaData: string;
  inviteType: string;
  invitePayload: string;
}
export type LcdsInvitationState = "ACTIVE" | "ON_HOLD" | "REVOKED";
export interface LcdsInviteFailed {
  summonerId: number;
  summonerName: string;
  exception: LcdsGameInviteBaseRuntimeException;
}
export interface LcdsInvitePrivileges {
  canInvite: boolean;
}
export interface LcdsInvitee {
  summonerId: number;
  summonerName: string;
  inviteeState: LcdsInviteeState;
}
export type LcdsInviteeState =
  | "ACCEPTED"
  | "ACCEPT_FAILED"
  | "BANNED"
  | "CREATOR"
  | "DECLINED"
  | "JOINED"
  | "KICKED"
  | "PENDING"
  | "QUIT";
export interface LcdsInviter {
  summonerId: number;
  summonerName: string;
  previousSeasonHighestTier: string;
}
export interface LcdsLobbyStatus {
  invitationId: string;
  owner: LcdsPlayer;
  chatKey: string;
  members: LcdsMember[];
  invitees: LcdsInvitee[];
  gameMetaData: string;
}
export interface LcdsMember {
  summonerId: number;
  summonerName: string;
  hasDelegatedInvitePower: boolean;
}
export interface LcdsPayloadDto {
  method: string;
  headers: Map<string, string>;
  path: string;
  body: string;
}
export interface LcdsPlayer {
  summonerId: number;
  summonerName: string;
}
export interface LcdsPlayerParticipant {
  summonerId: number;
  summonerName: string;
  summonerInternalName: string;
  botSkillLevel: number;
}
export interface LcdsPracticeGameConfig {
  gameName: string;
  gameMode: string;
  gameMap: LcdsGameMap;
  maxNumPlayers: number;
  gameTypeConfig: number;
  gamePassword: string;
  allowSpectators: string;
  passbackUrl?: string;
  passbackDataPacket?: string;
  gameMutators: string[];
  region: string;
  gameVersion: string;
}
export interface LcdsPracticeGameSearchResult {
  id: number;
  name: string;
  owner: LcdsPlayerParticipant;
  maxNumPlayers: number;
  privateGame: boolean;
  team1Count: number;
  team2Count: number;
  spectatorCount: number;
  gameMap: LcdsGameMap;
  gameMapId: number;
  gameMode: string;
  pickType: string;
  allowSpectators: string;
}
export type LcdsRemovalReason = "DESTROYED" | "KICKED" | "PROGRESSED";
export interface LcdsRemovedFromLobbyNotification {
  removalReason: LcdsRemovalReason;
}
export interface LcdsSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LcdsSimpleMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface LcdsStartChampSelectDto {
  invalidPlayers: LcdsFailedJoinPlayer[];
}
export interface LcdsSummoner {
  sumId: number;
  name: string;
}
export interface LobbyClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}
/**
 * Describes a log entry. */
export interface LogEvent {
  severity: LogSeverityLevels;
  message: string;
}
/**
 * Allowable severity levels for log events. */
export type LogSeverityLevels = "Always" | "Error" | "Okay" | "Warning";
export interface LolAccountVerificationAVSConfig {
  Enabled: boolean;
  DisableGetActivePhoneNumberCall: boolean;
}
export interface LolAccountVerificationConfirmActivationPinRequest {
  oneTimePin: string;
}
export interface LolAccountVerificationConfirmActivationPinResponse {
  data: LolAccountVerificationPinResponseData;
  clientMessageId: string;
}
export interface LolAccountVerificationConfirmDeactivationPinRequest {
  oneTimePin: string;
}
export interface LolAccountVerificationConfirmDeactivationPinResponse {
  data: LolAccountVerificationPinResponseData;
  clientMessageId: string;
}
export interface LolAccountVerificationIsVerifiedResponse {
  success: boolean;
  message: string;
  status: number;
}
export interface LolAccountVerificationLoginSession {
  state: LolAccountVerificationLoginSessionState;
  summonerId: number;
  accountId: number;
  username: string;
}
export type LolAccountVerificationLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolAccountVerificationPhoneNumberObfuscated {
  countryCode: string;
  endsWith: string;
  length: number;
}
export interface LolAccountVerificationPhoneNumberResponse {
  data: LolAccountVerificationPhoneNumberResponseData;
  error: LolAccountVerificationResponseError;
  clientMessageId: string;
}
export interface LolAccountVerificationPhoneNumberResponseData {
  phoneNumberObfuscated: LolAccountVerificationPhoneNumberObfuscated;
}
export interface LolAccountVerificationPinResponseData {
  status: string;
}
export interface LolAccountVerificationResponseError {
  errorCode: string;
  message: string;
}
export interface LolAccountVerificationSendActivationPinRequest {
  phoneNumber: string;
  locale: string;
}
export interface LolAccountVerificationSendActivationPinResponse {
  data: LolAccountVerificationSendActivationPinResponseData;
  error: LolAccountVerificationResponseError;
  clientMessageId: string;
}
export interface LolAccountVerificationSendActivationPinResponseData {
  pinExpiresAtEpochMillis: number;
}
export interface LolAccountVerificationSendDeactivationPinRequest {
  locale: string;
}
export interface LolAccountVerificationSendDeactivationPinResponse {
  data: LolAccountVerificationSendActivationPinResponseData;
  error: LolAccountVerificationResponseError;
  clientMessageId: string;
}
export interface LolActiveBoostsActiveBoosts {
  xpBoostEndDate: string;
  xpBoostPerWinCount: number;
  xpLoyaltyBoost: number;
  firstWinOfTheDayStartTime: string;
}
export interface LolActiveBoostsEndOfGameStats {
  timeUntilNextFirstWinBonus: number;
}
export interface LolActiveBoostsInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolActiveBoostsItemOwnershipType;
  expirationDate: string;
  wins: number;
}
export interface LolActiveBoostsInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  ownedQuantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  payload: object;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  lsb: boolean;
  wins: number;
}
export interface LolActiveBoostsInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolActiveBoostsItemOwnershipType;
  expirationDate: string;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  owned: boolean;
  wins: number;
  payload: object;
}
export type LolActiveBoostsItemOwnershipType =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolActiveBoostsLoginDataPacket {
  timeUntilFirstWinOfDay: number;
}
export interface LolActiveBoostsLoyaltyRewardsSimplified {
  xpBoost: number;
}
export type LolActiveBoostsLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolActiveBoostsLoyaltyStatusNotification {
  status: LolActiveBoostsLoyaltyStatus;
  rewards: LolActiveBoostsLoyaltyRewardsSimplified;
}
export interface LolAntiAddictionAntiAddictionState {
  policyType: LolAntiAddictionPolicyType;
  localizationKey: string;
  antiAddictionToken: string;
}
export interface LolAntiAddictionAntiAddictionToken {
  antiAddictionToken: string;
}
export type LolAntiAddictionPolicyType =
  | "antiAddictionHeartbeat"
  | "antiAddictionShutdown"
  | "antiAddictionWarning";
export interface LolBannersBannerFlag {
  itemId: number;
  theme: string;
  level: number;
  seasonId: number;
  earnedDateIso8601: string;
}
export interface LolBannersBannerFrame {
  level: number;
}
export interface LolBannersCapClashFlagEntitlementPayload {
  rewardSpec: LolBannersClashV2FlagRewardSpec;
  rewardType: string;
}
export interface LolBannersCapClashFrameEntitlementPayload {
  rewardSpec: LolBannersClashV2FrameRewardSpec;
  rewardType: string;
}
export interface LolBannersClashV2FlagRewardSpec {
  theme: string;
  level: string;
  seasonId: string;
}
export interface LolBannersClashV2FrameRewardSpec {
  level: string;
  seasonId: string;
}
export interface LolBannersInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  payload: object;
}
export interface LolBannersInventoryItemsByType {
  TOURNAMENT_FLAG: LolBannersTournamentFlagInventoryItem[];
  TOURNAMENT_FRAME: LolBannersTournamentFrameInventoryItem[];
}
export interface LolBannersInventoryResponse {
  items: LolBannersInventoryItemsByType;
}
export interface LolBannersLoadout {
  id: string;
  name: string;
  scope: string;
  loadout: Map<string, LolBannersLoadoutsSlot>;
}
export interface LolBannersLoadoutsSlot {
  itemId: number;
  inventoryType: string;
}
export interface LolBannersSummonerProfileUpdate {
  key: string;
  value: object;
}
export interface LolBannersTournamentFlagInventoryItem {
  itemId: number;
  payload: LolBannersCapClashFlagEntitlementPayload;
  purchaseDate: string;
}
export interface LolBannersTournamentFrameInventoryItem {
  payload: LolBannersCapClashFrameEntitlementPayload;
  purchaseDate: string;
}
export type LolCareerStatsCareerStatsQueueType =
  | "aram"
  | "blind3"
  | "blind5"
  | "draft5"
  | "other"
  | "rank3flex"
  | "rank5flex"
  | "rank5solo";
export interface LolCareerStatsChampionQueueStatsResponse {
  championId: number;
  queueType: LolCareerStatsCareerStatsQueueType;
  position: LolCareerStatsSummonersRiftPosition;
  rankTier: LolCareerStatsRankedTier;
  stats: object;
}
export interface LolCareerStatsChampionStatistics {
  championId: number;
  experts: LolCareerStatsExpertPlayer[];
  queueStats: LolCareerStatsStatisticsByQueue[];
}
export interface LolCareerStatsEntitlementsToken {
  entitlements: string[];
}
export interface LolCareerStatsExpertPlayer {
  championId: number;
  position: LolCareerStatsSummonersRiftPosition;
  summonerId: number;
  summonerName: string;
  numOfGames: number;
  winRate: number;
  expertRank: number;
}
export interface LolCareerStatsPositionStatistics {
  position: LolCareerStatsSummonersRiftPosition;
  experts: LolCareerStatsExpertPlayer[];
  queueStats: LolCareerStatsStatisticsByQueue[];
}
export interface LolCareerStatsPositionStatsQueryRequest {
  queueType: LolCareerStatsCareerStatsQueueType;
  position: LolCareerStatsSummonersRiftPosition;
  rankTier: LolCareerStatsRankedTier;
  season: number;
}
export type LolCareerStatsRankedTier =
  | "ALL"
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "PLATINUM"
  | "SILVER"
  | "UNRANKED";
export interface LolCareerStatsStatisticsByQueue {
  queueType: LolCareerStatsCareerStatsQueueType;
  stats: object;
}
export interface LolCareerStatsStatisticsPercentilesResponse {
  championId: number;
  queueType: LolCareerStatsCareerStatsQueueType;
  position: LolCareerStatsSummonersRiftPosition;
  rankTier: LolCareerStatsRankedTier;
  season: number;
  stats: object;
}
export interface LolCareerStatsStatsQueryRequest {
  championId: number;
  queueType: LolCareerStatsCareerStatsQueueType;
  position: LolCareerStatsSummonersRiftPosition;
  rankTier: LolCareerStatsRankedTier;
  season: number;
}
export type LolCareerStatsSummonersRiftPosition =
  | "ALL"
  | "BOTTOM"
  | "JUNGLE"
  | "MID"
  | "SUPPORT"
  | "TOP"
  | "UNKNOWN";
export interface LolCatalogBundled {
  flexible: boolean;
  items: LolCatalogBundledItem[];
  minimumPrices: LolCatalogBundledItemCost[];
}
export interface LolCatalogBundledItem {
  inventoryType: string;
  itemId: number;
  quantity: number;
  discountPrices: LolCatalogBundledItemCost[];
}
export interface LolCatalogBundledItemCost {
  currency: string;
  cost: number;
  discount?: number;
  costType: string;
}
export interface LolCatalogCatalogItem {
  itemId: number;
  itemInstanceId: string;
  active: boolean;
  inventoryType: string;
  inactiveDate: string;
  prices: LolCatalogItemCost[];
  releaseDate: string;
  sale?: LolCatalogSale;
  subInventoryType?: string;
  tags?: string[];
  iconUrl: string;
  localizations: Map<string, LolCatalogItemLocalization>;
  bundled?: LolCatalogBundled;
  itemRequirements?: LolCatalogItemKey[];
  metadata?: LolCatalogItemMetadataEntry[];
  offerId?: string;
}
export interface LolCatalogCatalogPluginItem {
  itemId: number;
  itemInstanceId: string;
  owned: boolean;
  ownershipType?: LolCatalogInventoryOwnership;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  subTitle: string;
  description: string;
  imagePath: string;
  purchaseDate: number;
  releaseDate: number;
  inactiveDate: number;
  prices: LolCatalogCatalogPluginPrice[];
  tags?: string[];
  metadata?: LolCatalogItemMetadataEntry[];
  active: boolean;
  sale?: LolCatalogSale;
  questSkinInfo?: LolCatalogSkinLineInfo;
  offerId?: string;
}
export interface LolCatalogCatalogPluginItemAssets {
  splashPath: string;
  iconPath: string;
  tilePath: string;
  emblems: LolCatalogChampionSkinEmblem[];
  colors: string[];
}
export interface LolCatalogCatalogPluginItemWithDetails {
  item: LolCatalogCatalogPluginItem;
  quantity: number;
  requiredItems?: LolCatalogCatalogPluginItemWithDetails[];
  bundledItems?: LolCatalogCatalogPluginItemWithDetails[];
  minimumBundlePrices?: LolCatalogCatalogPluginPrice[];
  bundledDiscountPrices?: LolCatalogCatalogPluginPrice[];
  assets: LolCatalogCatalogPluginItemAssets;
  metadata: LolCatalogItemMetadataEntry[];
}
export interface LolCatalogCatalogPluginPrice {
  currency: string;
  cost: number;
  costType?: string;
  sale?: LolCatalogCatalogPluginRetailDiscount;
}
export interface LolCatalogCatalogPluginRetailDiscount {
  startDate: string;
  endDate: string;
  discount?: number;
  cost: number;
}
export interface LolCatalogChampionSkinEmblem {
  name: string;
  emblemPath: LolCatalogChampionSkinEmblemPath;
  emblemPosition: LolCatalogChampionSkinEmblemPosition;
}
export interface LolCatalogChampionSkinEmblemPath {
  large: string;
  small: string;
}
export interface LolCatalogChampionSkinEmblemPosition {
  vertical: string;
  horizontal: string;
}
export interface LolCatalogGameDataChampion {
  skins: LolCatalogGameDataChampionSkin[];
}
export interface LolCatalogGameDataChampionChroma {
  id: number;
  name: string;
  chromaPath: string;
  colors: string[];
}
export interface LolCatalogGameDataChampionSkin {
  id: number;
  name: string;
  splashPath: string;
  chromas: LolCatalogGameDataChampionChroma[];
  emblems: LolCatalogChampionSkinEmblem[];
  uncenteredSplashPath: string;
  tilePath: string;
  chromaPath: string;
  questSkinInfo?: LolCatalogSkinLineInfo;
  colors: string[];
}
export interface LolCatalogGameDataChampionSummary {
  id: number;
  name: string;
  squarePortraitPath: string;
  skins: LolCatalogGameDataChampionSkin[];
}
export interface LolCatalogGameDataItemReference {
  itemId: number;
  inventoryType: string;
  contentId: string;
}
export interface LolCatalogGameDataStatstone {
  name: string;
  contentId: string;
  itemId: number;
  isRetired: boolean;
  isDuration: boolean;
  isEpic: boolean;
  category: string;
  description: string;
  iconFull: string;
}
export interface LolCatalogGameDataStatstonePack {
  name: string;
  description: string;
  itemId: number;
  contentId: string;
}
export interface LolCatalogGameDataStatstoneSet {
  name: string;
  statstones: LolCatalogGameDataStatstone[];
}
export interface LolCatalogGameDataStatstonesInfo {
  statstoneData: LolCatalogGameDataStatstoneSet[];
  packData: LolCatalogGameDataStatstonePack[];
  packIdToStatStonesIds: object;
  seriesIdToStatStoneIds: object;
  packIdToSubPackIds: object;
  collectionIdToStatStoneIds: object;
  packIdToChampIds: object;
  champIdToPackIds: object;
}
export interface LolCatalogGameDataSummonerEmote {
  id: number;
  name: string;
  inventoryIcon: string;
  description: string;
}
export interface LolCatalogGameDataSummonerIcon {
  id: number;
  title: string;
  imagePath: string;
}
export interface LolCatalogGameDataWardSkin {
  id: number;
  name: string;
  description: string;
  wardImagePath: string;
}
export interface LolCatalogInventoryContent {
  itemId: number;
  ownershipType: LolCatalogInventoryOwnership;
  purchaseDate: string;
}
export type LolCatalogInventoryOwnership =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolCatalogItemChoiceDetails {
  item: LolCatalogCatalogPluginItem;
  backgroundImage: string;
  contents: LolCatalogItemDetails[];
  discount: string;
  fullPrice: number;
  displayType: string;
  metadata: object;
}
export interface LolCatalogItemCost {
  currency: string;
  cost: number;
  discount?: number;
}
export interface LolCatalogItemDetails {
  title: string;
  subTitle: string;
  description: string;
  iconUrl: string;
}
export interface LolCatalogItemKey {
  inventoryType: string;
  itemId: number;
}
export interface LolCatalogItemLocalization {
  language: string;
  name: string;
  description: string;
}
export interface LolCatalogItemMetadataEntry {
  type: string;
  value: string;
}
export interface LolCatalogSale {
  startDate: string;
  endDate: string;
  prices: LolCatalogItemCost[];
}
export interface LolCatalogSkinLineDescriptionInfo {
  title: string;
  description: string;
  iconPath: string;
}
export interface LolCatalogSkinLineInfo {
  name: string;
  descriptionInfo: LolCatalogSkinLineDescriptionInfo[];
  splashPath: string;
  tilePath: string;
  collectionCardPath: string;
  uncenteredSplashPath: string;
  collectionDescription: string;
  tiers: LolCatalogSkinLineTier[];
}
export interface LolCatalogSkinLineTier {
  id: number;
  name: string;
  stage: number;
  description?: string;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  shortName: string;
  splashVideoPath?: string;
  collectionSplashVideoPath?: string;
}
export interface LolChallengesChallengeData {
  id: number;
  category: string;
  legacy: boolean;
  percentile: number;
  position: number;
  playersInLevel: number;
  initValue: number;
  previousLevel: string;
  previousValue: number;
  previousThreshold: number;
  newLevels: string[];
  currentLevel: string;
  currentValue: number;
  currentThreshold: number;
  currentLevelAchievedTime: number;
  nextLevel: string;
  nextThreshold: number;
  friendsAtLevels: LolChallengesFriendLevelsData[];
  idListType: LolChallengesChallengeRequirementMappingName;
  availableIds: number[];
  completedIds: number[];
}
export interface LolChallengesChallengeLevelData {
  level: string;
}
export interface LolChallengesChallengePlayerData {
  id: string;
  puuid: string;
  source: LolChallengesSource;
  tags: Map<string, string>;
  totalPoints: LolChallengesChallengePoints;
  categoryPoints: Map<string, LolChallengesChallengePoints>;
  playerChallenges: LolChallengesChallengeData[];
  levelPoints: Map<string, number>;
  preferences: LolChallengesChallengesPlayerPreferences;
  apexLaderUpdateTime: number;
}
export interface LolChallengesChallengePoints {
  current: number;
  max: number;
  level: string;
  percentile: number;
  position: number;
}
export type LolChallengesChallengeRequirementMappingName =
  | "CHAMPION"
  | "CHAMPION_SKIN"
  | "ITEM"
  | "NONE";
export interface LolChallengesChallengeSeason {
  seasonId: number;
  seasonStart: number;
  seasonEnd: number;
  isActive: boolean;
}
export interface LolChallengesChallengeSignedUpdatePayload {
  tokensByType: Map<string, object>;
}
export interface LolChallengesChallengeThreshold {
  value: number;
  rewards: LolChallengesChallengeThresholdReward[];
  rewardGroupId: string;
}
export interface LolChallengesChallengeThresholdReward {
  category: string;
  id: string;
  quantity: number;
}
export interface LolChallengesChallengesPlayerPreferences {
  bannerAccent: string;
  title: string;
  challengeIds: number[];
  crestBorder: string;
  prestigeCrestBorderLevel: number;
  signedJWTPayload: LolChallengesChallengeSignedUpdatePayload;
}
export interface LolChallengesChallengesRMSNotification {
  ackRequired: boolean;
  payload: string;
}
export interface LolChallengesChallengesRMSPayload {
  puuid: string;
  id: string;
}
export type LolChallengesClientState =
  | "DarkDisabled"
  | "DarkHidden"
  | "Disabled"
  | "Enabled"
  | "Hidden";
export interface LolChallengesEndOfGameStats {
  gameId: number;
}
export interface LolChallengesFriendLevelsData {
  level: string;
  friends: string[];
}
export interface LolChallengesFriendResource {
  puuid: string;
}
export interface LolChallengesGameDataChallengeConfig {
  name: string;
  description: string;
  descriptionShort: string;
  iconPath: string;
  tags: Map<string, string>;
  source: string;
  queueIds: number[];
  levelToIconPath: Map<string, string>;
  thresholds: Map<string, LolChallengesChallengeThreshold>;
  leaderboard: boolean;
  reverseDirection: boolean;
  endTimestamp: number;
  seasons: number[];
}
export interface LolChallengesGameDataChallengeTitle {
  name: string;
  itemId: number;
}
export interface LolChallengesGameDataChallengesData {
  challenges: Map<string, LolChallengesGameDataChallengeConfig>;
  titles: Map<string, LolChallengesGameDataChallengeTitle>;
}
export interface LolChallengesGameflowGameData {
  queue: LolChallengesQueue;
}
export type LolChallengesGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolChallengesGameflowSession {
  phase: LolChallengesGameflowPhase;
  gameData: LolChallengesGameflowGameData;
}
export interface LolChallengesInventoryItem {
  itemId: number;
  uuid: string;
  purchaseDate: string;
}
export interface LolChallengesLcuChallengeNotification {
  id: number;
  msgId: string;
  level: string;
  updateReason: string;
  challengeId: number;
  categoryChallenges: Map<string, LolChallengesUIChallenge>;
  displayType: LolChallengesNotificationDisplayType;
  challengeName: string;
  iconPath: string;
}
export interface LolChallengesLoginPlayerData {
  clientPlayerDataList: LolChallengesChallengePlayerData[];
  seasons: LolChallengesChallengeSeason[];
}
export type LolChallengesNotificationDisplayType =
  | "NONE"
  | "TOAST"
  | "VIGNETTE";
export interface LolChallengesQueue {
  id: number;
  gameMode: string;
}
export interface LolChallengesSequenceEvent {
  name: string;
  priority: number;
}
export type LolChallengesSource =
  | "CAP_INVENTORY"
  | "CHALLENGES"
  | "CHAMPION_MASTERY"
  | "CLASH"
  | "EOGD"
  | "ETERNALS"
  | "HONOR"
  | "LOOT"
  | "NONE"
  | "RANKED_LEAGUES"
  | "SUMMONER_SERVICE";
export interface LolChallengesUICategoryProgress {
  level: string;
  category: string;
  positionPercentile: number;
  current: number;
  max: number;
}
export interface LolChallengesUIChallenge {
  id: number;
  name: string;
  description: string;
  descriptionShort: string;
  iconPath: string;
  category: string;
  nextLevelIconPath: string;
  currentLevel: string;
  nextLevel: string;
  previousLevel: string;
  previousValue: number;
  currentValue: number;
  currentThreshold: number;
  nextThreshold: number;
  pointsAwarded: number;
  percentile: number;
  currentLevelAchievedTime: number;
  position: number;
  playersInLevel: number;
  isApex: boolean;
  isCapstone: boolean;
  gameModes: string[];
  friendsAtLevels: LolChallengesFriendLevelsData[];
  parentId: number;
  parentName: string;
  childrenIds: number[];
  capstoneGroupId: number;
  capstoneGroupName: string;
  source: string;
  thresholds: Map<string, LolChallengesUIChallengeThreshold>;
  levelToIconPath: Map<string, string>;
  valueMapping: string;
  hasLeaderboard: boolean;
  isReverseDirection: boolean;
  priority: number;
  idListType: LolChallengesChallengeRequirementMappingName;
  availableIds: number[];
  completedIds: number[];
  retireTimestamp: number;
}
export interface LolChallengesUIChallengePenalty {
  reason: string;
}
export interface LolChallengesUIChallengeReward {
  category: string;
  quantity: number;
  name: string;
  asset: string;
}
export interface LolChallengesUIChallengeThreshold {
  value: number;
  rewards: LolChallengesUIChallengeReward[];
}
export interface LolChallengesUIPlayerSummary {
  totalChallengeScore: number;
  pointsUntilNextRank: number;
  overallChallengeLevel: string;
  positionPercentile: number;
  isApex: boolean;
  apexLeaderboardPosition: number;
  title: LolChallengesUITitle;
  bannerId: string;
  crestId: string;
  prestigeCrestBorderLevel: number;
  categoryProgress: LolChallengesUICategoryProgress[];
  topChallenges: LolChallengesUIChallenge[];
  apexLadderUpdateTime: number;
  selectedChallengesString: string;
}
export interface LolChallengesUITitle {
  itemId: number;
  contentId: string;
  name: string;
  challengeId: number;
  challengeName: string;
  challengeDescription: string;
  level: string;
  levelToIconPath: Map<string, string>;
  purchaseDate: string;
}
export interface LolChallengesUserResource {
  lol: Map<string, string>;
}
export interface LolChampSelectBenchChampion {
  championId: number;
  isPriority: boolean;
}
export interface LolChampSelectChampGridChampion {
  id: number;
  name: string;
  squarePortraitPath: string;
  freeToPlay: boolean;
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  freeToPlayForQueue: boolean;
  owned: boolean;
  rented: boolean;
  disabled: boolean;
  roles: string[];
  masteryPoints: number;
  masteryLevel: number;
  masteryChestGranted: boolean;
  selectionStatus: LolChampSelectChampionSelection;
  positionsFavorited: string[];
}
export interface LolChampSelectChampSelectAction {
  id: number;
  actorCellId: number;
  championId: number;
  type: string;
  completed: boolean;
  isAllyAction: boolean;
}
export interface LolChampSelectChampSelectBannedChampions {
  myTeamBans: number[];
  theirTeamBans: number[];
  numBans: number;
}
export interface LolChampSelectChampSelectChatRoomDetails {
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolChampSelectMucJwtDto;
}
export interface LolChampSelectChampSelectMySelection {
  selectedSkinId?: number;
  spell1Id?: number;
  spell2Id?: number;
  wardSkinId?: number;
}
export interface LolChampSelectChampSelectPinDropNotification {
  pinDropSummoners: LolChampSelectChampSelectPinDropSummoner[];
  mapSide: string;
}
export interface LolChampSelectChampSelectPinDropSummoner {
  slotId: number;
  position: string;
  lane: string;
  lanePosition: number;
  isLocalSummoner: boolean;
  isPlaceholder: boolean;
}
export interface LolChampSelectChampSelectPlayerSelection {
  cellId: number;
  championId: number;
  selectedSkinId: number;
  wardSkinId: number;
  spell1Id: number;
  spell2Id: number;
  team: number;
  assignedPosition: string;
  championPickIntent: number;
  summonerId: number;
  puuid: string;
  entitledFeatureType: string;
  nameVisibilityType: string;
  obfuscatedSummonerId: number;
  obfuscatedPuuid: string;
}
export interface LolChampSelectChampSelectSession {
  gameId: number;
  timer: LolChampSelectChampSelectTimer;
  chatDetails: LolChampSelectChampSelectChatRoomDetails;
  myTeam: LolChampSelectChampSelectPlayerSelection[];
  theirTeam: LolChampSelectChampSelectPlayerSelection[];
  trades: LolChampSelectChampSelectTradeContract[];
  pickOrderSwaps: LolChampSelectChampSelectSwapContract[];
  actions: object[];
  bans: LolChampSelectChampSelectBannedChampions;
  localPlayerCellId: number;
  isSpectating: boolean;
  allowSkinSelection: boolean;
  allowDuplicatePicks: boolean;
  allowBattleBoost: boolean;
  boostableSkinCount: number;
  allowRerolling: boolean;
  rerollsRemaining: number;
  allowLockedEvents: boolean;
  lockedEventIndex: number;
  benchEnabled: boolean;
  benchChampions: LolChampSelectBenchChampion[];
  entitledFeatureState: LolChampSelectEntitledFeatureState;
  counter: number;
  recoveryCounter: number;
  skipChampionSelect: boolean;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
}
export interface LolChampSelectChampSelectSummoner {
  cellId: number;
  slotId: number;
  spell1IconPath: string;
  spell2IconPath: string;
  assignedPosition: string;
  summonerId: number;
  puuid: string;
  entitledFeatureType: string;
  nameVisibilityType: string;
  obfuscatedSummonerId: number;
  obfuscatedPuuid: string;
  activeActionType: string;
  championIconStyle: string;
  skinSplashPath: string;
  actingBackgroundAnimationState: string;
  statusMessageKey: string;
  championId: number;
  championName: string;
  pickSnipedClass: string;
  currentChampionVotePercentInteger: number;
  skinId: number;
  banIntentSquarePortratPath: string;
  isOnPlayersTeam: boolean;
  shouldShowSelectedSkin: boolean;
  shouldShowExpanded: boolean;
  isActingNow: boolean;
  shouldShowActingBar: boolean;
  isSelf: boolean;
  shouldShowBanIntentIcon: boolean;
  isPickIntenting: boolean;
  isDonePicking: boolean;
  isPlaceholder: boolean;
  shouldShowSpells: boolean;
  shouldShowRingAnimations: boolean;
  areSummonerActionsComplete: boolean;
  tradeId: number;
  swapId: number;
  showTrades: boolean;
  showSwaps: boolean;
  showMuted: boolean;
}
export interface LolChampSelectChampSelectSwapContract {
  id: number;
  cellId: number;
  state: LolChampSelectChampSelectSwapState;
}
export interface LolChampSelectChampSelectSwapNotification {
  id: number;
  requestorIndex: number;
  responderIndex: number;
  state: LolChampSelectChampSelectSwapState;
  otherSummonerIndex: number;
  initiatedByLocalPlayer: boolean;
}
export type LolChampSelectChampSelectSwapState =
  | "ACCEPTED"
  | "AVAILABLE"
  | "BUSY"
  | "CANCELLED"
  | "DECLINED"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolChampSelectChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  totalTimeInPhase: number;
  phase: string;
  isInfinite: boolean;
  internalNowInEpochMs: number;
}
export interface LolChampSelectChampSelectTradeContract {
  id: number;
  cellId: number;
  state: LolChampSelectChampSelectTradeState;
}
export interface LolChampSelectChampSelectTradeNotification {
  id: number;
  responderIndex: number;
  state: LolChampSelectChampSelectTradeState;
  otherSummonerIndex: number;
  responderChampionName: string;
  requesterChampionName: string;
  requesterChampionSplashPath: string;
  initiatedByLocalPlayer: boolean;
}
export type LolChampSelectChampSelectTradeState =
  | "ACCEPTED"
  | "AVAILABLE"
  | "BUSY"
  | "CANCELLED"
  | "DECLINED"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolChampSelectChampionQuestSkinInfo {
  splashPath: string;
  tilePath: string;
  tiers: LolChampSelectCollectionsChampionQuestSkin[];
}
export interface LolChampSelectChampionSelection {
  selectedByMe: boolean;
  banIntentedByMe: boolean;
  banIntented: boolean;
  isBanned: boolean;
  pickIntented: boolean;
  pickIntentedByMe: boolean;
  pickIntentedPosition: string;
  pickedByOtherOrBanned: boolean;
}
export interface LolChampSelectCollectionsChampionChroma {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  disabled: boolean;
  stillObtainable: boolean;
  colors: string[];
}
export interface LolChampSelectCollectionsChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  chestGranted: boolean;
}
export interface LolChampSelectCollectionsChampionMinimal {
  banVoPath: string;
  chooseVoPath: string;
  disabledQueues: string[];
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  roles: string[];
  squarePortraitPath: string;
  stingerSfxPath: string;
  baseSplashPath: string;
  freeToPlay: boolean;
}
export interface LolChampSelectCollectionsChampionQuestSkin {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  splashPath: string;
  tilePath: string;
  stage: number;
  shortName: string;
  splashVideoPath: string;
}
export interface LolChampSelectCollectionsChampionSkin {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  splashPath: string;
  tilePath: string;
  chromas: LolChampSelectCollectionsChampionChroma[];
  questSkinInfo: LolChampSelectChampionQuestSkinInfo;
  emblems: LolChampSelectCollectionsChampionSkinEmblem[];
  rarityGemPath: string;
  splashVideoPath?: string;
}
export interface LolChampSelectCollectionsChampionSkinEmblem {
  name: string;
  emblemPath: LolChampSelectCollectionsChampionSkinEmblemPath;
  positions: LolChampSelectCollectionsChampionSkinEmblemPosition;
}
export interface LolChampSelectCollectionsChampionSkinEmblemPath {
  large: string;
  small: string;
}
export interface LolChampSelectCollectionsChampionSkinEmblemPosition {
  vertical: string;
  horizontal: string;
}
export interface LolChampSelectCollectionsChampionSkinMinimal {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  splashPath: string;
  tilePath: string;
}
export interface LolChampSelectCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolChampSelectCollectionsRental;
}
export interface LolChampSelectCollectionsRental {
  rented: boolean;
}
export interface LolChampSelectEntitledFeatureState {
  additionalRerolls: number;
  unlockedSkinIds: number[];
}
export interface LolChampSelectGameDataSummonerSpell {
  id: number;
  iconPath: string;
}
export interface LolChampSelectLegacyChampSelectAction {
  id: number;
  actorCellId: number;
  championId: number;
  type: string;
  completed: boolean;
  isAllyAction: boolean;
  isInProgress: boolean;
  pickTurn: number;
}
export interface LolChampSelectLegacyChampSelectBannedChampions {
  myTeamBans: number[];
  theirTeamBans: number[];
  numBans: number;
}
export interface LolChampSelectLegacyChampSelectChatRoomDetails {
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolChampSelectLegacyMucJwtDto;
}
export interface LolChampSelectLegacyChampSelectMySelection {
  selectedSkinId?: number;
  spell1Id?: number;
  spell2Id?: number;
  wardSkinId?: number;
}
export interface LolChampSelectLegacyChampSelectPlayerSelection {
  cellId: number;
  championId: number;
  selectedSkinId: number;
  wardSkinId: number;
  spell1Id: number;
  spell2Id: number;
  team: number;
  assignedPosition: string;
  championPickIntent: number;
  playerType: string;
  summonerId: number;
}
export interface LolChampSelectLegacyChampSelectSession {
  timer: LolChampSelectLegacyChampSelectTimer;
  chatDetails: LolChampSelectLegacyChampSelectChatRoomDetails;
  myTeam: LolChampSelectLegacyChampSelectPlayerSelection[];
  theirTeam: LolChampSelectLegacyChampSelectPlayerSelection[];
  trades: LolChampSelectLegacyChampSelectTradeContract[];
  actions: object[];
  bans: LolChampSelectLegacyChampSelectBannedChampions;
  localPlayerCellId: number;
  isSpectating: boolean;
  allowSkinSelection: boolean;
  allowBattleBoost: boolean;
  allowRerolling: boolean;
  rerollsRemaining: number;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
}
export interface LolChampSelectLegacyChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  totalTimeInPhase: number;
  phase: string;
  isInfinite: boolean;
  internalNowInEpochMs: number;
}
export interface LolChampSelectLegacyChampSelectTradeContract {
  id: number;
  cellId: number;
  state: LolChampSelectLegacyChampSelectTradeState;
}
export type LolChampSelectLegacyChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolChampSelectLegacyChampionSelectPreferences {
  skins: Map<string, number>;
  spells: Map<string, object>;
}
export interface LolChampSelectLegacyCollectionsChampion {
  disabledQueues: string[];
  freeToPlay: boolean;
  id: number;
  ownership: LolChampSelectLegacyCollectionsOwnership;
  active: boolean;
}
export interface LolChampSelectLegacyCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolChampSelectLegacyCollectionsRental;
}
export interface LolChampSelectLegacyCollectionsRental {
  rented: boolean;
}
export interface LolChampSelectLegacyGameflowGameClient {
  running: boolean;
  visible: boolean;
}
export interface LolChampSelectLegacyGameflowGameData {
  queue: LolChampSelectLegacyQueue;
}
export interface LolChampSelectLegacyGameflowGameDodge {
  state: LolChampSelectLegacyGameflowGameDodgeState;
  dodgeIds: number[];
}
export type LolChampSelectLegacyGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export type LolChampSelectLegacyGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolChampSelectLegacyGameflowSession {
  phase: LolChampSelectLegacyGameflowPhase;
  gameClient: LolChampSelectLegacyGameflowGameClient;
  gameData: LolChampSelectLegacyGameflowGameData;
}
export interface LolChampSelectLegacyInventoryItemWithPayload {
  itemId: number;
  payload: object;
}
export interface LolChampSelectLegacyLobbyStatus {
  queueId: number;
  isCustom: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  allowedPlayAgain: boolean;
  memberSummonerIds: number[];
}
export interface LolChampSelectLegacyLoginSession {
  state: LolChampSelectLegacyLoginSessionStates;
  summonerId: number;
  connected: boolean;
}
export type LolChampSelectLegacyLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolChampSelectLegacyMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolChampSelectLegacyPlayerStatus {
  currentLobbyStatus?: LolChampSelectLegacyLobbyStatus;
  lastQueuedLobbyStatus?: LolChampSelectLegacyLobbyStatus;
}
export interface LolChampSelectLegacyQueue {
  gameTypeConfig: LolChampSelectLegacyQueueGameTypeConfig;
  areFreeChampionsAllowed: boolean;
}
export interface LolChampSelectLegacyQueueGameTypeConfig {
  maxAllowableBans: number;
  allowTrades: boolean;
  battleBoost: boolean;
  name: string;
}
export interface LolChampSelectLegacySettingCategoryResource {
  schemaVersion: number;
  data: LolChampSelectLegacyChampionSelectPreferences;
}
export interface LolChampSelectLegacySummoner {
  summonerId: number;
  summonerLevel: number;
}
export interface LolChampSelectLegacyTeamBoost {
  summonerName: string;
  skinUnlockMode: string;
  price: number;
  ipReward: number;
  ipRewardForPurchaser: number;
  availableSkins: number[];
  unlocked: boolean;
}
export interface LolChampSelectLoginSession {
  summonerId?: number;
}
export interface LolChampSelectMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolChampSelectMutedPlayerInfo {
  puuid: string;
  summonerId: number;
  obfuscatedPuuid: string;
  obfuscatedSummonerId: number;
}
export interface LolChampSelectSettingsResource {
  data: object;
  schemaVersion: number;
}
export interface LolChampSelectSfxNotification {
  delayMillis: number;
  path: string;
  eventType: string;
}
export interface LolChampSelectSkinSelectorChildSkin {
  championId: number;
  chromaPreviewPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  isChampionUnlocked: boolean;
  splashPath: string;
  splashVideoPath?: string;
  tilePath: string;
  unlocked: boolean;
  isUnlockedFromEntitledFeature: boolean;
  parentSkinId: number;
  colors: string[];
  stage: number;
  shortName: string;
}
export interface LolChampSelectSkinSelectorInfo {
  selectedSkinId: number;
  isSkinGrantedFromBoost: boolean;
  selectedChampionId: number;
  championName: string;
  skinSelectionDisabled: boolean;
  showSkinSelector: boolean;
}
export interface LolChampSelectSkinSelectorSkin {
  championId: number;
  chromaPreviewPath?: string;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  isChampionUnlocked: boolean;
  splashPath: string;
  splashVideoPath?: string;
  tilePath: string;
  unlocked: boolean;
  isUnlockedFromEntitledFeature: boolean;
  childSkins: LolChampSelectSkinSelectorChildSkin[];
  emblems: LolChampSelectCollectionsChampionSkinEmblem[];
  rarityGemPath: string;
  groupSplash: string;
}
export interface LolChampSelectTeamBoost {
  summonerId: number;
  skinUnlockMode: string;
  price: number;
  ipReward: number;
  ipRewardForPurchaser: number;
  availableSkins: number[];
  unlocked: boolean;
}
export interface LolChampionsChampionQuestSkinInfo {
  name: string;
  descriptionInfo: LolChampionsQuestSkinDescriptionInfo[];
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  collectionCardPath: string;
  collectionDescription: string;
  tiers: LolChampionsCollectionsChampionQuestSkin[];
}
export interface LolChampionsCollectionsChampion {
  alias: string;
  title: string;
  banVoPath: string;
  chooseVoPath: string;
  disabledQueues: string[];
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  purchased: number;
  roles: string[];
  squarePortraitPath: string;
  stingerSfxPath: string;
  baseLoadScreenPath: string;
  baseSplashPath: string;
  active: boolean;
  botEnabled: boolean;
  freeToPlay: boolean;
  rankedPlayEnabled: boolean;
  passive: LolChampionsCollectionsChampionSpell;
  skins: LolChampionsCollectionsChampionSkin[];
  spells: LolChampionsCollectionsChampionSpell[];
  tacticalInfo: LolChampionsCollectionsChampionTacticalInfo;
}
export interface LolChampionsCollectionsChampionChroma {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  disabled: boolean;
  stillObtainable: boolean;
  lastSelected: boolean;
  colors: string[];
}
export interface LolChampionsCollectionsChampionMinimal {
  alias: string;
  title: string;
  banVoPath: string;
  chooseVoPath: string;
  disabledQueues: string[];
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  purchased: number;
  roles: string[];
  squarePortraitPath: string;
  stingerSfxPath: string;
  baseLoadScreenPath: string;
  baseSplashPath: string;
  active: boolean;
  botEnabled: boolean;
  freeToPlay: boolean;
  rankedPlayEnabled: boolean;
}
export interface LolChampionsCollectionsChampionPlayableCounts {
  championsOwned: number;
  championsRented: number;
  championsFreeToPlay: number;
  championsLoyaltyReward: number;
  championsXboxGPReward: number;
}
export interface LolChampionsCollectionsChampionQuestSkin {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  lastSelected: boolean;
  splashPath: string;
  tilePath: string;
  stage: number;
  description: string;
  uncenteredSplashPath: string;
  loadScreenPath: string;
  shortName: string;
  splashVideoPath: string;
  collectionSplashVideoPath: string;
}
export interface LolChampionsCollectionsChampionSkin {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  lastSelected: boolean;
  splashPath: string;
  tilePath: string;
  chromas: LolChampionsCollectionsChampionChroma[];
  questSkinInfo: LolChampionsChampionQuestSkinInfo;
  emblems: LolChampionsCollectionsChampionSkinEmblem[];
  uncenteredSplashPath: string;
  loadScreenPath: string;
  rarityGemPath: string;
  splashVideoPath?: string;
  collectionSplashVideoPath?: string;
  skinType?: string;
  featuresText?: string;
}
export interface LolChampionsCollectionsChampionSkinEmblem {
  name: string;
  emblemPath: LolChampionsCollectionsChampionSkinEmblemPath;
  positions: LolChampionsCollectionsChampionSkinEmblemPosition;
}
export interface LolChampionsCollectionsChampionSkinEmblemPath {
  large: string;
  small: string;
}
export interface LolChampionsCollectionsChampionSkinEmblemPosition {
  vertical: string;
  horizontal: string;
}
export interface LolChampionsCollectionsChampionSkinMinimal {
  championId: number;
  chromaPath?: string;
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  isBase: boolean;
  disabled: boolean;
  stillObtainable: boolean;
  lastSelected: boolean;
  splashPath: string;
  tilePath: string;
}
export interface LolChampionsCollectionsChampionSpell {
  name: string;
  description: string;
}
export interface LolChampionsCollectionsChampionTacticalInfo {
  style: number;
  difficulty: number;
  damageType: string;
}
export interface LolChampionsCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolChampionsCollectionsRental;
}
export interface LolChampionsCollectionsRental {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  rented: boolean;
}
export interface LolChampionsGameDataChampion {
  id: number;
  alias: string;
  title: string;
  banVoPath: string;
  chooseVoPath: string;
  name: string;
  squarePortraitPath: string;
  stingerSfxPath: string;
  passive: LolChampionsGameDataChampionSpell;
  roles: string[];
  skins: LolChampionsGameDataChampionSkin[];
  spells: LolChampionsGameDataChampionSpell[];
  tacticalInfo: LolChampionsGameDataChampionTacticalInfo;
}
export interface LolChampionsGameDataChampionChroma {
  id: number;
  colors: string[];
  chromaPath: string;
}
export interface LolChampionsGameDataChampionQuestSkin {
  id: number;
  name: string;
  stage: number;
  description: string;
  splashPath: string;
  splashVideoPath: string;
  collectionSplashVideoPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  shortName: string;
}
export interface LolChampionsGameDataChampionSkin {
  id: number;
  name: string;
  chromas: LolChampionsGameDataChampionChroma[];
  questSkinInfo: LolChampionsGameDataQuestSkinInfo;
  emblems: LolChampionsCollectionsChampionSkinEmblem[];
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  rarityGemPath: string;
  splashVideoPath?: string;
  collectionSplashVideoPath?: string;
  chromaPath?: string;
  skinType?: string;
  featuresText?: string;
}
export interface LolChampionsGameDataChampionSpell {
  name: string;
  description: string;
}
export interface LolChampionsGameDataChampionSummary {
  id: number;
}
export interface LolChampionsGameDataChampionTacticalInfo {
  style: number;
  difficulty: number;
  damageType: string;
}
export interface LolChampionsGameDataQuestSkinDescriptionInfo {
  title: string;
  description: string;
  iconPath: string;
}
export interface LolChampionsGameDataQuestSkinInfo {
  name: string;
  descriptionInfo: LolChampionsGameDataQuestSkinDescriptionInfo[];
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  collectionCardPath: string;
  collectionDescription: string;
  tiers: LolChampionsGameDataChampionQuestSkin[];
}
export interface LolChampionsInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  expirationDate: string;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  owned: boolean;
  payload: object;
}
export interface LolChampionsLcdsDynamicClientConfig {
  DisabledChampions: object;
}
export interface LolChampionsLoginSession {
  state: LolChampionsLoginSessionStates;
  summonerId: number;
  connected: boolean;
}
export type LolChampionsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export type LolChampionsLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolChampionsLoyaltyStatusNotification {
  status: LolChampionsLoyaltyStatus;
  reloadInventory: boolean;
}
export interface LolChampionsPlayerNotification {
  backgroundUrl: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolChampionsQuestSkinDescriptionInfo {
  title: string;
  description: string;
  iconPath: string;
}
export interface LolChampionsSummoner {
  summonerId: number;
  summonerLevel: number;
}
export type LolChatAccountState =
  | "away"
  | "chat"
  | "dnd"
  | "mobile"
  | "offline";
export interface LolChatActiveConversationResource {
  id: string;
}
export interface LolChatAuthResourceRsoAccessToken {
  token: string;
  scopes: string[];
  expiry: number;
}
export type LolChatAuthType = "rsoCreate" | "rsoRefresh";
export interface LolChatBlocked {
  pid: string;
  name: string;
  game_name: string;
  game_tag: string;
}
export interface LolChatBlockedList {
  blocked: LolChatBlocked[];
}
export interface LolChatBlockedPlayerResource {
  summonerId: number;
  icon: number;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  gameName: string;
  gameTag: string;
}
export interface LolChatChampSelection {
  summonerInternalName: string;
  championId: number;
  selectedSkinIndex: number;
}
export interface LolChatChatDomainConfig {
  P2PDomainName?: string;
  CustomGameDomainName?: string;
  ChampSelectDomainName?: string;
  PostGameDomainName?: string;
  ClubDomainName?: string;
}
export interface LolChatChatFriendUpdate {
  pid: string;
  group: string;
  note: string;
}
export interface LolChatChatMessage {
  type: LolChatMessageType;
  id: string;
  cid: string;
  pid: string;
  mid: string;
  name: string;
  game_name: string;
  game_tag: string;
  time: string;
  body: string;
  read: boolean;
}
export interface LolChatChatMessageList {
  messages: LolChatChatMessage[];
}
export interface LolChatChatPlatformLoginSession {
  state: LolChatChatPlatformLoginSessionState;
  accountId: number;
  username: string;
  userAuthToken: string;
  gasToken: object;
  summonerId?: number;
  idToken: string;
  puuid: string;
  isNewPlayer: boolean;
}
export type LolChatChatPlatformLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolChatChatServiceDynamicClientConfig {
  LcuSocial?: LolChatLcuSocialConfig;
  ChatDomain?: LolChatChatDomainConfig;
}
export type LolChatChatSessionState =
  | "connected"
  | "connecting"
  | "disconnected";
export interface LolChatChatSettings {
  chatGroupMobile: boolean;
  chatGroupOffline: boolean;
  chatGBG: boolean;
  recentlyPlayedOpen: boolean;
  recentlyPlayedFirstOpen: boolean;
  chatFilterDisabled: boolean;
  friendRequestToastsDisabled: boolean;
  linkClickWarningEnabled: boolean;
  moreUnreadsEnabled: boolean;
  showWhenTypingEnabled: boolean;
  bounceDockIconEnabled: boolean;
  messageNotificationsEnabled: boolean;
  usePlayerPreferences: boolean;
  chatWindowDockedHeight: number;
  sortBy: string;
  "chat-status-message": string;
  "closed-conversations": Map<string, number>;
  "hidden-conversations": Map<string, number>;
  "muted-conversations": Map<string, number>;
  "roster-group-collapsed": Map<string, boolean>;
  chatWindow: LolChatChatWindowSettings;
}
export interface LolChatChatSummoner {
  summonerId: number;
  profileIconId: number;
  displayName: string;
  summonerLevel: number;
  puuid: string;
  unnamed: boolean;
}
export interface LolChatChatWindowSettings {
  detached: boolean;
  height: number;
  left: number;
  top: number;
  width: number;
}
export interface LolChatCidBody {
  cid: string;
}
export type LolChatConfigReadinessEnum = "Disabled" | "NotReady" | "Ready";
export interface LolChatConfigStatus {
  readiness: LolChatConfigReadinessEnum;
}
export type LolChatConfigType = "player" | "public";
export interface LolChatContentCookies {
  content_id: string;
  content_path: string;
  cookies: LolChatcookie[];
}
export interface LolChatConversation {
  cid: string;
  type: string;
  mid: string;
  unread_count: number;
  muted: boolean;
}
export interface LolChatConversationJoinFederated {
  id: string;
  password: string;
  type: string;
  domain: string;
  targetRegion: string;
  hidden?: boolean;
}
export interface LolChatConversationList {
  conversations: LolChatConversation[];
}
export interface LolChatConversationMessageResource {
  id: string;
  type: string;
  fromSummonerId: number;
  fromId: string;
  fromPid: string;
  fromObfuscatedSummonerId: number;
  body: string;
  timestamp: string;
  isHistorical: boolean;
}
export interface LolChatConversationResource {
  id: string;
  name: string;
  pid: string;
  gameName: string;
  gameTag: string;
  type: string;
  inviterId: string;
  password: string;
  targetRegion: string;
  isMuted: boolean;
  unreadMessageCount: number;
  lastMessage?: LolChatConversationMessageResource;
  mucJwtDto: LolChatMucJwtDto;
}
export interface LolChatConversationUpdate {
  cid: string;
  muted: boolean;
  hidden: boolean;
}
export interface LolChatDebugResource {
  isXMPPLoggingEnabled?: boolean;
  keepAliveInterval?: number;
  asyncWaitInterval?: number;
  minReconnectInterval?: number;
  maxReconnectInterval?: number;
  triggerChatDisconnect?: boolean;
  failNextKeepAlive?: boolean;
  failNextChatLogin?: boolean;
  failNextChatLogout?: boolean;
  failAllChatLogin?: boolean;
  enableChatFiltering?: boolean;
  silenceChatWhileInGame?: boolean;
}
export interface LolChatEndOfGamePlayer {
  puuid: string;
  isLocalPlayer: boolean;
}
export interface LolChatEndOfGameStats {
  teams: LolChatEndOfGameTeam[];
  localPlayer: LolChatEndOfGamePlayer;
}
export interface LolChatEndOfGameTeam {
  players: LolChatEndOfGamePlayer[];
  isPlayerTeam: boolean;
}
export interface LolChatError {
  cid: string;
  class: string;
  code: string;
  id: string;
  pid: string;
  subtype: string;
  text: string;
  ts: string;
  type: string;
}
export interface LolChatErrorList {
  errors: LolChatError[];
}
export interface LolChatErrorResource {
  id: number;
  from: string;
  code: number;
  message: string;
  text: string;
}
export interface LolChatFriend {
  pid: string;
  group: string;
  displayGroup: string;
  name: string;
  game_name: string;
  game_tag: string;
  note: string;
  puuid: string;
  region: string;
}
export interface LolChatFriendCountsResource {
  numFriends: number;
  numFriendsOnline: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInQueue: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsMobile: number;
}
export interface LolChatFriendGroup {
  name: string;
  collapsed: boolean;
  isMetaGroup: boolean;
}
export interface LolChatFriendGroupCreate {
  name: string;
  collapsed: boolean;
}
export interface LolChatFriendGroupList {
  groups: LolChatFriendGroup[];
}
export interface LolChatFriendGroupOrder {
  groups: string[];
}
export interface LolChatFriendGroupUpdate {
  name: string;
  new_name: string;
  collapsed: boolean;
}
export interface LolChatFriendList {
  friends: LolChatFriend[];
}
export interface LolChatFriendRequest {
  pid: string;
  name: string;
  game_name: string;
  game_tag: string;
  subscription: LolChatFriendSubscriptionType;
  note: string;
  puuid: string;
  region: string;
}
export interface LolChatFriendRequestAdd {
  pid: string;
  name: string;
  game_name: string;
  game_tag: string;
  note: string;
  puuid: string;
  region: string;
}
export type LolChatFriendRequestDirection = "both" | "in" | "out";
export interface LolChatFriendRequestList {
  requests: LolChatFriendRequest[];
}
export interface LolChatFriendRequestResource {
  summonerId: number;
  icon: number;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  gameName: string;
  gameTag: string;
  note: string;
  direction: LolChatFriendRequestDirection;
}
export interface LolChatFriendResource {
  summonerId: number;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  gameName: string;
  gameTag: string;
  icon: number;
  availability: string;
  platformId: string;
  patchline: string;
  product: string;
  productName: string;
  summary: string;
  time: number;
  statusMessage: string;
  note: string;
  lastSeenOnlineTimestamp?: string;
  isP2PConversationMuted: boolean;
  groupId: number;
  displayGroupId: number;
  groupName: string;
  displayGroupName: string;
  lol: Map<string, string>;
}
export type LolChatFriendSubscriptionType = "pending_in" | "pending_out";
export interface LolChatGameDataChampionSummary {
  id: number;
  alias: string;
}
export interface LolChatGameflowGameData {
  gameId: number;
  queue: LolChatQueue;
  teamOne: LolChatTeamPlayerEntry[];
  teamTwo: LolChatTeamPlayerEntry[];
  playerChampionSelections: LolChatChampSelection[];
}
export interface LolChatGameflowGameMap {
  id: number;
}
export type LolChatGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolChatGameflowSession {
  phase: LolChatGameflowPhase;
  gameData: LolChatGameflowGameData;
  map: LolChatGameflowGameMap;
}
export interface LolChatGroupResource {
  id: number;
  name: string;
  isMetaGroup: boolean;
  isLocalized: boolean;
  priority: number;
  collapsed: boolean;
}
export interface LolChatIdBody {
  id: string;
}
export interface LolChatLcuSocialConfig {
  ForceChatFilter: boolean;
  QueueJobGraceSeconds: number;
  SilenceChatWhileInGame: boolean;
  AggressiveScanning: boolean;
  ReplaceRichMessages: boolean;
  gameNameTaglineEnabled: boolean;
  allowGroupByGame: boolean;
  platformToRegionMap: Map<string, string>;
}
export type LolChatLeagueDivision = "I" | "II" | "III" | "IV" | "NA" | "V";
export type LolChatLeagueQueueType =
  | "NONE"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_SOLO_5x5"
  | "RANKED_TFT";
export type LolChatLeagueTier =
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "NONE"
  | "PLATINUM"
  | "SILVER";
export interface LolChatLobbyMember {
  id: number;
  isOwner: boolean;
}
export interface LolChatLobbyPlayerStatus {
  currentLobbyStatus?: LolChatLobbyStatus;
  lastQueuedLobbyStatus?: LolChatLobbyStatus;
}
export interface LolChatLobbyStatus {
  queueId: number;
  isCustom: boolean;
  isPracticeTool: boolean;
  isLeader: boolean;
  customSpectatorPolicy: LolChatQueueCustomGameSpectatorPolicy;
}
export interface LolChatMessage {
  type: string;
  id: string;
  cid: string;
  pid: string;
  mid: string;
  name: string;
  game_name: string;
  game_tag: string;
  time: string;
  body: string;
  read: boolean;
}
export interface LolChatMessageList {
  messages: LolChatMessage[];
}
export interface LolChatMessagePost {
  cid: string;
  message: string;
  type: LolChatMessageType;
}
export interface LolChatMessageSend {
  message: string;
  type: string;
}
export type LolChatMessageType = "chat" | "dm" | "groupchat" | "system";
export interface LolChatMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolChatMultiGamePresence {
  state: LolChatAccountState;
  msg?: string;
  pid: string;
  puuid: string;
  region: string;
  name: string;
  game_name: string;
  game_tag: string;
  resource: string;
  product: string;
  summary: string;
  patchline?: string;
  platform?: string;
  location?: string;
  details?: string;
  actor?: string;
  time?: number;
  privateJwt?: string;
  private?: string;
}
export interface LolChatMultiGamePresenceList {
  presences: LolChatMultiGamePresence[];
}
export interface LolChatMultiGamePresenceSharedPayload {
  product?: string;
  patchline?: string;
  platform?: string;
  location?: string;
  details?: string;
  actor?: string;
  time?: number;
}
export interface LolChatMultiGamePresenceUpdate {
  state: LolChatAccountState;
  msg?: string;
  privateJwt?: string;
  private?: string;
  sharedJwt?: string;
  shared?: LolChatMultiGamePresenceSharedPayload;
}
export type LolChatMuteType = "PLAYER_MUTE" | "SETTINGS_MUTE" | "SYSTEM_MUTE";
export interface LolChatMutedPlayerInfo {
  puuid: string;
  summonerId: number;
  obfuscatedPuuid: string;
  obfuscatedSummonerId: number;
}
export interface LolChatNameBody {
  name: string;
}
export interface LolChatParticipant {
  cid: string;
  pid: string;
  name: string;
  game_name: string;
  game_tag: string;
  muted: boolean;
  puuid: string;
  region: string;
}
export interface LolChatParticipantList {
  participants: LolChatParticipant[];
}
export interface LolChatPatchlineMetadata {
  product_id: string;
  id: string;
  content_paths: Map<string, string>;
  content_cookies: LolChatContentCookies[];
}
export interface LolChatPidBody {
  pid: string;
}
export interface LolChatPlayerMuteStatus {
  puuid: string;
  obfuscatedPuuid: string;
  isPlayerMuted: boolean;
  isSettingsMuted: boolean;
  isSystemMuted: boolean;
}
export interface LolChatPlayerMuteUpdate {
  puuids: string[];
  isMuted: boolean;
}
export interface LolChatPlayerPreferences {
  data: string;
  type: string;
  modified: number;
}
export interface LolChatPluginRegionLocaleChangedEvent {
  region: string;
  locale: string;
}
export interface LolChatPresenceProduct {
  product: string;
}
export interface LolChatProductMetadata {
  id: string;
  name: string;
  patchlines: Map<string, LolChatPatchlineMetadata>;
}
export interface LolChatProductMetadataMap {
  products: Map<string, LolChatProductMetadata>;
}
export interface LolChatQueue {
  id: number;
  type: string;
  gameMode: string;
  gameTypeConfig: LolChatQueueGameTypeConfig;
}
export type LolChatQueueCustomGameSpectatorPolicy =
  | "AllAllowed"
  | "FriendsAllowed"
  | "LobbyAllowed"
  | "NotAllowed";
export interface LolChatQueueGameTypeConfig {
  id: number;
  name: string;
}
export interface LolChatRankedQueueStats {
  queueType: LolChatLeagueQueueType;
  isProvisional: boolean;
  tier: LolChatLeagueTier;
  division: LolChatLeagueDivision;
  wins: number;
  games: number;
}
export interface LolChatRankedStats {
  highestRankedEntry?: LolChatRankedQueueStats;
  rankedRegaliaLevel: number;
  highestPreviousSeasonAchievedTier: LolChatLeagueTier;
  highestPreviousSeasonAchievedDivision: LolChatLeagueDivision;
}
export interface LolChatRsoAuthorization {
  currentPlatformId: string;
  currentAccountId: number;
  subject: string;
}
export interface LolChatSanitizeRequest {
  texts: string[];
  level?: number;
  aggressiveScan?: boolean;
}
export interface LolChatSanitizeResponse {
  texts?: string[];
  modified: boolean;
}
export interface LolChatSanitizerStatus {
  ready: boolean;
  platformID: string;
  locale: string;
}
export interface LolChatSession {
  state: LolChatChatSessionState;
  pid: string;
  name: string;
  game_name: string;
  game_tag: string;
  resource: string;
  loaded: boolean;
}
export interface LolChatSessionResource {
  sessionState: LolChatSessionState;
  sessionExpire: number;
}
export type LolChatSessionState =
  | "connected"
  | "disconnected"
  | "initializing"
  | "loaded"
  | "shuttingdown";
export interface LolChatSettingsResource {
  data: object;
}
export interface LolChatSpectateGameInfoResource {
  dropInSpectateGameId: string;
  gameQueueType: string;
  allowObserveMode: string;
  puuid: string;
}
export interface LolChatSummonerStatus {
  ready: boolean;
}
export interface LolChatTeamPlayerEntry {
  summonerId: number;
  summonerInternalName: string;
  summonerName: string;
}
export interface LolChatTranslateRequest {
  keys: string[];
  product_id: string;
  locale: string;
  patchline: string;
  blocking: boolean;
}
export interface LolChatTranslateResponse {
  results: LolChatTranslateResult[];
}
export interface LolChatTranslateResult {
  found: boolean;
  key: string;
  product_id: string;
  value: string;
}
export interface LolChatUserResource {
  summonerId: number;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  obfuscatedSummonerId: number;
  gameName: string;
  gameTag: string;
  icon: number;
  availability: string;
  platformId: string;
  patchline: string;
  product: string;
  productName: string;
  summary: string;
  time: number;
  statusMessage?: string;
  lastSeenOnlineTimestamp?: string;
  lol: Map<string, string>;
}
export interface LolChatcookie {
  url: string;
  name: string;
  value: string;
  domain: string;
  path: string;
  secure: boolean;
  httponly: boolean;
  expires?: number;
}
export interface LolClashBlockedPlayerResource {
  summonerId: number;
  name: string;
}
export interface LolClashBracket {
  tournamentId: number;
  id: number;
  size: number;
  matches: BracketMatch[];
  rosters: BracketRoster[];
  version: number;
  period: number;
  isComplete: boolean;
}
export interface LolClashBracketReadyNotification {
  tournamentId: number;
  bracketId: number;
}
export interface LolClashBracketUpdateNotification {
  tournamentId: number;
  bracketId: number;
  currentMatchId: number;
  notifyReason: LolClashRosterNotifyReason;
}
export interface LolClashChangeIconRequest {
  iconId: number;
  iconColorId: number;
}
export interface LolClashChangeNameRequest {
  name: string;
}
export interface LolClashClashConfig {
  Visibility: LolClashClashVisibility;
  EnabledState: LolClashClashState;
  DisabledReason: string;
  EstimatedEnableTimeMillis: number;
  IconConfig: string;
  HonorLevelRequired: number;
  IsPlaymodeRestrictionEnabled: boolean;
  VoiceRetryDelaySeconds: number;
  VoiceRetryCountLimit: number;
  VoiceNoDelayAutoStartSeconds: number;
  VoiceRandomStartMinSeconds: number;
  VoiceRandomStartMaxSeconds: number;
  VoiceEobQuitDelaySeconds: number;
  RewardGrantRetryIntervalSeconds: number;
  MaxTimeBeforeLockinNotifySeconds: number;
  HonorRefreshRetrySeconds: number;
  EventSendingEnabled: boolean;
  DisabledEvents: string[];
  MinClashSummonerLevel: number;
  MinClashNotificationsSummonerLevel: number;
  CheckPartiesRegistration: boolean;
}
export interface LolClashClashDisabledConfig {
  disabledReason: string;
  estimatedEnableTimeMillis: number;
}
export interface LolClashClashSettingCategory {
  simpleStateFlagIds?: string[];
}
export type LolClashClashState = "Disabled" | "Enabled";
export type LolClashClashVisibility = "Hidden" | "Visible";
export interface LolClashClientFailedInvite {
  playerId: number;
  exception: string;
}
export interface LolClashClubsSummoner {
  summonerId: number;
  displayName: string;
  profileIconId: number;
  summonerLevel: number;
}
export interface LolClashEogPlayerUpdateDTO {
  tournamentId: number;
  gameId: number;
  winner: boolean;
  themeVp: number;
  seasonVp: number;
  lowestPosition: number;
  bracketSize: number;
  bid: number;
  tier: number;
  earnedRewards: ClashRewardDefinition[];
  rewardProgress: ClashRewardDefinition[];
}
export interface LolClashFindPlayers {
  invitationId: string;
  memberId: number;
  page: number;
  count: number;
}
export interface LolClashFindTeams {
  tournamentId: number;
  page: number;
  count: number;
}
export type LolClashFoundationError =
  | "CLASH_DISABLED"
  | "CLASH_NOT_INITIALIZED"
  | "DESERIALIZATION_FAILED"
  | "GAMEFLOW_UNAVAILABLE"
  | "INVALID_SIMPLE_STATE_FLAG"
  | "LOL_INVENTORY_NOT_READY";
export interface LolClashGameflowAvailability {
  isAvailable: boolean;
}
export interface LolClashGameflowGameDodge {
  state: LolClashMatchmakingDodgeState;
  dodgeIds: number[];
}
export interface LolClashGameflowPartiesRegistrationStatus {
  complete: boolean;
  errorCodes: string[];
}
export type LolClashGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolClashGameflowSession {
  phase: LolClashGameflowPhase;
}
export type LolClashKdaClassification = "AVERAGE" | "HIGH" | "LOW";
export interface LolClashKickRequest {
  summonerId: number;
}
export interface LolClashLftState {
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
}
export interface LolClashLoginSession {
  state: LolClashLoginSessionState;
  summonerId?: number;
}
export type LolClashLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolClashMatchmakingDodgeData {
  state: LolClashMatchmakingDodgeState;
  dodgerId: number;
}
export type LolClashMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export type LolClashMatchmakingDodgeWarning = "None" | "Penalty" | "Warning";
export interface LolClashMatchmakingReadyCheckResource {
  state: LolClashMatchmakingReadyCheckState;
  playerResponse: LolClashMatchmakingReadyCheckResponse;
  dodgeWarning: LolClashMatchmakingDodgeWarning;
  timer: number;
  declinerIds: number[];
}
export type LolClashMatchmakingReadyCheckResponse =
  | "Accepted"
  | "Declined"
  | "None";
export type LolClashMatchmakingReadyCheckState =
  | "Error"
  | "EveryoneReady"
  | "InProgress"
  | "Invalid"
  | "PartyNotReady"
  | "StrangerNotReady";
export interface LolClashMatchmakingSearchResource {
  queueId: number;
  readyCheck: LolClashMatchmakingReadyCheckResource;
  dodgeData: LolClashMatchmakingDodgeData;
}
export interface LolClashMemberBanUnbanNotification {
  playerId: number;
  notifyPlayerId: number;
  notifyPuuid: string;
  reason: string;
  notifyReason: LolClashNotifyReason;
  tournaments: MemberBanUnbanTournament[];
}
export interface LolClashMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolClashNoShowPingDTO {
  tournamentId: number;
  matchId: number;
  dodgeTime: number;
}
export interface LolClashNoShowPingResponse {
  tournamentId: number;
  matchId: number;
  dodgeTime: number;
  data: string;
}
export interface LolClashNoShowPingResponseData {
  loginTime: number;
  dodgeTime: number;
  gameflowState: LolClashGameflowPhase;
  isPlaymodeRestricted: boolean;
  readyCheckInfo: LolClashReadyCheckInfo;
}
export type LolClashNotifyReason =
  | "ACCEPT_INVITE"
  | "ACCEPT_SELFJOIN"
  | "ACCEPT_SUGGESTION"
  | "ACCEPT_TICKET"
  | "BAN"
  | "CAPTAIN_LEAVE"
  | "CHANGE_LFT"
  | "CHANGE_LOGO"
  | "CHANGE_NAME"
  | "CHANGE_NAMETAGLOGO"
  | "CHANGE_POSITION"
  | "CHANGE_SHORTNAME"
  | "DECLINE_INVITE"
  | "DECLINE_SELFJOIN"
  | "DECLINE_SUGGESTION"
  | "DECLINE_TICKET"
  | "DISMISS"
  | "INVITE"
  | "KICK"
  | "LEAVE"
  | "MEMBER_BAN"
  | "OFFER_TICKET"
  | "OWNER_CLOSE"
  | "OWNER_TRANSFER"
  | "READY"
  | "RESENT_INVITE"
  | "REVERTED_REGISTRATION"
  | "REVOKED_TICKET"
  | "REVOKE_INVITE"
  | "REVOKE_SELFJOIN"
  | "REVOKE_SUGGESTION"
  | "REWARD_GRANT_FAILED"
  | "REWARD_GRANT_RETRY"
  | "ROSTER_DELETE"
  | "SELFJOIN"
  | "SET_TICKET"
  | "SUGGESTION"
  | "TEAMMATE_BAN"
  | "TEAMMATE_UNBAN"
  | "UNBAN"
  | "UNREADY";
export interface LolClashOfferTicketRequest {
  ticketAmount: number;
  ticketType: TicketType;
}
export interface LolClashPendingRosterNotification {
  pendingRoster: PendingRosterDTO;
  notifyReason: LolClashNotifyReason;
  sourcePlayerId: number;
  targetPlayerId: number;
}
export interface LolClashPlayerChatRoster {
  tournamentId: number;
  startTimeMs: number;
  endTimeMs: number;
  tournamentState: LolClashTournamentState;
  playerState: LolClashPlayerState;
  isRegistered: boolean;
  name: string;
  shortName: string;
  iconId: number;
  iconColorId: number;
  logoUrl: string;
  invitationId: string;
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolClashMucJwtDto;
}
export interface LolClashPlayerData {
  tickets: Map<string, number>;
  isClashBanned: boolean;
  tier: number;
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
}
export interface LolClashPlayerNotification {
  source: string;
  type: string;
  id: number;
  backgroundUrl: string;
  data: Map<string, string>;
  state: string;
  iconUrl: string;
  titleKey: string;
  detailKey: string;
  created: string;
  expires: string;
  critical: boolean;
  dismissible: boolean;
}
export interface LolClashPlayerNotificationData {
  notifyReason: LolClashNotifyReason;
  rosterNotifyReason: LolClashRosterNotifyReason;
  tournamentNotifyReason: LolClashTournamentNotifyReason;
  sourceSummonerId: number;
  targetSummonerId: number;
  notification: LolClashPlayerNotification;
  keySuffix: string;
}
export interface LolClashPlayerRewards {
  seasonVp: number;
  themeVp: LolClashThemeVp[];
}
export type LolClashPlayerState =
  | "BRACKET_ROSTER"
  | "ELIMINATED"
  | "NO_ROSTER"
  | "PENDING_ROSTER"
  | "REGISTERED_ROSTER";
export interface LolClashPlayerTournamentData {
  state: LolClashPlayerState;
  rosterId: string;
  bracketId: number;
}
export interface LolClashPlayerUpdateNotification {
  player: PlayerDTO;
  notifyReason: LolClashNotifyReason;
}
export interface LolClashPlaymodeRestrictedInfo {
  isRestricted: boolean;
  tournamentId: number;
  presenceState: LolClashPresenceState;
  rosterId: string;
  phaseId: number;
  readyForVoice: boolean;
}
export type LolClashPresenceState = "LOCKED_IN" | "NONE" | "SCOUTING";
export interface LolClashProfileInfo {
  honorLevel: number;
}
export interface LolClashQueue {
  id: number;
  mapId: number;
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  type: string;
  gameMode: string;
  category: LolClashQueueGameCategory;
  gameTypeConfig: LolClashQueueGameTypeConfig;
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  minLevel: number;
  isRanked: boolean;
  areFreeChampionsAllowed: boolean;
  isTeamBuilderManaged: boolean;
  queueAvailability: LolClashQueueAvailability;
  queueRewards: LolClashQueueReward;
  spectatorEnabled: boolean;
}
export type LolClashQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export type LolClashQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolClashQueueGameTypeConfig {
  id: number;
  name: string;
  maxAllowableBans: number;
  allowTrades: boolean;
  exclusivePick: boolean;
  duplicatePick: boolean;
  teamChampionPool: boolean;
  crossTeamChampionPool: boolean;
  advancedLearningQuests: boolean;
  battleBoost: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  learningQuests: boolean;
  onboardCoopBeginner: boolean;
  reroll: boolean;
  mainPickTimerDuration: number;
  postPickTimerDuration: number;
  banTimerDuration: number;
  pickMode: string;
  banMode: string;
}
export interface LolClashQueueReward {
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  isChampionPointsEnabled: boolean;
  partySizeIpRewards: number[];
}
export interface LolClashRankedScoutingMember {
  playerId: number;
  championScoutingData: LolClashRankedScoutingTopChampion[];
}
export interface LolClashRankedScoutingTopChampion {
  championId: number;
  rank: number;
  winCount: number;
  gameCount: number;
  winRate: number;
  kda: string;
  kdaClassification: LolClashKdaClassification;
}
export interface LolClashReadyCheckInfo {
  timestampReceived: number;
  timestampResponseComplete: number;
  timestampLastClashGameflowDodge: number;
  queueId: number;
  isAcceptSuccessful: boolean;
  acceptError: string;
  readyCheckResource: LolClashMatchmakingReadyCheckResource;
}
export interface LolClashRegisteredRosterNotification {
  roster: RosterDTO;
  notifyReason: LolClashRosterNotifyReason;
}
export interface LolClashRoster {
  tournamentId: number;
  invitationId: string;
  id: string;
  name: string;
  shortName: string;
  iconId: number;
  iconColorId: number;
  captainSummonerId: number;
  tier: number;
  points: number;
  wins: number;
  losses: number;
  currentBracketWins: number;
  numCompletedPeriods: number;
  isEliminated: boolean;
  isRegistered: boolean;
  isActiveInCurrentPhase: boolean;
  isCurrentBracketComplete: boolean;
  highTierVariance: boolean;
  members: LolClashRosterMember[];
  availableLogos: RewardLogo[];
  suggestedInvites: LolClashSuggestedInvite[];
  phaseInfos: LolClashRosterPhaseInfo[];
  withdraw?: RosterWithdraw;
  isClashBanned: boolean;
  lft: boolean;
}
export interface LolClashRosterDetails {
  name: string;
  shortName: string;
  iconId: number;
  iconColorId: number;
}
export interface LolClashRosterDynamicStateNotification {
  rosterDynamicState: RosterDynamicStateDTO;
  notifyReason: LolClashRosterNotifyReason;
  sourcePlayerId: number;
}
export interface LolClashRosterMatchAggregatedStats {
  round: number;
  durationMs: number;
  opponentShortName: string;
  opponentIconId: number;
  opponentIconColorId: number;
  win: boolean;
  loserBracket: boolean;
  gameId: number;
  kills: number;
  opponentKills: number;
  playerChampionIds: Map<string, number>;
}
export interface LolClashRosterMember {
  summonerId: number;
  state: LolClashRosterMemberState;
  currentBuyin: number;
  buyinType: TicketType;
  previousBuyin: number;
  incomingOffers: LolClashTicketOffer[];
  position: Position;
  replacedSummonerId: number;
  tier: number;
  inviteType: InviteType;
  inviterId: number;
}
export type LolClashRosterMemberState =
  | "DECLINED"
  | "FORCED_NOT_READY"
  | "NOT_READY"
  | "PENDING"
  | "READY";
export type LolClashRosterNotifyReason =
  | "BANNED_SMURF"
  | "BANNED_SMURF_OPPONENT"
  | "BANNED_SMURF_TEAMMATE"
  | "BRACKET_READY"
  | "BRACKET_ROSTER_REMOVED"
  | "BRACKET_ROSTER_REPLACED"
  | "BYE_AUTO_WIN"
  | "CANNOT_FIND_MATCH"
  | "CHANGE_POSITION"
  | "EOG_PLAYER_UPDATE"
  | "GAME_COMPLETED"
  | "GAME_END_ERROR"
  | "GAME_RESCHEDULED"
  | "GAME_SCHEDULED"
  | "GAME_STARTED"
  | "GAME_STARTED_ERROR"
  | "GAME_START_FAILED"
  | "GAME_START_FAILED_OPPONENT"
  | "GAME_START_FAILED_SUMMONERS"
  | "GAME_START_RETRY"
  | "GAME_START_RETRY_OPPONENT"
  | "GAME_START_RETRY_SUMMONERS"
  | "NO_SHOW_PING"
  | "OWNER_TRANSFER"
  | "PERIOD_CANCEL"
  | "PERIOD_SPLIT"
  | "PHASE_BACKOUT"
  | "PHASE_CHECKIN"
  | "PHASE_READY"
  | "PHASE_UNREADY"
  | "QUEUE_DODGE"
  | "REGISTERED"
  | "RESTRICTION_AUTO_WIN"
  | "ROSTER_ACCEPT_TICKET"
  | "ROSTER_DECLINE_TICKET"
  | "ROSTER_OFFER_TICKET"
  | "ROSTER_REVOKED_TICKET"
  | "ROSTER_SET_TICKET"
  | "ROUND_COMPLETE"
  | "TICKET_CHARGED"
  | "TICKET_COULD_NOT_BE_CHARGED"
  | "TICKET_REFUNDED"
  | "TIER_CHANGED"
  | "VOTE_WITHDRAW_DISMISS"
  | "VOTE_WITHDRAW_UPDATE"
  | "WITHDRAW";
export interface LolClashRosterPeriodAggregatedStats {
  period: number;
  bracketSize: number;
  time: number;
  matchStats: LolClashRosterMatchAggregatedStats[];
  playerBids: Map<string, number>;
}
export interface LolClashRosterPhaseInfo {
  phaseId: number;
  period: number;
  checkinTime: number;
  isBracketComplete: boolean;
}
export interface LolClashRosterPlayerAggregatedStats {
  rawStatsSum: Map<string, number>;
  rawStatsMax: Map<string, number>;
}
export interface LolClashRosterPlayerNotification {
  roster: RosterDTO;
  notifyReason: LolClashRosterNotifyReason;
  playerNotificationDTO: PlayerDTO;
  sourcePlayerId: number;
}
export interface LolClashRosterStats {
  rosterId: number;
  tournamentThemeId: number;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  startTimeMs: number;
  endTimeMs: number;
  tournamentPeriods: number;
  tier: number;
  rosterName: string;
  rosterShortName: string;
  rosterIconId: number;
  rosterIconColorId: number;
  periodStats: LolClashRosterPeriodAggregatedStats[];
  playerStats: Map<string, LolClashRosterPlayerAggregatedStats>;
}
export interface LolClashRosterWithdrawNotification {
  version: number;
  tournamentId: number;
  rosterId: number;
  withdraw: RosterWithdraw;
  notifyReason: LolClashRosterNotifyReason;
  sourcePlayerId: number;
}
export interface LolClashScoutingChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
}
export interface LolClashScoutingChampions {
  playerId: number;
  totalMasteryScore: number;
  topMasteries: LolClashScoutingChampionMastery[];
  topSeasonChampions: LolClashScoutingSeasonChampion[];
}
export interface LolClashScoutingSeasonChampion {
  championId: number;
  winCount: number;
  gameCount: number;
  winRate: number;
  kda: string;
  kdaClassification: LolClashKdaClassification;
}
export interface LolClashSetPositionRequest {
  position: Position;
}
export interface LolClashSetTicketRequest {
  ticketAmount: number;
  ticketType: TicketType;
}
export interface LolClashSettingCategory {
  schemaVersion: number;
  data: object;
}
export interface LolClashSimpleStateFlag {
  id: string;
  status: LolClashSimpleStateStatus;
}
export type LolClashSimpleStateStatus = "ACKNOWLEDGED" | "UNACKNOWLEDGED";
export interface LolClashSuggestedInvite {
  summonerId: number;
  suggesterSummonerId: number;
}
export interface LolClashSuggestionInvite {
  inviterId: number;
  inviteePlayers: number[];
}
export interface LolClashSuggestionInvitee {
  captainId: number;
  inviteeId: number;
}
export interface LolClashTeamOpenState {
  invitationId: string;
  captainId: number;
  openTeam: boolean;
}
export interface LolClashThemeVp {
  themeId: number;
  vp: number;
}
export interface LolClashThirdPartyApiPlayer {
  summonerId: number;
  role: string;
}
export interface LolClashThirdPartyApiRoster {
  captain: LolClashThirdPartyApiPlayer;
  members: LolClashThirdPartyApiPlayer[];
}
export interface LolClashTicketOffer {
  summonerId: number;
  amount: number;
  ticketType: TicketType;
  isAccepted: boolean;
}
export interface LolClashTournament {
  id: number;
  themeId: number;
  nameLocKey: string;
  nameLocKeySecondary: string;
  buyInOptions: number[];
  buyInOptionsPremium: number[];
  entryFee: number;
  rosterSize: number;
  allowRosterCreation: boolean;
  rosterCreateDeadline: number;
  scoutingDurationMs: number;
  startTimeMs: number;
  endTimeMs: number;
  lastThemeOfSeason: boolean;
  bracketSize: string;
  queueId: number;
  isSmsRestrictionEnabled: boolean;
  isHonorRestrictionEnabled: boolean;
  isRankedRestrictionEnabled: boolean;
  phases: LolClashTournamentPhase[];
  rewardConfig: ClashRewardConfigClient[];
  tierConfigs: TierConfig[];
  bracketFormationInitDelayMs: number;
  bracketFormationIntervalMs: number;
  status: TournamentStatusEnum;
  resumeTime: number;
  lft: boolean;
  maxInvites: number;
  maxSuggestionsPerPlayer: number;
}
export interface LolClashTournamentGameEnd {
  tournamentId: number;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  bracketId: number;
  oldBracket?: LolClashBracket;
}
export interface LolClashTournamentHistoryAndWinners {
  tournamentHistory: LolClashTournament[];
  tournamentWinners: LolClashTournamentWinnerHistory;
}
export type LolClashTournamentNotifyReason =
  | "ADD_PHASE"
  | "CANCEL_PERIOD"
  | "CANCEL_TOURNAMENT"
  | "NEW_TOURNAMENT"
  | "REVERT_PHASE"
  | "UPDATE_PHASE"
  | "UPDATE_STATUS"
  | "UPDATE_TOURNAMENT";
export interface LolClashTournamentPhase {
  id: number;
  tournamentId: number;
  period: number;
  lockinStartTime: number;
  scoutingStartTime: number;
  cancelled: boolean;
  limitTiers: number[];
  capacityStatus: CapacityEnum;
}
export interface LolClashTournamentPhaseProgressNotificationDTO {
  tournamentId: number;
  phaseId: number;
  capacityStatus: CapacityEnum;
}
export type LolClashTournamentState =
  | "IDLE"
  | "IN_GAME"
  | "LOCK_IN"
  | "RESULTS"
  | "SCOUTING"
  | "UPCOMING";
export interface LolClashTournamentStateInfo {
  tournamentId: number;
  state: LolClashTournamentState;
  currentPhaseId: number;
  nextPhaseId: number;
  nextStateChangeTime: number;
  numRemainingPeriods: number;
}
export interface LolClashTournamentSummary {
  state: LolClashTournamentState;
  tournamentId: number;
  rosterId: string;
  bracketId: number;
}
export interface LolClashTournamentUpdatedNotification {
  missingPlayerIds: number[];
  currentRetry: number;
  maxRetry: number;
  retrySeconds: number;
  notifyReason: LolClashRosterNotifyReason;
}
export interface LolClashTournamentUpdatedNotificationDTO {
  reason: LolClashTournamentNotifyReason;
  tournamentId: number;
  tournament?: TournamentDTO;
  relevantPhaseId?: number;
}
export interface LolClashTournamentWinnerHistory {
  tournamentId: number;
  winners: LolClashTournamentWinnerInfo[];
}
export interface LolClashTournamentWinnerInfo {
  rosterId: number;
  tier: number;
  shortName: string;
  name: string;
  logo: number;
  logoColor: number;
  createTime: number;
  averageWinDuration: number;
  playerIds: number[];
}
export interface LolClashUserResource {
  summonerId: number;
  lol: Map<string, string>;
}
export interface LolCollectionsAccountIdAndSummonerId {
  summonerId: number;
}
export interface LolCollectionsCollectionsChampionMastery {
  playerId: number;
  championId: number;
  championLevel: number;
  championPoints: number;
  formattedChampionPoints: string;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  tokensEarned: number;
  chestGranted: boolean;
  highestGrade: string;
  formattedMasteryGoal: string;
}
export interface LolCollectionsCollectionsChestEligibility {
  earnableChests: number;
  maximumChests: number;
  nextChestRechargeTime: number;
}
export interface LolCollectionsCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolCollectionsCollectionsRental;
}
export interface LolCollectionsCollectionsRental {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  rented: boolean;
}
export interface LolCollectionsCollectionsSummonerBackdrop {
  summonerId: number;
  accountId: number;
  profileIconId: number;
  championId: number;
  backdropType: LolCollectionsCollectionsSummonerBackdropType;
  backdropImage: string;
  backdropVideo: string;
  backdropMaskColor: string;
  puuid: string;
}
export type LolCollectionsCollectionsSummonerBackdropType =
  | "default"
  | "highest-mastery"
  | "specified-skin"
  | "summoner-icon";
export interface LolCollectionsCollectionsSummonerSpells {
  summonerId: number;
  spells: number[];
}
export interface LolCollectionsCollectionsTopChampionMasteries {
  summonerId: number;
  score: number;
  masteries: LolCollectionsCollectionsChampionMastery[];
}
export interface LolCollectionsCollectionsWardSkin {
  id: number;
  name: string;
  description: string;
  ownership: LolCollectionsCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}
export interface LolCollectionsCollectionsWardSkinList {
  wardSkinList: number[];
}
export interface LolCollectionsGameDataChampionMasteries {
  tree: LolCollectionsGameDataChampionMasteryTree;
}
export interface LolCollectionsGameDataChampionMasteryGroup {
  id: number;
  rows: LolCollectionsGameDataChampionMasteryRow[];
}
export interface LolCollectionsGameDataChampionMasteryRow {
  masteries: number[];
}
export interface LolCollectionsGameDataChampionMasteryTree {
  groups: LolCollectionsGameDataChampionMasteryGroup[];
}
export interface LolCollectionsGameDataChampionQuestSkin {
  id: number;
  name: string;
  splashPath: string;
  splashVideoPath: string;
}
export interface LolCollectionsGameDataChampionSkin {
  id: number;
  isBase: boolean;
  name: string;
  questSkinInfo: LolCollectionsGameDataQuestSkinInfo;
  splashPath: string;
  splashVideoPath?: string;
}
export interface LolCollectionsGameDataChampionSummary {
  id: number;
}
export interface LolCollectionsGameDataQuestSkinInfo {
  tiers: LolCollectionsGameDataChampionQuestSkin[];
}
export interface LolCollectionsGameDataSplashMetadata {
  CalculatedColor: string;
  OverrideColor: string;
}
export interface LolCollectionsInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolCollectionsItemOwnershipType;
}
export interface LolCollectionsInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  ownedQuantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  payload: object;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  lsb: boolean;
  wins: number;
}
export interface LolCollectionsInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolCollectionsItemOwnershipType;
  payload: object;
}
export type LolCollectionsItemOwnershipType =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolCollectionsLcdsDynamicClientConfig {
  DisabledChampions: object;
}
export interface LolCollectionsLoginSession {
  state: LolCollectionsLoginSessionStates;
  summonerId: number;
  connected: boolean;
}
export type LolCollectionsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolCollectionsNumberFormattingBehavior {
  digitsForThousandsSeperator: number;
  trimTrailingZerosAfterDecimal: boolean;
  westernNumberGrouping: boolean;
}
export interface LolCollectionsNumberFormattingData {
  decimalSeperator: string;
  thousandSeperator: string;
  thousandAbbreviation: string;
  tenThousandAbbreviation: string;
  millionAbbreviation: string;
  oneHundredMillionAbbreviation: string;
  billionAbbreviation: string;
  trillionAbbreviation: string;
  secondAbbreviation: string;
  minuteAbbreviation: string;
  hourAbbreviation: string;
  metersAbbreviation: string;
  kilometersAbbreviation: string;
  percentageFormat: string;
  numberFormattingBehavior: LolCollectionsNumberFormattingBehavior;
}
export interface LolCollectionsPlayerNotification {
  backgroundUrl: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolCollectionsSummoner {
  summonerId: number;
  accountId: number;
  summonerLevel: number;
  profileIconId: number;
  puuid: string;
}
export interface LolCollectionsSummonerProfile {
  backgroundSkinId?: number;
}
export interface LolCollectionsSummonerProfileUpdate {
  key: string;
  value: object;
}
export interface LolContentTargetingAccountIdAndSummonerId {
  summonerId: number;
}
export interface LolContentTargetingCollectionsChampionMastery {
  playerId: number;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
}
export interface LolContentTargetingContentTargetingFilterResponse {
  filters: string[];
}
export interface LolContentTargetingContentTargetingLocaleResponse {
  locale: string;
}
export interface LolContentTargetingDataModelResponse {
  responseCode: number;
  modelData: object;
}
export interface LolContentTargetingGameflowGameData {
  gameId: number;
  queue: LolContentTargetingQueue;
}
export type LolContentTargetingGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolContentTargetingGameflowSession {
  phase: LolContentTargetingGameflowPhase;
  gameData: LolContentTargetingGameflowGameData;
}
export interface LolContentTargetingGeoInfo {
  country: string;
  city: string;
  region: string;
}
export interface LolContentTargetingGeoInfoResponse {
  success: boolean;
  geoInfo: LolContentTargetingGeoInfo;
  errorMessage: string;
  isLatest: boolean;
  isInitialized: boolean;
}
export interface LolContentTargetingLoginSession {
  state: LolContentTargetingLoginSessionState;
  summonerId: number;
  puuid: string;
  idToken: string;
}
export type LolContentTargetingLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolContentTargetingMission {
  id: string;
  status: string;
  completedDate: number;
  internalName: string;
}
export interface LolContentTargetingPlatformConfig {
  Enabled: boolean;
  Mapping: string;
  LevelFilterEnabled: boolean;
  RankedFilterEnabled: boolean;
  LocationFiltersEnabled: boolean;
  RankFilterEnabled: boolean;
  ABTestFilterEnabled: boolean;
  ABTestFilterGroups: number;
  ABTestFilterSalt: number;
  EntitlementsFilterEnabled: boolean;
  MasteryFilterEnabled: boolean;
  MasteryFilterLevelThreshold: number;
  MasteryFilterDaysSinceLastPlayed: number;
  MasteryFilterChampionLimit: number;
  MainFilterEnabled: boolean;
  EntitlementsPrefix: string;
  TargetingAttributeStorageEnabled: boolean;
  TargetingAttributeStorageBaseUri: string;
  MissionsFilterEnabled: boolean;
  SummonerIconFilterEnabled: boolean;
  AsynchronousEventHandlerSetupDelayInSeconds: number;
  TasIngestionDelayInSeconds: number;
}
export interface LolContentTargetingQueue {
  id: number;
  mapId: number;
  gameMode: string;
  category: LolContentTargetingQueueGameCategory;
}
export type LolContentTargetingQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export type LolContentTargetingRankedDivision =
  | "I"
  | "II"
  | "III"
  | "IV"
  | "NA"
  | "V";
export type LolContentTargetingRankedQueue =
  | "NONE"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_SOLO_5x5"
  | "RANKED_TFT"
  | "RANKED_TFT_DOUBLE_UP"
  | "RANKED_TFT_PAIRS"
  | "RANKED_TFT_TURBO";
export interface LolContentTargetingRankedQueueStats {
  queueType: LolContentTargetingRankedQueue;
  tier: LolContentTargetingRankedTier;
  division: LolContentTargetingRankedDivision;
  isProvisional: boolean;
}
export interface LolContentTargetingRankedStats {
  queues: LolContentTargetingRankedQueueStats[];
  highestRankedEntry?: LolContentTargetingRankedQueueStats;
}
export type LolContentTargetingRankedTier =
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "NONE"
  | "PLATINUM"
  | "SILVER";
export interface LolContentTargetingRegionLocale {
  locale: string;
}
export interface LolContentTargetingSettingsResource {
  data: object;
}
export interface LolContentTargetingSummoner {
  summonerLevel: number;
  profileIconId: number;
}
export interface LolContentTargetingTargetingAttributes {
  result: Map<string, object>;
}
export interface LolContentTargetingToken {
  entitlements: string[];
}
export interface LolCosmeticsAccountSettingsCategoryDataResource {
  typeToLastOpenedDate: Map<string, number>;
}
export interface LolCosmeticsCapOffer {
  id: string;
  typeId: string;
  label: string;
  productId: string;
  merchantId: string;
  payload: object[];
  active: boolean;
  startDate: string;
  createdDate: string;
}
export interface LolCosmeticsCompanionsGroupViewModel {
  groupName: string;
  groupId: number;
  numOwned: number;
  numAvailable: number;
  items: LolCosmeticsCosmeticsCompanionViewModel[];
}
export interface LolCosmeticsCompanionsGroupedViewModel {
  selectedLoadoutItem: LolCosmeticsCosmeticsCompanionViewModel;
  defaultItemId: number;
  groups: LolCosmeticsCompanionsGroupViewModel[];
}
export interface LolCosmeticsCosmeticSettingsResource {
  data?: LolCosmeticsAccountSettingsCategoryDataResource;
  schemaVersion: number;
}
export interface LolCosmeticsCosmeticsCompanion {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  species: string;
  groupId: number;
  color: string;
  level: number;
  upgrades: string[];
}
export interface LolCosmeticsCosmeticsCompanionViewModel {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  isRecentItem: boolean;
  species: string;
  groupId: number;
  color: string;
  level: number;
  upgrades: LolCosmeticsCosmeticsCompanionViewModel[];
  offerData?: LolCosmeticsCapOffer;
  starShardsPrice: LolCosmeticsCosmeticsOfferPrice;
}
export interface LolCosmeticsCosmeticsOfferPrice {
  offerId: string;
  price: number;
}
export interface LolCosmeticsCosmeticsTFTDamageSkin {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  level: number;
  groupId: number;
  groupName: string;
  upgrades: string[];
}
export interface LolCosmeticsCosmeticsTFTDamageSkinViewModel {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  isRecentItem: boolean;
  level: number;
  groupId: number;
  groupName: string;
  upgrades: LolCosmeticsCosmeticsTFTDamageSkinViewModel[];
}
export interface LolCosmeticsCosmeticsTFTMapSkin {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  groupId: number;
  groupName: string;
}
export interface LolCosmeticsCosmeticsTFTMapSkinViewModel {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  isRecentItem: boolean;
  groupId: number;
  groupName: string;
}
export interface LolCosmeticsCosmeticsTFTPlaybook {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  iconPath: string;
  splashPath: string;
  earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
}
export interface LolCosmeticsCosmeticsTFTPlaybookAugment {
  name: string;
  description: string;
  iconPath: string;
  effectAmounts: LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount[];
}
export interface LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount {
  name: string;
  value: number;
  formatString: string;
}
export interface LolCosmeticsCosmeticsTFTPlaybookViewModel {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  isRecentItem: boolean;
  iconPath: string;
  splashPath: string;
  earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
}
export interface LolCosmeticsGameDataCompanion {
  contentId: string;
  itemId: number;
  name: string;
  loadoutsIcon: string;
  description: string;
  speciesName: string;
  speciesId: number;
  colorName: string;
  level: number;
  rarityValue: number;
  upgrades: string[];
  TFTOnly: boolean;
}
export interface LolCosmeticsGameDataTFTCosmeticsDefaults {
  playbook: object;
}
export interface LolCosmeticsGameDataTFTDamageSkin {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  groupId: number;
  groupName: string;
  rarityValue: number;
  level: number;
}
export interface LolCosmeticsGameDataTFTMapSkin {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  groupId: number;
  groupName: string;
  rarityValue: number;
}
export interface LolCosmeticsGameDataTFTPlaybook {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  translatedName: string;
  translatedDescription: string;
  loadoutsIcon: string;
  iconPath: string;
  splashPath: string;
  enabled: boolean;
  earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
  lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[];
}
export interface LolCosmeticsLoadout {
  id: string;
  name: string;
  scope: string;
  itemId: number;
  loadout: Map<string, LolCosmeticsLoadoutItem>;
}
export interface LolCosmeticsLoadoutItem {
  inventoryType: string;
  contentId: string;
  itemId: number;
}
export interface LolCosmeticsLoadoutUpdateDto {
  loadout: Map<string, LolCosmeticsLoadoutItem>;
}
export interface LolCosmeticsTFTDamageSkinGroupViewModel {
  groupName: string;
  groupId: number;
  numOwned: number;
  numAvailable: number;
  items: LolCosmeticsCosmeticsTFTDamageSkinViewModel[];
}
export interface LolCosmeticsTFTDamageSkinGroupedViewModel {
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTDamageSkinViewModel;
  defaultItemId: number;
  groups: LolCosmeticsTFTDamageSkinGroupViewModel[];
}
export interface LolCosmeticsTFTMapSkinGroupViewModel {
  groupName: string;
  groupId: number;
  numOwned: number;
  numAvailable: number;
  items: LolCosmeticsCosmeticsTFTMapSkinViewModel[];
}
export interface LolCosmeticsTFTMapSkinGroupedViewModel {
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTMapSkinViewModel;
  defaultItemId: number;
  groups: LolCosmeticsTFTMapSkinGroupViewModel[];
}
export interface LolCosmeticsTFTPlaybookGroupViewModel {
  groupName: string;
  groupId: number;
  numOwned: number;
  numAvailable: number;
  items: LolCosmeticsCosmeticsTFTPlaybookViewModel[];
}
export interface LolCosmeticsTFTPlaybookGroupedViewModel {
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTPlaybookViewModel;
  defaultItemId: number;
  groups: LolCosmeticsTFTPlaybookGroupViewModel[];
}
export interface LolCosmeticsTFTSettingsDataResource {
  iconOverride: string;
}
export interface LolCosmeticsTFTSettingsResource {
  data?: LolCosmeticsTFTSettingsDataResource;
  schemaVersion: number;
}
export interface LolCosmeticsUserResource {
  summonerId: number;
  lol: Map<string, string>;
}
export interface LolDiscordRpGameDataChampionSummary {
  id: number;
  name: string;
  alias: string;
}
export interface LolDiscordRpPartyPresenceData {
  partyId: string;
  queueId: number;
  summoners: number[];
  maxPlayers: number;
}
export interface LolDropsCapDropsDropTablePityInfo {
  pityLimit: number;
  chaseContentIds: string[];
}
export interface LolDropsCapDropsDropTableWithPityDTO {
  id: string;
  sourceId: string;
  productId: string;
  startDate: string;
  endDate: string;
  currencyId: string;
  rollOffer: string;
  pityInfo: LolDropsCapDropsDropTablePityInfo;
}
export interface LolDropsCapDropsOddsListEntryDTO {
  contentId: string;
  nodeId: string;
  odds: number;
}
export interface LolDropsCapDropsOddsTreeNodeDTO {
  nodeId: string;
  odds: number;
  children: LolDropsCapDropsOddsTreeNodeDTO[];
}
export interface LolDropsCapDropsPityCountDTO {
  dropTableId: string;
  count: number;
}
export interface LolEmailVerificationAccessToken {
  token: string;
  expiry: number;
}
export interface LolEmailVerificationEmailUpdate {
  email: string;
  password: string;
}
export interface LolEmailVerificationEmailVerificationSession {
  email: string;
  emailVerified: boolean;
  fatalError: boolean;
}
export interface LolEmailVerificationRegionLocale {
  region: string;
  locale: string;
  webRegion: string;
  webLanguage: string;
}
export interface LolEmailVerificationRemoteEmailVerificationSession {
  email: string;
  emailVerified: boolean;
}
export interface LolEmailVerificationValidationStatus {
  emailStatus: string;
}
export interface LolEndOfGameChampionMasteryGrade {
  playerId: number;
  championId: number;
  grade: string;
}
export interface LolEndOfGameChampionMasteryMini {
  playerId: number;
  championId: number;
  championLevel: number;
}
export interface LolEndOfGameChampionMasteryUpdate {
  id: string;
  gameId: number;
  playerId: number;
  championId: number;
  hasLeveledUp: boolean;
  level: number;
  pointsBeforeGame: number;
  pointsGained: number;
  pointsGainedIndividualContribution: number;
  bonusPointsGained: number;
  pointsSinceLastLevelBeforeGame: number;
  pointsUntilNextLevelBeforeGame: number;
  pointsUntilNextLevelAfterGame: number;
  tokensEarned: number;
  tokenEarnedAfterGame: boolean;
  grade: string;
  score: number;
  levelUpList: LolEndOfGameChampionMasteryMini[];
  memberGrades: LolEndOfGameChampionMasteryGrade[];
}
export interface LolEndOfGameEndOfGamePlayer {
  stats: object;
  items: number[];
  puuid: string;
  botPlayer: boolean;
  championId: number;
  gameId: number;
  leaver: boolean;
  leaves: number;
  level: number;
  losses: number;
  profileIconId: number;
  spell1Id: number;
  spell2Id: number;
  summonerName: string;
  teamId: number;
  wins: number;
  summonerId: number;
  selectedPosition: string;
  detectedTeamPosition: string;
  skinSplashPath: string;
  skinTilePath: string;
  skinEmblemPaths: string[];
  championName: string;
  championSquarePortraitPath: string;
  isLocalPlayer: boolean;
}
export interface LolEndOfGameEndOfGamePoints {
  pointChangeFromChampionsOwned: number;
  pointChangeFromGameplay: number;
  pointsUsed: number;
  previousPoints: number;
  pointsUntilNextReroll: number;
  rerollCount: number;
  totalPoints: number;
}
export interface LolEndOfGameEndOfGameStats {
  difficulty: string;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: string[];
  gameType: string;
  invalid: boolean;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolEndOfGameMucJwtDto;
  teams: LolEndOfGameEndOfGameTeam[];
  localPlayer: LolEndOfGameEndOfGamePlayer;
  myTeamStatus: string;
  leveledUp: boolean;
  newSpells: number[];
  previousLevel: number;
  rpEarned: number;
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  firstWinBonus: number;
  ipEarned: number;
  ipTotal: number;
  boostXpEarned: number;
  experienceEarned: number;
  experienceTotal: number;
  globalBoostXpEarned: number;
  loyaltyBoostXpEarned: number;
  xbgpBoostXpEarned: number;
  missionsXpEarned: number;
  previousXpTotal: number;
  nextLevelXp: number;
  currentLevel: number;
  preLevelUpExperienceTotal: number;
  preLevelUpNextLevelXp: number;
  timeUntilNextFirstWinBonus: number;
  causedEarlySurrender: boolean;
  earlySurrenderAccomplice: boolean;
  teamEarlySurrendered: boolean;
  gameEndedInEarlySurrender: boolean;
  rerollData: LolEndOfGameEndOfGamePoints;
  teamBoost?: LolEndOfGameEndOfGameTeamBoost;
}
export interface LolEndOfGameEndOfGameTeam {
  stats: object;
  players: LolEndOfGameEndOfGamePlayer[];
  memberStatusString: string;
  name: string;
  tag: string;
  fullId: string;
  teamId: number;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
}
export interface LolEndOfGameEndOfGameTeamBoost {
  summonerName: string;
  skinUnlockMode: string;
  price: number;
  ipReward: number;
  ipRewardForPurchaser: number;
  availableSkins: number[];
  unlocked: boolean;
}
export interface LolEndOfGameGameClientEndOfGame {
  gameClientEOG: LolEndOfGameGameClientEndOfGameStats;
}
export interface LolEndOfGameGameClientEndOfGameStats {
  gameId: number;
  gameMode: string;
  statsBlock: object;
  queueId: number;
  queueType: string;
  isRanked: boolean;
}
export interface LolEndOfGameGameDataChampion {
  id: number;
  skins: LolEndOfGameGameDataChampionSkin[];
}
export interface LolEndOfGameGameDataChampionQuestSkin {
  id: number;
  splashPath: string;
  tilePath: string;
}
export interface LolEndOfGameGameDataChampionSkin {
  id: number;
  splashPath: string;
  tilePath: string;
  chromas: LolEndOfGameGameDataSkinChroma[];
  questSkinInfo: LolEndOfGameGameDataQuestSkinInfo;
}
export interface LolEndOfGameGameDataChampionSummary {
  id: number;
  alias: string;
  name: string;
  squarePortraitPath: string;
}
export interface LolEndOfGameGameDataCompanion {
  contentId: string;
  loadoutsIcon: string;
  speciesName: string;
  colorName: string;
}
export interface LolEndOfGameGameDataQuestSkinInfo {
  tiers: LolEndOfGameGameDataChampionQuestSkin[];
}
export interface LolEndOfGameGameDataSkinChroma {
  id: number;
}
export interface LolEndOfGameGameDataTftChampion {
  path: string;
  character_id: string;
  rarity: number;
  display_name: string;
  squareIconPath: string;
  traits: LolEndOfGameGameDataTftTrait[];
}
export interface LolEndOfGameGameDataTftItem {
  name: string;
  id: number;
  loadoutsIcon: string;
  nameId: string;
}
export interface LolEndOfGameGameDataTftPlaybook {
  itemId: number;
  name: string;
  translatedName: string;
  iconPath: string;
  enabled: boolean;
}
export interface LolEndOfGameGameDataTftTrait {
  id: string;
  name: string;
}
export interface LolEndOfGameGameflowAvailability {
  state: string;
}
export interface LolEndOfGameGameflowClient {
  observerServerIp: string;
  observerServerPort: number;
  running: boolean;
}
export interface LolEndOfGameGameflowGameData {
  gameId: number;
  queue: LolEndOfGameQueue;
}
export type LolEndOfGameGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolEndOfGameGameflowSession {
  phase: LolEndOfGameGameflowPhase;
  gameClient: LolEndOfGameGameflowClient;
  gameData: LolEndOfGameGameflowGameData;
}
export interface LolEndOfGameLobbyInvitation {
  state: string;
}
export interface LolEndOfGameLoginDataPacket {
  platformId: string;
  simpleMessages: LolEndOfGameSimpleMessage[];
}
export interface LolEndOfGameLoginSession {
  state: LolEndOfGameLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolEndOfGameLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolEndOfGameMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolEndOfGamePlayerReport {
  offenderPuuid: string;
  offenderSummonerId: number;
  gameId: number;
  categories: string[];
  comment: string;
}
export interface LolEndOfGameQueue {
  id: number;
  type: string;
  isRanked: boolean;
}
export interface LolEndOfGameRerollDataBagForClientV1 {
  pointsGainedLastGame: number;
  pointsUntilNextReroll: number;
  rerollCount: number;
  totalPoints: number;
  maximumRerolls: number;
  pointCostOfReroll: number;
}
export interface LolEndOfGameSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolEndOfGameSummoner {
  summonerId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  puuid: string;
}
export interface LolEndOfGameTFTEndOfGameCompanionViewModel {
  speciesName: string;
  colorName: string;
  icon: string;
}
export interface LolEndOfGameTFTEndOfGameItemViewModel {
  name: string;
  icon: string;
  id: number;
  nameId: string;
}
export interface LolEndOfGameTFTEndOfGamePieceViewModel {
  name: string;
  icon: string;
  level: number;
  price: number;
  items: LolEndOfGameTFTEndOfGameItemViewModel[];
  traits: LolEndOfGameTFTEndOfGameTraitViewModel[];
}
export interface LolEndOfGameTFTEndOfGamePlaybookViewModel {
  itemId: number;
  name: string;
  icon: string;
}
export interface LolEndOfGameTFTEndOfGamePlayerViewModel {
  summonerId: number;
  summonerName: string;
  iconId: number;
  puuid: string;
  ffaStanding: number;
  health: number;
  rank: number;
  isLocalPlayer: boolean;
  partnerGroupId: number;
  boardPieces: LolEndOfGameTFTEndOfGamePieceViewModel[];
  augments: LolEndOfGameTFTEndOfGameItemViewModel[];
  companion: LolEndOfGameTFTEndOfGameCompanionViewModel;
  playbook: LolEndOfGameTFTEndOfGamePlaybookViewModel;
}
export interface LolEndOfGameTFTEndOfGameTraitViewModel {
  id: string;
  name: string;
}
export interface LolEndOfGameTFTEndOfGameViewModel {
  players: LolEndOfGameTFTEndOfGamePlayerViewModel[];
  localPlayer?: LolEndOfGameTFTEndOfGamePlayerViewModel;
  gameLength: number;
  gameId: number;
  queueId: number;
  queueType: string;
  isRanked: boolean;
}
export interface LolEsportStreamNotificationsESportStreamNotificationsConfig {
  notificationsEnabled: boolean;
  notificationsServiceEndpoint: string;
  notificationsStreamURL: string;
  notificationsStreamGroupSlug: string;
  notificationsAssetMagickURL: string;
  useServiceEndpointV2: boolean;
  notificationsServiceEndpointV2: string;
  notificationsShortPollMinutes: number;
  notificationsLongPollMinutes: number;
  beappFailureLongPollMinutes: number;
}
export interface LolEsportStreamNotificationsESportsAPI_streamgroups {
  id: number;
  slug: string;
  title: string;
  live: boolean;
  content: string;
}
export interface LolEsportStreamNotificationsESportsAPI_streamgroups_root {
  streamgroups: LolEsportStreamNotificationsESportsAPI_streamgroups[];
  highlanderTournaments: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments[];
  teams: LolEsportStreamNotificationsEsportsAPI_teams[];
}
export interface LolEsportStreamNotificationsESportsLiveStreams {
  liveStreams: LolEsportStreamNotificationsESportsStreams[];
}
export interface LolEsportStreamNotificationsESportsStreams {
  title: string;
  tournamentDescription: string;
  teamAGuid: string;
  teamAId: number;
  teamBGuid: string;
  teamBId: number;
  teamAName: string;
  teamBName: string;
  teamAAcronym: string;
  teamBAcronym: string;
  teamALogoUrl: string;
  teamBLogoUrl: string;
}
export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments {
  id: string;
  description: string;
  title: string;
  brackets: Map<
    string,
    LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets
  >;
  rosters: Map<
    string,
    LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters
  >;
}
export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets {
  id: string;
  matches: Map<
    string,
    LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches
  >;
}
export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches {
  id: string;
  input: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster[];
}
export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster {
  roster: string;
}
export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters {
  id: string;
  name: string;
  team: number;
}
export interface LolEsportStreamNotificationsEsportsAPI_teams {
  id: number;
  guid: string;
  slug: string;
  name: string;
  logoUrl: string;
  acronym: string;
}
export type LolEsportStreamNotificationsGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolEsportStreamNotificationsGameflowSession {
  phase: LolEsportStreamNotificationsGameflowPhase;
}
export interface LolEsportStreamNotificationsLiveMatch {
  id: string;
  streamGroup: string;
  title: string;
  tournamentDescription: string;
  teams: LolEsportStreamNotificationsLiveMatchTeam[];
}
export interface LolEsportStreamNotificationsLiveMatchTeam {
  guid: string;
  name: string;
  acronym: string;
  logoUrl: string;
}
export interface LolEsportStreamNotificationsPlayerNotificationResource {
  backgroundUrl: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolEventShopAccessTokenResource {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolEventShopBalance {
  currencyType: string;
  amount: number;
}
export interface LolEventShopBaseSkinLineDto {
  items: LolEventShopSkinLineItemDto[];
  localizedName: string;
  skinLineDescriptions: LolEventShopSkinLineDescriptionDto[];
  pricingOptions: LolEventShopPriceOptionDto[];
  splashPath: string;
  uncenteredSplashPath: string;
  collectionCardPath: string;
  collectionDescription: string;
  tilePath: string;
}
export interface LolEventShopBundleOfferUIData {
  details: LolEventShopBundledItemUIData;
  initialPrice: number;
  finalPrice: number;
  futureBalance: number;
  isPurchasable: boolean;
  discountPercentage: number;
  bundledItems: LolEventShopBundledItemUIData[];
}
export interface LolEventShopBundledItemPricingInfo {
  discountPrices: LolEventShopDiscountPricingInfo[];
  inventoryType: string;
  itemId: number;
  quantity: number;
}
export interface LolEventShopBundledItemUIData {
  name: string;
  itemId: number;
  description: string;
  inventoryType: string;
  splashImage: string;
  owned: boolean;
}
export interface LolEventShopCapOffer {
  id: string;
  typeId: string;
  label: string;
  productId: string;
  merchantId: string;
  payload: LolEventShopCapOfferPayloadEntry[];
  active: boolean;
  startDate: string;
  createdDate: string;
}
export interface LolEventShopCapOfferPayloadEntry {
  itemPriceMap: Map<string, number>;
  itemInstanceId: string;
  fulfillmentTypeId: string;
  inventoryTypeUUID: string;
}
export interface LolEventShopCapOrdersDataDto {
  id: string;
  subOrders: LolEventShopCapOrdersSubOrderDto[];
  purchaser: LolEventShopCapOrdersTypedIdentifierDto;
  location: string;
  source: string;
}
export interface LolEventShopCapOrdersMetaDto {
  xid: string;
}
export interface LolEventShopCapOrdersOfferContextDto {
  quantity: number;
  paymentOption: string;
}
export interface LolEventShopCapOrdersOfferDto {
  id: string;
  productId: string;
}
export interface LolEventShopCapOrdersOrderDto {
  data: LolEventShopCapOrdersDataDto;
  meta: LolEventShopCapOrdersMetaDto;
}
export interface LolEventShopCapOrdersSubOrderDto {
  recipientId: string;
  offerContext: LolEventShopCapOrdersOfferContextDto;
  offer: LolEventShopCapOrdersOfferDto;
}
export interface LolEventShopCapOrdersTypedIdentifierDto {
  id: string;
  typeId: string;
}
export interface LolEventShopCatalogEntry {
  contentId: string;
  itemId: number;
  offerId: string;
  typeId: string;
}
export interface LolEventShopCatalogItem {
  itemId: number;
  inventoryType: string;
  itemInstanceId?: string;
}
export interface LolEventShopCatalogPluginItem {
  itemId: number;
  itemInstanceId: string;
  owned: boolean;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  subTitle: string;
  description: string;
  imagePath: string;
  purchaseDate: number;
  releaseDate: number;
  inactiveDate: number;
  prices: LolEventShopCatalogPluginPrice[];
  tags?: string[];
  metadata?: LolEventShopItemMetadataEntry[];
  questSkinInfo?: LolEventShopSkinLineInfo;
  active: boolean;
  ownershipType?: LolEventShopInventoryOwnership;
}
export interface LolEventShopCatalogPluginItemAssets {
  splashPath: string;
  iconPath: string;
  tilePath: string;
  emblems: LolEventShopChampionSkinEmblem[];
  colors: string[];
}
export interface LolEventShopCatalogPluginItemWithDetails {
  item: LolEventShopCatalogPluginItem;
  quantity: number;
  requiredItems?: LolEventShopCatalogPluginItemWithDetails[];
  bundledItems?: LolEventShopCatalogPluginItemWithDetails[];
  minimumBundlePrices?: LolEventShopCatalogPluginPrice[];
  bundledDiscountPrices?: LolEventShopCatalogPluginPrice[];
  assets: LolEventShopCatalogPluginItemAssets;
}
export interface LolEventShopCatalogPluginPrice {
  currency: string;
  cost: number;
  costType?: string;
  sale?: LolEventShopCatalogPluginSale;
}
export interface LolEventShopCatalogPluginSale {
  startDate: string;
  endDate: string;
  discount?: number;
  cost: number;
}
export interface LolEventShopCategoryOffersUIData {
  category: LolEventShopOfferCategory;
  categoryIconPath: string;
  offers: LolEventShopOfferUIData[];
}
export type LolEventShopCelebrationType = "FULLSCREEN" | "NONE" | "TOAST";
export interface LolEventShopCelebrationUIData {
  rewardTrackItems: LolEventShopRewardTrackItem[];
}
export interface LolEventShopChampionSkinEmblem {
  name: string;
  emblemPath: LolEventShopChampionSkinEmblemPath;
  emblemPosition: LolEventShopChampionSkinEmblemPosition;
}
export interface LolEventShopChampionSkinEmblemPath {
  large: string;
  small: string;
}
export interface LolEventShopChampionSkinEmblemPosition {
  vertical: string;
  horizontal: string;
}
export interface LolEventShopClaimSelectUIData {
  selectedRewardTrackItem: LolEventShopRewardTrackItem;
  unclaimedRewardCount: number;
}
export interface LolEventShopClientCacheClearMessageDTO {
  regions: string[];
  clearAll: boolean;
  inventoryTypes: string[];
}
export interface LolEventShopClientConfigContentDrop {
  Patch: string;
  ActivationDate: string;
}
export interface LolEventShopContentDrop {
  patch: string;
  activationDate: string;
  offers: LolEventShopOffer[];
}
export interface LolEventShopCounter {
  id: string;
  name: string;
  groupId: string;
  direction: string;
  startValue: number;
}
export interface LolEventShopCounterInstance {
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  counterValue: number;
}
export interface LolEventShopCurrencyDTO {
  amount: number;
  subCurrencies: Map<string, number>;
}
export interface LolEventShopDiscountPricingInfo {
  cost: number;
  costType: string;
  currency: string;
  discount: number;
}
export interface LolEventShopEndOfGameXp {
  PER_WIN: number;
}
export interface LolEventShopEndOfGameXpNotification {
  xp: LolEventShopEndOfGameXp;
}
export interface LolEventShopEntityInstance {
  groupId: string;
  counters: LolEventShopCounterInstance[];
  milestones: LolEventShopMilestoneInstance[];
}
export interface LolEventShopEventBackgroundUIData {
  backgroundImagePath: string;
}
export interface LolEventShopEventDetailsUIData {
  eventIconPath: string;
  eventName: string;
  progressEndDate: string;
  shopEndDate: string;
  helpModalImagePath: string;
}
export interface LolEventShopEventShop {
  eventId: string;
  localizedName: string;
  backgroundImage: string;
  navbarIconImage: string;
  headerIconImage: string;
  startDate: string;
  progressEndDate: string;
  shopEndDate: string;
  localizedUpsellTitle: string;
  localizedUpsellTooltipTitle: string;
  localizedUpsellTooltipDescription: string;
  localizedUpsellButtonText: string;
  upsellBackgroundImageUrl: string;
  upsellTooltipBackgroundImageUrl: string;
  helpModalImage: string;
  eventPassBundlesCatalogEntry: LolEventShopCatalogEntry[];
  tokenShop: LolEventShopTokenShop;
  rewardTrack: LolEventShopRewardTrack;
}
export interface LolEventShopEventShopClientConfig {
  Enabled: boolean;
  ActiveEventId: string;
  StartDate: string;
  ProgressEndDate: string;
  ShopEndDate: string;
  DisabledOfferIds: string[];
  ContentDrops: LolEventShopClientConfigContentDrop[];
  ActivationSpreadSeconds: number;
  FirstActivationThresholdSeconds: number;
}
export interface LolEventShopEventShopError {
  errorMessage: string;
  errorId: string;
}
export interface LolEventShopEventShopInfoUIData {
  eventId: string;
  eventName: string;
  eventIcon: string;
  eventTokenImage: string;
  currentTokenBalance?: number;
  lockedTokenCount?: number;
  unclaimedRewardCount?: number;
  isPassPurchased: boolean;
  isEventActive: boolean;
  showPip: boolean;
  eventPassBundles: LolEventShopCatalogEntry[];
  tokenBundles: LolEventShopCatalogEntry[];
}
export type LolEventShopExternalCatalogInventoryOwnership =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolEventShopExternalCatalogItemCost {
  currency: string;
  cost: number;
  discount?: number;
}
export interface LolEventShopExternalCatalogItemKey {
  inventoryType: string;
  itemId: number;
}
export interface LolEventShopExternalCatalogPluginItem {
  itemId: number;
  itemInstanceId: string;
  owned: boolean;
  ownershipType?: LolEventShopExternalCatalogInventoryOwnership;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  subTitle: string;
  description: string;
  imagePath: string;
  purchaseDate: number;
  releaseDate: number;
  inactiveDate: number;
  prices: LolEventShopExternalCatalogPluginPrice[];
  tags?: string[];
  active: boolean;
  sale?: LolEventShopExternalCatalogSale;
  offerId?: string;
}
export interface LolEventShopExternalCatalogPluginItemAssets {
  splashPath: string;
  iconPath: string;
  tilePath: string;
  colors: string[];
}
export interface LolEventShopExternalCatalogPluginItemWithDetails {
  item: LolEventShopExternalCatalogPluginItem;
  quantity: number;
  requiredItems?: LolEventShopExternalCatalogPluginItemWithDetails[];
  bundledItems?: LolEventShopExternalCatalogPluginItemWithDetails[];
  minimumBundlePrices?: LolEventShopExternalCatalogPluginPrice[];
  bundledDiscountPrices?: LolEventShopExternalCatalogPluginPrice[];
  metadata: LolEventShopExternalItemMetadataEntry[];
}
export interface LolEventShopExternalCatalogPluginPrice {
  currency: string;
  cost: number;
  costType?: string;
}
export interface LolEventShopExternalCatalogPluginRetailDiscount {
  startDate: string;
  endDate: string;
  discount?: number;
  cost: number;
}
export interface LolEventShopExternalCatalogSale {
  startDate: string;
  endDate: string;
  prices: LolEventShopExternalCatalogItemCost[];
}
export interface LolEventShopExternalItemMetadataEntry {
  type: string;
  value: string;
}
export type LolEventShopGrantStatus =
  | "FAILED"
  | "FULFILLED"
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION";
export interface LolEventShopGrantorDescription {
  appName: string;
  entityId: string;
}
export interface LolEventShopGroup {
  id: string;
  productId: string;
  name: string;
  repeat: LolEventShopRepeat;
  counters: LolEventShopCounter[];
  milestones: LolEventShopMilestone[];
}
export interface LolEventShopInventoryCacheEntry {
  signedInventoryJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolEventShopInventoryDTO {
  puuid: string;
  accountId: number;
  summonerId: number;
  items: Map<string, object>;
  expires: string;
  itemsJwt: string;
}
export interface LolEventShopInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolEventShopItemOwnershipType;
  expirationDate: string;
  wins: number;
}
export interface LolEventShopInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  ownedQuantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  payload: object;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  lsb: boolean;
  wins: number;
}
export interface LolEventShopInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolEventShopItemOwnershipType;
  expirationDate: string;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  owned: boolean;
  wins: number;
  payload: object;
}
export interface LolEventShopInventoryNotification {
  id: number;
  itemId: number;
  inventoryType: string;
  type: string;
  acknowledged: boolean;
}
export type LolEventShopInventoryOwnership =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolEventShopInventoryResponseDTO {
  data: LolEventShopInventoryDTO;
}
export interface LolEventShopItem {
  itemId: string;
  inventoryType: string;
  price: number;
}
export interface LolEventShopItemChoiceDetails {
  item: LolEventShopCatalogPluginItem;
  backgroundImage: string;
  contents: LolEventShopItemDetails[];
  discount: string;
  fullPrice: number;
  displayType: string;
  purchaseOptions: LolEventShopPurchaseOption[];
}
export interface LolEventShopItemChoices {
  choices: LolEventShopItemChoiceDetails[];
  validationErrors: LolEventShopValidationErrorEntry[];
}
export interface LolEventShopItemCost {
  currency: string;
  cost: number;
  discount?: number;
}
export interface LolEventShopItemDefinition {
  itemId: number;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  description: string;
  subTitle: string;
  owned: boolean;
  assets: LolEventShopCatalogPluginItemAssets;
  tags: string[];
  metadata: LolEventShopItemMetadataEntry[];
  bundledItemPrice?: LolEventShopBundledItemPricingInfo;
  loyaltyUnlocked: boolean;
}
export interface LolEventShopItemDetails {
  title: string;
  subTitle: string;
  description: string;
  iconUrl: string;
}
export interface LolEventShopItemKey {
  inventoryType: string;
  itemId: number;
}
export interface LolEventShopItemMetadataEntry {
  type: string;
  value: string;
}
export interface LolEventShopItemOrderDTO {
  inventoryType: string;
  itemId: number;
  quantity: number;
  rpCost: number;
}
export interface LolEventShopItemOwnership {
  itemKey: LolEventShopItemKey;
  quantity: number;
}
export type LolEventShopItemOwnershipType =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolEventShopItemPrice {
  currencyType: string;
  price: number;
  purchasable: boolean;
}
export interface LolEventShopItemSale {
  startDate: string;
  endDate: string;
  discount?: number;
}
export interface LolEventShopItemUIData {
  itemId: string;
  inventoryType: string;
  price: number;
}
export interface LolEventShopLargeSelectionDisplayUIData {
  selectedRewardTrackItem: LolEventShopRewardTrackItem;
}
export interface LolEventShopLevelBoostPurchaseUIData {
  offerId: string;
  rewardTrackItems: LolEventShopRewardTrackItem[];
}
export interface LolEventShopLoginSession {
  puuid?: string;
  state: LolEventShopLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
}
export type LolEventShopLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolEventShopLoyaltyRewards {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: Map<string, number>;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export interface LolEventShopLoyaltyRewardsSimplified {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: number;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export type LolEventShopLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolEventShopLoyaltyStatusNotification {
  status: LolEventShopLoyaltyStatus;
  rewards: LolEventShopLoyaltyRewardsSimplified;
  reloadInventory: boolean;
}
export interface LolEventShopMilestone {
  id: string;
  name: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  properties: Map<string, string>;
}
export interface LolEventShopMilestoneInstance {
  milestoneId: string;
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  repeatSequence: number;
  triggered: boolean;
}
export interface LolEventShopNavigationButtonUIData {
  activeEventId: string;
  showPip: boolean;
  showGlow: boolean;
  iconPath: string;
}
export interface LolEventShopOffer {
  id: string;
  localizedTitle: string;
  localizedDescription: string;
  image: string;
  promotionType: LolEventShopOfferPromotionType;
  offerCategory: LolEventShopOfferCategory;
  items: LolEventShopItem[];
}
export type LolEventShopOfferCategory =
  | "Borders"
  | "Chromas"
  | "Currencies"
  | "Featured"
  | "Loot"
  | "Skins"
  | "Tft";
export type LolEventShopOfferPromotionType =
  | "kFeatured"
  | "kFeaturedHighlighted"
  | "kNone";
export type LolEventShopOfferStates =
  | "kAvailable"
  | "kOwned"
  | "kPurchasing"
  | "kUnavailable"
  | "kUnrevealed";
export interface LolEventShopOfferUIData {
  id: string;
  localizedTitle: string;
  localizedDescription: string;
  image: string;
  highlighted: boolean;
  offerState: LolEventShopOfferStates;
  price: number;
  items: LolEventShopItemUIData[];
}
export interface LolEventShopOrderNotificationResource {
  eventTypeId: string;
  eventType: string;
  status: string;
}
export type LolEventShopPassOwnershipTypes = "Purchased" | "Unowned";
export interface LolEventShopPlayerNotification {
  critical: boolean;
  detailKey: string;
  source: string;
  state: string;
  titleKey: string;
  type: string;
  iconUrl: string;
}
export interface LolEventShopPlayerSettingsData {
  lastTimeSeen: string;
  lastSeenTokenBalance: number;
  lastSeenTokenShopOffersVersion: number;
}
export interface LolEventShopPriceDetail {
  itemKey: LolEventShopItemKey;
  price: LolEventShopItemPrice;
}
export interface LolEventShopPriceOptionDto {
  price: number;
  currencyType: string;
  currencyPaymentOption?: string;
  currencyName?: string;
  currencyImagePath?: string;
}
export interface LolEventShopProgressInfoUIData {
  tokenImage: string;
  passPurchased: boolean;
  eventPassBundlesCatalogEntry: LolEventShopCatalogEntry[];
}
export interface LolEventShopPurchasableItem {
  item: LolEventShopItemDefinition;
  dependencies: LolEventShopItemDefinition[];
  bundledItems: LolEventShopItemDefinition[];
  sale?: LolEventShopItemSale;
  purchaseOptions: LolEventShopPurchaseOption[];
  validationErrors: LolEventShopValidationErrorEntry[];
}
export interface LolEventShopPurchaseItem {
  itemKey: LolEventShopItemKey;
  quantity: number;
  source: string;
  purchaseCurrencyInfo: LolEventShopItemPrice;
}
export type LolEventShopPurchaseOfferOrderStates =
  | "FAIL"
  | "IN_PROGRESS"
  | "NOT_STARTED"
  | "SUCCESS";
export interface LolEventShopPurchaseOfferOrderStatus {
  orderState: LolEventShopPurchaseOfferOrderStates;
  message: string;
}
export interface LolEventShopPurchaseOfferOrderStatuses {
  statuses: Map<string, LolEventShopPurchaseOfferOrderStatus>;
}
export interface LolEventShopPurchaseOfferRequest {
  offerId: string;
}
export interface LolEventShopPurchaseOfferRequestV3 {
  offerId: string;
  currencyType: string;
  quantity: number;
  price: number;
}
export interface LolEventShopPurchaseOfferResponseV3 {
  legacy: boolean;
  orderDto?: LolEventShopCapOrdersOrderDto;
}
export interface LolEventShopPurchaseOption {
  priceDetails: LolEventShopPriceDetail[];
}
export interface LolEventShopPurchaseOrderRequestDTO {
  accountId: number;
  items: LolEventShopItemOrderDTO[];
}
export interface LolEventShopPurchaseOrderResponseDTO {
  rpBalance: number;
  ipBalance: number;
  transactions: LolEventShopTransactionResponseDTO[];
}
export interface LolEventShopPurchaseRequest {
  items: LolEventShopPurchaseItem[];
}
export interface LolEventShopPurchaseResponse {
  items: LolEventShopPurchaseItem[];
  transactions: LolEventShopTransaction[];
  useRMSConfirmation: boolean;
}
export interface LolEventShopPurchaseWidgetConfig {
  enabled: boolean;
  nonRefundableDisclaimerEnabled: boolean;
  alwaysShowPurchaseDisclaimer: boolean;
}
export interface LolEventShopRMSPayload {
  productId: string;
  affinities: string[];
}
export interface LolEventShopRegionLocale {
  region: string;
  locale: string;
}
export interface LolEventShopRepeat {
  count: number;
  scope: number;
  multiplier: number;
}
export interface LolEventShopRequestDTOSelectionRequestDTO {
  data: LolEventShopSelectionRequestDTO;
  metadata: LolEventShopRequestMetadataDTO;
}
export interface LolEventShopRequestDTOVectorSelectionRequestDTO {
  data: LolEventShopSelectionRequestDTO[];
  metadata: LolEventShopRequestMetadataDTO;
}
export interface LolEventShopRequestMetadataDTO {
  transactionId?: string;
}
export interface LolEventShopResponseDTOSvcRewardGrant {
  data: LolEventShopSvcRewardGrant;
  metadata: LolEventShopResponseMetadataDTO;
}
export interface LolEventShopResponseDTOMapRewardGroupIdSelectGrantStatus {
  data: Map<string, LolEventShopSelectGrantStatusResponse>;
  metadata: LolEventShopResponseMetadataDTO;
}
export interface LolEventShopResponseDTOVectorSvcRewardGrant {
  data: LolEventShopSvcRewardGrant[];
  metadata: LolEventShopResponseMetadataDTO;
}
export interface LolEventShopResponseDTOVectorSvcRewardGroup {
  data: LolEventShopSvcRewardGroup[];
  metadata: LolEventShopResponseMetadataDTO;
}
export interface LolEventShopResponseMetadataDTO {}
export interface LolEventShopReward {
  id: string;
  itemId: string;
  itemType: string;
  quantity: number;
  fulfillmentSource: string;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolEventShopRewardChoiceUIData {
  rewardTrackItems: LolEventShopRewardTrackItem[];
}
export interface LolEventShopRewardGrant {
  info: LolEventShopSvcRewardGrant;
  rewardGroup: LolEventShopSvcRewardGroup;
}
export type LolEventShopRewardStatus = "FAILED" | "FULFILLED" | "PENDING";
export type LolEventShopRewardStrategy = "ALL" | "RANDOM" | "SELECTION";
export interface LolEventShopRewardTrack {
  trackConfig: LolEventShopRewardTrackConfiguration;
}
export interface LolEventShopRewardTrackConfiguration {
  id: string;
  premiumEntitlementId: string;
}
export interface LolEventShopRewardTrackItem {
  state: LolEventShopRewardTrackItemStates;
  rewardOptions: LolEventShopRewardTrackItemOption[];
  rewardTags: LolEventShopRewardTrackItemTag[];
  progressRequired: number;
  threshold: string;
}
export type LolEventShopRewardTrackItemHeaderType = "FREE" | "NONE" | "PREMIUM";
export interface LolEventShopRewardTrackItemOption {
  state: LolEventShopRewardTrackItemStates;
  thumbIconPath: string;
  largeDisplayImagePath: string;
  selected: boolean;
  overrideFooter: string;
  headerType: LolEventShopRewardTrackItemHeaderType;
  rewardName: string;
  rewardDescription: string;
}
export type LolEventShopRewardTrackItemStates =
  | "Locked"
  | "Selected"
  | "Unlocked"
  | "Unselected";
export type LolEventShopRewardTrackItemTag =
  | "Choice"
  | "Free"
  | "Instant"
  | "Multiple"
  | "Rare";
export interface LolEventShopRewardTrackProgress {
  level: number;
  levelProgress: number;
  futureLevelProgress: number;
  passProgress: number;
  currentLevelXP: number;
  totalLevelXP: number;
  iteration: number;
}
export interface LolEventShopRewardTrackXP {
  currentLevel: number;
  currentLevelXP: number;
  totalLevelXP: number;
  isBonusPhase: boolean;
  iteration: number;
}
export interface LolEventShopRewardsConfig {
  GrantFiltering: boolean;
}
export interface LolEventShopRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolEventShopRmsEntitlementPayload {
  itemId: string;
  itemTypeId: string;
  entitlementTypeId: string;
  resourceOperation: string;
}
export interface LolEventShopRmsStoreEntitlementItem {
  inventoryType: string;
  itemId: string;
}
export interface LolEventShopRmsStoreEntitlementPayload {
  transactionId: string;
  items: LolEventShopRmsStoreEntitlementItem[];
}
export interface LolEventShopRmsWalletPayload {}
export interface LolEventShopRmsXboxSubscriptionChange {
  puuid: string;
  subscriptionId: string;
  active: string;
  identityProvider: string[];
}
export interface LolEventShopSale {
  startDate: string;
  endDate: string;
  prices: LolEventShopItemCost[];
}
export type LolEventShopSelectGrantStatusResponse = "FAILED" | "SELECTED";
export interface LolEventShopSelectionRequestDTO {
  grantId: string;
  rewardGroupId: string;
  selections: string[];
}
export interface LolEventShopSelectionStrategyConfig {
  minSelectionsAllowed: number;
  maxSelectionsAllowed: number;
}
export interface LolEventShopSettingsResource {
  data: LolEventShopPlayerSettingsData;
  schemaVersion: number;
}
export interface LolEventShopSimpleInventoryDTO {
  items: Map<string, object>;
  itemsJwt: string;
  expires: string;
}
export interface LolEventShopSimpleInventoryResponseDTO {
  data: LolEventShopSimpleInventoryDTO;
}
export interface LolEventShopSkinLineDescriptionDto {
  title: string;
  description: string;
  iconImagePath: string;
}
export interface LolEventShopSkinLineDescriptionInfo {
  title: string;
  description: string;
  iconPath: string;
}
export interface LolEventShopSkinLineInfo {
  name: string;
  descriptionInfo: LolEventShopSkinLineDescriptionInfo[];
  splashPath: string;
  tilePath: string;
  collectionCardPath: string;
  uncenteredSplashPath: string;
  collectionDescription: string;
  tiers: LolEventShopSkinLineTier[];
}
export interface LolEventShopSkinLineItemDto {
  thumbnailImagePath: string;
  largeImagePath?: string;
  localizedLongName: string;
  localizedShortName: string;
  largeVideoPath?: string;
}
export interface LolEventShopSkinLineTier {
  id: number;
  name: string;
  stage: number;
  description?: string;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  shortName: string;
  splashVideoPath?: string;
  collectionSplashVideoPath?: string;
}
export interface LolEventShopSummonerIcon {
  itemId: number;
}
export interface LolEventShopSvcRewardGrant {
  id: string;
  granteeId: string;
  rewardGroupId: string;
  dateCreated: string;
  status: LolEventShopGrantStatus;
  grantElements: LolEventShopSvcRewardGrantElement[];
  selectedIds: string[];
  viewed: boolean;
  grantorDescription: LolEventShopGrantorDescription;
  messageParameters: Map<string, object>;
}
export interface LolEventShopSvcRewardGrantElement {
  elementId: string;
  itemId: string;
  itemType: string;
  fulfillmentSource: string;
  status: LolEventShopRewardStatus;
  quantity: number;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolEventShopSvcRewardGroup {
  id: string;
  productId: string;
  types: string[];
  rewards: LolEventShopReward[];
  childRewardGroupIds: string[];
  rewardStrategy: LolEventShopRewardStrategy;
  selectionStrategyConfig?: LolEventShopSelectionStrategyConfig;
  active: boolean;
  media: Map<string, string>;
  localizations: Map<string, string>;
  celebrationType: LolEventShopCelebrationType;
}
export interface LolEventShopTokenShop {
  tokenImage: string;
  tokenName: string;
  tokenUuid: string;
  offers: LolEventShopOffer[];
  contentDrops: LolEventShopContentDrop[];
  tokenBundlesCatalogEntry: LolEventShopCatalogEntry[];
}
export interface LolEventShopTokenShopUIData {
  tokenName: string;
  tokenImage: string;
  tokenUuid: string;
  offersVersion: number;
  tokenBundlesCatalogEntry: LolEventShopCatalogEntry[];
}
export interface LolEventShopTokenUpsell {
  id: string;
  internalName: string;
  title: string;
  buttonText: string;
  tooltipTitle: string;
  tooltipDescription: string;
  purchaseUrl: string;
  tooltipBackgroundUrl: string;
  backgroundUrl: string;
  currencyUrl: string;
  premiumCurrencyName: string;
  dependentInventoryType: string;
  dependentInventoryId: number;
  currentlyLocked: LolEventShopTokenUpsellLockedType;
  lockedCount: number;
  startDate: string;
  endDate: string;
}
export type LolEventShopTokenUpsellLockedType =
  | "LOCKED"
  | "UNASSIGNED"
  | "UNLOCKED";
export interface LolEventShopTransaction {
  transactionId: string;
  itemKey: LolEventShopItemKey;
  itemName: string;
  iconUrl: string;
}
export interface LolEventShopTransactionResponseDTO {
  id: string;
  inventoryType: string;
  itemId: number;
}
export interface LolEventShopUnclaimedRewardsUIData {
  rewardsCount: number;
  lockedTokensCount: number;
}
export interface LolEventShopValidateOfferError {
  errorKey: string;
  meta: string;
}
export interface LolEventShopValidateOfferRequestV3 {
  offerId: string;
}
export interface LolEventShopValidateOfferResponseV3 {
  validationErrors: LolEventShopValidateOfferError[];
}
export interface LolEventShopValidationError {
  errorCode: string;
  message: string;
  errorDetails: Map<string, string>;
  responseItems: string[];
}
export interface LolEventShopValidationErrorEntry {
  id: string;
}
export interface LolEventShopValidationRequest {
  items: LolEventShopValidationRequestItem[];
  ownedItems: LolEventShopItemOwnership[];
}
export interface LolEventShopValidationRequestItem {
  itemKey: LolEventShopItemKey;
  quantity: number;
}
export interface LolEventShopValidationResponse {
  items: LolEventShopValidationResponseItem[];
  valid: boolean;
}
export interface LolEventShopValidationResponseItem {
  itemKey: LolEventShopItemKey;
  quantity: number;
  validationCurrencyInfo: LolEventShopItemPrice[];
  sale?: LolEventShopSale;
  name?: string;
  description?: string;
}
export interface LolEventShopWallet {
  accountId: number;
  balances: LolEventShopBalance[];
  version: number;
}
export interface LolEventShopWalletCacheEntry {
  signedBalancesJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolEventShopWalletDTO {
  puuid: string;
  accountId: number;
  expires: string;
  balances: Map<string, number>;
  balancesJwt: string;
}
export interface LolEventShopWalletResponseDTO {
  data: LolEventShopWalletDTO;
}
export interface LolEventShopXboxSubscriptionStatus {
  active: string;
  subscriptionId: string;
}
export interface LolFeaturedModesAccountIdAndSummonerId {
  summonerId: number;
}
export interface LolFeaturedModesCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
}
export interface LolFeaturedModesCollectionsSummonerIcon {
  iconId: number;
  ownership: LolFeaturedModesCollectionsOwnership;
}
export interface LolFeaturedModesEligibility {
  queueId: number;
  eligible: boolean;
  restrictions: LolFeaturedModesEligibilityRestriction[];
}
export interface LolFeaturedModesEligibilityRestriction {
  restrictionCode: LolFeaturedModesEligibilityRestrictionCode;
  restrictionArgs: Map<string, string>;
  expiredTimestamp: number;
  summonerIds: number[];
}
export type LolFeaturedModesEligibilityRestrictionCode =
  | "GameVersionMismatch"
  | "GameVersionMissing"
  | "GameVersionNotSupported"
  | "PlayerAvailableChampionRestriction"
  | "PlayerBannedRestriction"
  | "PlayerBingeRestriction"
  | "PlayerDodgeRestriction"
  | "PlayerInGameRestriction"
  | "PlayerLeaverBustedRestriction"
  | "PlayerLeaverQueueLockoutRestriction"
  | "PlayerLeaverTaintedWarningRestriction"
  | "PlayerLevelRestriction"
  | "PlayerMaxLevelRestriction"
  | "PlayerMinLevelRestriction"
  | "PlayerMinorRestriction"
  | "PlayerRankedSuspensionRestriction"
  | "PlayerTimedRestriction"
  | "PrerequisiteQueuesNotPlayedRestriction"
  | "QueueDisabled"
  | "QueueEntryNotEntitledRestriction"
  | "QueueUnsupported"
  | "TeamDivisionRestriction"
  | "TeamHighMMRMaxSizeRestriction"
  | "TeamMaxSizeRestriction"
  | "TeamMinSizeRestriction"
  | "TeamSizeRestriction"
  | "TeamSkillRestriction"
  | "UnknownRestriction";
export interface LolFeaturedModesFeaturedModesConfig {
  NotificationsEnabled: boolean;
  QueueToggleNotificationMinutesThreshold: number;
  MaxNotificationSaveDelayMinutes: number;
}
export interface LolFeaturedModesGameflowAvailability {
  isAvailable: boolean;
  state: LolFeaturedModesGameflowAvailabilityState;
}
export type LolFeaturedModesGameflowAvailabilityState =
  | "Available"
  | "Configuration"
  | "EligibilityInfoMissing"
  | "InGameFlow"
  | "Initializing"
  | "Patching"
  | "PlayerBanned";
export type LolFeaturedModesGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolFeaturedModesGameflowSession {
  phase: LolFeaturedModesGameflowPhase;
}
export interface LolFeaturedModesLoginSession {
  state: LolFeaturedModesLoginSessionStates;
  summonerId: number;
}
export type LolFeaturedModesLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolFeaturedModesMaps {
  gameModeName: string;
  isRGM: boolean;
  assets: Map<string, string>;
}
export interface LolFeaturedModesPlayerNotificationResource {
  backgroundUrl: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolFeaturedModesQueue {
  id: number;
  mapId: number;
  name: string;
  gameMode: string;
  category: LolFeaturedModesQueueGameCategory;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  queueAvailability: LolFeaturedModesQueueAvailability;
}
export type LolFeaturedModesQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export type LolFeaturedModesQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolGameClientChatGameClientChatMessageResource {
  fromSummonerName: string;
  body: string;
}
export interface LolGameClientChatMutedPlayerInfo {
  puuid: string;
  summonerId: number;
  obfuscatedPuuid: string;
  obfuscatedSummonerId: number;
}
export interface LolGameQueuesLoginDataPacket {
  gameTypeConfigs: LolGameQueuesQueueGameTypeConfig[];
}
export interface LolGameQueuesLoginSession {
  state: LolGameQueuesLoginSessionStates;
  summonerId: number;
  accountId: number;
  connected: boolean;
}
export type LolGameQueuesLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolGameQueuesPlatformConfigEnabledMap {
  gameMapId: number;
  minPlayers: number;
}
export interface LolGameQueuesQueue {
  id: number;
  mapId: number;
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  type: string;
  gameMode: string;
  assetMutator: string;
  maxTierForPremadeSize2: string;
  maxDivisionForPremadeSize2: string;
  category: LolGameQueuesQueueGameCategory;
  gameTypeConfig: LolGameQueuesQueueGameTypeConfig;
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  minLevel: number;
  isRanked: boolean;
  areFreeChampionsAllowed: boolean;
  isTeamBuilderManaged: boolean;
  queueAvailability: LolGameQueuesQueueAvailability;
  queueRewards: LolGameQueuesQueueReward;
  spectatorEnabled: boolean;
  championsRequiredToPlay: number;
  allowablePremadeSizes: number[];
  showPositionSelector: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export type LolGameQueuesQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export interface LolGameQueuesQueueCustomGame {
  subcategories: LolGameQueuesQueueCustomGameSubcategory[];
  queueAvailability: LolGameQueuesQueueAvailability;
  spectatorPolicies: LolGameQueuesQueueCustomGameSpectatorPolicy[];
  spectatorSlotLimit: number;
  gameServerRegions?: string[];
}
export type LolGameQueuesQueueCustomGameSpectatorPolicy =
  | "AllAllowed"
  | "FriendsAllowed"
  | "LobbyAllowed"
  | "NotAllowed";
export interface LolGameQueuesQueueCustomGameSubcategory {
  mapId: number;
  gameMode: string;
  mutators: LolGameQueuesQueueGameTypeConfig[];
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  maxPlayerCount: number;
  minLevel: number;
  queueAvailability: LolGameQueuesQueueAvailability;
  customSpectatorPolicies: LolGameQueuesQueueCustomGameSpectatorPolicy[];
}
export type LolGameQueuesQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolGameQueuesQueueGameTypeConfig {
  id: number;
  name: string;
  maxAllowableBans: number;
  allowTrades: boolean;
  exclusivePick: boolean;
  duplicatePick: boolean;
  teamChampionPool: boolean;
  crossTeamChampionPool: boolean;
  advancedLearningQuests: boolean;
  battleBoost: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  learningQuests: boolean;
  onboardCoopBeginner: boolean;
  reroll: boolean;
  mainPickTimerDuration: number;
  postPickTimerDuration: number;
  banTimerDuration: number;
  pickMode: string;
  banMode: string;
  gameModeOverride?: string;
  numPlayersPerTeamOverride?: number;
}
export interface LolGameQueuesQueueReward {
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  isChampionPointsEnabled: boolean;
  partySizeIpRewards: number[];
}
export interface LolGameQueuesQueueTranslation {
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
}
export interface LolGameSettingsLoginSession {
  state: LolGameSettingsLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolGameSettingsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolGameSettingsgamesettingsgameclient {
  running: boolean;
}
export interface LolGameSettingsgamesettingsgameflowsession {
  gameClient: LolGameSettingsgamesettingsgameclient;
}
export interface LolGameflowCrashReportingSettings {
  type: string;
  enabled: boolean;
}
export interface LolGameflowGameModeSpellList {
  spells: number[];
}
export interface LolGameflowGameStateUpdate {
  id: number;
  gameState: string;
  gameType: string;
  errorMessage: string;
}
export interface LolGameflowGameflowAvailability {
  isAvailable: boolean;
  state: LolGameflowGameflowAvailabilityState;
}
export type LolGameflowGameflowAvailabilityState =
  | "Available"
  | "Configuration"
  | "EligibilityInfoMissing"
  | "InGameFlow"
  | "Initializing"
  | "Patching"
  | "PlayerBanned";
export interface LolGameflowGameflowGameClient {
  serverIp: string;
  serverPort: number;
  observerServerIp: string;
  observerServerPort: number;
  running: boolean;
  visible: boolean;
}
export interface LolGameflowGameflowGameData {
  gameId: number;
  queue: LolGameflowQueue;
  isCustomGame: boolean;
  gameName: string;
  password: string;
  teamOne: object[];
  teamTwo: object[];
  playerChampionSelections: object[];
  spectatorsAllowed: boolean;
}
export interface LolGameflowGameflowGameDodge {
  state: LolGameflowGameflowGameDodgeState;
  dodgeIds: number[];
  phase: LolGameflowGameflowPhase;
}
export type LolGameflowGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export interface LolGameflowGameflowGameMap {
  id: number;
  name: string;
  mapStringId: string;
  gameMode: string;
  gameModeName: string;
  gameModeShortName: string;
  gameMutator: string;
  isRGM: boolean;
  description: string;
  platformId: string;
  platformName: string;
  assets: object;
  categorizedContentBundles: object;
  properties: object;
  perPositionRequiredSummonerSpells: Map<string, LolGameflowGameModeSpellList>;
  perPositionDisallowedSummonerSpells: Map<
    string,
    LolGameflowGameModeSpellList
  >;
}
export type LolGameflowGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolGameflowGameflowProcessInfo {
  pid: number;
  rawArgs: string[];
  standalone: boolean;
}
export interface LolGameflowGameflowSession {
  phase: LolGameflowGameflowPhase;
  gameData: LolGameflowGameflowGameData;
  gameClient: LolGameflowGameflowGameClient;
  map: LolGameflowGameflowGameMap;
  gameDodge: LolGameflowGameflowGameDodge;
}
export type LolGameflowGameflowWatchPhase =
  | "None"
  | "WatchFailedToLaunch"
  | "WatchInProgress"
  | "WatchStarted";
export interface LolGameflowInstallPaths {
  gameInstallRoot: string;
  gameExecutablePath: string;
}
export interface LolGameflowLobbyStatus {
  queueId: number;
  isCustom: boolean;
  isPracticeTool: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  allowedPlayAgain: boolean;
  memberSummonerIds: number[];
  invitedSummonerIds: number[];
  lobbyId?: string;
  customSpectatorPolicy: LolGameflowQueueCustomGameSpectatorPolicy;
}
export interface LolGameflowLoginSession {
  state: LolGameflowLoginSessionStates;
  summonerId: number;
  accountId: number;
  connected: boolean;
}
export type LolGameflowLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolGameflowPatcherProductState {
  isCorrupted: boolean;
  isStopped: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  action: LolGameflowPatcherProductStateAction;
}
export type LolGameflowPatcherProductStateAction =
  | "CheckingForUpdates"
  | "Idle"
  | "Migrating"
  | "Patching"
  | "Repairing";
export interface LolGameflowPlayerStatus {
  currentLobbyStatus?: LolGameflowLobbyStatus;
  lastQueuedLobbyStatus?: LolGameflowLobbyStatus;
  canInviteOthersAtEog: boolean;
}
export interface LolGameflowQueue {
  id: number;
  mapId: number;
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  type: string;
  gameMode: string;
  assetMutator: string;
  category: LolGameflowQueueGameCategory;
  gameTypeConfig: LolGameflowQueueGameTypeConfig;
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  minLevel: number;
  isRanked: boolean;
  areFreeChampionsAllowed: boolean;
  isTeamBuilderManaged: boolean;
  queueAvailability: LolGameflowQueueAvailability;
  queueRewards: LolGameflowQueueReward;
  spectatorEnabled: boolean;
  championsRequiredToPlay: number;
  allowablePremadeSizes: number[];
  showPositionSelector: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export type LolGameflowQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export type LolGameflowQueueCustomGameSpectatorPolicy =
  | "AllAllowed"
  | "FriendsAllowed"
  | "LobbyAllowed"
  | "NotAllowed";
export type LolGameflowQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolGameflowQueueGameTypeConfig {
  id: number;
  name: string;
  maxAllowableBans: number;
  allowTrades: boolean;
  exclusivePick: boolean;
  duplicatePick: boolean;
  teamChampionPool: boolean;
  crossTeamChampionPool: boolean;
  advancedLearningQuests: boolean;
  battleBoost: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  learningQuests: boolean;
  onboardCoopBeginner: boolean;
  reroll: boolean;
  mainPickTimerDuration: number;
  postPickTimerDuration: number;
  banTimerDuration: number;
  pickMode: string;
  banMode: string;
}
export interface LolGameflowQueueReward {
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  isChampionPointsEnabled: boolean;
  partySizeIpRewards: number[];
}
export interface LolGameflowRegionLocale {
  region: string;
  locale: string;
}
export interface LolGameflowRegistrationStatus {
  complete: boolean;
  errorCodes: string[];
}
export interface LolGameflowReplaysSettingsData {
  "highlights-folder-path": string;
}
export interface LolGameflowReplaysSettingsResource {
  data: LolGameflowReplaysSettingsData;
}
export interface LolGameflowSpectateGameInfoResource {
  dropInSpectateGameId: string;
  gameQueueType: string;
  allowObserveMode: string;
  puuid: string;
}
export interface LolGeoinfoGeoInfo {
  country: string;
  city: string;
  region: string;
}
export interface LolGeoinfoGeoInfoConfig {
  Enabled: boolean;
}
export interface LolGeoinfoGeoInfoResponse {
  success: boolean;
  geoInfo: LolGeoinfoGeoInfo;
  errorMessage: string;
  isLatest: boolean;
  isInitialized: boolean;
}
export interface LolGeoinfoLoginSession {
  state: LolGeoinfoLoginSessionState;
  summonerId: number;
  accountId: number;
}
export type LolGeoinfoLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolGeoinfoWhereAmIRequest {
  ipAddress: string;
}
export interface LolGeoinfoWhereAmIResponse {
  country: string;
  city: string;
  region: string;
}
export interface LolHeartbeatLoginSession {
  state: LolHeartbeatLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolHeartbeatLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolHighlightsHighlight {
  id: number;
  name: string;
  filepath: string;
  url: string;
  mtimeMsUtc: number;
  mtimeIso8601: string;
  fileSizeBytes: number;
}
export interface LolHighlightsHighlightsConfig {
  isHighlightsEnabled: boolean;
  invalidHighlightNameCharacters: string;
}
export interface LolHighlightsHighlightsDynamicConfig {
  Enabled: boolean;
}
export interface LolHighlightsHighlightsSettingsData {
  "highlights-folder-path": string;
}
export interface LolHighlightsHighlightsSettingsResource {
  data: LolHighlightsHighlightsSettingsData;
}
export interface LolHoneyfruitAccountClaimStatus {
  linking_status?: LolHoneyfruitHoneyfruitLinkingServiceResponse;
  migration_status?: string;
}
export interface LolHoneyfruitAccountDetails {
  puuid: string;
  platformId: string;
  summonerName: string;
  summonerIconId: number;
  summonerLevel: number;
}
export interface LolHoneyfruitGAMHSMatchHistoryData {}
export interface LolHoneyfruitGAMHSMatchHistoryList {
  games: LolHoneyfruitGAMHSMatchHistoryData[];
  active_puuid: string;
}
export type LolHoneyfruitGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolHoneyfruitGarenaRegionLeagueAccount {
  garena_puuid: string;
  platform_id: string;
  summoner_name: string;
  summoner_level: number;
  summoner_icon_id: number;
  garena_id: number;
  is_reserved_summoner_name: boolean;
  has_played_a_game: boolean;
}
export type LolHoneyfruitHoneyfruitActionType =
  | "dismiss"
  | "dismiss_permanently"
  | "dismiss_temporarily"
  | "link";
export interface LolHoneyfruitHoneyfruitAuthRedirectMock {
  redirectLatency: number;
  redirectStatusCode: number;
  redirectURL: string;
}
export interface LolHoneyfruitHoneyfruitLinkingAction {
  action: LolHoneyfruitHoneyfruitActionType;
  target: string;
}
export type LolHoneyfruitHoneyfruitLinkingFailureReason =
  | "ACCESS_TOKEN_EXPIRED"
  | "ALREADY_LINKED"
  | "BAD_AUTHORIZATION_PARAM"
  | "DEGRADED"
  | "DISABLED"
  | "NOT_LINKED"
  | "REQUEST_FAILURE"
  | "UNHANDLED_SERVER_SIDE_ERROR";
export interface LolHoneyfruitHoneyfruitLinkingNotification {
  linkedAccount: string;
}
export interface LolHoneyfruitHoneyfruitLinkingServiceResponse {
  eligible: boolean;
  reason_code: LolHoneyfruitHoneyfruitLinkingFailureReason;
  email: string;
  account_details?: LolHoneyfruitGarenaRegionLeagueAccount;
}
export type LolHoneyfruitHoneyfruitLinkingState =
  | "confirm_snooze"
  | "error"
  | "hidden"
  | "in_progress"
  | "linked"
  | "linking_complete"
  | "prompt"
  | "snoozed";
export interface LolHoneyfruitHoneyfruitLinkingStatus {
  state: LolHoneyfruitHoneyfruitLinkingState;
  linkedAccount: string;
  error: LolHoneyfruitHoneyfruitLinkingStatusError;
}
export type LolHoneyfruitHoneyfruitLinkingStatusError =
  | "no_error"
  | "not_signed_in"
  | "service_unavailable"
  | "unknown_error";
export type LolHoneyfruitHoneyfruitPublisher =
  | "garena"
  | "riot"
  | "tencent"
  | "twm"
  | "vng";
export interface LolHoneyfruitHoneyfruitRegionLocale {
  region: string;
  locale: string;
}
export interface LolHoneyfruitHoneyfruitSettingCategoryResource {
  schemaVersion: number;
  data: LolHoneyfruitHoneyfruitSettings;
}
export interface LolHoneyfruitHoneyfruitSettingCategoryResourceAccountClaim {
  schemaVersion: number;
  data: LolHoneyfruitHoneyfruitSettingsAccountClaim;
}
export interface LolHoneyfruitHoneyfruitSettings {
  snoozeUntilMS: number;
  isSnoozedPermanently: boolean;
}
export interface LolHoneyfruitHoneyfruitSettingsAccountClaim {
  isAccountClaimAutoDismiss: boolean;
}
export interface LolHoneyfruitHoneyfruitVNGPublisherSettings {
  visible: boolean;
}
export interface LolHoneyfruitMatchHistoryGame {}
export interface LolHoneyfruitMatchHistoryGameList {
  gameIndexBegin: number;
  gameIndexEnd: number;
  gameBeginDate: string;
  gameEndDate: string;
  gameCount: number;
  games: LolHoneyfruitMatchHistoryGame[];
}
export interface LolHoneyfruitMatchHistoryList {
  platformId: string;
  accountId: number;
  games: LolHoneyfruitMatchHistoryGameList;
}
export interface LolHoneyfruitSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  internalName: string;
  profileIconId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  percentCompleteForNextLevel: number;
  puuid: string;
  nameChangeFlag: boolean;
  unnamed: boolean;
}
export interface LolHoneyfruitV1AuthenticationRedirectInput {
  redirect_uri: string;
  language: string;
}
export interface LolHoneyfruitV1AuthenticationResponse {
  type: LolHoneyfruitV1ResponseType;
  success: LolHoneyfruitV1SuccessResponseDetails;
  country: string;
  error: string;
}
export type LolHoneyfruitV1ResponseType =
  | "auth"
  | "error"
  | "healup"
  | "multifactor"
  | "signup"
  | "success";
export interface LolHoneyfruitV1SuccessResponseDetails {
  login_token: string;
  redirect_url: string;
  linked: string;
}
export interface LolHoneyfruitVNGStatusResponse {
  action_required: boolean;
  action_url: string;
  action_url_raw: string;
}
export interface LolHonorV2AccountIdAndSummonerId {
  accountId: number;
  summonerId: number;
}
export interface LolHonorV2ApiHonorPlayerServerRequest {
  summonerId: number;
  puuid: string;
  honorType: string;
  gameId: number;
}
export interface LolHonorV2Ballot {
  eligiblePlayers: LolHonorV2EligiblePlayer[];
  gameId: number;
}
export interface LolHonorV2DynamicHonorMessage {
  messageId: string;
  value: number;
}
export interface LolHonorV2EligiblePlayer {
  puuid: string;
  summonerId: number;
  summonerName: string;
  championName: string;
  skinSplashPath: string;
}
export interface LolHonorV2EndOfGamePlayer {
  puuid: string;
  botPlayer: boolean;
  gameId: number;
  leaver: boolean;
  summonerName: string;
  summonerId: number;
  skinSplashPath: string;
  championName: string;
}
export interface LolHonorV2EndOfGameStats {
  gameId: number;
  gameType: string;
  invalid: boolean;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  teams: LolHonorV2EndOfGameTeam[];
  localPlayer: LolHonorV2EndOfGamePlayer;
  gameEndedInEarlySurrender: boolean;
}
export interface LolHonorV2EndOfGameTeam {
  players: LolHonorV2EndOfGamePlayer[];
  isPlayerTeam: boolean;
}
export interface LolHonorV2GameflowGameData {
  gameId: number;
  queue: LolHonorV2Queue;
}
export type LolHonorV2GameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolHonorV2GameflowSession {
  phase: LolHonorV2GameflowPhase;
  gameData: LolHonorV2GameflowGameData;
}
export interface LolHonorV2Honor {
  honorCategory: string;
  voterRelationship: string;
  senderPuuid: string;
}
export interface LolHonorV2HonorConfig {
  Enabled: boolean;
  SecondsToVote: number;
  RecallRewardEnabled: boolean;
  HonorVisibilityEnabled: boolean;
  HonorSuggestionsEnabled: boolean;
  honorEndpointsV2Enabled: boolean;
}
export interface LolHonorV2HonorInteraction {
  summonerId: number;
  displayName: string;
  gameId: number;
}
export interface LolHonorV2HonorRecipient {
  summonerId: number;
  gameId: number;
  honors: LolHonorV2Honor[];
}
export interface LolHonorV2HonorSummoner {
  summonerId: number;
  displayName: string;
}
export interface LolHonorV2LoginSession {
  state: LolHonorV2LoginSessionStates;
}
export type LolHonorV2LoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolHonorV2MutualHonor {
  gameId: number;
  summoners: LolHonorV2MutualHonorPlayer[];
}
export interface LolHonorV2MutualHonorPlayer {
  summonerId: number;
  championId: number;
  skinId: number;
}
export interface LolHonorV2ProfileInfo {
  honorLevel: number;
  checkpoint: number;
  rewardsLocked: boolean;
}
export interface LolHonorV2Queue {
  id: number;
  mapId: number;
  type: string;
  gameMode: string;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export interface LolHonorV2RetrieveProfileResponse {
  honorLevel: number;
  checkpoint: number;
  rewardsLocked: boolean;
}
export interface LolHonorV2Reward {
  rewardType: string;
  quantity: number;
}
export interface LolHonorV2SequenceEvent {
  name: string;
  priority: number;
}
export interface LolHonorV2VendedHonorChange {
  actionType: string;
  previousState: LolHonorV2VendedHonorState;
  currentState: LolHonorV2VendedHonorState;
  reward: LolHonorV2Reward;
  dynamicHonorMessage: LolHonorV2DynamicHonorMessage;
}
export interface LolHonorV2VendedHonorState {
  level: number;
  checkpoint: number;
  rewardsLocked: boolean;
}
export interface LolHonorV2VendedReward {
  rewardType: string;
  quantity: number;
  dynamicHonorMessage: LolHonorV2DynamicHonorMessage;
}
export interface LolHonorV2VoteCompletion {
  gameId: number;
  fullTeamVote: boolean;
}
export interface LolHovercardChatSession {
  sessionState: string;
}
export interface LolHovercardContentCookies {
  content_id: string;
  content_path: string;
  cookies: LolHovercardcookie[];
}
export interface LolHovercardFriendResult {
  id: string;
  puuid: string;
  summonerId: number;
  name: string;
  accountId: number;
  icon: number;
  gameName: string;
  gameTag: string;
  availability: string;
  note: string;
  score: number;
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  statusMessage: string;
  lol: Map<string, string>;
}
export interface LolHovercardHovercardUserInfo {
  id: string;
  puuid: string;
  summonerId: number;
  name: string;
  accountId: number;
  icon: number;
  gameName: string;
  gameTag: string;
  availability: string;
  note: string;
  masteryScore: number;
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  statusMessage: string;
  summonerIcon: number;
  summonerLevel: number;
  remoteProduct: boolean;
  remotePlatform: boolean;
  remoteProductIconUrl: string;
  remoteProductBackdropUrl: string;
  partySummoners: string[];
  lol: Map<string, string>;
}
export interface LolHovercardPartyInfo {
  summoners?: number[];
}
export interface LolHovercardPatchlineMetadata {
  product_id: string;
  id: string;
  content_paths: Map<string, string>;
  content_cookies: LolHovercardContentCookies[];
}
export interface LolHovercardProductMetadata {
  id: string;
  name: string;
  patchlines: Map<string, LolHovercardPatchlineMetadata>;
}
export interface LolHovercardProductMetadataMap {
  products: Map<string, LolHovercardProductMetadata>;
}
export interface LolHovercardSummoner {
  summonerId: number;
  displayName: string;
  accountId: number;
  summonerLevel: number;
  puuid: string;
}
export interface LolHovercardSummonerIdAndIcon {
  profileIconId: number;
}
export interface LolHovercardSummonerIdAndName {
  summonerId: number;
  displayName: string;
}
export interface LolHovercardTopChampionMastery {
  score: number;
}
export interface LolHovercardcookie {
  name: string;
  value: string;
}
export interface LolInventoryAccessTokenResource {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolInventoryCatalogItem {
  itemId: number;
  inventoryType: string;
  itemInstanceId?: string;
}
export interface LolInventoryClientCacheClearMessageDTO {
  regions: string[];
  clearAll: boolean;
  inventoryTypes: string[];
}
export interface LolInventoryCurrencyDTO {
  amount: number;
  subCurrencies: Map<string, number>;
}
export interface LolInventoryEndOfGameXp {
  PER_WIN: number;
}
export interface LolInventoryEndOfGameXpNotification {
  xp: LolInventoryEndOfGameXp;
}
export interface LolInventoryInventoryCacheEntry {
  signedInventoryJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolInventoryInventoryDTO {
  puuid: string;
  accountId: number;
  summonerId: number;
  items: Map<string, object>;
  expires: string;
  itemsJwt: string;
}
export interface LolInventoryInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolInventoryItemOwnershipType;
  expirationDate: string;
  wins: number;
}
export interface LolInventoryInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  ownedQuantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  payload: object;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  lsb: boolean;
  wins: number;
}
export interface LolInventoryInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolInventoryItemOwnershipType;
  expirationDate: string;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  owned: boolean;
  wins: number;
  payload: object;
}
export interface LolInventoryInventoryNotification {
  id: number;
  itemId: number;
  inventoryType: string;
  type: string;
  acknowledged: boolean;
}
export interface LolInventoryInventoryResponseDTO {
  data: LolInventoryInventoryDTO;
}
export interface LolInventoryItemKey {
  inventoryType: string;
  itemId: number;
}
export type LolInventoryItemOwnershipType =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolInventoryLoginSession {
  state: LolInventoryLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
  puuid: string;
}
export type LolInventoryLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolInventoryLoyaltyRewards {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: Map<string, number>;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export interface LolInventoryLoyaltyRewardsSimplified {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: number;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export type LolInventoryLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolInventoryLoyaltyStatusNotification {
  status: LolInventoryLoyaltyStatus;
  rewards: LolInventoryLoyaltyRewardsSimplified;
  reloadInventory: boolean;
}
export interface LolInventoryPlayerNotification {
  critical: boolean;
  detailKey: string;
  source: string;
  state: string;
  titleKey: string;
  type: string;
  iconUrl: string;
}
export interface LolInventoryRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolInventoryRmsEntitlementPayload {
  itemId: string;
  itemTypeId: string;
  entitlementTypeId: string;
  resourceOperation: string;
}
export interface LolInventoryRmsStoreEntitlementItem {
  inventoryType: string;
  itemId: string;
}
export interface LolInventoryRmsStoreEntitlementPayload {
  transactionId: string;
  items: LolInventoryRmsStoreEntitlementItem[];
}
export interface LolInventoryRmsWalletPayload {}
export interface LolInventoryRmsXboxSubscriptionChange {
  puuid: string;
  subscriptionId: string;
  active: string;
  identityProvider: string[];
}
export interface LolInventorySimpleInventoryDTO {
  items: Map<string, object>;
  itemsJwt: string;
  expires: string;
}
export interface LolInventorySimpleInventoryResponseDTO {
  data: LolInventorySimpleInventoryDTO;
}
export interface LolInventorySummonerIcon {
  itemId: number;
}
export interface LolInventoryWallet {
  ip: number;
  rp: number;
}
export interface LolInventoryWalletCacheEntry {
  signedBalancesJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolInventoryWalletDTO {
  puuid: string;
  accountId: number;
  expires: string;
  balances: Map<string, number>;
  balancesJwt: string;
}
export interface LolInventoryWalletResponseDTO {
  data: LolInventoryWalletDTO;
}
export interface LolInventoryXboxSubscriptionStatus {
  active: string;
  subscriptionId: string;
}
export interface LolItemSetsGameDataChampion {
  alias: string;
}
export interface LolItemSetsItemSet {
  uid: string;
  title: string;
  mode: string;
  map: string;
  type: string;
  sortrank: number;
  startedFrom: string;
  associatedChampions: number[];
  associatedMaps: number[];
  blocks: LolItemSetsItemSetBlock[];
  preferredItemSlots: LolItemSetsPreferredItemSlot[];
}
export interface LolItemSetsItemSetBlock {
  type: string;
  hideIfSummonerSpell: string;
  showIfSummonerSpell: string;
  items: LolItemSetsItemSetItem[];
}
export interface LolItemSetsItemSetItem {
  id: string;
  count: number;
}
export interface LolItemSetsItemSets {
  timestamp: number;
  accountId: number;
  itemSets: LolItemSetsItemSet[];
}
export interface LolItemSetsLoginSession {
  state: LolItemSetsLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolItemSetsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolItemSetsNamecheckAuthorization {
  subject: string;
}
export interface LolItemSetsNamecheckLoginDataPacket {
  platformId: string;
}
export interface LolItemSetsNamecheckPayload {
  name: string;
  nameValidationContext: string;
  puuid: string;
  shard: string;
}
export interface LolItemSetsNamecheckResponse {
  errors: string[];
}
export interface LolItemSetsPreferredItemSlot {
  id: string;
  preferredItemSlot: number;
}
export interface LolItemSetsValidateItemSetNameInput {
  name: string;
}
export interface LolItemSetsValidateItemSetNameResponse {
  success: boolean;
  nameCheckResponse: LolItemSetsNamecheckResponse;
}
export interface LolKickoutKickoutMessage {
  message: string;
}
export interface LolKrPlaytimeReminderPlaytimeReminder {
  hours: number;
}
export interface LolKrShutdownLawAllQueueShutdownStatus {
  isAllQueuesDisabled: boolean;
}
export interface LolKrShutdownLawAntiAddictionState {
  policyType: LolKrShutdownLawPolicyType;
}
export type LolKrShutdownLawPolicyType =
  | "disableMatchMaking"
  | "playTime"
  | "shutdown"
  | "warningMessage";
export interface LolKrShutdownLawQueueShutdownStatus {
  isDisabled: boolean;
}
export interface LolKrShutdownLawRatingScreenInfo {
  shown: boolean;
}
export interface LolKrShutdownLawShutdownLawNotification {
  type: LolKrShutdownLawShutdownLawStatus;
}
export type LolKrShutdownLawShutdownLawStatus = "CUT_OFF" | "NONE" | "WARNING";
export interface LolLeagueSessionAntiAddictionTokenEnvelope {
  antiAddictionToken: string;
}
export interface LolLeagueSessionLeagueSessionRMSNotification {
  product: string;
  puuid: string;
  sessionId: string;
  state: string;
  sessionInitiatedAt: number;
}
export type LolLeagueSessionLeagueSessionStatus =
  | "ANTI_ADDICTION_EXPIRED"
  | "DUPLICATED"
  | "EXPIRED"
  | "INITIALIZED"
  | "UNINITIALIZED";
export interface LolLeagueSessionLeagueSessionTokenEnvelope {
  token?: string;
  logoutOnFailure: boolean;
}
export interface LolLeaverBusterAllSummonerData {
  summoner: LolLeaverBusterSummoner;
}
export interface LolLeaverBusterLeaverBusterNotificationResource {
  id: number;
  msgId: string;
  accountId: number;
  type: LolLeaverBusterLeaverBusterNotificationType;
  punishedGamesRemaining: number;
  queueLockoutTimerExpiryUtcMillisDiff: number;
  fromRms: boolean;
}
export type LolLeaverBusterLeaverBusterNotificationType =
  | "Invalid"
  | "OnLockoutWarning"
  | "PreLockoutWarning"
  | "PunishedGamesRemaining"
  | "PunishmentIncurred"
  | "Reforming"
  | "TaintedWarning";
export interface LolLeaverBusterLoginDataPacket {
  allSummonerData: LolLeaverBusterAllSummonerData;
  simpleMessages: LolLeaverBusterSimpleMessage[];
}
export interface LolLeaverBusterMatchmakingSearchErrorResource {
  id: number;
  errorType: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
  message: string;
}
export interface LolLeaverBusterMatchmakingSearchResource {
  queueId: number;
  errors: LolLeaverBusterMatchmakingSearchErrorResource[];
}
export interface LolLeaverBusterPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolLeaverBusterSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolLeaverBusterSummoner {
  acctId: number;
  sumId: number;
}
export interface LolLicenseAgreementLicenseAgreement {
  id: string;
  licenseType: LolLicenseAgreementLicenseAgreementType;
  text: string;
}
export type LolLicenseAgreementLicenseAgreementType =
  | "PrivacyNotice"
  | "TermsOfUse";
export type LolLicenseAgreementLicenseServeLocation =
  | "External"
  | "Local"
  | "Preparing";
export interface LolLicenseAgreementPluginRegionLocaleChangedEvent {
  region: string;
  locale: string;
}
export interface LolLoadoutsAccessTokenResource {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolLoadoutsCreateLoadoutDTO {
  scope: string;
  itemId?: number;
  name: string;
  loadout: Map<string, LolLoadoutsItemKey>;
  refreshTime: string;
}
export interface LolLoadoutsCreateLoadoutRequestDTO {
  serviceToJwtsMap: Map<string, object>;
  loadout: LolLoadoutsCreateLoadoutDTO;
}
export interface LolLoadoutsCreateOrUpdateItemsRequest {
  id: number;
  items: Map<string, object>;
  inventoryJWTs: string[];
}
export interface LolLoadoutsFrontendInventoryResponse {
  entitlements: LolLoadoutsItemKey[];
}
export interface LolLoadoutsGameflowGameData {
  queue: LolLoadoutsQueue;
}
export type LolLoadoutsGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolLoadoutsGameflowSession {
  phase: LolLoadoutsGameflowPhase;
  gameData: LolLoadoutsGameflowGameData;
}
export interface LolLoadoutsGetItemsRequest {
  id: number;
  inventoryTypes: string[];
  inventoryJWTs: string[];
}
export interface LolLoadoutsInventoryDTO {
  puuid: string;
  accountId: number;
  summonerId: number;
  items: Map<string, object>;
  expires: string;
  itemsJwt?: string;
}
export interface LolLoadoutsInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  f2p: boolean;
  rental: boolean;
  lsb: boolean;
  wins: number;
}
export interface LolLoadoutsInventoryResponseDTO {
  data: LolLoadoutsInventoryDTO;
}
export interface LolLoadoutsItemKey {
  inventoryType: string;
  contentId: string;
  itemId: number;
}
export interface LolLoadoutsLoadout {
  id: number;
  name: string;
  items: Map<string, object>;
}
export interface LolLoadoutsLoadoutRequestDTOBase {
  serviceToJwtsMap: Map<string, object>;
}
export interface LolLoadoutsLoginSession {
  state: LolLoadoutsLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
  puuid: string;
}
export type LolLoadoutsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolLoadoutsQueue {
  isTeamBuilderManaged: boolean;
}
export interface LolLoadoutsScopedLoadout {
  scope: string;
  itemId?: number;
  name: string;
  loadout: Map<string, LolLoadoutsItemKey>;
  refreshTime: string;
  id: string;
}
export interface LolLoadoutsSignGCORequestDTO {
  serviceToJwtsMap: Map<string, object>;
  loadout: Map<string, LolLoadoutsItemKey>;
}
export interface LolLoadoutsUpdateLoadoutDTO {
  id: string;
  name: string;
  loadout: Map<string, LolLoadoutsItemKey>;
}
export interface LolLoadoutsUpdateLoadoutRequestDTO {
  serviceToJwtsMap: Map<string, object>;
  loadout: LolLoadoutsUpdateLoadoutDTO;
}
export interface LolLobbyAccountIdAndSummonerId {
  accountId: number;
  summonerId: number;
}
export interface LolLobbyAmbassadorMessage {
  httpStatus: number;
  errorCode: string;
  message: string;
  implementationDetails: string;
  payload: object;
}
export interface LolLobbyAutoFillQueueDto {
  queueId: number;
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
}
export interface LolLobbyBotParticipantDto {
  championId: number;
  botSkillLevel: number;
  team: string;
}
export interface LolLobbyChampionSkinSelection {
  championId: number;
  skinId?: number;
}
export interface LolLobbyChatBlockedPlayerResource {
  summonerId: number;
  name: string;
}
export interface LolLobbyChatFriend {
  summonerId: number;
  lol: Map<string, string>;
}
export interface LolLobbyChatFriendCounts {
  numFriends: number;
  numFriendsOnline: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInQueue: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsMobile: number;
}
export interface LolLobbyCollectionsChampion {
  active: boolean;
  botEnabled: boolean;
  id: number;
  name: string;
}
export interface LolLobbyCollectionsChampionMinimal {
  disabledQueues: string[];
  id: number;
  ownership: LolLobbyCollectionsOwnership;
  active: boolean;
  freeToPlay: boolean;
}
export interface LolLobbyCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolLobbyCollectionsRental;
}
export interface LolLobbyCollectionsRental {}
export interface LolLobbyCustomEligibilityDto {
  eligible: boolean;
  restrictions: LolLobbyGatekeeperRestrictionDto[];
}
export interface LolLobbyCustomGameDto {
  partyId: string;
  gameType: string;
  mapId: number;
  ownerPuuid: string;
  allowSpectators: string;
  spectatorCount: number;
  team1Count: number;
  team2Count: number;
  maxNumPlayers: number;
  lobbyName: string;
  privateGame: boolean;
}
export interface LolLobbyCustomGameSettingsDto {
  lobbyName: string;
  lobbyPassword: string;
  gameId: number;
}
export interface LolLobbyCustomJoinOptionsDto {
  lobbyPassword: string;
  team?: string;
}
export interface LolLobbyEligibility {
  queueId: number;
  eligible: boolean;
  restrictions: LolLobbyEligibilityRestriction[];
}
export interface LolLobbyEligibilityRestriction {
  restrictionCode: LolLobbyEligibilityRestrictionCode;
  restrictionArgs: Map<string, string>;
  expiredTimestamp: number;
  summonerIds: number[];
  summonerIdsString: string;
}
export type LolLobbyEligibilityRestrictionCode =
  | "BanInfoNotAvailable"
  | "GameVersionMismatch"
  | "GameVersionMissing"
  | "GameVersionNotSupported"
  | "InventoryChampsInfoNotAvailable"
  | "InventoryQueuesInfoNotAvailable"
  | "LeaguesInfoNotAvailable"
  | "MinorInfoNotAvailable"
  | "MmrStandardDeviationTooLarge"
  | "PlayerAvailableChampionRestriction"
  | "PlayerBannedRestriction"
  | "PlayerBingeRestriction"
  | "PlayerDodgeRestriction"
  | "PlayerInGameRestriction"
  | "PlayerLeaverBustedRestriction"
  | "PlayerLeaverQueueLockoutRestriction"
  | "PlayerLeaverTaintedWarningRestriction"
  | "PlayerLevelRestriction"
  | "PlayerMaxLevelRestriction"
  | "PlayerMinLevelRestriction"
  | "PlayerMinorRestriction"
  | "PlayerRankSoloOnlyRestriction"
  | "PlayerRankedSuspensionRestriction"
  | "PlayerTimePlayedRestriction"
  | "PlayerTimedRestriction"
  | "PrerequisiteQueuesNotPlayedRestriction"
  | "QueueDisabled"
  | "QueueEntryNotEntitledRestriction"
  | "QueueUnsupported"
  | "SummonerInfoNotAvailable"
  | "TeamDivisionRestriction"
  | "TeamHighMMRMaxSizeRestriction"
  | "TeamMaxSizeRestriction"
  | "TeamMinSizeRestriction"
  | "TeamSizeRestriction"
  | "TeamSkillRestriction"
  | "UnknownRestriction";
export interface LolLobbyFriendAvailabilityAnalytics {
  puuid: string;
  summonerId: number;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  numFriends: number;
  numFriendsOnline: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInGame: number;
  numFriendsMobile: number;
  numFriendsInChampSelect: number;
  numFriendsInQueue: number;
  partyType: string;
}
export interface LolLobbyGameDataChampionSummary {
  id: number;
  alias: string;
}
export interface LolLobbyGameModeDto {
  gameType: string;
  maxTeamSize: number;
  maxPartySize: number;
  botDifficulty?: string;
  queueId?: number;
  gameCustomization?: Map<string, string>;
  customsSettings?: LolLobbyCustomGameSettingsDto;
  gameTypeConfigId?: number;
  mapId?: number;
  allowSpectators?: string;
}
export interface LolLobbyGameflowGameClient {
  running: boolean;
}
export interface LolLobbyGameflowGameData {
  queue: LolLobbyQueue;
}
export interface LolLobbyGameflowGameDodge {
  state: LolLobbyMatchmakingDodgeState;
  dodgeIds: number[];
  phase: LolLobbyGameflowPhase;
}
export type LolLobbyGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolLobbyGameflowSampleDto {
  state: string;
  probability: number;
  intervalSecs: number;
  tags: LolLobbyGameflowSampleTag[];
}
export type LolLobbyGameflowSampleTag =
  | "GameVersionMissing"
  | "InventoryTokenMissing"
  | "RankedTokenMissing"
  | "SummonerTokenMissing"
  | "Unregistered"
  | "UserInfoTokenMissing";
export interface LolLobbyGameflowSession {
  phase: LolLobbyGameflowPhase;
  gameData: LolLobbyGameflowGameData;
  gameClient: LolLobbyGameflowGameClient;
  gameDodge: LolLobbyGameflowGameDodge;
}
export interface LolLobbyGatekeeperRestrictionDto {
  accountId: number;
  reason: string;
  remainingMillis: number;
  payload: string;
  queueId: number;
  puuid: string;
  details: Map<string, string>;
}
export interface LolLobbyInventoryCacheEntry {
  signedInventoryJwt: string;
  expirationMS: number;
  valid: boolean;
}
export interface LolLobbyInventoryItem {
  itemId: number;
}
export type LolLobbyInvitationType = "invalid" | "lobby" | "party";
export interface LolLobbyJoinPartyAnalytics {
  partyId: string;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  numOpenParties: number;
  numOpenFriends: number;
  numPartyInvites: number;
  numOtherInvites: number;
  numTotalInvites: number;
  numFriendsOnline: number;
  partySize: number;
  gameMode: string;
}
export interface LolLobbyLcdsDynamicClientConfig {
  PartyRewards: LolLobbyLcdsPartyRewardsConfig;
}
export interface LolLobbyLcdsGameMetaData {
  gameId: number;
  mapId: number;
}
export interface LolLobbyLcdsPartyRewardsConfig {
  Enabled: boolean;
}
export interface LolLobbyLobby {
  queueId: number;
  mapId: number;
  gameMode: string;
  invitationId: string;
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolLobbyMucJwtDto;
  members: LolLobbyLobbyMember[];
  localMember: LolLobbyLobbyMember;
  invitations: LolLobbyLobbyInvitation[];
  wasKicked: boolean;
  removalReason: LolLobbyLobbyRemovedFromGameReason;
  canStartMatchmaking: boolean;
  showPositionSelector: boolean;
  showPositionExcluder: boolean;
  specifiablePositionPreferences: string[];
  autoFillEligible: boolean;
  customGameLobby?: LolLobbyLobbyCustomGameLobby;
  isCustom: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
  isTeamBuilderManaged: boolean;
  maximumParticipantListSize: number;
  premadeSizeAllowed: boolean;
  requiredPositionCoverageMet: boolean;
  allowablePremadeSizes: number[];
  queueAvailability: LolLobbyQueueAvailability;
}
export interface LolLobbyLobbyBotChampion {
  active: boolean;
  id: number;
  name: string;
  botDifficulties: LolLobbyLobbyBotDifficulty[];
}
export type LolLobbyLobbyBotDifficulty =
  | "EASY"
  | "HARD"
  | "INTRO"
  | "MEDIUM"
  | "NONE"
  | "TUTORIAL"
  | "UBER";
export interface LolLobbyLobbyBotParams {
  championId: number;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  teamId: string;
}
export interface LolLobbyLobbyChangeGameDto {
  queueId: number;
  isCustom: boolean;
  customGameLobby?: LolLobbyLobbyCustomGameLobby;
  gameCustomization?: Map<string, string>;
}
export interface LolLobbyLobbyChangeQueue {
  queueId: number;
  isCustom: boolean;
  customGameLobby?: LolLobbyLobbyCustomGameLobby;
}
export interface LolLobbyLobbyCustomChampSelectStartResponse {
  success: boolean;
  failedPlayers: LolLobbyLobbyCustomFailedPlayer[];
}
export interface LolLobbyLobbyCustomFailedPlayer {
  summonerId: number;
  summonerName: string;
  reason: string;
}
export interface LolLobbyLobbyCustomGame {
  id: number;
  gameType: string;
  mapId: number;
  ownerSummonerName: string;
  spectatorPolicy: string;
  filledSpectatorSlots: number;
  maxSpectatorSlots: number;
  filledPlayerSlots: number;
  maxPlayerSlots: number;
  lobbyName: string;
  hasPassword: boolean;
  passbackUrl: string;
  partyId: string;
}
export interface LolLobbyLobbyCustomGameConfiguration {
  mapId: number;
  gameMode: string;
  mutators: LolLobbyQueueGameTypeConfig;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  spectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  teamSize: number;
  maxPlayerCount: number;
  tournamentGameMode: string;
  tournamentPassbackUrl: string;
  tournamentPassbackDataPacket: string;
  gameServerRegion: string;
}
export interface LolLobbyLobbyCustomGameLobby {
  lobbyName: string;
  lobbyPassword: string;
  configuration: LolLobbyLobbyCustomGameConfiguration;
  teamOne: LolLobbyLobbyMember[];
  teamTwo: LolLobbyLobbyMember[];
  spectators: LolLobbyLobbyMember[];
  practiceGameRewardsDisabledReasons: string[];
  gameId: number;
}
export interface LolLobbyLobbyCustomJoinParameters {
  password?: string;
  asSpectator?: boolean;
}
export interface LolLobbyLobbyDto {
  partyId: string;
  partyType: string;
  members: LolLobbyLobbyParticipantDto[];
  localMember: LolLobbyLobbyParticipantDto;
  invitations: LolLobbyLobbyInvitationDto[];
  canStartActivity: boolean;
  restrictions?: LolLobbyEligibilityRestriction[];
  warnings?: LolLobbyEligibilityRestriction[];
  gameConfig: LolLobbyLobbyGameConfigDto;
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolLobbyMucJwtDto;
  scarcePositions: string[];
}
export interface LolLobbyLobbyGameConfigDto {
  gameMode: string;
  mapId: number;
  queueId: number;
  pickType: string;
  maxTeamSize: number;
  maxLobbySize: number;
  maxHumanPlayers: number;
  allowablePremadeSizes: number[];
  premadeSizeAllowed: boolean;
  isTeamBuilderManaged: boolean;
  isCustom: boolean;
  showPositionSelector: boolean;
  isLobbyFull: boolean;
  shouldForceScarcePositionSelection: boolean;
  customLobbyName: string;
  customMutatorName: string;
  customTeam100: LolLobbyLobbyParticipantDto[];
  customTeam200: LolLobbyLobbyParticipantDto[];
  customSpectators: LolLobbyLobbyParticipantDto[];
  customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  customRewardsDisabledReasons: string[];
}
export interface LolLobbyLobbyInvitation {
  id: string;
  fromSummonerId: number;
  toSummonerId: number;
  state: LolLobbyLobbyInvitationState;
  errorType: string;
  timestamp: string;
  invitationMetaData: object;
  eligibility: LolLobbyEligibility;
  fromSummonerName: string;
  toSummonerName: string;
}
export interface LolLobbyLobbyInvitationDto {
  invitationId: string;
  toSummonerId: number;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  toSummonerName: string;
  invitationType: LolLobbyInvitationType;
}
export type LolLobbyLobbyInvitationState =
  | "Accepted"
  | "Declined"
  | "Error"
  | "Joined"
  | "Kicked"
  | "OnHold"
  | "Pending"
  | "Requested";
export interface LolLobbyLobbyLastQueuedLobby {
  queueId: number;
  wasOwner: boolean;
  canPlayAgain: boolean;
  members: LolLobbyLobbyLastQueuedMember[];
}
export interface LolLobbyLobbyLastQueuedMember {
  id: number;
}
export interface LolLobbyLobbyMatchmakingLowPriorityDataResource {
  penalizedSummonerIds: number[];
  penaltyTime: number;
  penaltyTimeRemaining: number;
  bustedLeaverAccessToken: string;
  reason: string;
}
export interface LolLobbyLobbyMatchmakingSearchErrorResource {
  id: number;
  errorType: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
  message: string;
}
export interface LolLobbyLobbyMatchmakingSearchResource {
  searchState: LolLobbyLobbyMatchmakingSearchState;
  lowPriorityData: LolLobbyLobbyMatchmakingLowPriorityDataResource;
  errors: LolLobbyLobbyMatchmakingSearchErrorResource[];
}
export type LolLobbyLobbyMatchmakingSearchState =
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Error"
  | "Found"
  | "Invalid"
  | "Searching"
  | "ServiceError"
  | "ServiceShutdown";
export interface LolLobbyLobbyMember {
  id: number;
  isOwner: boolean;
  isSpectator: boolean;
  canInviteOthers: boolean;
  positionPreferences: LolLobbyLobbyPositionPreferences;
  excludedPositionPreference?: string;
  summonerInternalName: string;
  showPositionExcluder: boolean;
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  isBot: boolean;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  botChampionId: number;
}
export interface LolLobbyLobbyNotification {
  notificationId: string;
  notificationReason: string;
  summonerIds: number[];
  timestamp: number;
}
export interface LolLobbyLobbyParticipantDto {
  summonerId: number;
  summonerIconId: number;
  summonerName: string;
  summonerInternalName: string;
  puuid: string;
  summonerLevel: number;
  allowedStartActivity: boolean;
  allowedChangeActivity: boolean;
  allowedToggleInvite: boolean;
  allowedKickOthers: boolean;
  allowedInviteOthers: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  teamId: number;
  firstPositionPreference: string;
  secondPositionPreference: string;
  primaryChampionPreference: number;
  secondaryChampionPreference: number;
  ready: boolean;
  showGhostedBanner: boolean;
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  isBot: boolean;
  botId: string;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  botChampionId: number;
}
export type LolLobbyLobbyPartyRewardType = "Icon" | "Ip" | "None";
export interface LolLobbyLobbyPartyRewards {
  isEnabled: boolean;
  queueId: number;
  isCustom: boolean;
  partyRewards: LolLobbyPartyReward[];
}
export interface LolLobbyLobbyPositionPreferences {
  firstPreference: string;
  secondPreference: string;
}
export type LolLobbyLobbyRemovedFromGameReason =
  | "Disbanded"
  | "GameStartError"
  | "Kicked"
  | "Left"
  | "None"
  | "Other"
  | "ServiceError"
  | "ServiceShutdown"
  | "Timeout";
export interface LolLobbyLobbyStatus {
  queueId: number;
  isCustom: boolean;
  isPracticeTool: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  allowedPlayAgain: boolean;
  memberSummonerIds: number[];
  invitedSummonerIds: number[];
  lobbyId?: string;
  customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
}
export interface LolLobbyLobbyTimer {
  enabled: boolean;
  countdown: number;
}
export interface LolLobbyLoginSession {
  state: LolLobbyLoginSessionStates;
  username: string;
  userAuthToken: string;
  accountId: number;
  summonerId: number;
  idToken: string;
  puuid: string;
  connected: boolean;
}
export type LolLobbyLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export type LolLobbyMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged";
export interface LolLobbyMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolLobbyOpenPartyToggleAnalytics {
  partyId: string;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  playerId: string;
  initialState: string;
  finalState: string;
  numOfToggles: number;
  startTimestamp: number;
  endTimestamp: number;
  elapsedTime: number;
  startTransition: string;
  endTransition: string;
  gameMode: string;
}
export interface LolLobbyPartiesInvitationAnalytics {
  partyId: string;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  players: LolLobbyPartiesInvitationPlayerAnalytics[];
}
export interface LolLobbyPartiesInvitationPlayerAnalytics {
  puuid: string;
  summonerId: number;
  role: string;
}
export interface LolLobbyPartyChatDto {
  jid: string;
  mucJwtDto: LolLobbyMucJwtDto;
}
export interface LolLobbyPartyDto {
  partyId: string;
  platformId: string;
  players: LolLobbyPartyMemberDto[];
  chat: LolLobbyPartyChatDto;
  maxPartySize: number;
  partyType: string;
  gameMode: LolLobbyGameModeDto;
  activityLocked: boolean;
  version: number;
  activityStartedUtcMillis: number;
  activityResumeUtcMillis: number;
  activeRestrictions: LolLobbyQueueRestrictionDto;
  eligibilityHash: number;
  eligibilityRestrictions?: LolLobbyGatekeeperRestrictionDto[];
  eligibilityWarnings?: LolLobbyGatekeeperRestrictionDto[];
  botParticipants?: LolLobbyBotParticipantDto[];
}
export type LolLobbyPartyEogStatusCategory = "kLeft" | "kOnEog" | "kPlayAgain";
export interface LolLobbyPartyInviteAnalytics {
  partyId: string;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  fromSummonerId: number;
  toSummonerId: number;
  partyType: string;
  gameMode: string;
}
export interface LolLobbyPartyMemberDto {
  platformId: string;
  puuid: string;
  accountId: number;
  summonerId: number;
  partyId: string;
  partyVersion: number;
  role: LolLobbyPartyMemberRoleEnum;
  gameMode?: LolLobbyGameModeDto;
  ready?: boolean;
  metadata: LolLobbyPartyMemberMetadataDto;
  invitedBySummonerId?: number;
  inviteTimestamp?: number;
  canInvite?: boolean;
  team: string;
}
export interface LolLobbyPartyMemberMetadataDto {
  positionPref: string[];
  championSelection?: number;
  skinSelection?: number;
  properties?: object;
  playerSlots: LolLobbyQuickPlayPresetSlotDto[];
}
export type LolLobbyPartyMemberRoleEnum =
  | "DECLINED"
  | "HOLD"
  | "INVITED"
  | "KICKED"
  | "LEADER"
  | "MEMBER"
  | "NONE";
export interface LolLobbyPartyNotificationEnvelopeDto {
  player?: LolLobbyPlayerDto;
  queueRestriction?: LolLobbyQueueRestrictionDto;
}
export interface LolLobbyPartyPresenceData {
  partyId: string;
  queueId: number;
  summoners: number[];
  maxPlayers: number;
}
export interface LolLobbyPartyQueueEligibilityDto {
  partyRestrictions: LolLobbyGatekeeperRestrictionDto[];
  availableQueueIds: number[];
}
export interface LolLobbyPartyReward {
  premadeSize: number;
  type: LolLobbyLobbyPartyRewardType;
  value: string;
}
export interface LolLobbyPartyStatusDto {
  readyPlayers: string[];
  leftPlayers: string[];
  eogPlayers: string[];
  partySize: number;
}
export interface LolLobbyPlayerCollectionDto {
  players: LolLobbyPlayerDto[];
}
export interface LolLobbyPlayerDto {
  puuid: string;
  platformId: string;
  accountId: number;
  summonerId: number;
  eligibilityHash: number;
  serverUtcMillis: number;
  parties?: LolLobbyPartyMemberDto[];
  currentParty?: LolLobbyPartyDto;
  registration: LolLobbyRegistrationCredentials;
  createdAt: number;
  version: number;
}
export interface LolLobbyPlayerStatus {
  currentLobbyStatus?: LolLobbyLobbyStatus;
  lastQueuedLobbyStatus?: LolLobbyLobbyStatus;
  canInviteOthersAtEog: boolean;
}
export type LolLobbyPlayerUpdateType =
  | "Direct"
  | "None"
  | "RMS"
  | "ServiceProxy";
export interface LolLobbyPremadeMemberDto {
  displayName: string;
  puuid: string;
  partyId: string;
  summonerId: number;
  role: LolLobbyPartyMemberRoleEnum;
}
export interface LolLobbyPremadePartyDto {
  partyId: string;
  commsEnabled: boolean;
  players: Map<string, LolLobbyPremadeMemberDto>;
}
export interface LolLobbyPremadeRelationshipAnalytics {
  puuid: string;
  summonerId: number;
  platformId: string;
  eventType: string;
  eventData: object;
  eventTimestamp: number;
  premadePlayers: string[];
  friendPlayers: string[];
}
export interface LolLobbyQueue {
  id: number;
  mapId: number;
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  type: string;
  gameMode: string;
  assetMutator: string;
  maxTierForPremadeSize2: string;
  maxDivisionForPremadeSize2: string;
  category: LolLobbyQueueGameCategory;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  minLevel: number;
  isRanked: boolean;
  areFreeChampionsAllowed: boolean;
  isTeamBuilderManaged: boolean;
  queueAvailability: LolLobbyQueueAvailability;
  queueRewards: LolLobbyQueueReward;
  spectatorEnabled: boolean;
  championsRequiredToPlay: number;
  allowablePremadeSizes: number[];
  showPositionSelector: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export type LolLobbyQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export interface LolLobbyQueueCustomGame {
  queueAvailability: LolLobbyQueueAvailability;
}
export type LolLobbyQueueCustomGameSpectatorPolicy =
  | "AllAllowed"
  | "FriendsAllowed"
  | "LobbyAllowed"
  | "NotAllowed";
export type LolLobbyQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolLobbyQueueGameTypeConfig {
  id: number;
  name: string;
  maxAllowableBans: number;
  allowTrades: boolean;
  exclusivePick: boolean;
  duplicatePick: boolean;
  teamChampionPool: boolean;
  crossTeamChampionPool: boolean;
  advancedLearningQuests: boolean;
  battleBoost: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  learningQuests: boolean;
  onboardCoopBeginner: boolean;
  reroll: boolean;
  mainPickTimerDuration: number;
  postPickTimerDuration: number;
  banTimerDuration: number;
  pickMode: string;
  banMode: string;
  gameModeOverride?: string;
  numPlayersPerTeamOverride?: number;
}
export interface LolLobbyQueueRestrictionDto {
  gatekeeperRestrictions: LolLobbyGatekeeperRestrictionDto[];
}
export interface LolLobbyQueueReward {
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  isChampionPointsEnabled: boolean;
  partySizeIpRewards: number[];
}
export interface LolLobbyQuickPlayPresetSlotDto {
  championId: number;
  skinId: number;
  positionPreference: string;
  perks: string;
  spell1: number;
  spell2: number;
}
export interface LolLobbyRankedPositionInfoDTO {
  queue: string;
  tier: string;
  rank: string;
}
export interface LolLobbyRankedStatsUnsignedDTO {
  queues: LolLobbyRankedPositionInfoDTO[];
  highestPreviousSeasonEndTier: string;
  highestPreviousSeasonEndRank: string;
  jwt: string;
}
export interface LolLobbyReadyDto {
  ready: boolean;
}
export interface LolLobbyReceivedInvitationDto {
  invitationId: string;
  fromSummonerId: number;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  fromSummonerName: string;
  canAcceptInvitation: boolean;
  restrictions: LolLobbyEligibilityRestriction[];
  gameConfig: LolLobbyReceivedInvitationGameConfigDto;
  invitationType: LolLobbyInvitationType;
}
export interface LolLobbyReceivedInvitationGameConfigDto {
  gameMode: string;
  queueId: number;
  mapId: number;
  inviteGameType: string;
}
export interface LolLobbyRegistrationCredentials {
  summonerToken?: string;
  inventoryToken?: string;
  inventoryTokens?: string[];
  simpleInventoryToken?: string;
  rankedOverviewToken?: string;
  gameClientVersion?: string;
  playerTokens?: Map<string, string>;
}
export interface LolLobbyRegistrationStatus {
  complete: boolean;
  errorCodes: string[];
}
export interface LolLobbyRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolLobbyServiceProxyPayload {
  method: string;
  url: string;
  body: string;
}
export interface LolLobbySummoner {
  summonerId: number;
  summonerLevel: number;
  accountId: number;
  puuid: string;
  profileIconId: number;
  displayName: string;
  internalName: string;
}
export interface LolLobbyTeamBuilderActionV1 {
  actionId: number;
  actorCellId: number;
  type: string;
  championId: number;
  completed: boolean;
  duration: number;
}
export interface LolLobbyTeamBuilderAfkCheckStateV1 {
  maxAfkMillis: number;
  remainingAfkMillis: number;
  afkReady: boolean;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  additionalInventoryTypes: string[];
  compressAfkCheckPayload: boolean;
  mucJwtDto: LolLobbyTeamBuilderMucJwtDto;
}
export interface LolLobbyTeamBuilderBackwardsTransitionInfoV1 {
  backwardsTransitionReason: string;
  initiatorSummonerIds: number[];
}
export interface LolLobbyTeamBuilderBenchChampion {
  championId: number;
  isPriority: boolean;
}
export interface LolLobbyTeamBuilderCellV1 {
  teamId: number;
  cellId: number;
  championPickIntent: number;
  championId: number;
  skinId: number;
  assignedPosition: string;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  puuid: string;
  entitledFeatureType: string;
  nameVisibilityType: string;
  obfuscatedSummonerId: number;
  obfuscatedPuuid: string;
}
export interface LolLobbyTeamBuilderCellsV1 {
  alliedTeam: LolLobbyTeamBuilderCellV1[];
  enemyTeam: LolLobbyTeamBuilderCellV1[];
}
export interface LolLobbyTeamBuilderCeremonyV1 {
  name: string;
  duration: number;
}
export interface LolLobbyTeamBuilderChampSelectAction {
  id: number;
  actorCellId: number;
  championId: number;
  type: string;
  completed: boolean;
  isAllyAction: boolean;
  isInProgress: boolean;
}
export interface LolLobbyTeamBuilderChampSelectChatRoomDetails {
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolLobbyTeamBuilderMucJwtDto;
}
export interface LolLobbyTeamBuilderChampSelectDevPanelData {
  counter: number;
  dtoIndex: number;
  queueId: number;
  teamIdSuffix: number;
}
export interface LolLobbyTeamBuilderChampSelectMySelection {
  selectedSkinId?: number;
  spell1Id?: number;
  spell2Id?: number;
  wardSkinId?: number;
}
export interface LolLobbyTeamBuilderChampSelectPlayerSelection {
  cellId: number;
  championId: number;
  selectedSkinId: number;
  wardSkinId: number;
  spell1Id: number;
  spell2Id: number;
  team: number;
  assignedPosition: string;
  championPickIntent: number;
  playerType: string;
  summonerId: number;
  puuid: string;
  entitledFeatureType: string;
  nameVisibilityType: string;
  obfuscatedSummonerId: number;
  obfuscatedPuuid: string;
}
export interface LolLobbyTeamBuilderChampSelectReport {
  offender_puuid: string;
  categories: string[];
  location: string;
  comment: string;
  match_token: string;
}
export interface LolLobbyTeamBuilderChampSelectReportV2 {
  offenderId: string;
  categories: string[];
  location: string;
  comment: string;
  tokenType: string;
  token: string;
}
export interface LolLobbyTeamBuilderChampSelectSession {
  gameId: number;
  timer: LolLobbyTeamBuilderChampSelectTimer;
  chatDetails: LolLobbyTeamBuilderChampSelectChatRoomDetails;
  myTeam: LolLobbyTeamBuilderChampSelectPlayerSelection[];
  theirTeam: LolLobbyTeamBuilderChampSelectPlayerSelection[];
  trades: LolLobbyTeamBuilderChampSelectTradeContract[];
  pickOrderSwaps: LolLobbyTeamBuilderChampSelectSwapContract[];
  actions: object[];
  localPlayerCellId: number;
  allowSkinSelection: boolean;
  allowDuplicatePicks: boolean;
  allowBattleBoost: boolean;
  boostableSkinCount: number;
  allowRerolling: boolean;
  rerollsRemaining: number;
  allowLockedEvents: boolean;
  lockedEventIndex: number;
  benchEnabled: boolean;
  benchChampions: LolLobbyTeamBuilderBenchChampion[];
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureState;
  counter: number;
  recoveryCounter: number;
  skipChampionSelect: boolean;
  isSpectating: boolean;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
}
export interface LolLobbyTeamBuilderChampSelectSwapContract {
  id: number;
  cellId: number;
  state: LolLobbyTeamBuilderChampSelectSwapState;
}
export type LolLobbyTeamBuilderChampSelectSwapState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolLobbyTeamBuilderChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  totalTimeInPhase: number;
  phase: string;
  isInfinite: boolean;
  internalNowInEpochMs: number;
}
export interface LolLobbyTeamBuilderChampSelectTradeContract {
  id: number;
  cellId: number;
  state: LolLobbyTeamBuilderChampSelectTradeState;
}
export type LolLobbyTeamBuilderChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolLobbyTeamBuilderChampionBenchChampionV1 {
  championId: number;
  isPriority: boolean;
}
export interface LolLobbyTeamBuilderChampionBenchStateV1 {
  benchEnabled: boolean;
  championIds: number[];
  benchChampions: LolLobbyTeamBuilderChampionBenchChampionV1[];
}
export interface LolLobbyTeamBuilderChampionSelectPreferences {
  skins: Map<string, number>;
  spells: Map<string, object>;
}
export interface LolLobbyTeamBuilderChampionSelectStateV1 {
  teamId: string;
  teamChatRoomId: string;
  subphase: string;
  actionSetList: object[];
  ceremoniesByActionSetIndex: Map<string, object>;
  currentActionSetIndex: number;
  cells: LolLobbyTeamBuilderCellsV1;
  localPlayerCellId: number;
  currentTotalTimeMillis: number;
  currentTimeRemainingMillis: number;
  trades: LolLobbyTeamBuilderTradeV1[];
  pickOrderSwaps: LolLobbyTeamBuilderPickOrderSwapV1[];
  pickIntentClearedReason: string;
  allowOptingOutOfBanning: boolean;
  allowSkinSelection: boolean;
  allowDuplicatePicks: boolean;
  lcuSkipsSendingLoadoutsGco: boolean;
  rerollState: LolLobbyTeamBuilderRerollStateV1;
  lockedEventsState: LolLobbyTeamBuilderLockedEventsStateV1;
  battleBoostState: LolLobbyTeamBuilderTeamBuilderBoostInfo;
  championBenchState: LolLobbyTeamBuilderChampionBenchStateV1;
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureStateV1;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  skipChampionSelect: boolean;
  isSpectating: boolean;
}
export interface LolLobbyTeamBuilderCountdownTimer {
  phaseName: string;
  timer: number;
  counter: number;
}
export interface LolLobbyTeamBuilderEntitledFeatureState {
  additionalRerolls: number;
  unlockedSkinIds: number[];
}
export interface LolLobbyTeamBuilderEntitledFeatureStateV1 {
  additionalRerolls: number;
  unlockedSkinsState: LolLobbyTeamBuilderUnlockedSkinsStateV1;
}
export interface LolLobbyTeamBuilderGameModeSpellList {
  spells: number[];
}
export interface LolLobbyTeamBuilderGameflowGameClient {
  running: boolean;
}
export interface LolLobbyTeamBuilderGameflowGameMap {
  perPositionRequiredSummonerSpells: Map<
    string,
    LolLobbyTeamBuilderGameModeSpellList
  >;
  perPositionDisallowedSummonerSpells: Map<
    string,
    LolLobbyTeamBuilderGameModeSpellList
  >;
}
export interface LolLobbyTeamBuilderGameflowSession {
  gameClient: LolLobbyTeamBuilderGameflowGameClient;
  map: LolLobbyTeamBuilderGameflowGameMap;
}
export interface LolLobbyTeamBuilderGatekeeperRestricted {
  gatekeeperRestrictions: LolLobbyTeamBuilderGatekeeperRestriction[];
}
export interface LolLobbyTeamBuilderGatekeeperRestriction {
  summonerId: number;
  reason: string;
  remainingMillis: number;
  payload: string;
  queueId: number;
}
export interface LolLobbyTeamBuilderLeaverBusterAbandoned {
  abandonerName: string;
}
export interface LolLobbyTeamBuilderLobby {
  queueId: number;
  invitationId: string;
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolLobbyTeamBuilderMucJwtDto;
  members: LolLobbyTeamBuilderLobbyMember[];
  localMember: LolLobbyTeamBuilderLobbyMember;
  invitations: LolLobbyTeamBuilderLobbyInvitation[];
  wasKicked: boolean;
  removalReason: LolLobbyTeamBuilderLobbyRemovedFromGameReason;
  canStartMatchmaking: boolean;
  showPositionSelector: boolean;
  showPositionExcluder: boolean;
  specifiablePositionPreferences: string[];
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
  isTeamBuilderManaged: boolean;
  premadeSizeAllowed: boolean;
  requiredPositionCoverageMet: boolean;
  allowablePremadeSizes: number[];
}
export interface LolLobbyTeamBuilderLobbyCountdownTimer {
  phaseName: string;
  timer: number;
  counter: number;
}
export interface LolLobbyTeamBuilderLobbyInvitation {
  invitationMetaData: object;
}
export interface LolLobbyTeamBuilderLobbyMember {
  id: number;
  isOwner: boolean;
  canInviteOthers: boolean;
  positionPreferences: LolLobbyTeamBuilderLobbyPositionPreferences;
  excludedPositionPreference?: string;
  showPositionExcluder: boolean;
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
}
export interface LolLobbyTeamBuilderLobbyPositionPreferences {
  firstPreference: string;
  secondPreference: string;
}
export interface LolLobbyTeamBuilderLobbyPositionPreferencesV2 {
  firstPreference: string;
  secondPreference: string;
  excludedPreference: string;
}
export type LolLobbyTeamBuilderLobbyRemovedFromGameReason =
  | "Disbanded"
  | "GameStartError"
  | "Kicked"
  | "Left"
  | "None"
  | "Other"
  | "ServiceError"
  | "ServiceShutdown"
  | "Timeout";
export interface LolLobbyTeamBuilderLockedEventsStateV1 {
  allowLockedEvents: boolean;
  lockedEventIndex: number;
}
export interface LolLobbyTeamBuilderLoginSession {
  state: LolLobbyTeamBuilderLoginSessionState;
  summonerId: number;
  accountId: number;
  connected: boolean;
}
export type LolLobbyTeamBuilderLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolLobbyTeamBuilderMatchmakingDodgeData {
  state: LolLobbyTeamBuilderMatchmakingDodgeState;
  dodgerId: number;
}
export type LolLobbyTeamBuilderMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export type LolLobbyTeamBuilderMatchmakingDodgeWarning =
  | "None"
  | "Penalty"
  | "Warning";
export interface LolLobbyTeamBuilderMatchmakingLowPriorityData {
  penalizedSummonerIds: number[];
  penaltyTime: number;
  penaltyTimeRemaining: number;
  bustedLeaverAccessToken: string;
}
export interface LolLobbyTeamBuilderMatchmakingReadyCheckResource {
  state: LolLobbyTeamBuilderMatchmakingReadyCheckState;
  playerResponse: LolLobbyTeamBuilderMatchmakingReadyCheckResponse;
  dodgeWarning: LolLobbyTeamBuilderMatchmakingDodgeWarning;
  timer: number;
  declinerIds: number[];
}
export type LolLobbyTeamBuilderMatchmakingReadyCheckResponse =
  | "Accepted"
  | "Declined"
  | "None";
export type LolLobbyTeamBuilderMatchmakingReadyCheckState =
  | "Error"
  | "EveryoneReady"
  | "InProgress"
  | "Invalid"
  | "PartyNotReady"
  | "StrangerNotReady";
export interface LolLobbyTeamBuilderMatchmakingSearch {
  searchState: LolLobbyTeamBuilderMatchmakingSearchState;
}
export interface LolLobbyTeamBuilderMatchmakingSearchErrorResource {
  id: number;
  errorType: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
  message: string;
}
export interface LolLobbyTeamBuilderMatchmakingSearchResource {
  queueId: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  searchState: LolLobbyTeamBuilderMatchmakingSearchState;
  timeInQueue: number;
  estimatedQueueTime: number;
  readyCheck: LolLobbyTeamBuilderMatchmakingReadyCheckResource;
  dodgeData: LolLobbyTeamBuilderMatchmakingDodgeData;
  lowPriorityData: LolLobbyTeamBuilderMatchmakingLowPriorityData;
  errors: LolLobbyTeamBuilderMatchmakingSearchErrorResource[];
}
export type LolLobbyTeamBuilderMatchmakingSearchState =
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Error"
  | "Found"
  | "Invalid"
  | "Searching"
  | "ServiceError"
  | "ServiceShutdown";
export interface LolLobbyTeamBuilderMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolLobbyTeamBuilderPickOrderSwapV1 {
  id: number;
  cellId: number;
  state: string;
}
export interface LolLobbyTeamBuilderQueue {
  id: number;
  mapId: number;
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  type: string;
  gameMode: string;
  assetMutator: string;
  category: LolLobbyTeamBuilderQueueGameCategory;
  gameTypeConfig: LolLobbyTeamBuilderQueueGameTypeConfig;
  numPlayersPerTeam: number;
  minimumParticipantListSize: number;
  maximumParticipantListSize: number;
  minLevel: number;
  isRanked: boolean;
  areFreeChampionsAllowed: boolean;
  isTeamBuilderManaged: boolean;
  queueAvailability: LolLobbyTeamBuilderQueueAvailability;
  queueRewards: LolLobbyTeamBuilderQueueReward;
  spectatorEnabled: boolean;
  championsRequiredToPlay: number;
  allowablePremadeSizes: number[];
  showPositionSelector: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
}
export type LolLobbyTeamBuilderQueueAvailability =
  | "Available"
  | "DoesntMeetRequirements"
  | "PlatformDisabled";
export type LolLobbyTeamBuilderQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolLobbyTeamBuilderQueueGameTypeConfig {
  id: number;
  name: string;
  maxAllowableBans: number;
  allowTrades: boolean;
  allowPickOrderSwaps: boolean;
  exclusivePick: boolean;
  duplicatePick: boolean;
  teamChampionPool: boolean;
  crossTeamChampionPool: boolean;
  advancedLearningQuests: boolean;
  battleBoost: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  learningQuests: boolean;
  onboardCoopBeginner: boolean;
  reroll: boolean;
  mainPickTimerDuration: number;
  postPickTimerDuration: number;
  banTimerDuration: number;
  pickMode: string;
  banMode: string;
}
export interface LolLobbyTeamBuilderQueueReward {
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  isChampionPointsEnabled: boolean;
  partySizeIpRewards: number[];
}
export interface LolLobbyTeamBuilderRerollStateV1 {
  allowRerolling: boolean;
  rerollsRemaining: number;
}
export interface LolLobbyTeamBuilderSettingCategoryResource {
  schemaVersion: number;
  data: LolLobbyTeamBuilderChampionSelectPreferences;
}
export interface LolLobbyTeamBuilderTBDMatchmakingState {
  estimatedMatchmakingTimeMillis: number;
  timeInMatchmakingMillis: number;
  backwardsTransitionReason: string;
}
export interface LolLobbyTeamBuilderTbLobbyStateResource {
  counter: number;
  recoveryCounter: number;
  phaseName: string;
  queueId: number;
  gameId: number;
  matchmakingState?: LolLobbyTeamBuilderTBDMatchmakingState;
  afkCheckState?: LolLobbyTeamBuilderAfkCheckStateV1;
  championSelectState?: LolLobbyTeamBuilderChampionSelectStateV1;
}
export interface LolLobbyTeamBuilderTbRemovedFromServiceNotification {
  reason: string;
  backwardsTransitionInfo: LolLobbyTeamBuilderBackwardsTransitionInfoV1;
}
export interface LolLobbyTeamBuilderTbdInventory {
  lastSelectedSkinIdByChampionId: Map<string, number>;
  skinIds: number[];
  spellIds: number[];
  initialSpellIds: number[];
  allChampionIds: number[];
  disabledChampionIds: number[];
}
export interface LolLobbyTeamBuilderTeamBoost {
  summonerId: number;
  skinUnlockMode: string;
  price: number;
  ipReward: number;
  ipRewardForPurchaser: number;
  availableSkins: number[];
  unlocked: boolean;
}
export interface LolLobbyTeamBuilderTeamBuilderBoostInfo {
  allowBattleBoost: boolean;
  boostableSkinCount: number;
  activatorCellId: number;
  battleBoostActivated: boolean;
  cost: number;
  unlockedSkinIds: number[];
}
export interface LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse {
  payload: LolLobbyTeamBuilderTbLobbyStateResource;
  status: string;
}
export interface LolLobbyTeamBuilderTradeV1 {
  id: number;
  cellId: number;
  state: string;
}
export interface LolLobbyTeamBuilderUnlockedSkinsStateV1 {
  unlockedSkinIds: number[];
}
export interface LolLobbyUserInfoToken {
  userInfo: string;
}
export interface LolLobbyUserResource {
  summonerId: number;
  lol: Map<string, string>;
}
export interface LolLoginAccessToken {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolLoginAccountStateResource {
  state: LolLoginAccountStateType;
}
export type LolLoginAccountStateType =
  | "CREATING"
  | "ENABLED"
  | "GENERATING"
  | "TRANSFERRED_OUT"
  | "TRANSFERRING_IN"
  | "TRANSFERRING_OUT";
export interface LolLoginAuthorization {
  currentPlatformId: string;
  currentAccountId: number;
  subject: string;
}
export type LolLoginConfigReadinessEnum = "Disabled" | "NotReady" | "Ready";
export interface LolLoginConfigStatus {
  readiness: LolLoginConfigReadinessEnum;
}
export type LolLoginConfigType = "player" | "public";
export interface LolLoginCrashReportingEnvironment {
  environment: string;
  userName: string;
  userId: string;
}
export interface LolLoginIdToken {
  token: string;
  expiry: number;
}
export interface LolLoginLcdsResponse {
  typeName: string;
  body: object;
}
export interface LolLoginLcdsServiceProxyResponse {
  serviceName: string;
  methodName: string;
  messageId: string;
  status: string;
  payload: string;
  compressedPayload: boolean;
}
export type LolLoginLeagueSessionStatus =
  | "ANTI_ADDICTION_EXPIRED"
  | "DUPLICATED"
  | "EXPIRED"
  | "INITIALIZED"
  | "UNINITIALIZED";
export interface LolLoginLeagueSessionTokenEnvelope {
  token?: string;
  logoutOnFailure: boolean;
}
export type LolLoginLoginConnectionMode =
  | "Legacy"
  | "Partner"
  | "Preparing"
  | "RiotClient";
export interface LolLoginLoginConnectionState {
  mode: LolLoginLoginConnectionMode;
  isUsingDeveloperAuthToken: boolean;
  isPartnerRiotClient: boolean;
}
export interface LolLoginLoginError {
  id: string;
  messageId: string;
  description: string;
}
export interface LolLoginLoginQueue {
  estimatedPositionInQueue: number;
  isPositionCapped: boolean;
  approximateWaitTimeSeconds?: number;
}
export interface LolLoginLoginSession {
  state: LolLoginLoginSessionStates;
  username: string;
  userAuthToken: string;
  accountId: number;
  summonerId?: number;
  isInLoginQueue: boolean;
  error?: LolLoginLoginError;
  idToken: string;
  puuid: string;
  isNewPlayer: boolean;
  connected: boolean;
}
export type LolLoginLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolLoginLoginSessionWallet {
  ip: number;
  rp: number;
}
export interface LolLoginPlatformGeneratedCredentials {
  username: string;
  password: string;
}
export interface LolLoginRSOConfigReadyState {
  ready: boolean;
}
export interface LolLoginRSOPlayerCredentials {
  username: string;
  password: string;
  platformId: string;
}
export interface LolLoginSummonerCreatedResource {
  summonerId: number;
}
export interface LolLoginSummonerSessionResource {
  summonerId: number;
  displayName: string;
  isNewPlayer: boolean;
}
export interface LolLoginUsernameAndPassword {
  username: string;
  password: string;
}
export interface LolLootAccountIdAndSummonerId {
  summonerId: number;
}
export type LolLootCelebrationType = "FULLSCREEN" | "NONE" | "TOAST";
export interface LolLootCollectionsChampionMinimal {
  id: number;
  ownership: LolLootCollectionsOwnership;
}
export interface LolLootCollectionsChampionSkinMinimal {
  championId: number;
  id: number;
  name: string;
  ownership: LolLootCollectionsOwnership;
  splashPath: string;
  tilePath: string;
}
export interface LolLootCollectionsEmote {
  itemId: number;
  ownershipType: LolLootInventoryOwnership;
}
export interface LolLootCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolLootCollectionsRental;
}
export interface LolLootCollectionsRental {
  rented: boolean;
}
export interface LolLootCollectionsStatstone {
  itemId: number;
  ownershipType: LolLootInventoryOwnership;
}
export interface LolLootCollectionsSummonerIcon {
  itemId: number;
}
export interface LolLootCollectionsWardSkin {
  id: number;
  name: string;
  ownership: LolLootCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}
export interface LolLootContextMenu {
  name: string;
  actionType: string;
  recipeDescription: string;
  recipeContextMenuAction: string;
  enabled: boolean;
  essenceType: string;
  essenceQuantity: number;
  requiredTokens: string;
  requiredOthers: string;
  requiredOthersName: string;
  requiredOthersCount: number;
}
export interface LolLootCosmeticsTFTDamageSkin {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  level: number;
  groupId: number;
  groupName: string;
  upgrades: string[];
}
export interface LolLootCosmeticsTFTDamageSkinViewModel {
  contentId: string;
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
  rarityValue: number;
  purchaseDate: string;
  isRecentItem: boolean;
  level: number;
  groupId: number;
  groupName: string;
  upgrades: LolLootCosmeticsTFTDamageSkinViewModel[];
}
export interface LolLootCosmeticsTFTMapSkinViewModel {
  itemId: number;
  name: string;
  description: string;
  loadoutsIcon: string;
  owned: boolean;
  selected: boolean;
  loyalty: boolean;
  f2p: boolean;
}
export interface LolLootCounter {
  id: string;
  name: string;
  groupId: string;
  direction: string;
  startValue: number;
}
export interface LolLootCounterInstance {
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  counterValue: number;
}
export interface LolLootCurrencyConfiguration {
  currenciesUsingCapWallets: string[];
}
export interface LolLootEntityInstance {
  groupId: string;
  counters: LolLootCounterInstance[];
  milestones: LolLootMilestoneInstance[];
}
export interface LolLootGameDataSummonerEmote {
  id: number;
  name: string;
  inventoryIcon: string;
  description: string;
}
export interface LolLootGameDataSummonerIcon {
  id: number;
  title: string;
  imagePath: string;
}
export type LolLootGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolLootGameflowSession {
  phase: LolLootGameflowPhase;
}
export type LolLootGrantStatus =
  | "FAILED"
  | "FULFILLED"
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION";
export interface LolLootGrantorDescription {
  appName: string;
  entityId: string;
}
export interface LolLootGroup {
  id: string;
  productId: string;
  name: string;
  repeat: LolLootRepeat;
  counters: LolLootCounter[];
  milestones: LolLootMilestone[];
}
export type LolLootInventoryOwnership = "F2P" | "OWNED" | "RENTED";
export interface LolLootItemKey {
  inventoryType: string;
  itemId: number;
}
export type LolLootItemOwnershipStatus = "FREE" | "NONE" | "OWNED" | "RENTAL";
export interface LolLootLoginDataPacket {
  simpleMessages: LolLootLoginSimpleMessage[];
}
export interface LolLootLoginSession {
  state: LolLootLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolLootLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolLootLoginSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolLootLootBundleContentGdsResource {
  localizedDescription: string;
}
export interface LolLootLootBundleGdsResource {
  id: string;
  description: string;
  descriptionLong: string;
  image: string;
  contents: LolLootLootBundleContentGdsResource[];
}
export interface LolLootLootDataGdsResource {
  LootItems: LolLootLootItemGdsResource[];
  LootRecipes: LolLootLootRecipeGdsResource[];
  LootTables: LolLootLootTableGdsResource[];
  LootBundles: LolLootLootBundleGdsResource[];
}
export interface LolLootLootDescription {
  lootName: string;
  localizedDescription: string;
  localizedDescriptionLong: string;
  imagePath: string;
  childLootTableNames: string[];
  childrenDescriptions: LolLootLootDescription[];
}
export interface LolLootLootDropTableEntryGdsResource {
  lootId: string;
  localizedDescription: string;
}
export interface LolLootLootGrantNotification {
  id: number;
  gameId: number;
  playerId: number;
  championId: number;
  playerGrade: string;
  lootName: string;
  messageKey: string;
  msgId: string;
  accountId: number;
}
export interface LolLootLootItem {
  lootName: string;
  asset: string;
  type: string;
  rarity: string;
  value: number;
  storeItemId: number;
  upgradeLootName: string;
  expiryTime: number;
  tags: string;
  displayCategories: string;
  rentalSeconds: number;
  rentalGames: number;
}
export interface LolLootLootItemGdsResource {
  id: string;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  recipeMenuTitle: string;
  recipeMenuSubtitle: string;
  mappedStoreId: number;
  lifetimeMax: number;
  autoRedeem: boolean;
  recipeMenuActive: boolean;
  rarity: LolLootLootRarity;
  type: LolLootLootType;
}
export interface LolLootLootMilestone {
  id: string;
  threshold: number;
  rewards: LolLootLootMilestoneReward[];
}
export type LolLootLootMilestoneClaimStatus =
  | "COMPLETED"
  | "FAILED"
  | "IN_PROGRESS"
  | "NOT_STARTED";
export interface LolLootLootMilestoneRepeat {
  repeatCount: number;
  repeatScope: number;
  multiplier: number;
}
export interface LolLootLootMilestoneReward {
  rewardGroupId: string;
  rewardType: string;
  itemInstanceId: string;
  inventoryType: string;
  itemId: number;
  quantity: number;
  lootItem?: LolLootPlayerLoot;
}
export interface LolLootLootMilestones {
  id: string;
  progressionConfigId: string;
  active: boolean;
  startDate: string;
  endDate: string;
  storeGroupTitle: string;
  repeat: LolLootLootMilestoneRepeat;
  lootItems: string[];
  recipes: string[];
  milestones: LolLootLootMilestone[];
  errorCachingMilestoneSet: boolean;
}
export interface LolLootLootMilestonesClaimResponse {
  lootMilestoneSetId: string;
  claimedMilestones: string[];
  status: LolLootLootMilestoneClaimStatus;
}
export interface LolLootLootMilestonesCounter {
  lootMilestonesId: string;
  counterValue: number;
  completedLoops: number;
  readyToClaimMilestones: string[];
}
export interface LolLootLootMilestonesDataGdsResource {
  id: string;
  storeGroupTitle: string;
  startDate: string;
  endDate: string;
  recipes: LolLootMilestonesRecipeGdsResource[];
  ledgerConfig: LolLootProgressionConfigGdsResource;
}
export interface LolLootLootOddsResponse {
  lootId: string;
  parentId: string;
  dropRate: number;
  quantity: number;
  label: string;
  query: string;
  lootOrder: number;
  children: LolLootLootOddsResponse[];
}
export interface LolLootLootOutputGdsResource {
  lootId: string;
  localizedDescription: string;
}
export type LolLootLootRarity =
  | "Default"
  | "Epic"
  | "Legendary"
  | "Mythic"
  | "Ultimate";
export interface LolLootLootRecipeGdsResource {
  id: string;
  description: string;
  contextMenuText: string;
  requirementText: string;
  imagePath: string;
  introVideoPath: string;
  loopVideoPath: string;
  outroVideoPath: string;
  hasVisibleLootOdds: boolean;
  outputs: LolLootLootOutputGdsResource[];
}
export interface LolLootLootTableGdsResource {
  id: string;
  description: string;
  descriptionLong: string;
  image: string;
  dropChance: LolLootLootDropTableEntryGdsResource[];
}
export type LolLootLootType =
  | "Boost"
  | "Chest"
  | "Companion"
  | "Currency"
  | "Egg"
  | "Egg_Color"
  | "Material"
  | "Skin"
  | "SkinBorder"
  | "Skin_Rental"
  | "Statstone"
  | "Statstone_Shard"
  | "SummonerIcon"
  | "TFT_Damage_Skin"
  | "TFT_Map_Skin"
  | "WardSkin";
export interface LolLootMilestone {
  id: string;
  name: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  properties: Map<string, string>;
}
export interface LolLootMilestoneInstance {
  milestoneId: string;
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  repeatSequence: number;
  triggered: boolean;
}
export interface LolLootMilestoneLootItemRewardGdsResource {
  internalName: string;
}
export interface LolLootMilestonesProgressionConfigRepeatGdsResource {
  name: LolLootMilestonesProgressionGroupRepeatGdsResource;
}
export interface LolLootMilestonesProgressionCounterGdsResource {
  id: string;
  name: string;
  direction: string;
  startValue: number;
}
export interface LolLootMilestonesProgressionGroupRepeatGdsResource {
  Count: number;
  Scope: number;
  Multiplier: number;
}
export interface LolLootMilestonesRecipeGdsResource {
  name: string;
}
export interface LolLootPlayerLoot {
  lootName: string;
  lootId: string;
  refId: string;
  localizedName: string;
  localizedDescription: string;
  itemDesc: string;
  displayCategories: string;
  rarity: string;
  tags: string;
  type: string;
  asset: string;
  tilePath: string;
  splashPath: string;
  shadowPath: string;
  upgradeLootName: string;
  upgradeEssenceName: string;
  disenchantLootName: string;
  localizedRecipeTitle: string;
  localizedRecipeSubtitle: string;
  itemStatus: LolLootItemOwnershipStatus;
  parentItemStatus: LolLootItemOwnershipStatus;
  redeemableStatus: LolLootRedeemableStatus;
  count: number;
  rentalGames: number;
  storeItemId: number;
  parentStoreItemId: number;
  value: number;
  upgradeEssenceValue: number;
  disenchantValue: number;
  expiryTime: number;
  rentalSeconds: number;
  isNew: boolean;
  isRental: boolean;
}
export interface LolLootPlayerLootDelta {
  deltaCount: number;
  playerLoot: LolLootPlayerLoot;
}
export interface LolLootPlayerLootMap {
  version: number;
  playerLoot: Map<string, LolLootPlayerLoot>;
}
export interface LolLootPlayerLootNotification {
  id: string;
  count: number;
  acknowledged: boolean;
}
export interface LolLootPlayerLootUpdate {
  added: LolLootPlayerLootDelta[];
  removed: LolLootPlayerLootDelta[];
  redeemed: LolLootPlayerLootDelta[];
}
export interface LolLootProgressionConfigGdsResource {
  id: string;
  name: string;
  repeat: LolLootMilestonesProgressionConfigRepeatGdsResource;
  counters: LolLootMilestonesProgressionCounterGdsResource[];
  milestones: LolLootProgressionConfigMilestoneGdsResource[];
}
export interface LolLootProgressionConfigMilestoneGdsResource {
  id: string;
  name: string;
  triggerValue: number;
  properties: LolLootProgressionConfigMilestonePropertiesGdsResource[];
  counter: LolLootMilestonesProgressionCounterGdsResource;
}
export interface LolLootProgressionConfigMilestonePropertiesGdsResource {
  id: string;
  name: string;
  description: string;
  rewardStrategy: string;
  rewards: LolLootProgressionConfigMilestoneRewardGdsResource[];
}
export interface LolLootProgressionConfigMilestoneRewardGdsResource {
  id: string;
  rewardType: string;
  quantity: number;
  lootItemToGrant?: LolLootMilestoneLootItemRewardGdsResource;
  legacyLootItem: string;
}
export interface LolLootQueryEvaluatedLootItem {
  lootName: string;
  localizedName: string;
}
export interface LolLootRMSPayload {
  productId: string;
  affinities: string[];
}
export interface LolLootRecipeMenuConfig {
  enabled: boolean;
  lootItemsUsingBreakoutRecipeMenu: string[];
  alwaysShowLootIds: string[];
}
export interface LolLootRecipeMetadata {
  guaranteedDescriptions: LolLootLootDescription[];
  bonusDescriptions: LolLootLootDescription[];
  tooltipsDisabled: boolean;
}
export interface LolLootRecipeOutput {
  lootName: string;
  quantity: number;
}
export interface LolLootRecipeSlot {
  slotNumber: number;
  lootIds: string[];
  tags: string;
  quantity: number;
}
export interface LolLootRecipeWithMilestones {
  recipeName: string;
  type: string;
  description: string;
  contextMenuText: string;
  requirementText: string;
  imagePath: string;
  introVideoPath: string;
  loopVideoPath: string;
  outroVideoPath: string;
  displayCategories: string;
  crafterName: string;
  slots: LolLootRecipeSlot[];
  outputs: LolLootRecipeOutput[];
  metadata: LolLootRecipeMetadata;
  lootMilestoneIds: string[];
}
export type LolLootRedeemableStatus =
  | "ALREADY_OWNED"
  | "ALREADY_RENTED"
  | "CHAMPION_NOT_OWNED"
  | "NOT_REDEEMABLE"
  | "NOT_REDEEMABLE_RENTAL"
  | "REDEEMABLE"
  | "REDEEMABLE_RENTAL"
  | "SKIN_NOT_OWNED"
  | "UNKNOWN";
export interface LolLootRegionLocale {
  region: string;
  locale: string;
}
export interface LolLootRepeat {
  count: number;
  scope: number;
  multiplier: number;
}
export interface LolLootRequestDTOSelectionRequestDTO {
  data: LolLootSelectionRequestDTO;
  metadata: LolLootRequestMetadataDTO;
}
export interface LolLootRequestDTOVectorSelectionRequestDTO {
  data: LolLootSelectionRequestDTO[];
  metadata: LolLootRequestMetadataDTO;
}
export interface LolLootRequestMetadataDTO {
  transactionId?: string;
}
export interface LolLootResponseDTOSvcRewardGrant {
  data: LolLootSvcRewardGrant;
  metadata: LolLootResponseMetadataDTO;
}
export interface LolLootResponseDTOMapRewardGroupIdSelectGrantStatus {
  data: Map<string, LolLootSelectGrantStatusResponse>;
  metadata: LolLootResponseMetadataDTO;
}
export interface LolLootResponseDTOVectorSvcRewardGrant {
  data: LolLootSvcRewardGrant[];
  metadata: LolLootResponseMetadataDTO;
}
export interface LolLootResponseDTOVectorSvcRewardGroup {
  data: LolLootSvcRewardGroup[];
  metadata: LolLootResponseMetadataDTO;
}
export interface LolLootResponseMetadataDTO {}
export interface LolLootReward {
  id: string;
  itemId: string;
  itemType: string;
  quantity: number;
  fulfillmentSource: string;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolLootRewardGrant {
  info: LolLootSvcRewardGrant;
  rewardGroup: LolLootSvcRewardGroup;
}
export type LolLootRewardStatus = "FAILED" | "FULFILLED" | "PENDING";
export type LolLootRewardStrategy = "ALL" | "RANDOM" | "SELECTION";
export interface LolLootRewardsConfig {
  GrantFiltering: boolean;
}
export type LolLootSelectGrantStatusResponse = "FAILED" | "SELECTED";
export interface LolLootSelectionRequestDTO {
  grantId: string;
  rewardGroupId: string;
  selections: string[];
}
export interface LolLootSelectionStrategyConfig {
  minSelectionsAllowed: number;
  maxSelectionsAllowed: number;
}
export interface LolLootSummoner {
  summonerLevel: number;
}
export interface LolLootSvcRewardGrant {
  id: string;
  granteeId: string;
  rewardGroupId: string;
  dateCreated: string;
  status: LolLootGrantStatus;
  grantElements: LolLootSvcRewardGrantElement[];
  selectedIds: string[];
  viewed: boolean;
  grantorDescription: LolLootGrantorDescription;
  messageParameters: Map<string, object>;
}
export interface LolLootSvcRewardGrantElement {
  elementId: string;
  itemId: string;
  itemType: string;
  fulfillmentSource: string;
  status: LolLootRewardStatus;
  quantity: number;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolLootSvcRewardGroup {
  id: string;
  productId: string;
  types: string[];
  rewards: LolLootReward[];
  childRewardGroupIds: string[];
  rewardStrategy: LolLootRewardStrategy;
  selectionStrategyConfig?: LolLootSelectionStrategyConfig;
  active: boolean;
  media: Map<string, string>;
  localizations: Map<string, string>;
  celebrationType: LolLootCelebrationType;
}
export interface LolLootTFTDamageSkinGroupViewModel {
  groupName: string;
  groupId: number;
  numOwned: number;
  numAvailable: number;
  items: LolLootCosmeticsTFTDamageSkinViewModel[];
}
export interface LolLootTFTDamageSkinGroupedViewModel {
  selectedLoadoutItem: LolLootCosmeticsTFTDamageSkinViewModel;
  defaultItemId: number;
  groups: LolLootTFTDamageSkinGroupViewModel[];
}
export interface LolLootTFTMapSkinGroupViewModel {
  items: LolLootCosmeticsTFTMapSkinViewModel[];
}
export interface LolLootTFTMapSkinGroupedViewModel {
  selectedLoadoutItem: LolLootCosmeticsTFTMapSkinViewModel;
  defaultItemId: number;
  groups: LolLootTFTMapSkinGroupViewModel[];
}
export interface LolLootVerboseLootOddsResponse {
  recipeName: string;
  chanceToContain: LolLootLootOddsResponse[];
  guaranteedToContain: LolLootLootOddsResponse[];
  lootItem: LolLootPlayerLoot;
  hasPityRules: boolean;
  checksOwnership: boolean;
}
export interface LolLoyaltyAccessToken {
  token: string;
}
export interface LolLoyaltyGlobalRewards {
  allChampions: boolean;
}
export interface LolLoyaltyInventoryDTO {
  items: Map<string, object>;
}
export interface LolLoyaltyInventoryItemDTO {
  inventoryType: string;
  loyalty: boolean;
}
export interface LolLoyaltyInventoryResponseDTO {
  data: LolLoyaltyInventoryDTO;
}
export interface LolLoyaltyLoginSession {
  state: LolLoyaltyLoginSessionStates;
  summonerId: number;
  accountId: number;
  puuid: string;
}
export type LolLoyaltyLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolLoyaltyLoyaltyRewards {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  global: LolLoyaltyGlobalRewards;
  ipBoost: number;
  xpBoost: Map<string, number>;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export interface LolLoyaltyLoyaltyRewardsSimplified {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  global: LolLoyaltyGlobalRewards;
  ipBoost: number;
  xpBoost: number;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export type LolLoyaltyLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolLoyaltyLoyaltyStatusNotification {
  status: LolLoyaltyLoyaltyStatus;
  rewards: LolLoyaltyLoyaltyRewardsSimplified;
  reloadInventory: boolean;
}
export interface LolLoyaltyPlayerNotification {
  critical: boolean;
  detailKey: string;
  source: string;
  state: string;
  titleKey: string;
  type: string;
  iconUrl: string;
}
export interface LolLoyaltyRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolLoyaltyRmsEntitlementPayload {
  itemId: string;
  itemTypeId: string;
  entitlementTypeId: string;
  resourceOperation: string;
}
export interface LolMapsGameModeSpellList {
  spells: number[];
}
export interface LolMapsMaps {
  id: number;
  isDefault: boolean;
  gameMode: string;
  gameModeName: string;
  gameModeShortName: string;
  gameModeDescription: string;
  gameMutator: string;
  isRGM: boolean;
  name: string;
  description: string;
  mapStringId: string;
  platformId: string;
  platformName: string;
  assets: Map<string, string>;
  locStrings: Map<string, string>;
  categorizedContentBundles: object;
  tutorialCards: LolMapsTutorialCard[];
  properties: object;
  perPositionRequiredSummonerSpells: Map<string, LolMapsGameModeSpellList>;
  perPositionDisallowedSummonerSpells: Map<string, LolMapsGameModeSpellList>;
}
export interface LolMapsTutorialCard {
  header?: string;
  footer?: string;
  description?: string;
  imagePath: string;
}
export interface LolMatchHistoryAcsEndPoint {
  url: string;
}
export interface LolMatchHistoryAcsPlayer {
  platformId: string;
  accountId: number;
}
export interface LolMatchHistoryGAMHSMatchHistoryData {
  metadata: LolMatchHistoryGAMHSMatchHistoryMetadata;
  json: object;
}
export interface LolMatchHistoryGAMHSMatchHistoryList {
  games: LolMatchHistoryGAMHSMatchHistoryData[];
  active_puuid: string;
}
export interface LolMatchHistoryGAMHSMatchHistoryMetadata {
  product: string;
  data_version: number;
  info_type: string;
  match_id: string;
  tags: string[];
  participants: string[];
  timestamp: number;
  private: boolean;
}
export interface LolMatchHistoryLoginSession {
  state: LolMatchHistoryLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
}
export type LolMatchHistoryLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolMatchHistoryMHSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  puuid: string;
}
export interface LolMatchHistoryMatchHistoryEvent {
  type: string;
  timestamp: number;
  participantId: number;
  teamId: number;
  itemId: number;
  killerId: number;
  victimId: number;
  skillSlot: number;
  position: LolMatchHistoryMatchHistoryPosition;
  assistingParticipantIds: number[];
  buildingType: string;
  laneType: string;
  towerType: string;
  monsterType: string;
  monsterSubType: string;
}
export interface LolMatchHistoryMatchHistoryGame {
  gameId: number;
  platformId: string;
  gameCreation: number;
  gameCreationDate: string;
  gameDuration: number;
  queueId: number;
  mapId: number;
  seasonId: number;
  gameVersion: string;
  gameMode: string;
  gameType: string;
  teams: LolMatchHistoryMatchHistoryTeam[];
  participants: LolMatchHistoryMatchHistoryParticipant[];
  participantIdentities: LolMatchHistoryMatchHistoryParticipantIdentities[];
}
export interface LolMatchHistoryMatchHistoryGameList {
  gameIndexBegin: number;
  gameIndexEnd: number;
  gameBeginDate: string;
  gameEndDate: string;
  gameCount: number;
  games: LolMatchHistoryMatchHistoryGame[];
}
export interface LolMatchHistoryMatchHistoryList {
  platformId: string;
  accountId: number;
  games: LolMatchHistoryMatchHistoryGameList;
}
export interface LolMatchHistoryMatchHistoryParticipant {
  participantId: number;
  teamId: number;
  championId: number;
  spell1Id: number;
  spell2Id: number;
  highestAchievedSeasonTier: string;
  stats: LolMatchHistoryMatchHistoryParticipantStatistics;
  timeline: LolMatchHistoryMatchHistoryTimeline;
}
export interface LolMatchHistoryMatchHistoryParticipantFrame {
  participantId: number;
  position: LolMatchHistoryMatchHistoryPosition;
  currentGold: number;
  totalGold: number;
  level: number;
  xp: number;
  minionsKilled: number;
  jungleMinionsKilled: number;
  dominionScore: number;
  teamScore: number;
}
export interface LolMatchHistoryMatchHistoryParticipantIdentities {
  participantId: number;
  player: LolMatchHistoryMatchHistoryParticipantIdentityPlayer;
}
export interface LolMatchHistoryMatchHistoryParticipantIdentityPlayer {
  puuid: string;
  platformId: string;
  accountId: number;
  summonerId: number;
  summonerName: string;
  currentPlatformId: string;
  currentAccountId: number;
  matchHistoryUri: string;
  profileIcon: number;
}
export interface LolMatchHistoryMatchHistoryParticipantStatistics {
  participantId: number;
  win: boolean;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  deaths: number;
  assists: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  killingSprees: number;
  longestTimeSpentLiving: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  unrealKills: number;
  totalDamageDealt: number;
  magicDamageDealt: number;
  physicalDamageDealt: number;
  trueDamageDealt: number;
  largestCriticalStrike: number;
  totalDamageDealtToChampions: number;
  magicDamageDealtToChampions: number;
  physicalDamageDealtToChampions: number;
  trueDamageDealtToChampions: number;
  totalHeal: number;
  totalUnitsHealed: number;
  totalDamageTaken: number;
  magicalDamageTaken: number;
  physicalDamageTaken: number;
  trueDamageTaken: number;
  goldEarned: number;
  goldSpent: number;
  turretKills: number;
  inhibitorKills: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  neutralMinionsKilledTeamJungle: number;
  neutralMinionsKilledEnemyJungle: number;
  totalTimeCrowdControlDealt: number;
  champLevel: number;
  visionWardsBoughtInGame: number;
  sightWardsBoughtInGame: number;
  wardsPlaced: number;
  wardsKilled: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  firstInhibitorKill: boolean;
  firstInhibitorAssist: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  causedEarlySurrender: boolean;
  earlySurrenderAccomplice: boolean;
  teamEarlySurrendered: boolean;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  totalPlayerScore: number;
  totalScoreRank: number;
  damageSelfMitigated: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  visionScore: number;
  timeCCingOthers: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  perk0: number;
  perk0Var1: number;
  perk0Var2: number;
  perk0Var3: number;
  perk1: number;
  perk1Var1: number;
  perk1Var2: number;
  perk1Var3: number;
  perk2: number;
  perk2Var1: number;
  perk2Var2: number;
  perk2Var3: number;
  perk3: number;
  perk3Var1: number;
  perk3Var2: number;
  perk3Var3: number;
  perk4: number;
  perk4Var1: number;
  perk4Var2: number;
  perk4Var3: number;
  perk5: number;
  perk5Var1: number;
  perk5Var2: number;
  perk5Var3: number;
}
export interface LolMatchHistoryMatchHistoryPlayerChampMasteryDelta {
  grade: string;
}
export interface LolMatchHistoryMatchHistoryPlayerDelta {
  originalAccountId: number;
  originalPlatformId: string;
  deltas: LolMatchHistoryMatchHistoryPlayerGameDelta[];
}
export interface LolMatchHistoryMatchHistoryPlayerGameDelta {
  gamePlatformId: string;
  gameId: number;
  platformDelta: LolMatchHistoryMatchHistoryPlayerPlatformDelta;
  leagueDelta: LolMatchHistoryMatchHistoryPlayerLeagueDelta;
  champMastery: LolMatchHistoryMatchHistoryPlayerChampMasteryDelta;
}
export interface LolMatchHistoryMatchHistoryPlayerLeagueDelta {
  leaguePointDelta: number;
  reason: string;
  miniSeriesProgress: string[];
  timestamp: number;
}
export interface LolMatchHistoryMatchHistoryPlayerPlatformDelta {
  xpDelta: number;
  ipDelta: number;
  compensationModeEnabled: boolean;
  timestamp: number;
}
export interface LolMatchHistoryMatchHistoryPosition {
  x: number;
  y: number;
}
export interface LolMatchHistoryMatchHistoryTeam {
  teamId: number;
  win: string;
  firstBlood: boolean;
  firstTower: boolean;
  firstInhibitor: boolean;
  firstBaron: boolean;
  firstDargon: boolean;
  towerKills: number;
  inhibitorKills: number;
  baronKills: number;
  dragonKills: number;
  vilemawKills: number;
  riftHeraldKills: number;
  dominionVictoryScore: number;
  bans: LolMatchHistoryMatchHistoryTeamBan[];
}
export interface LolMatchHistoryMatchHistoryTeamBan {
  championId: number;
  pickTurn: number;
}
export interface LolMatchHistoryMatchHistoryTimeline {
  participantId: number;
  role: string;
  lane: string;
  creepsPerMinDeltas: Map<string, number>;
  xpPerMinDeltas: Map<string, number>;
  goldPerMinDeltas: Map<string, number>;
  csDiffPerMinDeltas: Map<string, number>;
  xpDiffPerMinDeltas: Map<string, number>;
  damageTakenPerMinDeltas: Map<string, number>;
  damageTakenDiffPerMinDeltas: Map<string, number>;
}
export interface LolMatchHistoryMatchHistoryTimelineFrame {
  participantFrames: Map<string, LolMatchHistoryMatchHistoryParticipantFrame>;
  events: LolMatchHistoryMatchHistoryEvent[];
  timestamp: number;
}
export interface LolMatchHistoryMatchHistoryTimelineFrames {
  frames: LolMatchHistoryMatchHistoryTimelineFrame[];
}
export interface LolMatchHistoryRecentlyPlayedSummoner {
  summonerId: number;
  summonerName: string;
  gameId: number;
  gameCreationDate: string;
  championId: number;
  teamId: number;
  puuid: string;
}
export interface LolMatchHistorySummoner {
  displayName: string;
  puuid: string;
}
export interface LolMatchmakingGameflowGameData {
  queue: LolMatchmakingGameflowQueue;
}
export interface LolMatchmakingGameflowGameDodge {
  state: LolMatchmakingMatchmakingDodgeState;
  dodgeIds: number[];
}
export interface LolMatchmakingGameflowGameTypeConfig {
  reroll: boolean;
}
export type LolMatchmakingGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolMatchmakingGameflowQueue {
  gameTypeConfig: LolMatchmakingGameflowGameTypeConfig;
}
export interface LolMatchmakingGameflowSession {
  phase: LolMatchmakingGameflowPhase;
  gameData: LolMatchmakingGameflowGameData;
  gameDodge: LolMatchmakingGameflowGameDodge;
}
export interface LolMatchmakingLobbyStatus {
  queueId: number;
  isCustom: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  allowedPlayAgain: boolean;
  memberSummonerIds: number[];
  lobbyId?: string;
  customSpectatorPolicy: LolMatchmakingQueueCustomGameSpectatorPolicy;
}
export interface LolMatchmakingLoginSession {
  state: LolMatchmakingLoginSessionState;
  summonerId: number;
  accountId: number;
  connected: boolean;
}
export type LolMatchmakingLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolMatchmakingMatchmakingDodgeData {
  state: LolMatchmakingMatchmakingDodgeState;
  dodgerId: number;
}
export type LolMatchmakingMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export type LolMatchmakingMatchmakingDodgeWarning =
  | "None"
  | "Penalty"
  | "Warning";
export interface LolMatchmakingMatchmakingLowPriorityData {
  penalizedSummonerIds: number[];
  penaltyTime: number;
  penaltyTimeRemaining: number;
  bustedLeaverAccessToken: string;
  reason: string;
}
export interface LolMatchmakingMatchmakingReadyCheckResource {
  state: LolMatchmakingMatchmakingReadyCheckState;
  playerResponse: LolMatchmakingMatchmakingReadyCheckResponse;
  dodgeWarning: LolMatchmakingMatchmakingDodgeWarning;
  timer: number;
  declinerIds: number[];
  suppressUx: boolean;
}
export type LolMatchmakingMatchmakingReadyCheckResponse =
  | "Accepted"
  | "Declined"
  | "None";
export type LolMatchmakingMatchmakingReadyCheckState =
  | "Error"
  | "EveryoneReady"
  | "InProgress"
  | "Invalid"
  | "PartyNotReady"
  | "StrangerNotReady";
export interface LolMatchmakingMatchmakingSearchErrorResource {
  id: number;
  errorType: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
  message: string;
}
export interface LolMatchmakingMatchmakingSearchResource {
  queueId: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  searchState: LolMatchmakingMatchmakingSearchState;
  timeInQueue: number;
  estimatedQueueTime: number;
  readyCheck: LolMatchmakingMatchmakingReadyCheckResource;
  dodgeData: LolMatchmakingMatchmakingDodgeData;
  lowPriorityData: LolMatchmakingMatchmakingLowPriorityData;
  errors: LolMatchmakingMatchmakingSearchErrorResource[];
}
export type LolMatchmakingMatchmakingSearchState =
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Error"
  | "Found"
  | "Invalid"
  | "Searching"
  | "ServiceError"
  | "ServiceShutdown";
export interface LolMatchmakingPlayerStatus {
  currentLobbyStatus?: LolMatchmakingLobbyStatus;
  lastQueuedLobbyStatus?: LolMatchmakingLobbyStatus;
}
export interface LolMatchmakingQueue {
  id: number;
  isTeamBuilderManaged: boolean;
}
export type LolMatchmakingQueueCustomGameSpectatorPolicy =
  | "AllAllowed"
  | "FriendsAllowed"
  | "LobbyAllowed"
  | "NotAllowed";
export interface LolMissionsCollectionsChampion {
  id: number;
  freeToPlay: boolean;
  ownership: LolMissionsCollectionsOwnership;
  skins: LolMissionsCollectionsChampionSkin[];
}
export interface LolMissionsCollectionsChampionSkin {
  championId: number;
  id: number;
  ownership: LolMissionsCollectionsOwnership;
}
export interface LolMissionsCollectionsOwnership {
  loyaltyReward: boolean;
  xboxGPReward: boolean;
  owned: boolean;
  rental: LolMissionsCollectionsRental;
}
export interface LolMissionsCollectionsRental {
  rented: boolean;
}
export interface LolMissionsCollectionsSummoner {
  summonerLevel: number;
}
export interface LolMissionsCollectionsSummonerIcons {
  icons: number[];
}
export interface LolMissionsCollectionsWardSkin {
  id: number;
  ownership: LolMissionsCollectionsOwnership;
}
export type LolMissionsGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolMissionsGameflowSession {
  phase: LolMissionsGameflowPhase;
}
export type LolMissionsGrantStatus =
  | "FULFILLED"
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION";
export interface LolMissionsInventoryItemWithPayload {
  itemId: number;
}
export interface LolMissionsLoginSession {
  accountId: number;
  summonerId: number;
  puuid: string;
  platformId: string;
}
export type LolMissionsLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolMissionsLoyaltyStatusNotification {
  status: LolMissionsLoyaltyStatus;
}
export interface LolMissionsMissionAsset {
  internalName: string;
  path: string;
  iconNeedsFrame: boolean;
}
export interface LolMissionsMissionsNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolMissionsMissionsSettingsDataResource {
  selected_series: string;
}
export interface LolMissionsPlayerUpdateResponse {
  playerMissions: PlayerMissionDTO[];
  playerSeries: SeriesDTO[];
}
export interface LolMissionsPluginRegionLocaleChangedEvent {
  locale: string;
}
export interface LolMissionsRewardGrant {
  info: LolMissionsRewardGrantInfo;
  rewardGroup: LolMissionsRewardGroup;
}
export interface LolMissionsRewardGrantElement {
  id: string;
  itemId: string;
  itemType: string;
  fulfillmentSource: string;
  rewardStatus: LolMissionsRewardStatus;
  quantity: number;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolMissionsRewardGrantInfo {
  id: string;
  granteeId: string;
  rewardGroupId: string;
  status: LolMissionsGrantStatus;
  grantElements: LolMissionsRewardGrantElement[];
  selectedIds: string[];
  viewed: boolean;
}
export interface LolMissionsRewardGroup {
  id: string;
  internalName: string;
  productId: string;
  types: string[];
  rewards: LolMissionsSvcReward[];
  childRewardGroupIds: string[];
  rewardStrategy: LolMissionsRewardStrategy;
  selectionStrategyConfig: LolMissionsSelectionStrategyConfig;
  active: boolean;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolMissionsRewardGroupsSelection {
  rewardGroups: string[];
}
export type LolMissionsRewardStatus = "FULFILLED" | "PENDING";
export type LolMissionsRewardStrategy = "ALL" | "RANDOM" | "SELECTION";
export interface LolMissionsRewardsProductConfig {
  enabled: boolean;
  serviceUrl: string;
}
export interface LolMissionsSelectionStrategyConfig {
  minSelectionsAllowed: number;
  maxSelectionsAllowed: number;
}
export interface LolMissionsSeriesOpt {
  seriesId: string;
  option: string;
}
export interface LolMissionsSvcReward {
  id: string;
  itemId: string;
  quantity: number;
  fulfillmentSource: string;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolMissionsTftOrb {
  missionId: string;
  status: string;
  unlockTime: number;
  rewardLevel: number;
  rewards: PlayerMissionRewardDTO[];
}
export interface LolMissionsTftPaidBattlepass {
  totalPointsEarned: number;
  milestones: LolMissionsTftPaidBattlepassMilestone[];
  bonuses: LolMissionsTftPaidBattlepassMilestone[];
  activeMilestone: LolMissionsTftPaidBattlepassMilestone;
  info: LolMissionsTftPaidBattlepassInfo;
  lastViewedProgress: number;
  lastViewedMilestone: LolMissionsTftPaidBattlepassMilestone;
  progressMissionId: string;
}
export interface LolMissionsTftPaidBattlepassInfo {
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  premium: boolean;
  premiumEntitlementId: string;
  pcPurchaseRequirement: string;
  media: Map<string, string>;
}
export interface LolMissionsTftPaidBattlepassMilestone {
  missionId: string;
  internalName: string;
  title: string;
  description: string;
  state: string;
  status: string;
  pointsNeededForMilestone: number;
  pointsEarnedForMilestone: number;
  totalPointsForMilestone: number;
  level: number;
  iconImageUrl: string;
  iconNeedsFrame: boolean;
  rewards: LolMissionsTftPaidBattlepassReward[];
  isPaid: boolean;
  isLocked: boolean;
  isKeystone: boolean;
  isBonus: boolean;
}
export interface LolMissionsTftPaidBattlepassReward {
  rewardGroup: string;
  description: string;
  iconUrl: string;
  iconNeedsFrame: boolean;
}
export interface LolMissionsTftWeeklyMissions {
  missions: PlayerMissionDTO[];
}
export interface LolMissionsUserInfo {
  userInfo: string;
}
export interface LolModeProgressionInventoryRewardItem {
  itemId: number;
  uuid: string;
}
export interface LolModeProgressionLoadout {
  id: string;
  name: string;
  scope: string;
  loadout: Map<string, LolModeProgressionLoadoutsSlot>;
}
export interface LolModeProgressionLoadoutsSlot {
  contentId: string;
  inventoryType: string;
  itemId: number;
}
export interface LolNpeRewardsAccountSettingsData {
  login: LolNpeRewardsLoginSeriesSettings;
  challenges: LolNpeRewardsChallengesSettings;
}
export interface LolNpeRewardsAccountSettingsPayload {
  data: LolNpeRewardsAccountSettingsData;
  schemaVersion: number;
}
export interface LolNpeRewardsAllRewards {
  level: LolNpeRewardsRewardSeries;
  login: LolNpeRewardsRewardSeries;
}
export interface LolNpeRewardsChallengesProgress {
  progress: LolNpeRewardsProgress;
}
export interface LolNpeRewardsChallengesSettings {
  allMissionsCompleted: boolean;
  totalCount: number;
}
export interface LolNpeRewardsLoginSeriesSettings {
  allRewardsClaimed: boolean;
  lastCompletedMissionInternalName: string;
  lastCompletedMissionDate: number;
}
export interface LolNpeRewardsMission {
  completedDate: number;
  status: string;
  seriesName: string;
  internalName: string;
  metadata: LolNpeRewardsMissionsRewardPackMetaData;
  display: LolNpeRewardsMissionDisplay;
  objectives: LolNpeRewardsObjective[];
}
export interface LolNpeRewardsMissionDisplay {
  locations: string[];
}
export interface LolNpeRewardsMissionSeries {
  internalName: string;
  status: string;
  id: string;
}
export interface LolNpeRewardsMissionSeriesOptIn {
  seriesId: string;
  option: string;
}
export interface LolNpeRewardsMissionsRewardPackMetaData {
  npeRewardPack: LolNpeRewardsRewardPack;
}
export interface LolNpeRewardsObjective {
  progress: LolNpeRewardsProgress;
}
export interface LolNpeRewardsProgress {
  lastViewedProgress: number;
  currentProgress: number;
  totalCount: number;
}
export interface LolNpeRewardsRequirements {
  level: number;
  day: number;
  missionInternalName: string;
}
export interface LolNpeRewardsReward {
  renderer: string;
  data: object;
}
export interface LolNpeRewardsRewardPack {
  index: number;
  type: string;
  requirements: LolNpeRewardsRequirements;
  state: string;
  premiumReward: boolean;
  rewardKey: string;
  majorReward: LolNpeRewardsReward;
  minorRewards: LolNpeRewardsReward[];
  delay: number;
  unlockTime: number;
}
export interface LolNpeRewardsRewardSeries {
  rewardPacks: LolNpeRewardsRewardPack[];
}
export interface LolNpeRewardsRewardSeriesState {
  allRewardsClaimed: boolean;
}
export interface LolNpeRewardsSummoner {
  summonerLevel: number;
}
export interface LolNpeTutorialPathAccountSettingsCategoryResource {
  data?: LolNpeTutorialPathAccountSettingsTutorial;
  schemaVersion: number;
}
export interface LolNpeTutorialPathAccountSettingsTutorial {
  hasSeenTutorialPath: boolean;
  hasSkippedTutorialPath: boolean;
  shouldSeeNewPlayerExperience: boolean;
}
export interface LolNpeTutorialPathCollectionsChampion {
  alias: string;
  banVoPath: string;
  chooseVoPath: string;
  id: number;
  name: string;
  roles: string[];
  squarePortraitPath: string;
  stingerSfxPath: string;
  passive: LolNpeTutorialPathCollectionsChampionSpell;
  spells: LolNpeTutorialPathCollectionsChampionSpell[];
}
export interface LolNpeTutorialPathCollectionsChampionSpell {
  name: string;
  description: string;
}
export interface LolNpeTutorialPathExpiringWarning {
  type: string;
  message: string;
  alertTime: number;
}
export type LolNpeTutorialPathGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolNpeTutorialPathGameflowSession {
  phase: LolNpeTutorialPathGameflowPhase;
}
export interface LolNpeTutorialPathIds {
  missionIds: string[];
  seriesIds: string[];
}
export interface LolNpeTutorialPathLobbyChangeQueue {
  queueId: number;
  isCustom: boolean;
}
export interface LolNpeTutorialPathLobbyDto {
  partyId: string;
  gameConfig: LolNpeTutorialPathLobbyGameConfigDto;
}
export interface LolNpeTutorialPathLobbyGameConfigDto {
  queueId: number;
}
export interface LolNpeTutorialPathMission {
  id: string;
  title: string;
  helperText: string;
  description: string;
  backgroundImageUrl: string;
  iconImageUrl: string;
  seriesName: string;
  locale: string;
  metadata: LolNpeTutorialPathMissionMetadata;
  startTime: number;
  endTime: number;
  lastUpdatedTimestamp: number;
  objectives: LolNpeTutorialPathObjective[];
  rewards: LolNpeTutorialPathReward[];
  expiringWarnings: LolNpeTutorialPathExpiringWarning[];
  requirements: string[];
  rewardStrategy: LolNpeTutorialPathRewardStrategy;
  display: LolNpeTutorialPathMissionDisplay;
  completionExpression: string;
  viewed: boolean;
  isNew: boolean;
  status: string;
  missionType: string;
  displayType: string;
  completedDate: number;
  cooldownTimeMillis: number;
  celebrationType: string;
  clientNotifyLevel: string;
  internalName: string;
}
export interface LolNpeTutorialPathMissionDisplay {
  attributes: string[];
}
export interface LolNpeTutorialPathMissionMetadata {
  tutorial: LolNpeTutorialPathTutorialMetadata;
}
export interface LolNpeTutorialPathObjective {
  type: string;
  description: string;
  progress: LolNpeTutorialPathProgress;
  sequence: number;
  rewardGroups: string[];
}
export interface LolNpeTutorialPathProgress {
  lastViewedProgress: number;
  currentProgress: number;
  totalCount: number;
}
export interface LolNpeTutorialPathRequirement {
  expression: string;
}
export interface LolNpeTutorialPathReward {
  rewardType: string;
  rewardGroup: string;
  description: string;
  iconUrl: string;
  itemId: string;
  uniqueName: string;
  rewardFulfilled: boolean;
  rewardGroupSelected: boolean;
  sequence: number;
  quantity: number;
}
export interface LolNpeTutorialPathRewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: number;
  selectMinGroupCount: number;
}
export interface LolNpeTutorialPathSeries {
  id: string;
  internalName: string;
  status: string;
}
export interface LolNpeTutorialPathSeriesOpt {
  seriesId: string;
  option: string;
}
export interface LolNpeTutorialPathSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  profileIconId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  percentCompleteForNextLevel: number;
  nameChangeFlag: boolean;
  unnamed: boolean;
}
export interface LolNpeTutorialPathSummonerIcon {
  profileIconId: number;
}
export interface LolNpeTutorialPathTutorial {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  backgroundUrl: string;
  queueId: string;
  useQuickSearchMatchmaking: boolean;
  useChosenChampion: boolean;
  status: LolNpeTutorialPathTutorialStatus;
  isViewed: boolean;
  type: LolNpeTutorialPathTutorialType;
  rewards: LolNpeTutorialPathTutorialReward[];
}
export interface LolNpeTutorialPathTutorialMetadata {
  stepNumber: number;
  queueId: string;
  displayRewards: Map<string, string>;
  useQuickSearchMatchmaking: boolean;
  useChosenChampion: boolean;
}
export interface LolNpeTutorialPathTutorialReward {
  rewardType: string;
  description: string;
  rewardFulfilled: boolean;
  iconUrl: string;
  itemId: string;
  sequence: number;
  uniqueName: string;
}
export type LolNpeTutorialPathTutorialStatus =
  | "COMPLETED"
  | "LOCKED"
  | "UNLOCKED";
export type LolNpeTutorialPathTutorialType = "CARD" | "REWARD";
export interface LolPatchChunkingPatcherEnvironment {
  game_patcher_available: boolean;
  game_patcher_enabled: boolean;
}
export interface LolPatchComponentActionProgress {
  currentItem: string;
  total: LolPatchComponentStateProgress;
  network: LolPatchComponentStateProgress;
  primaryWork: LolPatchComponentStateWorkType;
}
export interface LolPatchComponentState {
  id: string;
  action: LolPatchComponentStateAction;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  timeOfLastUpToDateCheckISO8601?: string;
  isCorrupted: boolean;
  progress?: LolPatchComponentActionProgress;
}
export type LolPatchComponentStateAction =
  | "CheckingForUpdates"
  | "Idle"
  | "Migrating"
  | "Patching"
  | "Repairing";
export interface LolPatchComponentStateProgress {
  bytesComplete: number;
  bytesRequired: number;
  bytesPerSecond: number;
}
export type LolPatchComponentStateWorkType = "Disk" | "Network" | "Scanning";
export interface LolPatchEntitlementsTokenResource {
  accessToken: string;
  token: string;
  entitlements: string[];
}
export interface LolPatchInstallPaths {
  gameInstallRoot: string;
  gameExecutablePath: string;
}
export interface LolPatchNotification {
  id: string;
  notificationId: LolPatchNotificationId;
  data: Map<string, object>;
}
export type LolPatchNotificationId =
  | "BrokenPermissions"
  | "ConnectionError"
  | "DidRestoreClientBackup"
  | "FailedToWriteError"
  | "MissingFilesError"
  | "NotEnoughDiskSpace"
  | "UnspecifiedError";
export interface LolPatchPatchSieveCompatVersion {
  id: string;
}
export interface LolPatchPatchSieveDownload {
  url: string;
  scd_required: boolean;
}
export interface LolPatchPatchSieveLabelValue {
  values: string[];
}
export interface LolPatchPatchSieveQueryResponse {
  releases: LolPatchPatchSieveRelease[];
}
export interface LolPatchPatchSieveRelease {
  release: LolPatchPatchSieveReleaseInfo;
  compat_version: LolPatchPatchSieveCompatVersion;
  download: LolPatchPatchSieveDownload;
}
export interface LolPatchPatchSieveReleaseInfo {
  product: string;
  id: string;
  labels: Map<string, LolPatchPatchSieveLabelValue>;
}
export interface LolPatchPatcherInstallSettings {
  game_patcher?: string;
  game_patch_url: string;
  game_patcher_available: boolean;
  max_download_speed_mbps: number;
  locales: string[];
}
export interface LolPatchPatcherRegionSettings {
  patchline: string;
  game_patcher: string;
}
export interface LolPatchPatcherSelfUpdateSettings {
  restart_delay: number;
}
export interface LolPatchPatcherSettings {
  product_refresh_period: number;
  channel: string;
  headers: Map<string, string>;
  self_update: LolPatchPatcherSelfUpdateSettings;
  patchsieve_url: string;
}
export interface LolPatchProductState {
  id: string;
  action: LolPatchComponentStateAction;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  isCorrupted: boolean;
  isStopped: boolean;
  percentPatched: number;
  components: LolPatchComponentState[];
}
export interface LolPatchRegionLocale {
  region: string;
  locale: string;
}
export interface LolPatchScdCookie {
  domain: string;
  path: string;
  cookie: string;
}
export interface LolPatchScdCookies {
  cookies: LolPatchScdCookie[];
}
export type LolPatchScdEnabled = "Off" | "On";
export interface LolPatchStatus {
  connectedToPatchServer: boolean;
}
export interface LolPatchSupportedGameRelease {
  artifact_id: string;
  download: LolPatchPatchSieveDownload;
  selected: boolean;
}
export interface LolPatchSupportedGameReleases {
  supported_game_releases: LolPatchSupportedGameRelease[];
}
export interface LolPatchUxResource {
  visible: boolean;
}
export interface LolPerksChampSelectAction {
  id: number;
  actorCellId: number;
  championId: number;
  type: string;
  completed: boolean;
}
export interface LolPerksChampSelectBannedChampions {
  myTeamBans: number[];
  theirTeamBans: number[];
  numBans: number;
}
export interface LolPerksChampSelectChatRoomDetails {
  multiUserChatId: string;
  multiUserChatPassword: string;
  mucJwtDto: LolPerksMucJwtDto;
}
export interface LolPerksChampSelectMySelection {
  selectedSkinId?: number;
  spell1Id?: number;
  spell2Id?: number;
  wardSkinId?: number;
}
export interface LolPerksChampSelectPlayerSelection {
  cellId: number;
  championId: number;
  selectedSkinId: number;
  wardSkinId: number;
  spell1Id: number;
  spell2Id: number;
  team: number;
  assignedPosition: string;
  championPickIntent: number;
  summonerId: number;
}
export interface LolPerksChampSelectSession {
  timer: LolPerksChampSelectTimer;
  chatDetails: LolPerksChampSelectChatRoomDetails;
  myTeam: LolPerksChampSelectPlayerSelection[];
  theirTeam: LolPerksChampSelectPlayerSelection[];
  trades: LolPerksChampSelectTradeContract[];
  actions: object[];
  bans: LolPerksChampSelectBannedChampions;
  localPlayerCellId: number;
  isSpectating: boolean;
}
export interface LolPerksChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  totalTimeInPhase: number;
  phase: string;
  isInfinite: boolean;
  internalNowInEpochMs: number;
}
export interface LolPerksChampSelectTradeContract {
  id: number;
  cellId: number;
  state: LolPerksChampSelectTradeState;
}
export type LolPerksChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";
export interface LolPerksChampionPreferredStyle {
  championName: string;
  style: number;
  championId: number;
}
export interface LolPerksChampionRuneRecommendationsGDSResource {
  championId: number;
  isOverride: boolean;
  runeRecommendations: LolPerksRuneRecommendationGDSResource[];
}
export interface LolPerksDefaultStatModsPerSubStyle {
  id: number;
  perks: number[];
}
export interface LolPerksGameCustomizationDTO {
  category: string;
  content: string;
  queueType: number;
  isTeambuilder: boolean;
}
export interface LolPerksGameDataChampionSummary {
  id: number;
  name: string;
}
export interface LolPerksGameflowGameData {
  queue: LolPerksQueue;
  isCustomGame: boolean;
  gameId: number;
}
export type LolPerksGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolPerksGameflowSession {
  phase: LolPerksGameflowPhase;
  gameData: LolPerksGameflowGameData;
}
export interface LolPerksGetGameCustomizationDTO {
  queueType: string;
}
export interface LolPerksInventoryRunePageCount {
  quantity: number;
}
export interface LolPerksLoginSession {
  state: LolPerksLoginSessionState;
  summonerId: number;
  accountId: number;
}
export type LolPerksLoginSessionState =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolPerksMucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface LolPerksNamecheckAuthorization {
  subject: string;
}
export interface LolPerksNamecheckLoginDataPacket {
  platformId: string;
}
export interface LolPerksNamecheckPayload {
  name: string;
  nameValidationContext: string;
  puuid: string;
  shard: string;
}
export interface LolPerksNamecheckResponse {
  errors: string[];
}
export interface LolPerksPerkBook {
  currentPageId: number;
  pages: LolPerksPerkPageResource[];
}
export interface LolPerksPerkGDSResource {
  iconPath: string;
  id: number;
  longDesc: string;
  name: string;
  shortDesc: string;
  tooltip: string;
  recommendationDescriptor: string;
  majorChangePatchVersion: string;
  recommendationDescriptorAttributes: Map<string, number>;
}
export interface LolPerksPerkIdListResource {
  perkIds: number[];
}
export interface LolPerksPerkPageResource {
  current: boolean;
  id: number;
  isActive: boolean;
  isValid: boolean;
  isEditable: boolean;
  isDeletable: boolean;
  isTemporary: boolean;
  name: string;
  order: number;
  primaryStyleId: number;
  selectedPerkIds: number[];
  subStyleId: number;
  autoModifiedSelections: number[];
  lastModified: number;
  runeRecommendationId: string;
  recommendationIndex: number;
  isRecommendationOverride: boolean;
  recommendationChampionId: number;
}
export interface LolPerksPerkSettingResource {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
}
export interface LolPerksPerkSettings {
  pages: LolPerksPerkPageResource[];
  perShardPerkBooks: Map<string, LolPerksPerkBook>;
  settings: LolPerksUISettings;
}
export interface LolPerksPerkStyleResource {
  allowedSubStyles: number[];
  iconPath: string;
  assetMap: Map<string, string>;
  isAdvanced: boolean;
  id: number;
  name: string;
  slots: LolPerksPerkStyleSlotResource[];
  subStyleBonus: LolPerksPerkSubStyleBonusResource[];
  tooltip: string;
  defaultSubStyle: number;
  defaultPerks: number[];
  defaultPageName: string;
  defaultPerksWhenSplashed: number[];
  defaultStatModsPerSubStyle: LolPerksDefaultStatModsPerSubStyle[];
}
export interface LolPerksPerkStyleSlotResource {
  perks: number[];
  type: string;
  slotLabel: string;
}
export interface LolPerksPerkSubStyleBonusResource {
  perkId: number;
  styleId: number;
}
export interface LolPerksPerkUIPerk {
  iconPath: string;
  id: number;
  styleId: number;
  styleIdName: string;
  longDesc: string;
  name: string;
  shortDesc: string;
  tooltip: string;
  recommendationDescriptor: string;
  slotType: string;
}
export interface LolPerksPerkUIRecommendedPage {
  position: string;
  isDefaultPosition: boolean;
  keystone: LolPerksPerkUIPerk;
  perks: LolPerksPerkUIPerk[];
  primaryPerkStyleId: number;
  secondaryPerkStyleId: number;
  primaryRecommendationAttribute: string;
  secondaryRecommendationAttribute: string;
  summonerSpellIds: number[];
  recommendationId: string;
  isRecommendationOverride: boolean;
  recommendationChampionId: number;
}
export interface LolPerksPerkUISlot {
  perks: number[];
  type: string;
  slotLabel: string;
}
export interface LolPerksPerkUIStyle {
  allowedSubStyles: number[];
  iconPath: string;
  assetMap: Map<string, string>;
  id: number;
  name: string;
  slots: LolPerksPerkUISlot[];
  subStyleBonus: LolPerksPerkSubStyleBonusResource[];
  tooltip: string;
  defaultSubStyle: number;
  defaultPerks: number[];
  defaultPageName: string;
  idName: string;
}
export interface LolPerksPerksConfigDTO {
  styles: LolPerksPerkStyleResource[];
}
export interface LolPerksPlatformConfig {
  PerksEnabled: boolean;
  AutoRepairPagesEnabled: boolean;
}
export interface LolPerksPlayerInventory {
  ownedPageCount: number;
  customPageCount: number;
  canAddCustomPage: boolean;
  isCustomPageCreationUnlocked: boolean;
}
export interface LolPerksQueue {
  id: number;
  mapId: number;
  isTeamBuilderManaged: boolean;
}
export interface LolPerksRuneRecommendationGDSResource {
  position: string;
  mapId: number;
  isDefaultPosition: boolean;
  minSummonerLevel: number;
  perkIds: number[];
  primaryPerkStyleId: number;
  secondaryPerkStyleId: number;
  summonerSpellIds: number[];
  recommendationId: string;
}
export interface LolPerksSettingsStorageContainer {
  data: LolPerksPerkSettings;
  schemaVersion: number;
}
export interface LolPerksSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  internalName: string;
  profileIconId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  percentCompleteForNextLevel: number;
  rerollPoints: LolPerksSummonerRerollPoints;
  puuid: string;
}
export interface LolPerksSummonerRerollPoints {
  pointsToReroll: number;
  currentPoints: number;
  numberOfRolls: number;
  maxRolls: number;
  pointsCostToRoll: number;
}
export interface LolPerksUISettings {
  showLongDescriptions: boolean;
  gridModeEnabled: boolean;
  showPresetPages: boolean;
  gameplayPatchVersionSeen: string;
  gameplayUpdatedPerksSeen: number[];
}
export interface LolPerksUpdatePageOrderRequest {
  targetPageId: number;
  destinationPageId: number;
  offset: number;
}
export interface LolPerksValidateItemSetNameResponse {
  success: boolean;
  nameCheckResponse: LolPerksNamecheckResponse;
}
export interface LolPerksValidatePageNameData {
  id: number;
  name: string;
}
export interface LolPftGameClientEndOfGameStats {
  gameId: number;
  gameMode: string;
  statsBlock: object;
  queueId: number;
  isRanked: boolean;
}
export interface LolPftGameflowGameDodge {
  state: LolPftGameflowGameDodgeState;
  dodgeIds: number[];
}
export type LolPftGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";
export type LolPftGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolPftGameflowSession {
  phase: LolPftGameflowPhase;
  gameDodge: LolPftGameflowGameDodge;
}
export interface LolPftLoginSession {
  state: LolPftLoginSessionStates;
  idToken: string;
}
export type LolPftLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolPftPFTEndOfGamePlayer {
  stats: object;
  items: number[];
  botPlayer: boolean;
  championId: number;
  gameId: number;
  leaver: boolean;
  leaves: number;
  level: number;
  losses: number;
  profileIconId: number;
  spell1Id: number;
  spell2Id: number;
  summonerName: string;
  teamId: number;
  wins: number;
  summonerId: number;
}
export interface LolPftPFTEndOfGamePoints {
  pointChangeFromChampionsOwned: number;
  pointChangeFromGameplay: number;
  pointsUsed: number;
  previousPoints: number;
  pointsUntilNextReroll: number;
  rerollCount: number;
  totalPoints: number;
}
export interface LolPftPFTEndOfGameStats {
  difficulty: string;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: string[];
  gameType: string;
  invalid: boolean;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  teams: LolPftPFTEndOfGameTeam[];
  localPlayer: LolPftPFTEndOfGamePlayer;
  myTeamStatus: string;
  leveledUp: boolean;
  newSpells: number[];
  previousLevel: number;
  rpEarned: number;
  accountId: number;
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  firstWinBonus: number;
  ipEarned: number;
  ipTotal: number;
  boostXpEarned: number;
  experienceEarned: number;
  experienceTotal: number;
  loyaltyBoostXpEarned: number;
  previousXpTotal: number;
  timeUntilNextFirstWinBonus: number;
  causedEarlySurrender: boolean;
  earlySurrenderAccomplice: boolean;
  teamEarlySurrendered: boolean;
  gameEndedInEarlySurrender: boolean;
  isAramGame: boolean;
  rerollData: LolPftPFTEndOfGamePoints;
}
export interface LolPftPFTEndOfGameTeam {
  stats: object;
  players: LolPftPFTEndOfGamePlayer[];
  memberStatusString: string;
  name: string;
  tag: string;
  fullId: string;
  teamId: number;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
}
export interface LolPftPFTEvent {
  playerSurveyId: number;
  action: string;
  data: object[];
}
export interface LolPftPFTMetadata {
  accountId: number;
  env: string;
  webRegion: string;
  locale: string;
  appName: string;
  appVersion: string;
  systemOs: string;
  stats: LolPftPFTEndOfGameStats;
  homepageTimer: number;
}
export interface LolPftPFTQuestionResponse {
  questionId: number;
  responseData: object;
}
export interface LolPftPFTSurvey {
  id: number;
  title: string;
  caption: string;
  type: string;
  display: string;
  data: Map<string, object>;
}
export interface LolPftPFTSurveyResults {
  questionResponses: LolPftPFTQuestionResponse[];
  actions: LolPftPFTEvent[];
}
export interface LolPftPFTSurveyV1 {
  id: number;
  title: string;
  caption: string;
  type: string;
  url: string;
}
export interface LolPftSummoner {
  puuid: string;
  summonerId: number;
  accountId: number;
  summonerLevel: number;
  unnamed: boolean;
}
export interface LolPlayerBehaviorBanNotification {
  id: number;
  source: LolPlayerBehaviorNotificationSource;
  reason: string;
  timeUntilBanExpires: number;
  isPermaBan: boolean;
  displayReformCard: boolean;
}
export interface LolPlayerBehaviorCodeOfConductNotification {
  message: string;
}
export type LolPlayerBehaviorGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export type LolPlayerBehaviorNotificationSource =
  | "ForcedShutdown"
  | "Invalid"
  | "Login"
  | "Message";
export interface LolPlayerBehaviorPlayerBehaviorConfig {
  IsLoaded: boolean;
  CodeOfConductEnabled: boolean;
}
export interface LolPlayerBehaviorPlayerBehavior_GameflowSessionResource {
  phase: LolPlayerBehaviorGameflowPhase;
}
export interface LolPlayerBehaviorPlayerBehavior_SimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolPlayerBehaviorPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolPlayerBehaviorReformCard {
  id: number;
  punishmentType: string;
  reason: string;
  timeWhenPunishmentExpires: number;
  punishmentLengthTime: number;
  punishmentLengthGames: number;
  restrictedChatGamesRemaining: number;
  chatLogs: string[];
  gameIds: number[];
  playerFacingMessage: string;
}
export interface LolPlayerBehaviorReformCardChatLogs {
  preGameChatLogs: string[];
  inGameChatLogs: string[];
  postGameChatLogs: string[];
}
export interface LolPlayerBehaviorReformCardV2 {
  id: number;
  punishmentType: string;
  punishmentReason: string;
  punishedUntilDateMillis: number;
  punishmentLengthMillis: number;
  punishmentLengthGames: number;
  punishedForReformCardChatLogs: LolPlayerBehaviorReformCardChatLogs[];
  punishedForGameIds: number[];
  playerFacingMessage: string;
}
export interface LolPlayerBehaviorReporterFeedback {
  id: number;
  accountId: number;
  messageId: string;
  type: string;
}
export interface LolPlayerBehaviorReporterFeedbackMessage {
  title: string;
  message: string;
  category: string;
  locale: string;
  key: string;
}
export interface LolPlayerBehaviorRestrictionNotification {
  id: number;
  source: LolPlayerBehaviorNotificationSource;
  gamesRemaining: number;
  expirationMillis: number;
  displayReformCard: boolean;
}
export interface LolPlayerBehaviorSettingsResource {
  data: object;
  schemaVersion: number;
}
export interface LolPlayerBehaviorUserInfo {
  userInfo: string;
}
export interface LolPlayerBehaviorUserInfoBanData {
  restrictions: LolPlayerBehaviorUserInfoRestriction[];
}
export interface LolPlayerBehaviorUserInfoRestriction {
  type: string;
  reason: string;
  scope: string;
  dat: LolPlayerBehaviorUserInfoRestrictionData;
}
export interface LolPlayerBehaviorUserInfoRestrictionData {
  expirationMillis: number;
  gameData: LolPlayerBehaviorUserInfoRestrictionGameData;
  gameLocation: string;
}
export interface LolPlayerBehaviorUserInfoRestrictionGameData {
  productName: string;
  gameLocation: string;
  triggerGameId: string;
  additionalGameIds: string[];
}
export interface LolPlayerBehaviorUserInfoToken {
  ban: LolPlayerBehaviorUserInfoBanData;
}
export interface LolPlayerLevelUpEndOfGameStats {
  gameMode: string;
  gameMutators: string[];
  gameType: string;
  queueType: string;
  leveledUp: boolean;
  newSpells: number[];
  previousLevel: number;
  rpEarned: number;
}
export interface LolPlayerLevelUpGameDataSummonerSpell {
  id: number;
  summonerLevel: number;
}
export interface LolPlayerLevelUpLoginSession {
  state: LolPlayerLevelUpLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolPlayerLevelUpLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolPlayerLevelUpPlayerLevelUpEvent {
  switchedToStandardFreeToPlayChampRotation: boolean;
  nowHasAccessToPublicChatRooms: boolean;
  nowHasAccessToLoot: boolean;
  leveledUp: boolean;
  newSummonerLevel: number;
  newRuneSlotUnlocked: boolean;
  rpEarned: number;
  newSpells: number[];
  newQueues: number[];
}
export interface LolPlayerLevelUpPlayerLevelUpEventAck {
  seenThisEvent: boolean;
  newSummonerLevel: number;
}
export interface LolPlayerLevelUpQueue {
  id: number;
  minLevel: number;
}
export interface LolPlayerMessagingDynamicCelebrationMessagingNotificationResource {
  id: number;
  accountId: number;
  msgId: string;
  celebrationTitle: string;
  celebrationBody: string;
  celebrationMessage: string;
  inventoryType: string;
  itemId: string;
  itemQuantity: string;
  celebrationType: string;
  status: number;
}
export interface LolPlayerMessagingLoginDataPacket {
  simpleMessages: LolPlayerMessagingSimpleMessage[];
}
export interface LolPlayerMessagingPlayerMessagingNotificationResource {
  id: number;
  accountId: number;
  msgId: string;
  title: string;
  body: string;
  status: number;
}
export interface LolPlayerMessagingSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  titleCode: string;
  bodyCode: string;
  params: string[];
}
export interface LolPlayerPreferencesLoginSession {
  state: LolPlayerPreferencesLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
}
export type LolPlayerPreferencesLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolPlayerPreferencesPlayerPreferences {
  type: string;
  version: string;
  data: string;
}
export interface LolPlayerPreferencesPlayerPreferencesEndpoint {
  Enabled: boolean;
  EnforceHttps: boolean;
  ServiceEndpoint: string;
  Version: string;
  Retries: number;
}
export interface LolPlayerReportSenderChampSelectReport {
  offender_puuid: string;
  categories: string[];
  location: string;
  comment: string;
  match_token: string;
}
export interface LolPlayerReportSenderChampSelectSummonerInfo {
  puuid: string;
  obfuscatedPuuid: string;
}
export interface LolPlayerReportSenderGameAgnosticReportPayload {
  offenderId: string;
  categories: string[];
  location: string;
  comment: string;
  tokenType: string;
  token: string;
}
export interface LolPlayerReportSenderGameflowGameData {
  gameId: number;
}
export type LolPlayerReportSenderGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolPlayerReportSenderGameflowSession {
  phase: LolPlayerReportSenderGameflowPhase;
  gameData: LolPlayerReportSenderGameflowGameData;
}
export interface LolPlayerReportSenderPlayerReport {
  offenderPuuid: string;
  categories: string[];
  gameId: number;
  offenderSummonerId: number;
  comment: string;
}
export type LolPlayerReportSenderReportRecipientMode =
  | "Combined"
  | "Game-Agnostic"
  | "Legacy";
export interface LolPlayerReportSenderSummoner {
  summonerId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  puuid: string;
}
export type LolPreEndOfGameGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolPreEndOfGameSequenceEvent {
  name: string;
  priority: number;
}
export interface LolPremadeVoiceAccountSettingsCategoryDataResource {
  autoJoin: boolean;
  muteOnConnect: boolean;
  inputMode: LolPremadeVoiceInputMode;
  pushToTalkKey: string;
  showFirstExperienceInLCU: boolean;
  showFirstExperienceInGame: boolean;
}
export interface LolPremadeVoiceAccountSettingsCategoryResource {
  data?: LolPremadeVoiceAccountSettingsCategoryDataResource;
  schemaVersion: number;
}
export interface LolPremadeVoiceAudioPropertiesResource {
  isLoopbackEnabled: boolean;
  micEnergy: number;
}
export type LolPremadeVoiceConfigReadinessEnum =
  | "Disabled"
  | "NotReady"
  | "Ready";
export interface LolPremadeVoiceConfigStatus {
  readiness: LolPremadeVoiceConfigReadinessEnum;
}
export type LolPremadeVoiceConfigType = "player" | "public";
export interface LolPremadeVoiceDeviceResource {
  handle: string;
  name: string;
  usable: boolean;
  is_current_device: boolean;
  is_default: boolean;
}
export interface LolPremadeVoiceDeviceResourceRiotClient {
  handle: string;
  name: string;
  is_effective_device: boolean;
  is_current_device: boolean;
  is_default: boolean;
}
export interface LolPremadeVoiceEntitlementsToken {
  entitlements: string[];
}
export interface LolPremadeVoiceExternalSession {
  patchlineFullName: string;
  patchlineId: string;
  productId: string;
}
export interface LolPremadeVoiceFirstExperience {
  showFirstExperienceInLCU: boolean;
  showFirstExperienceInGame: boolean;
}
export interface LolPremadeVoiceGameEventHotkeys {
  evtPushToTalk?: string;
}
export interface LolPremadeVoiceGameInputSettings {
  GameEvents: LolPremadeVoiceGameEventHotkeys;
}
export interface LolPremadeVoiceGameflowGameClient {
  running: boolean;
}
export type LolPremadeVoiceGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolPremadeVoiceGameflowSession {
  phase: LolPremadeVoiceGameflowPhase;
  gameClient: LolPremadeVoiceGameflowGameClient;
}
export type LolPremadeVoiceInputMode = "pushToTalk" | "voiceActivity";
export interface LolPremadeVoiceKeyCombo {
  keyBindings: LolPremadeVoicePushToTalkKey[];
}
export interface LolPremadeVoiceKeycodePushToTalkResource {
  enabled: boolean;
  keyCombos?: LolPremadeVoiceKeyCombo[];
}
export interface LolPremadeVoiceLocalSettingsCategoryDataResource {
  currentCaptureDeviceHandle: string;
  inputVolume: number;
  vadSensitivity: number;
}
export interface LolPremadeVoiceLocalSettingsCategoryResource {
  data?: LolPremadeVoiceLocalSettingsCategoryDataResource;
  schemaVersion: number;
}
export interface LolPremadeVoiceLoginSession {
  connected: boolean;
}
export interface LolPremadeVoiceParticipantResource {
  id: string;
  name: string;
  volume: number;
  energy: number;
  isMuted: boolean;
  isSpeaking: boolean;
}
export interface LolPremadeVoicePartyDto {
  partyId: string;
  commsEnabled: boolean;
  players: Map<string, LolPremadeVoicePlayerDto>;
}
export type LolPremadeVoicePartyMemberRoleEnum =
  | "DECLINED"
  | "HOLD"
  | "INVITED"
  | "KICKED"
  | "LEADER"
  | "MEMBER";
export interface LolPremadeVoicePlayerDto {
  displayName: string;
  puuid: string;
  partyId: string;
  summonerId: number;
  role: LolPremadeVoicePartyMemberRoleEnum;
}
export interface LolPremadeVoicePremadeVoiceParticipantDto {
  participantId: string;
  summonerId: number;
  puuid: string;
  displayName: string;
  volume: number;
  energy: number;
  isMuted: boolean;
  isSpeaking: boolean;
}
export interface LolPremadeVoicePushToTalkKey {
  key: number;
}
export interface LolPremadeVoicePushToTalkResource {
  pttEnabled: boolean;
  pttKeyBinding?: string;
}
export interface LolPremadeVoiceSessionResource {
  id: string;
  status: LolPremadeVoiceSessionStatus;
  participants: LolPremadeVoiceParticipantResource[];
  volume: number;
  isMuted: boolean;
  isTransmitEnabled: boolean;
}
export type LolPremadeVoiceSessionStatus = "active" | "onHold";
export interface LolPremadeVoiceSettingsResource {
  currentCaptureDeviceHandle: string;
  vadHangoverTime: number;
  vadSensitivity: number;
  micLevel: number;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  autoJoin: boolean;
  muteOnConnect: boolean;
  vadActive: boolean;
  pttActive: boolean;
  inputMode: LolPremadeVoiceInputMode;
  pttKey?: string;
}
export interface LolPremadeVoiceStateResource {
  connected: boolean;
}
export interface LolPremadeVoiceSummoner {
  accountId: number;
  puuid: string;
}
export interface LolPremadeVoiceVoiceAvailability {
  enabled: boolean;
  connectedToVoiceServer: boolean;
  voiceChannelAvailable: boolean;
  disabledAfterLogin: boolean;
  showUI: boolean;
  showDisconnectedState: boolean;
}
export interface LolProgressionCounter {
  id: string;
  name: string;
  groupId: string;
  direction: string;
  startValue: number;
}
export interface LolProgressionCounterInstance {
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  counterValue: number;
}
export interface LolProgressionEntityInstance {
  groupId: string;
  counters: LolProgressionCounterInstance[];
  milestones: LolProgressionMilestoneInstance[];
}
export interface LolProgressionGroup {
  id: string;
  productId: string;
  name: string;
  repeat: LolProgressionRepeat;
  counters: LolProgressionCounter[];
  milestones: LolProgressionMilestone[];
}
export interface LolProgressionMilestone {
  id: string;
  name: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  properties: Map<string, string>;
}
export interface LolProgressionMilestoneInstance {
  milestoneId: string;
  ownerId: string;
  productId: string;
  groupId: string;
  counterId: string;
  triggerValue: number;
  repeatSequence: number;
  triggered: boolean;
}
export interface LolProgressionRepeat {
  count: number;
  scope: number;
  multiplier: number;
}
export interface LolPublishingContentAccountData {
  puuid: string;
  accountId: string;
  summonerLevel: string;
  displayName: string;
}
export interface LolPublishingContentBuildInfo {
  version: string;
  patchline: string;
}
export interface LolPublishingContentClientData {
  puuid: string;
  account_id: number;
  env: string;
  web_region: string;
  locale: string;
  summoner_level: number;
  summoner_name: string;
  app_name: string;
  app_version: string;
  system_os: string;
  protocol: string;
  port: number;
  assetUrls: Map<string, string>;
}
export interface LolPublishingContentPubHubConfig {
  edge: LolPublishingContentPubHubConfigEdge;
  appContext: LolPublishingContentPubHubConfigAppContext;
}
export interface LolPublishingContentPubHubConfigAppContext {
  userId: string;
  userRegion: string;
  deviceCategory: string;
  deviceOperatingSystem: string;
  deviceOperatingSystemVersion: string;
  appId: string;
  appVersion: string;
  appLocale: string;
  appLanguage: string;
  publishingLocale: string;
  appSessionId: string;
}
export interface LolPublishingContentPubHubConfigEdge {
  clientId: string;
  clientRegion: string;
}
export interface LolPublishingContentPublishingLocaleSetting {
  data: LolPublishingContentPublishingLocaleSettingData;
}
export interface LolPublishingContentPublishingLocaleSettingData {
  publishingLocale: string;
}
export interface LolPublishingContentPublishingSettings {
  region: string;
  locale: string;
  webRegion: string;
  webLocale: string;
  publishingLocale: string;
  rsoPlatformId: string;
}
export interface LolPublishingContentRegionLocale {
  region: string;
  locale: string;
  webRegion: string;
}
export interface LolPublishingContentSummonerInfo {
  displayName: string;
  summonerLevel: number;
}
export interface LolPublishingContentSystemInfo {
  operatingSystem: LolPublishingContentSystemInfoOperatingSystem;
}
export interface LolPublishingContentSystemInfoOperatingSystem {
  platform: string;
  versionMajor: string;
}
export interface LolPurchaseWidgetBalance {
  currencyType: string;
  amount: number;
}
export interface LolPurchaseWidgetBaseSkinLineDto {
  items: LolPurchaseWidgetSkinLineItemDto[];
  localizedName: string;
  skinLineDescriptions: LolPurchaseWidgetSkinLineDescriptionDto[];
  pricingOptions: LolPurchaseWidgetPriceOptionDto[];
  splashPath: string;
  uncenteredSplashPath: string;
  collectionCardPath: string;
  collectionDescription: string;
  tilePath: string;
}
export interface LolPurchaseWidgetBundledItemPricingInfo {
  discountPrices: LolPurchaseWidgetDiscountPricingInfo[];
  inventoryType: string;
  itemId: number;
  quantity: number;
}
export interface LolPurchaseWidgetCapOffer {
  id: string;
  typeId: string;
  label: string;
  productId: string;
  merchantId: string;
  payload: LolPurchaseWidgetCapOfferPayloadEntry[];
  active: boolean;
  startDate: string;
  createdDate: string;
}
export interface LolPurchaseWidgetCapOfferPayloadEntry {
  itemPriceMap: Map<string, number>;
  itemInstanceId: string;
  fulfillmentTypeId: string;
  inventoryTypeUUID: string;
}
export interface LolPurchaseWidgetCapOrdersDataDto {
  id: string;
  subOrders: LolPurchaseWidgetCapOrdersSubOrderDto[];
  purchaser: LolPurchaseWidgetCapOrdersTypedIdentifierDto;
  location: string;
  source: string;
}
export interface LolPurchaseWidgetCapOrdersMetaDto {
  xid: string;
}
export interface LolPurchaseWidgetCapOrdersOfferContextDto {
  quantity: number;
  paymentOption: string;
}
export interface LolPurchaseWidgetCapOrdersOfferDto {
  id: string;
  productId: string;
}
export interface LolPurchaseWidgetCapOrdersOrderDto {
  data: LolPurchaseWidgetCapOrdersDataDto;
  meta: LolPurchaseWidgetCapOrdersMetaDto;
}
export interface LolPurchaseWidgetCapOrdersSubOrderDto {
  recipientId: string;
  offerContext: LolPurchaseWidgetCapOrdersOfferContextDto;
  offer: LolPurchaseWidgetCapOrdersOfferDto;
}
export interface LolPurchaseWidgetCapOrdersTypedIdentifierDto {
  id: string;
  typeId: string;
}
export interface LolPurchaseWidgetCatalogPluginItem {
  itemId: number;
  itemInstanceId: string;
  owned: boolean;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  subTitle: string;
  description: string;
  imagePath: string;
  purchaseDate: number;
  releaseDate: number;
  inactiveDate: number;
  prices: LolPurchaseWidgetCatalogPluginPrice[];
  tags?: string[];
  metadata?: LolPurchaseWidgetItemMetadataEntry[];
  questSkinInfo?: LolPurchaseWidgetSkinLineInfo;
  active: boolean;
  ownershipType?: LolPurchaseWidgetInventoryOwnership;
}
export interface LolPurchaseWidgetCatalogPluginItemAssets {
  splashPath: string;
  iconPath: string;
  tilePath: string;
  emblems: LolPurchaseWidgetChampionSkinEmblem[];
  colors: string[];
}
export interface LolPurchaseWidgetCatalogPluginItemWithDetails {
  item: LolPurchaseWidgetCatalogPluginItem;
  quantity: number;
  requiredItems?: LolPurchaseWidgetCatalogPluginItemWithDetails[];
  bundledItems?: LolPurchaseWidgetCatalogPluginItemWithDetails[];
  minimumBundlePrices?: LolPurchaseWidgetCatalogPluginPrice[];
  bundledDiscountPrices?: LolPurchaseWidgetCatalogPluginPrice[];
  assets: LolPurchaseWidgetCatalogPluginItemAssets;
}
export interface LolPurchaseWidgetCatalogPluginPrice {
  currency: string;
  cost: number;
  costType?: string;
  sale?: LolPurchaseWidgetCatalogPluginSale;
}
export interface LolPurchaseWidgetCatalogPluginSale {
  startDate: string;
  endDate: string;
  discount?: number;
  cost: number;
}
export interface LolPurchaseWidgetChampionSkinEmblem {
  name: string;
  emblemPath: LolPurchaseWidgetChampionSkinEmblemPath;
  emblemPosition: LolPurchaseWidgetChampionSkinEmblemPosition;
}
export interface LolPurchaseWidgetChampionSkinEmblemPath {
  large: string;
  small: string;
}
export interface LolPurchaseWidgetChampionSkinEmblemPosition {
  vertical: string;
  horizontal: string;
}
export interface LolPurchaseWidgetDiscountPricingInfo {
  cost: number;
  costType: string;
  currency: string;
  discount: number;
}
export type LolPurchaseWidgetInventoryOwnership =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolPurchaseWidgetItemChoiceDetails {
  item: LolPurchaseWidgetCatalogPluginItem;
  backgroundImage: string;
  contents: LolPurchaseWidgetItemDetails[];
  discount: string;
  fullPrice: number;
  displayType: string;
  purchaseOptions: LolPurchaseWidgetPurchaseOption[];
}
export interface LolPurchaseWidgetItemChoices {
  choices: LolPurchaseWidgetItemChoiceDetails[];
  validationErrors: LolPurchaseWidgetValidationErrorEntry[];
}
export interface LolPurchaseWidgetItemCost {
  currency: string;
  cost: number;
  discount?: number;
}
export interface LolPurchaseWidgetItemDefinition {
  itemId: number;
  inventoryType: string;
  subInventoryType: string;
  name: string;
  description: string;
  subTitle: string;
  owned: boolean;
  assets: LolPurchaseWidgetCatalogPluginItemAssets;
  tags: string[];
  metadata: LolPurchaseWidgetItemMetadataEntry[];
  bundledItemPrice?: LolPurchaseWidgetBundledItemPricingInfo;
  loyaltyUnlocked: boolean;
}
export interface LolPurchaseWidgetItemDetails {
  title: string;
  subTitle: string;
  description: string;
  iconUrl: string;
}
export interface LolPurchaseWidgetItemKey {
  inventoryType: string;
  itemId: number;
}
export interface LolPurchaseWidgetItemMetadataEntry {
  type: string;
  value: string;
}
export interface LolPurchaseWidgetItemOwnership {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: number;
}
export interface LolPurchaseWidgetItemPrice {
  currencyType: string;
  price: number;
  purchasable: boolean;
}
export interface LolPurchaseWidgetItemSale {
  startDate: string;
  endDate: string;
  discount?: number;
}
export interface LolPurchaseWidgetLoginSession {
  puuid?: string;
  state: LolPurchaseWidgetLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
}
export type LolPurchaseWidgetLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolPurchaseWidgetOrderNotificationResource {
  eventTypeId: string;
  eventType: string;
  status: string;
}
export interface LolPurchaseWidgetPriceDetail {
  itemKey: LolPurchaseWidgetItemKey;
  price: LolPurchaseWidgetItemPrice;
}
export interface LolPurchaseWidgetPriceOptionDto {
  price: number;
  currencyType: string;
  currencyPaymentOption?: string;
  currencyName?: string;
  currencyImagePath?: string;
}
export interface LolPurchaseWidgetPurchasableItem {
  item: LolPurchaseWidgetItemDefinition;
  dependencies: LolPurchaseWidgetItemDefinition[];
  bundledItems: LolPurchaseWidgetItemDefinition[];
  sale?: LolPurchaseWidgetItemSale;
  purchaseOptions: LolPurchaseWidgetPurchaseOption[];
  validationErrors: LolPurchaseWidgetValidationErrorEntry[];
}
export interface LolPurchaseWidgetPurchaseItem {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: number;
  source: string;
  purchaseCurrencyInfo: LolPurchaseWidgetItemPrice;
}
export type LolPurchaseWidgetPurchaseOfferOrderStates =
  | "FAIL"
  | "IN_PROGRESS"
  | "NOT_STARTED"
  | "SUCCESS";
export interface LolPurchaseWidgetPurchaseOfferOrderStatus {
  orderState: LolPurchaseWidgetPurchaseOfferOrderStates;
  message: string;
}
export interface LolPurchaseWidgetPurchaseOfferOrderStatuses {
  statuses: Map<string, LolPurchaseWidgetPurchaseOfferOrderStatus>;
}
export interface LolPurchaseWidgetPurchaseOfferRequestV3 {
  offerId: string;
  currencyType: string;
  quantity: number;
  price: number;
}
export interface LolPurchaseWidgetPurchaseOfferResponseV3 {
  legacy: boolean;
  orderDto?: LolPurchaseWidgetCapOrdersOrderDto;
}
export interface LolPurchaseWidgetPurchaseOption {
  priceDetails: LolPurchaseWidgetPriceDetail[];
}
export interface LolPurchaseWidgetPurchaseRequest {
  items: LolPurchaseWidgetPurchaseItem[];
}
export interface LolPurchaseWidgetPurchaseResponse {
  items: LolPurchaseWidgetPurchaseItem[];
  transactions: LolPurchaseWidgetTransaction[];
  useRMSConfirmation: boolean;
}
export interface LolPurchaseWidgetPurchaseWidgetConfig {
  enabled: boolean;
  nonRefundableDisclaimerEnabled: boolean;
  alwaysShowPurchaseDisclaimer: boolean;
}
export interface LolPurchaseWidgetRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolPurchaseWidgetSale {
  startDate: string;
  endDate: string;
  prices: LolPurchaseWidgetItemCost[];
}
export interface LolPurchaseWidgetSkinLineDescriptionDto {
  title: string;
  description: string;
  iconImagePath: string;
}
export interface LolPurchaseWidgetSkinLineDescriptionInfo {
  title: string;
  description: string;
  iconPath: string;
}
export interface LolPurchaseWidgetSkinLineInfo {
  name: string;
  descriptionInfo: LolPurchaseWidgetSkinLineDescriptionInfo[];
  splashPath: string;
  tilePath: string;
  collectionCardPath: string;
  uncenteredSplashPath: string;
  collectionDescription: string;
  tiers: LolPurchaseWidgetSkinLineTier[];
}
export interface LolPurchaseWidgetSkinLineItemDto {
  thumbnailImagePath: string;
  largeImagePath?: string;
  localizedLongName: string;
  localizedShortName: string;
  largeVideoPath?: string;
}
export interface LolPurchaseWidgetSkinLineTier {
  id: number;
  name: string;
  stage: number;
  description?: string;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  shortName: string;
  splashVideoPath?: string;
  collectionSplashVideoPath?: string;
}
export interface LolPurchaseWidgetTransaction {
  transactionId: string;
  itemKey: LolPurchaseWidgetItemKey;
  itemName: string;
  iconUrl: string;
}
export interface LolPurchaseWidgetValidateOfferError {
  errorKey: string;
  meta: string;
}
export interface LolPurchaseWidgetValidateOfferRequestV3 {
  offerId: string;
}
export interface LolPurchaseWidgetValidateOfferResponseV3 {
  validationErrors: LolPurchaseWidgetValidateOfferError[];
}
export interface LolPurchaseWidgetValidationError {
  errorCode: string;
  message: string;
  errorDetails: Map<string, string>;
  responseItems: string[];
}
export interface LolPurchaseWidgetValidationErrorEntry {
  id: string;
}
export interface LolPurchaseWidgetValidationRequest {
  items: LolPurchaseWidgetValidationRequestItem[];
  ownedItems: LolPurchaseWidgetItemOwnership[];
}
export interface LolPurchaseWidgetValidationRequestItem {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: number;
}
export interface LolPurchaseWidgetValidationResponse {
  items: LolPurchaseWidgetValidationResponseItem[];
  valid: boolean;
}
export interface LolPurchaseWidgetValidationResponseItem {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: number;
  validationCurrencyInfo: LolPurchaseWidgetItemPrice[];
  sale?: LolPurchaseWidgetSale;
  name?: string;
  description?: string;
}
export interface LolPurchaseWidgetWallet {
  accountId: number;
  balances: LolPurchaseWidgetBalance[];
  version: number;
}
export interface LolRankedAchievedTier {
  queueType: LolRankedLeagueQueueType;
  tier: LolRankedLeagueTier;
  division: number;
}
export interface LolRankedEndOfGameStatsBlock {
  gameId: number;
}
export interface LolRankedEosNotificationResource {
  notificationName: string;
  notificationType: string;
  seasonEndTime: number;
  queue: string;
  tier: string;
  division: string;
}
export type LolRankedEosNotificationType =
  | "FIRST_WARNING"
  | "SEASON_ENDED"
  | "SECOND_WARNING";
export interface LolRankedEosNotificationsConfig {
  config: LolRankedEosNotificationsConfigEntry[];
}
export interface LolRankedEosNotificationsConfigEntry {
  name: string;
  offsetTime1: number;
  offsetTime2: number;
  offsetTime3: number;
}
export interface LolRankedEosRewardData {
  id: string;
  type: string;
  overrideImagePath: string;
}
export interface LolRankedEosRewardGroupsConfig {
  rewardGroups: Map<string, LolRankedEosRewardGroupsRewardsList>;
}
export interface LolRankedEosRewardGroupsRewardsList {
  rewards: string[];
}
export interface LolRankedEosRewardsConfig {
  seasons: Map<string, LolRankedEosRewardsConfigEntry>;
}
export interface LolRankedEosRewardsConfigEntry {
  rewards: Map<string, LolRankedEosRewardData>;
}
export interface LolRankedEosSettingsData {
  notificationShown: boolean;
}
export interface LolRankedEosSettingsResource {
  data: LolRankedEosSettingsData;
  schemaVersion: number;
}
export interface LolRankedGameflowGameData {
  queue: LolRankedQueue;
}
export type LolRankedGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolRankedGameflowSession {
  phase: LolRankedGameflowPhase;
  gameData: LolRankedGameflowGameData;
}
export interface LolRankedGlobalNotification {
  notifyReason: string;
  participantId: string;
  queueType: string;
  tier: string;
  position: number;
}
export interface LolRankedLcuLeagueNotification {
  id: number;
  msgId: string;
  displayType: LolRankedNotificationDisplayType;
  notifyReason: string;
  changeReason: string;
  queueType: LolRankedLeagueQueueType;
  gameId: number;
  provisionalGamesRemaining: number;
  tier: LolRankedLeagueTier;
  division: LolRankedLeagueDivision;
  numberOfPromotions: number;
  miniseriesProgress: string;
  leaguePoints: number;
  leaguePointsDelta: number;
  ratedTier: LolRankedRatedTier;
  ratedRating: number;
  ratedRatingDelta: number;
  eligibleForPromoHelper: boolean;
  miniseriesWins: number;
  timeUntilInactivityStatusChanges: number;
  rewardEarnedId: string;
  rewardEarnedType: string;
  rewardOverrideImagePath: string;
  splitPointsNotification?: LolRankedSplitPointsNotification;
  promoSeriesForRanksEnabled: boolean;
  consolationLpUsed: number;
  afkLpPenaltyAmount: number;
  afkLpPenaltyLevel: number;
  wasAfkOrLeaver: boolean;
  canDemoteFromTier: boolean;
  winStreak: number;
}
export type LolRankedLeagueDivision = "I" | "II" | "III" | "IV" | "NA" | "V";
export interface LolRankedLeagueDivisionInfo {
  tier: LolRankedLeagueTier;
  division: LolRankedLeagueDivision;
  maxLeagueSize: number;
  apexUnlockTimeMillis: number;
  minLpForApexTier: number;
  topNumberOfPlayers: number;
  standings: LolRankedLeagueStanding[];
}
export interface LolRankedLeagueLadderDTO {
  queueType: string;
  tier: string;
  provisionalGameThreshold: number;
  entries: LolRankedLeagueLadderEntryDTO[];
  maxLeagueSize: number;
  nextApexUpdate: number;
  apexUnlockTimeMillis: number;
  minLpForTier: number;
  topNumberOfPlayers: number;
}
export interface LolRankedLeagueLadderEntryDTO {
  summonerId: number;
  puuid: string;
  summonerName: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  miniSeriesProgress: string;
  wins: number;
  losses: number;
  provisionalGamesRemaining: number;
  previousDayLeaguePosition: number;
  previousSeasonAchievedTier: string;
  previousSeasonAchievedRank: string;
  earnedRegaliaRewardIds: string[];
}
export interface LolRankedLeagueLadderInfo {
  queueType: LolRankedLeagueQueueType;
  tier: LolRankedLeagueTier;
  provisionalGameThreshold: number;
  divisions: LolRankedLeagueDivisionInfo[];
  nextApexUpdateMillis: number;
  requestedRankedEntry?: LolRankedLeagueStanding;
}
export interface LolRankedLeagueNotification {
  notifyReason: string;
  changeReason: string;
  queueType: string;
  gameId: number;
  provisionalGamesRemaining: number;
  tier: string;
  rank: string;
  miniseriesProgress: string;
  leaguePoints: number;
  leaguePointsDelta: number;
  splitPoints: number;
  splitPointsBreakdown: Map<string, number>;
  ratedTier: string;
  ratedRating: number;
  ratedRatingDelta: number;
  eligibleForPromoHelper?: boolean;
  promoSeriesForRanksEnabled: boolean;
  consolationLpUsed: number;
  afkLpPenaltyAmount: number;
  afkLpPenaltyLevel: number;
  wasAfkOrLeaver: boolean;
  canDemoteFromTier: boolean;
  winStreak: number;
}
export interface LolRankedLeagueNotifications {
  leagueNotifications: LolRankedLeagueNotification[];
  globalNotifications: LolRankedGlobalNotification[];
  rewardNotifications: LolRankedRewardNotification[];
}
export type LolRankedLeagueQueueType =
  | "NONE"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_SOLO_5x5"
  | "RANKED_TFT"
  | "RANKED_TFT_DOUBLE_UP"
  | "RANKED_TFT_PAIRS"
  | "RANKED_TFT_TURBO";
export interface LolRankedLeagueStanding {
  summonerId: number;
  puuid: string;
  summonerName: string;
  position: number;
  positionDelta: number;
  previousPosition: number;
  tier: LolRankedLeagueTier;
  division: LolRankedLeagueDivision;
  leaguePoints: number;
  miniseriesResults: LolRankedMiniseries[];
  wins: number;
  losses: number;
  provisionalGamesRemaining: number;
  isProvisional: boolean;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  earnedRegaliaRewardIds: string[];
  rankedRegaliaLevel: number;
  pendingPromotion: boolean;
  pendingDemotion: boolean;
}
export type LolRankedLeagueTier =
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "NONE"
  | "PLATINUM"
  | "SILVER";
export interface LolRankedLeagueTierAndRankDTO {
  playerOrTeamId: string;
  playerOrTeamName: string;
  queueType: string;
  tier: string;
  rank: string;
}
export interface LolRankedLeaguesSeasonRewardConfig {
  QualificationWarningEnabled: boolean;
}
export interface LolRankedLoginSession {
  state: LolRankedLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolRankedLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export type LolRankedMiniseries = "L" | "N" | "W";
export type LolRankedNotificationDisplayType =
  | "MODAL"
  | "NONE"
  | "TOAST"
  | "VIGNETTE";
export interface LolRankedParticipantTiers {
  summonerId: number;
  achievedTiers: LolRankedAchievedTier[];
}
export interface LolRankedQueue {
  type: object;
}
export interface LolRankedQueuesAndPuuidsPayload {
  queueTypes: LolRankedLeagueQueueType[];
  summonerIds: number[];
}
export interface LolRankedRankedQueueStats {
  queueType: LolRankedLeagueQueueType;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  isProvisional: boolean;
  tier: LolRankedLeagueTier;
  division: LolRankedLeagueDivision;
  leaguePoints: number;
  miniSeriesProgress: string;
  ratedTier: LolRankedRatedTier;
  ratedRating: number;
  wins: number;
  losses: number;
  highestTier: LolRankedLeagueTier;
  highestDivision: LolRankedLeagueDivision;
  previousSeasonEndTier: LolRankedLeagueTier;
  previousSeasonEndDivision: LolRankedLeagueDivision;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  warnings?: LolRankedRankedQueueWarnings;
}
export interface LolRankedRankedQueueStatsDTO {
  queueType: string;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  tier: string;
  rank: string;
  leaguePoints: number;
  miniSeriesProgress: string;
  ratedTier: string;
  ratedRating: number;
  wins: number;
  losses: number;
  highestTier: string;
  highestRank: string;
  previousSeasonEndTier: string;
  previousSeasonEndRank: string;
  previousSeasonAchievedTier: string;
  previousSeasonAchievedRank: string;
  warnings?: LolRankedRankedQueueWarningsDTO;
}
export interface LolRankedRankedQueueWarnings {
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: number;
  demotionWarning: number;
  daysUntilDecay: number;
}
export interface LolRankedRankedQueueWarningsDTO {
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: number;
  demotionWarning: number;
  apexDaysUntilDecay: number;
  daysUntilDecay: number;
}
export interface LolRankedRankedStats {
  queues: LolRankedRankedQueueStats[];
  queueMap: Map<string, LolRankedRankedQueueStats>;
  highestRankedEntry?: LolRankedRankedQueueStats;
  highestRankedEntrySR?: LolRankedRankedQueueStats;
  earnedRegaliaRewardIds: string[];
  rankedRegaliaLevel: number;
  highestCurrentSeasonReachedTierSR: LolRankedLeagueTier;
  highestPreviousSeasonEndTier: LolRankedLeagueTier;
  highestPreviousSeasonEndDivision: LolRankedLeagueDivision;
  highestPreviousSeasonAchievedTier: LolRankedLeagueTier;
  highestPreviousSeasonAchievedDivision: LolRankedLeagueDivision;
  splitsProgress: Map<string, number>;
  seasons: Map<string, LolRankedSeasonDTO>;
}
export interface LolRankedRankedStatsDTO {
  queues: LolRankedRankedQueueStatsDTO[];
  earnedRegaliaRewardIds: string[];
  highestPreviousSeasonEndTier: string;
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonAchievedTier: string;
  highestPreviousSeasonAchievedRank: string;
  splitsProgress: Map<string, number>;
  seasons: Map<string, LolRankedSeasonDTO>;
}
export interface LolRankedRatedLadderEntryDTO {
  summonerId: number;
  puuid: string;
  summonerName: string;
  ratedTier: string;
  ratedRating: number;
  wins: number;
  previousUpdateLadderPosition: number;
}
export interface LolRankedRatedLadderInfo {
  queueType: LolRankedLeagueQueueType;
  standings: LolRankedRatedLadderStanding[];
}
export interface LolRankedRatedLadderStanding {
  summonerId: number;
  puuid: string;
  summonerName: string;
  ratedTier: LolRankedRatedTier;
  leaguePoints: number;
  wins: number;
  position: number;
  positionDelta: number;
  previousPosition: number;
}
export type LolRankedRatedTier =
  | "BLUE"
  | "GRAY"
  | "GREEN"
  | "NONE"
  | "ORANGE"
  | "PURPLE";
export interface LolRankedRewardNotification {
  rewardGroupId: string;
  seasonId: number;
}
export interface LolRankedRewardsInfo {
  splits: LolRankedSeasonSplit[];
  currentSplit?: LolRankedSeasonSplit;
  rewardInfoByRewardId: Map<string, LolRankedSplitReward>;
  currentSplitId: number;
  currentSeasonId: number;
}
export interface LolRankedSeasonDTO {
  currentSeasonId: number;
  currentSeasonEnd: number;
  nextSeasonStart: number;
}
export interface LolRankedSeasonSplit {
  splitId: number;
  seasonId: number;
  startTimeMillis: number;
  endTimeMillis: number;
  rewardTrack: LolRankedSplitRewardGroup[];
  victoriousSkinRewardGroup: LolRankedVictoriousSkin;
}
export interface LolRankedSeasonSplitDTO {
  splitId: number;
  seasonId: number;
  startTime: number;
  endTime: number;
  rewardTrack: LolRankedSplitRewardGroupDTO[];
  victoriousSkinRewardGroup: LolRankedVictoriousSkinDTO;
}
export interface LolRankedSequenceEvent {
  name: string;
  priority: number;
}
export type LolRankedSeverity = "ALERT" | "WARNING";
export interface LolRankedSignedRankedStatsDTO {
  queues: LolRankedRankedQueueStatsDTO[];
  earnedRegaliaRewardIds: string[];
  highestPreviousSeasonEndTier: string;
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonAchievedTier: string;
  highestPreviousSeasonAchievedRank: string;
  splitsProgress: Map<string, number>;
  seasons: Map<string, LolRankedSeasonDTO>;
  jwt: string;
}
export interface LolRankedSocialLeaderboardRankedQueueStats {
  queueType: LolRankedLeagueQueueType;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  isProvisional: boolean;
  tier: LolRankedLeagueTier;
  division: LolRankedLeagueDivision;
  leaguePoints: number;
  miniSeriesProgress: string;
  ratedTier: LolRankedRatedTier;
  ratedRating: number;
  wins: number;
  losses: number;
}
export interface LolRankedSocialLeaderboardRankedQueueStatsDTO {
  queueType: string;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  tier: string;
  rank: string;
  leaguePoints: number;
  miniSeriesProgress: string;
  ratedTier: string;
  ratedRating: number;
  wins: number;
  losses: number;
}
export interface LolRankedSplitPointsNotification {
  splitPointsDelta: number;
  splitPointsBeforeGame: number;
  splitPointsAfterGame: number;
  previousSplitPointsRequired: number;
  splitPointsRequired: number;
  nextRewardId: string;
  nextRewardType: string;
  splitPointsBreakdown: Map<string, number>;
}
export interface LolRankedSplitReward {
  rewardType: string;
  quantity: number;
  description: string;
  id: string;
  regaliaLevel?: number;
  pointsRequired: number;
  splitId: number;
  championId: number;
}
export interface LolRankedSplitRewardDTO {
  rewardType: string;
  metadata: LolRankedSplitRewardsMetaData;
  defaultRewardId: string;
  tieredRewardIds: Map<string, string>;
}
export interface LolRankedSplitRewardGroup {
  splitPoints: number;
  rewards: LolRankedSplitReward[];
}
export interface LolRankedSplitRewardGroupDTO {
  splitPoints: number;
  rewards: LolRankedSplitRewardDTO[];
}
export interface LolRankedSplitRewardsMetaData {
  quantity: number;
  description: string;
  championId: number;
}
export interface LolRankedSummoner {
  summonerId: number;
  puuid: string;
}
export interface LolRankedVictoriousSkin {
  splitPointsByHighestAchievedTier: Map<string, number>;
  itemInstanceId: string;
}
export interface LolRankedVictoriousSkinDTO {
  splitPointsByHighestAchievedTier: Map<string, number>;
  itemInstanceId: string;
}
export interface LolRegaliaAccountIdAndSummonerId {
  summonerId?: number;
}
export interface LolRegaliaChatPresence {
  summonerId: number;
  icon: number;
  lol: LolRegaliaChatPresenceLolData;
}
export interface LolRegaliaChatPresenceExternal {
  id: string;
  summonerId: number;
  icon: number;
  lol: Map<string, string>;
}
export interface LolRegaliaChatPresenceLolData {
  level: number;
  rankedLeagueTier?: LolRegaliaLeagueTier;
  rankedLeagueDivision: LolRegaliaLeagueDivision;
  rankedLeagueQueue: LolRegaliaLeagueQueueType;
  rankedSplitRewardLevel: number;
  rankedPrevSeasonTier?: LolRegaliaLeagueTier;
  rankedPrevSeasonDivision: LolRegaliaLeagueDivision;
  regalia?: LolRegaliaRegaliaSettings;
}
export interface LolRegaliaGameDataRegalia {
  id: string;
  idSecondary: string;
  assetPath: string;
  isSelectable: boolean;
  regaliaType: string;
  localizedName: string;
  localizedDescription: string;
}
export interface LolRegaliaInventoryItem {
  itemId: number;
  uuid: string;
  purchaseDate: string;
}
export interface LolRegaliaItemKey {
  inventoryType: string;
  itemId: number;
}
export type LolRegaliaLeagueDivision = "I" | "II" | "III" | "IV" | "NA" | "V";
export type LolRegaliaLeagueQueueType =
  | "NONE"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_SOLO_5x5"
  | "RANKED_TFT"
  | "RANKED_TFT_DOUBLE_UP"
  | "RANKED_TFT_PAIRS"
  | "RANKED_TFT_TURBO";
export type LolRegaliaLeagueTier =
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "NONE"
  | "PLATINUM"
  | "SILVER";
export interface LolRegaliaLoadout {
  id: string;
  name: string;
  scope: string;
  loadout: LolRegaliaRegaliaLoadout;
}
export interface LolRegaliaRankedQueueStats {
  queueType: LolRegaliaLeagueQueueType;
  isProvisional: boolean;
  tier: LolRegaliaLeagueTier;
  division: LolRegaliaLeagueDivision;
}
export interface LolRegaliaRankedStats {
  queues: LolRegaliaRankedQueueStats[];
  highestRankedEntry?: LolRegaliaRankedQueueStats;
  rankedRegaliaLevel: number;
  highestPreviousSeasonAchievedTier: LolRegaliaLeagueTier;
}
export interface LolRegaliaRegalia {
  profileIconId: number;
  crestType: string;
  bannerType: string;
  summonerLevel: number;
  lastSeasonHighestRank?: LolRegaliaLeagueTier;
  highestRankedEntry?: LolRegaliaRegaliaRankedEntry;
  selectedPrestigeCrest: number;
}
export interface LolRegaliaRegaliaAsync {
  md5: string;
}
export type LolRegaliaRegaliaBannerType = "blank" | "lastSeasonHighestRank";
export type LolRegaliaRegaliaCrestType = "none" | "prestige" | "ranked";
export interface LolRegaliaRegaliaFrontendConfig {
  hovercardEnabled: boolean;
  selectionsEnabled: boolean;
}
export interface LolRegaliaRegaliaInventoryItem {
  items: LolRegaliaGameDataRegalia[];
  isOwned: boolean;
}
export interface LolRegaliaRegaliaLoadout {
  REGALIA_CREST_SLOT: LolRegaliaItemKey;
  REGALIA_BANNER_SLOT: LolRegaliaItemKey;
}
export interface LolRegaliaRegaliaPlatformConfig {
  HovercardEnabled: boolean;
  SelectionsEnabled: boolean;
}
export interface LolRegaliaRegaliaPreferences {
  preferredCrestType: string;
  preferredBannerType: string;
  selectedPrestigeCrest: number;
}
export interface LolRegaliaRegaliaRankedEntry {
  queueType: LolRegaliaLeagueQueueType;
  tier: LolRegaliaLeagueTier;
  division: LolRegaliaLeagueDivision;
  splitRewardLevel: number;
}
export interface LolRegaliaRegaliaSettings {
  crestType: LolRegaliaRegaliaCrestType;
  bannerType: LolRegaliaRegaliaBannerType;
  selectedPrestigeCrest: number;
}
export interface LolRegaliaRegaliaSettingsExternal {
  crestType: number;
  bannerType: number;
  selectedPrestigeCrest: number;
}
export interface LolRegaliaRegaliaWithPreferences {
  profileIconId: number;
  crestType: string;
  bannerType: string;
  preferredCrestType: string;
  preferredBannerType: string;
  selectedPrestigeCrest: number;
  summonerLevel: number;
  lastSeasonHighestRank?: LolRegaliaLeagueTier;
  highestRankedEntry?: LolRegaliaRegaliaRankedEntry;
}
export interface LolRegaliaSummoner {
  summonerId: number;
  profileIconId: number;
  summonerLevel: number;
  puuid: string;
}
export interface LolRegaliaSummonerProfile {
  regalia: string;
}
export interface LolRegaliaSummonerProfileUpdate {
  key: string;
  value: string;
}
export interface LolReplaysClashPlaymodeRestrictedInfo {
  isRestricted: boolean;
}
export interface LolReplaysGameflowAvailability {
  state: string;
}
export interface LolReplaysGameflowGameClient {
  running: boolean;
}
export type LolReplaysGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolReplaysGameflowSession {
  phase: LolReplaysGameflowPhase;
  gameClient: LolReplaysGameflowGameClient;
}
export type LolReplaysGameflowWatchPhase =
  | "None"
  | "WatchFailedToLaunch"
  | "WatchInProgress"
  | "WatchStarted";
export interface LolReplaysInstallPaths {
  gameInstallRoot: string;
  gameExecutablePath: string;
}
export type LolReplaysMetadataState =
  | "checking"
  | "download"
  | "downloading"
  | "error"
  | "found"
  | "incompatible"
  | "lost"
  | "missingOrExpired"
  | "retryDownload"
  | "unsupported"
  | "watch";
export interface LolReplaysReplayContextData {
  componentType: string;
}
export interface LolReplaysReplayCreateMetadata {
  gameVersion: string;
  gameType: string;
  queueId: number;
  gameEnd: number;
}
export interface LolReplaysReplayMetadata {
  state: LolReplaysMetadataState;
  gameId: number;
  downloadProgress: number;
}
export interface LolReplaysReplaysConfiguration {
  isReplaysEnabled: boolean;
  isReplaysForEndOfGameEnabled: boolean;
  isReplaysForMatchHistoryEnabled: boolean;
  isPatching: boolean;
  isInTournament: boolean;
  isPlayingGame: boolean;
  isPlayingReplay: boolean;
  isLoggedIn: boolean;
  gameVersion: string;
  minServerVersion: string;
  minutesUntilReplayConsideredLost: number;
}
export interface LolReplaysReplaysDynamicConfig {
  MinSupportedGameServerVersion: string;
  MinutesUntilReplayConsideredLost: number;
}
export interface LolReplaysReplaysSettingsData {
  "replays-folder-path": string;
  "highlights-folder-path": string;
}
export interface LolReplaysReplaysSettingsResource {
  data: LolReplaysReplaysSettingsData;
}
export interface LolReplaysRoflFileMetadata {
  gameLength: number;
  gameVersion: string;
  lastGameChunkId: number;
  lastKeyFrameId: number;
}
export type LolRewardsCelebrationType = "FULLSCREEN" | "NONE" | "TOAST";
export type LolRewardsGrantStatus =
  | "FAILED"
  | "FULFILLED"
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION";
export interface LolRewardsGrantorDescription {
  appName: string;
  entityId: string;
}
export interface LolRewardsRMSPayload {
  productId: string;
  affinities: string[];
}
export interface LolRewardsRegionLocale {
  region: string;
  locale: string;
}
export interface LolRewardsRequestDTOSelectionRequestDTO {
  data: LolRewardsSelectionRequestDTO;
  metadata: LolRewardsRequestMetadataDTO;
}
export interface LolRewardsRequestDTOVectorSelectionRequestDTO {
  data: LolRewardsSelectionRequestDTO[];
  metadata: LolRewardsRequestMetadataDTO;
}
export interface LolRewardsRequestMetadataDTO {
  transactionId?: string;
}
export interface LolRewardsResponseDTOSvcRewardGrant {
  data: LolRewardsSvcRewardGrant;
  metadata: LolRewardsResponseMetadataDTO;
}
export interface LolRewardsResponseDTOMapRewardGroupIdSelectGrantStatus {
  data: Map<string, LolRewardsSelectGrantStatusResponse>;
  metadata: LolRewardsResponseMetadataDTO;
}
export interface LolRewardsResponseDTOVectorSvcRewardGrant {
  data: LolRewardsSvcRewardGrant[];
  metadata: LolRewardsResponseMetadataDTO;
}
export interface LolRewardsResponseDTOVectorSvcRewardGroup {
  data: LolRewardsSvcRewardGroup[];
  metadata: LolRewardsResponseMetadataDTO;
}
export interface LolRewardsResponseMetadataDTO {}
export interface LolRewardsReward {
  id: string;
  itemId: string;
  itemType: string;
  quantity: number;
  fulfillmentSource: string;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolRewardsRewardGrant {
  info: LolRewardsSvcRewardGrant;
  rewardGroup: LolRewardsSvcRewardGroup;
}
export type LolRewardsRewardStatus = "FAILED" | "FULFILLED" | "PENDING";
export type LolRewardsRewardStrategy = "ALL" | "RANDOM" | "SELECTION";
export interface LolRewardsRewardsConfig {
  GrantFiltering: boolean;
}
export type LolRewardsSelectGrantStatusResponse = "FAILED" | "SELECTED";
export interface LolRewardsSelectionRequestDTO {
  grantId: string;
  rewardGroupId: string;
  selections: string[];
}
export interface LolRewardsSelectionStrategyConfig {
  minSelectionsAllowed: number;
  maxSelectionsAllowed: number;
}
export interface LolRewardsSvcRewardGrant {
  id: string;
  granteeId: string;
  rewardGroupId: string;
  dateCreated: string;
  status: LolRewardsGrantStatus;
  grantElements: LolRewardsSvcRewardGrantElement[];
  selectedIds: string[];
  viewed: boolean;
  grantorDescription: LolRewardsGrantorDescription;
  messageParameters: Map<string, object>;
}
export interface LolRewardsSvcRewardGrantElement {
  elementId: string;
  itemId: string;
  itemType: string;
  fulfillmentSource: string;
  status: LolRewardsRewardStatus;
  quantity: number;
  media: Map<string, string>;
  localizations: Map<string, string>;
}
export interface LolRewardsSvcRewardGroup {
  id: string;
  productId: string;
  types: string[];
  rewards: LolRewardsReward[];
  childRewardGroupIds: string[];
  rewardStrategy: LolRewardsRewardStrategy;
  selectionStrategyConfig?: LolRewardsSelectionStrategyConfig;
  active: boolean;
  media: Map<string, string>;
  localizations: Map<string, string>;
  celebrationType: LolRewardsCelebrationType;
}
export interface LolRiotMessagingServiceChampionMasteryLevelUp {
  id: number;
  playerId: number;
  championId: number;
  hasLeveledUp: boolean;
  championLevel: number;
}
export type LolRiotMessagingServiceGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolRiotMessagingServiceGameflowSession {
  phase: LolRiotMessagingServiceGameflowPhase;
}
export interface LolRiotclientUpgraderGameflowAvailability {
  isAvailable: boolean;
  state: string;
}
export interface LolRsoAuthAccessToken {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolRsoAuthAuthError {
  error: string;
  errorDescription: string;
}
export interface LolRsoAuthAuthHint {
  type: LolRsoAuthAuthHintType;
  required: boolean;
  context: object;
}
export type LolRsoAuthAuthHintType =
  | "ambiguous_username"
  | "email_verification"
  | "parental_consent"
  | "password_reset";
export interface LolRsoAuthAuthorization {
  currentPlatformId: string;
  currentAccountId: number;
  subject: string;
}
export interface LolRsoAuthAuthorizationRequest {
  scope: string[];
  trustLevels: LolRsoAuthRSOAuthorizationTrustLevel[];
  clientId: string;
  claims: string[];
}
export interface LolRsoAuthAuthorizationResponse {
  type: string;
  authorization: LolRsoAuthImplicitAuthorization;
}
export type LolRsoAuthConfigReadinessEnum = "Disabled" | "NotReady" | "Ready";
export interface LolRsoAuthConfigStatus {
  readiness: LolRsoAuthConfigReadinessEnum;
}
export type LolRsoAuthConfigType = "player" | "public";
export interface LolRsoAuthDeviceId {
  collectorServerName: string;
  merchantId: string;
  sessionId: string;
  installId: string;
  frameUrl: string;
}
export interface LolRsoAuthEntitlementsToken {
  token: string;
  entitlements: string[];
  expiry: number;
}
export interface LolRsoAuthIdToken {
  token: string;
  expiry: number;
}
export interface LolRsoAuthImplicitAuthorization {
  accessToken: LolRsoAuthAccessToken;
  idToken: LolRsoAuthIdToken;
}
export interface LolRsoAuthPublicClientConfig {
  url: string;
  clientId: string;
}
export type LolRsoAuthRSOAuthorizationTrustLevel =
  | "always_trusted"
  | "always_verify"
  | "trusted_device";
export interface LolRsoAuthRSOConfigReadyState {
  ready: boolean;
}
export interface LolRsoAuthRSOJWTConfig {
  token?: string;
}
export interface LolRsoAuthRSOPlayerCredentials {
  username: string;
  password: string;
  platformId: string;
}
export interface LolRsoAuthRegionStatus {
  platformId: string;
  enabled: boolean;
  isLQFallbackAllowed: boolean;
  isUserInfoEnabled: boolean;
}
export interface LolRsoAuthSessionResponse {
  type: string;
  error: string;
}
export interface LolRsoAuthUserInfo {
  userInfo: string;
}
export interface LolServiceStatusBroadcastMessage {
  content: string;
  messageKey: string;
  severity: string;
}
export interface LolServiceStatusBroadcastNotification {
  broadcastMessages: LolServiceStatusBroadcastMessage[];
}
export interface LolServiceStatusLegacyServiceStatusMessage {
  created_at: string;
  updated_at: string;
  severity: string;
  heading: string;
  content: string;
  translations: LolServiceStatusLegacyServiceStatusTranslation[];
}
export interface LolServiceStatusLegacyServiceStatusResponse {
  status: string;
  messages: LolServiceStatusLegacyServiceStatusMessage[];
}
export interface LolServiceStatusLegacyServiceStatusTranslation {
  locale: string;
  heading?: string;
  content?: string;
}
export interface LolServiceStatusLoginDataPacket {
  broadcastNotification: LolServiceStatusBroadcastNotification;
}
export interface LolServiceStatusRegionLocaleResource {
  region: string;
  locale: string;
}
export interface LolServiceStatusRiotStatusIncident {
  id: number;
  archive_at?: string;
  incident_severity: string;
  titles: LolServiceStatusRiotStatusTitle[];
  platforms: string[];
  updated_at?: string;
  created_at: string;
  updates: LolServiceStatusRiotStatusUpdate[];
}
export interface LolServiceStatusRiotStatusMaintenance {
  id: number;
  archive_at?: string;
  updates: LolServiceStatusRiotStatusUpdate[];
  created_at: string;
  platforms: string[];
  updated_at?: string;
  maintenance_status: string;
  titles: LolServiceStatusRiotStatusTitle[];
}
export interface LolServiceStatusRiotStatusResource {
  id: string;
  name: string;
  locales: string[];
  maintenances: LolServiceStatusRiotStatusMaintenance[];
  incidents: LolServiceStatusRiotStatusIncident[];
}
export interface LolServiceStatusRiotStatusTitle {
  locale: string;
  content: string;
}
export interface LolServiceStatusRiotStatusTranslation {
  locale: string;
  content: string;
}
export interface LolServiceStatusRiotStatusUpdate {
  id: number;
  updated_at?: string;
  publish: boolean;
  author: string;
  created_at: string;
  translations: LolServiceStatusRiotStatusTranslation[];
  publish_locations: string[];
}
export interface LolServiceStatusServiceStatusResource {
  status: string;
  humanReadableUrl: string;
}
export interface LolServiceStatusTickerMessage {
  severity: string;
  createdAt: string;
  updatedAt: string;
  heading: string;
  message: string;
}
export interface LolSettingsLCUGameSettingsConfig {
  HotkeysEnabled: boolean;
  SoundEnabled: boolean;
  InterfaceEnabled: boolean;
  GameplayEnabled: boolean;
  ReplaysEnabled: boolean;
}
export interface LolSettingsLoginSession {
  state: LolSettingsLoginSessionStates;
  summonerId: number;
  accountId: number;
}
export type LolSettingsLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export type LolSettingsPublisher =
  | "garena"
  | "riot"
  | "tencent"
  | "twm"
  | "vng";
export interface LolSettingsRegionLocale {
  region: string;
  locale: string;
}
export interface LolSettingsReplaysConfig {
  replayServiceEnabled: boolean;
}
export interface LolSettingsSettingCategory {
  schemaVersion: number;
  data: object;
}
export interface LolSettingsSettingsConfig {
  isHotkeysEnabled: boolean;
  isSoundEnabled: boolean;
  isInterfaceEnabled: boolean;
  isGameplayEnabled: boolean;
  isReplaysEnabled: boolean;
  isPrivacyNoticeEnabled: boolean;
  isTermsEnabled: boolean;
  isLegalStatementsEnabled: boolean;
  localizedLicensesURL: string;
}
export interface LolShutdownShutdownNotification {
  reason: LolShutdownShutdownReason;
  countdown: number;
  additionalInfo: string;
}
export type LolShutdownShutdownReason =
  | "Invalid"
  | "LcuAlphaDisabled"
  | "PlatformMaintenance"
  | "PlayerBanned";
export type LolSimpleDialogMessagesGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolSimpleDialogMessagesGameflowSession {
  phase: LolSimpleDialogMessagesGameflowPhase;
}
export interface LolSimpleDialogMessagesLocalMessageRequest {
  msgType: string;
  msgBody: string[];
}
export interface LolSimpleDialogMessagesLoginDataPacket {
  simpleMessages: LolSimpleDialogMessagesSimpleMessage[];
}
export interface LolSimpleDialogMessagesMessage {
  id: number;
  type: string;
  body: object;
}
export interface LolSimpleDialogMessagesSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolSocialLeaderboardFriendResource {
  summonerId: number;
  name: string;
  puuid: string;
  icon: number;
  availability: string;
}
export interface LolSocialLeaderboardGiftingFriend {
  summonerId: number;
}
export type LolSocialLeaderboardLeagueDivision =
  | "I"
  | "II"
  | "III"
  | "IV"
  | "NA"
  | "V";
export type LolSocialLeaderboardLeagueQueueType =
  | "NONE"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_SOLO_5x5"
  | "RANKED_TFT"
  | "RANKED_TFT_DOUBLE_UP"
  | "RANKED_TFT_PAIRS"
  | "RANKED_TFT_TURBO";
export type LolSocialLeaderboardLeagueTier =
  | "BRONZE"
  | "CHALLENGER"
  | "DIAMOND"
  | "GOLD"
  | "GRANDMASTER"
  | "IRON"
  | "MASTER"
  | "NONE"
  | "PLATINUM"
  | "SILVER";
export interface LolSocialLeaderboardRankedQueueStats {
  queueType: LolSocialLeaderboardLeagueQueueType;
  provisionalGamesRemaining: number;
  isProvisional: boolean;
  tier: LolSocialLeaderboardLeagueTier;
  division: LolSocialLeaderboardLeagueDivision;
  leaguePoints: number;
  wins: number;
}
export interface LolSocialLeaderboardRankedStats {
  queueMap: Map<string, LolSocialLeaderboardRankedQueueStats>;
}
export interface LolSocialLeaderboardSocialLeaderboardData {
  rowData: LolSocialLeaderboardSocialLeaderboardRowData[];
  nextUpdateTime: number;
}
export interface LolSocialLeaderboardSocialLeaderboardRowData {
  puuid: string;
  summonerId: number;
  summonerName: string;
  provisionalGamesRemaining: number;
  isProvisional: boolean;
  tier: LolSocialLeaderboardLeagueTier;
  division: LolSocialLeaderboardLeagueDivision;
  leaguePoints: number;
  wins: number;
  summonerLevel: number;
  profileIconId: number;
  availability: string;
  leaderboardPosition: number;
  isGiftable: boolean;
}
export interface LolSocialLeaderboardSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  internalName: string;
  summonerLevel: number;
  puuid: string;
  profileIconId: number;
}
export interface LolSpectatorSpectateGameInfo {
  dropInSpectateGameId: string;
  gameQueueType: string;
  allowObserveMode: string;
  puuid: string;
}
export interface LolSpectatorSummonerOrTeamAvailabilty {
  availableForWatching: string[];
}
export interface LolStatstonesCatalogBundle {
  item: LolStatstonesCatalogItemDetails;
}
export interface LolStatstonesCatalogBundlePrice {
  currency: string;
  cost: number;
}
export interface LolStatstonesCatalogItemDetails {
  itemId: number;
  inventoryType: string;
  subInventoryType: string;
  prices: LolStatstonesCatalogBundlePrice[];
  releaseDate: string;
  itemInstanceId: string;
}
export interface LolStatstonesChampionStatstoneSetSummary {
  name: string;
  stonesAvailable: number;
  stonesOwned: number;
  stonesIlluminated: number;
  milestonesPassed: number;
}
export interface LolStatstonesChampionStatstoneSummary {
  championId: number;
  stonesAvailable: number;
  stonesOwned: number;
  stonesIlluminated: number;
  milestonesPassed: number;
  sets: LolStatstonesChampionStatstoneSetSummary[];
}
export interface LolStatstonesCollectionsChampion {
  name: string;
  squarePortraitPath: string;
  id: number;
}
export interface LolStatstonesEogNotificationEnvelope {
  selfStatstoneProgress: LolStatstonesStatstoneProgress[];
  selfPersonalBests: LolStatstonesPersonalBestNotification[];
  selfMilestoneProgress: LolStatstonesMilestoneProgressNotification[];
  othersPersonalBests: LolStatstonesPersonalBestNotification[];
}
export interface LolStatstonesGameDataItemReference {
  itemId: number;
  inventoryType: string;
  contentId: string;
}
export interface LolStatstonesGameDataStatstone {
  name: string;
  contentId: string;
  itemId: number;
  trackingType: number;
  isRetired: boolean;
  isEpic: boolean;
  boundChampion: LolStatstonesGameDataItemReference;
  milestones: number[];
  category: string;
  description: string;
  iconUnowned: string;
  iconUnlit: string;
  iconLit: string;
  iconFull: string;
}
export interface LolStatstonesGameDataStatstonePack {
  name: string;
  description: string;
  contentId: string;
  itemId: number;
}
export interface LolStatstonesGameDataStatstoneSet {
  name: string;
  itemId: number;
  inventoryType: string;
  contentId: string;
  statstones: LolStatstonesGameDataStatstone[];
  price: number;
}
export interface LolStatstonesGameDataStatstonesInfo {
  statstoneData: LolStatstonesGameDataStatstoneSet[];
  packData: LolStatstonesGameDataStatstonePack[];
  packIdToStatStonesIds: object;
  seriesIdToStatStoneIds: object;
  packIdToSubPackIds: object;
  collectionIdToStatStoneIds: object;
  packIdToChampIds: object;
  champIdToPackIds: object;
}
export interface LolStatstonesLoadout {
  id: string;
  name: string;
  scope: string;
  itemId: number;
  loadout: Map<string, object>;
}
export interface LolStatstonesLoadoutItem {
  inventoryType: string;
  contentId: string;
  itemId: number;
}
export interface LolStatstonesMilestoneNotificationDto {
  statstoneId: string;
  level: number;
  threshold: number;
  isCompleted: boolean;
}
export interface LolStatstonesMilestoneProgressNotification {
  statstoneId: string;
  statstoneName: string;
  threshold: number;
  imageUrl: string;
  level: string;
}
export interface LolStatstonesNumberFormattingBehavior {
  digitsForThousandsSeperator: number;
  trimTrailingZerosAfterDecimal: boolean;
  westernNumberGrouping: boolean;
}
export interface LolStatstonesNumberFormattingData {
  decimalSeperator: string;
  thousandSeperator: string;
  thousandAbbreviation: string;
  tenThousandAbbreviation: string;
  millionAbbreviation: string;
  oneHundredMillionAbbreviation: string;
  billionAbbreviation: string;
  trillionAbbreviation: string;
  secondAbbreviation: string;
  minuteAbbreviation: string;
  hourAbbreviation: string;
  metersAbbreviation: string;
  kilometersAbbreviation: string;
  percentageFormat: string;
  numberFormattingBehavior: LolStatstonesNumberFormattingBehavior;
}
export interface LolStatstonesPersonalBestNotification {
  summoner: LolStatstonesSummoner;
  statstoneId: string;
  statstoneName: string;
  personalBest: string;
  imageUrl: string;
}
export interface LolStatstonesPriceInfo {
  currency: string;
  price: number;
}
export interface LolStatstonesProfileStatstoneSummary {
  championId: number;
  name: string;
  value: string;
  imageUrl: string;
  category: string;
}
export interface LolStatstonesStatstone {
  name: string;
  statstoneId: string;
  boundChampionItemId: number;
  nextMilestone: string;
  completionValue: number;
  isComplete: boolean;
  isFeatured: boolean;
  isEpic: boolean;
  isRetired: boolean;
  category: string;
  imageUrl: string;
  description: string;
  formattedValue: string;
  formattedPersonalBest: string;
  formattedMilestoneLevel: string;
  playerRecord?: LolStatstonesStatstonePlayerRecord;
}
export interface LolStatstonesStatstoneCompletion {
  statstoneName: string;
  category: string;
  isEpic: boolean;
}
export interface LolStatstonesStatstoneFeaturedRequest {
  index: number;
  existingFeatured: LolStatstonesStatstone[];
}
export interface LolStatstonesStatstoneMasteryVignette {
  numSetsCompleted: number;
  masteryLevel: number;
  completedSetUuids: string[];
  puuid: string;
}
export interface LolStatstonesStatstoneNotificationDto {
  statstoneId: string;
  puuid: string;
  delta: number;
  value: number;
  level: number;
  best: number;
  isNewBest: boolean;
}
export interface LolStatstonesStatstoneNotificationEnvelopeDto {
  gameId: number;
  updates: LolStatstonesStatstoneNotificationDto[];
  milestones: LolStatstonesMilestoneNotificationDto[];
}
export interface LolStatstonesStatstonePlayerRecord {
  puuid: string;
  statstoneId: string;
  value: number;
  personalBest: number;
  milestoneLevel: number;
  dateAcquired: string;
  dateModified: string;
  dateCompleted: string;
  dateArchived: string;
  entitled: boolean;
}
export interface LolStatstonesStatstoneProgress {
  statstoneId: string;
  statstoneName: string;
  description: string;
  imageUrl: string;
  delta: string;
  value: string;
  nextMilestone: string;
  existingProgressPercent: string;
  newProgressPercent: string;
  newMilestoneDifference: string;
  totalProgressPercent: string;
  category: string;
  level: number;
  best: number;
  isNewBest: boolean;
}
export interface LolStatstonesStatstoneRekindledVignette {
  portraitPath: string;
  statstone: LolStatstonesStatstoneCompletion;
}
export interface LolStatstonesStatstoneSet {
  name: string;
  statstones: LolStatstonesStatstone[];
  stonesOwned: number;
  milestonesPassed: number;
  itemId: number;
  inventoryType: string;
  subInventoryType: string;
  itemInstanceID: string;
  prices: LolStatstonesPriceInfo[];
  ownedFromPacks: LolStatstonesGameDataStatstonePack[];
}
export interface LolStatstonesStatstoneSetCompleteVignette {
  statstones: LolStatstonesStatstoneCompletion[];
}
export interface LolStatstonesStatstoneVignetteNotificationEnvelopeDto {
  champName: string;
  champId: number;
  masteryVignetteNotifications: LolStatstonesStatstoneMasteryVignette[];
  rekindledVignetteNotifications: LolStatstonesStatstoneRekindledVignette[];
  setCompleteVignetteNotifications: LolStatstonesStatstoneSetCompleteVignette[];
}
export interface LolStatstonesSummoner {
  summonerId: number;
  puuid: string;
  displayName: string;
}
export interface LolStoreAccessTokenResource {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolStoreAllSummonerData {
  summoner: LolStoreSummoner;
  summonerLevelAndPoints: LolStoreSummonerLevelAndPoints;
}
export interface LolStoreBundleItemDTO {
  inventoryType: string;
  itemId: number;
  iconUrl: string;
  quantity: number;
  name: string;
  description: string;
  owned: boolean;
  rp: number;
  discountedRp: number;
  ip: number;
}
export interface LolStoreBundled {
  flexible: boolean;
  items: LolStoreBundledItem[];
  minimumPrices: LolStoreBundledItemCost[];
}
export interface LolStoreBundledItem {
  inventoryType: string;
  itemId: number;
  quantity: number;
  discountPrices: LolStoreBundledItemCost[];
}
export interface LolStoreBundledItemCost {
  currency: string;
  cost: number;
  discount?: number;
  costType: string;
}
export interface LolStoreCapOffer {
  id: string;
  typeId: string;
  label: string;
  productId: string;
  merchantId: string;
  payload: object;
  active: boolean;
  startDate: string;
  createdDate: string;
}
export interface LolStoreCatalogInstanceToItemKeyMap {
  platformIds: Map<string, LolStoreItemKey>;
}
export interface LolStoreCatalogItem {
  itemId: number;
  inventoryType: string;
  iconUrl?: string;
  localizations?: Map<string, LolStoreItemLocalization>;
  active?: boolean;
  bundled?: LolStoreBundled;
  inactiveDate?: string;
  maxQuantity?: number;
  prices?: LolStoreItemCost[];
  releaseDate?: string;
  sale?: LolStoreSale;
  subInventoryType?: string;
  tags?: string[];
  itemRequirements?: LolStoreItemKey[];
  metadata?: LolStoreItemMetadataEntry[];
  itemInstanceId?: string;
  offerId?: string;
}
export interface LolStoreFeaturedPageDTO {
  Player: LolStorePlayer;
}
export interface LolStoreGetPlatformIdsFromInstanceIdsRequest {
  instanceIds: string[];
}
export interface LolStoreGiftableResult {
  config: LolStoreGiftingConfig;
  friends: LolStoreGiftingFriend[];
}
export interface LolStoreGiftingConfig {
  recipientLevelLimitItem: number;
  recipientLevelLimitRp: number;
  giftingRestrictionFlagRioter: number;
  giftingItemMinLevelSend: number;
  giftingRpMinLevelSend: number;
  giftingRpMaxDailyGiftsSend: number;
  giftingRpMaxDailyGiftsReceive: number;
  giftingItemMaxDailyGiftsSend: number;
  giftingItemMaxDailyGiftsReceive: number;
  giftingHextechMaxDailyGiftsSend: number;
  giftingHextecMaxDailyGiftsReceive: number;
  requiresIdentityVerification: boolean;
}
export interface LolStoreGiftingFriend {
  friendsSince: string;
  oldFriends: boolean;
  summonerId: number;
  nick: string;
}
export interface LolStoreItemCost {
  currency: string;
  cost: number;
  discount?: number;
}
export interface LolStoreItemKey {
  inventoryType: string;
  itemId: number;
}
export interface LolStoreItemLocalization {
  language: string;
  name: string;
  description: string;
}
export interface LolStoreItemMetadataEntry {
  type: string;
  value: string;
}
export interface LolStoreItemOrderDTO {
  inventoryType: string;
  itemId: number;
  quantity: number;
  rpCost: number;
}
export interface LolStoreItemSale {
  id: number;
  active: boolean;
  item: LolStoreItemKey;
  sale: LolStoreSale;
}
export interface LolStoreLoginDataPacket {
  allSummonerData: LolStoreAllSummonerData;
  simpleMessages: LolStoreSimpleDialogMessage[];
}
export interface LolStoreLoginSession {
  state: LolStoreLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
}
export type LolStoreLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolStoreNotification {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  dismissible: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}
export interface LolStoreOrderNotificationResource {
  id: number;
  eventTypeId: string;
  eventType: string;
  status: string;
}
export interface LolStorePageDTO {
  Player: LolStorePlayer;
  catalog: LolStoreCatalogItem[];
  groupOrder: string[];
  itemGroups: Map<string, LolStorePageGroupingDTO>;
}
export interface LolStorePageGroupingDTO {
  items: LolStoreItemKey[];
  hidden: boolean;
  grouped: boolean;
}
export interface LolStorePlayer {
  accountId: number;
  rp: number;
  ip: number;
  summonerLevel: number;
}
export interface LolStorePurchaseOrderRequestDTO {
  accountId: number;
  items: LolStoreItemOrderDTO[];
}
export interface LolStorePurchaseOrderResponseDTO {
  rpBalance: number;
  ipBalance: number;
  transactions: LolStoreTransactionResponseDTO[];
}
export interface LolStoreRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolStoreSale {
  startDate: string;
  endDate: string;
  prices: LolStoreItemCost[];
}
export interface LolStoreServiceBalance {
  currency: string;
  amount: number;
}
export interface LolStoreServiceWallet {
  accountId: number;
  balances: LolStoreServiceBalance[];
}
export interface LolStoreSimpleDialogMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface LolStoreStoreStatus {
  storefrontIsRunning: boolean;
}
export interface LolStoreSummoner {
  acctId: number;
  sumId: number;
}
export interface LolStoreSummonerLevelAndPoints {
  summonerLevel: number;
}
export interface LolStoreTransactionResponseDTO {
  id: string;
  inventoryType: string;
  itemId: number;
}
export interface LolStoreWallet {
  ip: number;
  rp: number;
}
export interface LolSuggestedPlayersEndOfGamePlayer {
  summonerName: string;
  summonerId: number;
}
export interface LolSuggestedPlayersEndOfGameStats {
  teams: LolSuggestedPlayersEndOfGameTeam[];
}
export interface LolSuggestedPlayersEndOfGameTeam {
  players: LolSuggestedPlayersEndOfGamePlayer[];
  isWinningTeam: boolean;
}
export type LolSuggestedPlayersGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolSuggestedPlayersHonorInteraction {
  summonerId: number;
  displayName: string;
  gameId: number;
}
export interface LolSuggestedPlayersSuggestedPlayersConfig {
  Enabled: boolean;
  FriendsOfFriendsEnabled: boolean;
  MaxNumSuggestedPlayers: number;
  MaxNumReplacements: number;
  PreviousPremadesLimit: number;
  OnlineFriendsLimit: number;
  FriendsOfFriendsLimit: number;
  VicoriousComradesLimit: number;
  MaxHonorInteractionPlayers: number;
}
export interface LolSuggestedPlayersSuggestedPlayersDynamicClientConfig {
  SuggestedPlayers: LolSuggestedPlayersSuggestedPlayersConfig;
}
export interface LolSuggestedPlayersSuggestedPlayersFriend {
  summonerId: number;
  name: string;
  availability: string;
}
export interface LolSuggestedPlayersSuggestedPlayersKudoedPlayer {
  kudoedSummonerId: number;
  kudoedSummonerName: string;
}
export interface LolSuggestedPlayersSuggestedPlayersLobbyStatus {
  queueId: number;
  memberSummonerIds: number[];
  invitedSummonerIds: number[];
}
export interface LolSuggestedPlayersSuggestedPlayersPlayerStatus {
  currentLobbyStatus?: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
  lastQueuedLobbyStatus?: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
}
export interface LolSuggestedPlayersSuggestedPlayersQueue {
  id: number;
  minLevel: number;
}
export type LolSuggestedPlayersSuggestedPlayersReason =
  | "FriendOfFriend"
  | "HonorInteractions"
  | "LegacyPlayAgain"
  | "OnlineFriend"
  | "PreviousPremade"
  | "VictoriousComrade";
export interface LolSuggestedPlayersSuggestedPlayersReportedPlayer {
  reportedSummonerId: number;
}
export interface LolSuggestedPlayersSuggestedPlayersSuggestedPlayer {
  summonerName: string;
  summonerId: number;
  commonFriendName: string;
  commonFriendId: number;
  reason: LolSuggestedPlayersSuggestedPlayersReason;
  gameId: number;
}
export interface LolSuggestedPlayersSuggestedPlayersSummoner {
  summonerId: number;
  displayName: string;
  summonerLevel: number;
}
export interface LolSuggestedPlayersSuggestedPlayersVictoriousComrade {
  summonerId: number;
  summonerName: string;
}
export interface LolSummonerAccountIdAndSummonerId {
  accountId: number;
  summonerId: number;
}
export interface LolSummonerAutoFillQueueDto {
  queueId: number;
  autoFillEligible: boolean;
  autoFillProtectedForStreaking: boolean;
  autoFillProtectedForPromos: boolean;
}
export interface LolSummonerGameloopPlayerInfoV2 {
  autoFillDataBags: LolSummonerAutoFillQueueDto[];
  rerollDataBags: LolSummonerRerollDataBagForClientV1[];
}
export interface LolSummonerLevelField {
  initialLevel: number;
  finalLevel: number;
  progress: LolSummonerLevelProgression;
}
export interface LolSummonerLevelProgression {
  initialXp: number;
  finalXp: number;
  initialLevelBoundary: number;
  finalLevelBoundary: number;
}
export interface LolSummonerLoginSession {
  state: LolSummonerLoginSessionStates;
  summonerId: number;
  accountId: number;
  puuid: string;
  connected: boolean;
}
export type LolSummonerLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export type LolSummonerPlayerNameMode = "ALIAS" | "DARKMODE" | "SUMMONER";
export interface LolSummonerProfilePrivacy {
  enabledState: LolSummonerProfilePrivacyEnabledState;
  setting: LolSummonerProfilePrivacySetting;
}
export type LolSummonerProfilePrivacyEnabledState =
  | "DISABLED"
  | "ENABLED"
  | "UNKNOWN";
export type LolSummonerProfilePrivacySetting = "PRIVATE" | "PUBLIC";
export interface LolSummonerRerollDataBagForClientV1 {
  queueId: number;
  pointsUntilNextReroll: number;
  rerollCount: number;
  totalPoints: number;
  maximumRerolls: number;
  pointCostOfReroll: number;
}
export interface LolSummonerStatus {
  ready: boolean;
}
export interface LolSummonerSummoner {
  summonerId: number;
  accountId: number;
  displayName: string;
  internalName: string;
  profileIconId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
  percentCompleteForNextLevel: number;
  rerollPoints: LolSummonerSummonerRerollPoints;
  puuid: string;
  nameChangeFlag: boolean;
  unnamed: boolean;
  privacy: LolSummonerProfilePrivacySetting;
}
export interface LolSummonerSummonerCacheData {
  summoner?: LolSummonerSummoner;
  summonerIcon?: number;
  privacy?: LolSummonerProfilePrivacySetting;
}
export interface LolSummonerSummonerCreateRequest {
  summonerName: string;
}
export interface LolSummonerSummonerCreatedId {
  summonerId: number;
}
export interface LolSummonerSummonerDTO {
  id: number;
  accountId: number;
  puuid: string;
  name: string;
  partnerId: string;
  profileIconId: number;
  level: number;
  expPoints: number;
  expToNextLevel: number;
  nameChangeFlag: boolean;
  unnamed: boolean;
  privacy: LolSummonerProfilePrivacySetting;
}
export interface LolSummonerSummonerIcon {
  profileIconId: number;
  inventoryToken: string;
}
export interface LolSummonerSummonerIdAndIcon {
  summonerId: number;
  profileIconId: number;
}
export interface LolSummonerSummonerIdAndName {
  summonerId: number;
  displayName: string;
  puuid: string;
}
export interface LolSummonerSummonerProfileUpdate {
  key: string;
  value: object;
  inventory: string;
}
export interface LolSummonerSummonerRequestedName {
  name: string;
}
export interface LolSummonerSummonerRerollPoints {
  pointsToReroll: number;
  currentPoints: number;
  numberOfRolls: number;
  maxRolls: number;
  pointsCostToRoll: number;
}
export interface LolSummonerSummonerSession {
  summonerId: number;
  displayName: string;
  isNewPlayer: boolean;
}
export interface LolSummonerXpAndLevelMessage {
  xp: object;
  level: LolSummonerLevelField;
}
export interface LolTastesDataModelResponse {
  responseCode: number;
  modelData: object;
}
export interface LolTftDataModelResponse {
  responseCode: number;
  modelData: object;
}
export interface LolTftGameflowGameData {
  gameId: number;
  queue: LolTftQueue;
}
export type LolTftGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolTftGameflowSession {
  phase: LolTftGameflowPhase;
  gameData: LolTftGameflowGameData;
}
export interface LolTftLolTftBattlePassHub {
  battlePassXPBoosted: boolean;
}
export interface LolTftLolTftEvent {
  titleTranslationKey: string;
  enabled: boolean;
  url: string;
  startDate: string;
  endDate: string;
}
export interface LolTftLolTftEvents {
  subNavTabs: LolTftLolTftEvent[];
}
export interface LolTftLolTftHomeHub {
  enabled: boolean;
  storePromoOfferIds: string[];
  tacticianPromoOfferIds: string[];
  battlePassOfferIds: string[];
  fallbackStorePromoOfferIds: string[];
  primeGamingPromoOffer?: LolTftLolTftPrimeGaming;
  overrideUrl: string;
}
export interface LolTftLolTftNewsHub {
  enabled: boolean;
  url: string;
}
export interface LolTftLolTftPrimeGaming {
  url: string;
  assetId: string;
}
export interface LolTftLolTftPromoButton {
  eventKey: string;
  url: string;
}
export interface LolTftLolTftPromoButtons {
  promoButtons: LolTftLolTftPromoButton[];
}
export interface LolTftPublishingSettings {
  publishingLocale: string;
}
export interface LolTftQueue {
  id: number;
  mapId: number;
  gameMode: string;
  category: LolTftQueueGameCategory;
}
export type LolTftQueueGameCategory =
  | "Alpha"
  | "Custom"
  | "None"
  | "PvP"
  | "VersusAi";
export interface LolTftSettingsResource {
  data: object;
}
export interface LolTftTeamPlannerChampion {
  championId: string;
}
export interface LolTftTeamPlannerGameDataTFTSets {
  LCTFTModeData: LolTftTeamPlannerTFTModeData;
}
export interface LolTftTeamPlannerGameflowGameData {
  queue: LolTftTeamPlannerQueue;
}
export type LolTftTeamPlannerGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolTftTeamPlannerGameflowSession {
  phase: LolTftTeamPlannerGameflowPhase;
  gameData: LolTftTeamPlannerGameflowGameData;
}
export interface LolTftTeamPlannerQueue {
  gameMode: string;
}
export interface LolTftTeamPlannerSettingsStorageContainer {
  data: LolTftTeamPlannerTeamSettings;
  schemaVersion: number;
}
export interface LolTftTeamPlannerTFTMapSetData {
  SetCoreName: string;
}
export interface LolTftTeamPlannerTFTModeData {
  mDefaultSet: LolTftTeamPlannerTFTMapSetData;
}
export interface LolTftTeamPlannerTFTTeamPlannerConfig {
  enabled: boolean;
}
export interface LolTftTeamPlannerTeamPlan {
  champions: LolTftTeamPlannerChampion[];
  setName: string;
}
export interface LolTftTeamPlannerTeamSettings {
  teams: LolTftTeamPlannerTeamPlan[];
}
export interface LolTftTrovesCapOrdersRequestDTO {
  data: object;
  meta: LolTftTrovesCapOrdersRequestMetaDTO;
}
export interface LolTftTrovesCapOrdersRequestMetaDTO {
  correlationId: string;
  jwt: string;
  xid: string;
}
export interface LolTftTrovesCapOrdersResponseDTO {
  data: object;
}
export interface LolTftTrovesDropsDropTablePityInfo {
  pityLimit: number;
  chaseContentIds: string[];
}
export interface LolTftTrovesDropsDropTableWithPityDTO {
  id: string;
  sourceId: string;
  productId: string;
  startDate: string;
  endDate: string;
  currencyId: string;
  rollOffer: string;
  pityInfo: LolTftTrovesDropsDropTablePityInfo;
}
export interface LolTftTrovesDropsOddsListEntryDTO {
  contentId: string;
}
export interface LolTftTrovesDropsOddsTreeNodeDTO {
  nodeId: string;
  odds: number;
  children: LolTftTrovesDropsOddsTreeNodeDTO[];
}
export interface LolTftTrovesDropsPityCountDTO {
  dropTableId: string;
  count: number;
}
export interface LolTftTrovesGameDataTrovesActiveBanners {
  banners: LolTftTrovesGameDataTrovesBanner[];
}
export interface LolTftTrovesGameDataTrovesBanner {
  id: string;
  activationTime: string;
  deactivationTime: string;
  pityCounterId: string;
  mythicTokenOfferId: string;
  pityThreshold: number;
  bannerTexture: string;
  thumbnailTexture: string;
  name: string;
  description: string;
  celebrationTheme: LolTftTrovesTrovesCelebrationThemeData;
  rootTable: LolTftTrovesGameDataTrovesBannerTable;
  chaseTable: LolTftTrovesGameDataTrovesBannerTable;
}
export interface LolTftTrovesGameDataTrovesBannerReward {
  id: string;
  name: string;
  quantity: number;
  rarity: LolTftTrovesLootRarity;
  currencyId: string;
  loadoutsItem: LolTftTrovesLoadoutsItem;
  rewardTexturePath: string;
  highlightRewardAssetPath: string;
  isChaseReward: boolean;
}
export interface LolTftTrovesGameDataTrovesBannerTable {
  id: string;
  key: string;
  name: string;
  loadoutsItem?: LolTftTrovesLoadoutsItem;
  children?: LolTftTrovesGameDataTrovesBannerTableEntry[];
}
export interface LolTftTrovesGameDataTrovesBannerTableEntry {
  bannerNode: LolTftTrovesGameDataTrovesBannerTable;
}
export interface LolTftTrovesInventoryItem {
  uuid: string;
  inventoryType: string;
  owned: boolean;
}
export interface LolTftTrovesLoadoutsItem {
  itemInstanceId: string;
  itemTypeId: string;
  name: string;
  starLevel: number;
}
export interface LolTftTrovesLoginSession {
  state: LolTftTrovesLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
  puuid: string;
}
export type LolTftTrovesLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolTftTrovesLootOddsResponse {
  lootId: string;
  parentId: string;
  dropRate: number;
  quantity: number;
  label: string;
  query: string;
  displayPriority: number;
  children: LolTftTrovesLootOddsResponse[];
}
export type LolTftTrovesLootRarity =
  | "Default"
  | "Epic"
  | "Legendary"
  | "Mythic"
  | "Ultimate";
export interface LolTftTrovesOrderNotificationResource {
  eventTypeId: string;
  eventType: string;
  status: string;
}
export interface LolTftTrovesPlayerLoot {
  lootName: string;
  localizedName: string;
  itemDesc: string;
}
export interface LolTftTrovesRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolTftTrovesTrovePurchaseResponse {
  orderId: string;
  status: string;
  errorCode: number;
  data: object;
}
export interface LolTftTrovesTrovesBanner {
  id: string;
  startDate: string;
  endDate: string;
  pityLimit: number;
  rollOffer: string;
  mythicOffer: string;
  bannerTexture: string;
  thumbnailTexture: string;
  name: string;
  description: string;
  celebrationTheme: LolTftTrovesTrovesCelebrationThemeData;
  status: LolTftTrovesTrovesStatus;
}
export interface LolTftTrovesTrovesCelebrationCurrencySegmentData {
  lottieJsonPath: string;
  singlePullSoundPath: string;
  multiPullSoundPath: string;
  mythicPullSoundPath: string;
}
export interface LolTftTrovesTrovesCelebrationHighlightSegmentData {
  lottieJsonPath: string;
  revealSoundPath: string;
  transitionWipeSoundPath: string;
  promiseTokenTitle: string;
  promiseTokenDescription: string;
}
export interface LolTftTrovesTrovesCelebrationPortalSegmentData {
  singlePullRareWebmPath: string;
  singlePullEpicWebmPath: string;
  singlePullLegendaryWebmPath: string;
  singlePullMythicWebmPath: string;
  singlePullSoundPath: string;
  multiPullRareWebmPath: string;
  multiPullEpicWebmPath: string;
  multiPullLegendaryWebmPath: string;
  multiPullMythicWebmPath: string;
  multiPullSoundPath: string;
}
export interface LolTftTrovesTrovesCelebrationStandardSegmentData {
  FirstItemTimingOffset: number;
  InterItemTimingOffset: number;
  PCHeaderText: string;
  PCButtonText: string;
  PCBackgroundPath: string;
  PCRewardFramePath: string;
  PCRewardOneStarPath: string;
  PCRewardTwoStarPath: string;
  PCRewardThreeStarPath: string;
  PCRewardRareGemPath: string;
  PCRewardEpicGemPath: string;
  PCRewardLegendaryGemPath: string;
  PCRewardMythicGemPath: string;
  pullSingleIndividualGlintSoundPath: string;
  pullSingleIndividualGlintLegendarySoundPath: string;
  revealGlobalSoundPath: string;
  revealEpicSoundPath: string;
  revealMythicSoundPath: string;
  revealRareSoundPath: string;
  PCRewardFadeInDuration: number;
  PCRewardFadeInDelay: number;
  PCThumbnailFadeInDuration: number;
  PCThumbnailFadeInDelay: number;
  PCRewardSheenPath: string;
  PCRewardSheenDuration: number;
  PCRewardSheenDelay: number;
  PCGlintSprite: LolTftTrovesTrovesPCSpriteAnimation;
  PCLegendarySparkSprite: LolTftTrovesTrovesPCSpriteAnimation;
  PCLegendaryHitSprite: LolTftTrovesTrovesPCSpriteAnimation;
}
export interface LolTftTrovesTrovesCelebrationThemeData {
  currencySegmentData: LolTftTrovesTrovesCelebrationCurrencySegmentData;
  portalSegmentData: LolTftTrovesTrovesCelebrationPortalSegmentData;
  highlightSegmentData: LolTftTrovesTrovesCelebrationHighlightSegmentData;
  standardSegmentData: LolTftTrovesTrovesCelebrationStandardSegmentData;
}
export interface LolTftTrovesTrovesConfig {
  enabled: boolean;
  rewardTypes: string[];
}
export interface LolTftTrovesTrovesPCSpriteAnimation {
  spritesheetPath: string;
  duration: number;
  delay: number;
  numRows: number;
  numCols: number;
  numFrames: number;
  startFrame: number;
  fps: number;
  maxPlayCount: number;
  playAtInsert: boolean;
}
export interface LolTftTrovesTrovesPurchaseRequest {
  offerId: string;
  quantity: number;
  paymentOption: string;
}
export interface LolTftTrovesTrovesReward {
  name: string;
  itemId: string;
  itemTypeId: string;
  quantity: number;
  rarity: LolTftTrovesLootRarity;
  rewardTexturePath: string;
  highlightRewardAssetPath: string;
  starLevel: number;
}
export interface LolTftTrovesTrovesRewards {
  highlight: LolTftTrovesTrovesReward[];
  standard: LolTftTrovesTrovesReward[];
}
export interface LolTftTrovesTrovesRewardsResponse {
  pullType: number;
  rewards: LolTftTrovesTrovesRewards;
}
export interface LolTftTrovesTrovesRollRequest {
  offerId: string;
  numberOfRolls: number;
  isMythic: boolean;
  dropTableId: string;
}
export interface LolTftTrovesTrovesStatus {
  owned: boolean;
  availableContents: number;
  pityCount: number;
  dropTableId: string;
  hasPullError: boolean;
}
export interface LolTftTrovesVerboseLootOddsResponse {
  recipeName: string;
  chanceToContain: LolTftTrovesLootOddsResponse[];
  guaranteedToContain: LolTftTrovesLootOddsResponse[];
  lootItem: LolTftTrovesPlayerLoot;
  hasPityRules: boolean;
  checksOwnership: boolean;
}
export interface LolTrophiesCapClashTrophyEntitlementPayload {
  rewardSpec: LolTrophiesClashV2TrophyRewardSpec;
  rewardType: string;
}
export interface LolTrophiesClashV2TrophyRewardSpec {
  pedestal: string;
  cup: string;
  gem: string;
  theme: string;
  tier: string;
  bracket: string;
  seasonId: string;
}
export interface LolTrophiesInventoryItemsByType {
  TOURNAMENT_TROPHY: LolTrophiesTournamentTrophyInventoryItem[];
}
export interface LolTrophiesInventoryResponse {
  items: LolTrophiesInventoryItemsByType;
}
export interface LolTrophiesLoadout {
  id: string;
  name: string;
  scope: string;
  loadout: Map<string, LolTrophiesLoadoutItem>;
}
export interface LolTrophiesLoadoutItem {
  itemId: number;
  inventoryType: string;
  data: Map<string, string>;
}
export interface LolTrophiesOtherPlayerTrophyInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
}
export interface LolTrophiesTournamentTrophyInventoryItem {
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
  purchaseDate: string;
}
export interface LolTrophiesTrophyProfileData {
  theme: string;
  tier: number;
  bracket: number;
  seasonId: number;
  pedestal: string;
  cup: string;
  gem: string;
}
export type LolUserExperienceGameflowPhase =
  | "ChampSelect"
  | "CheckedIntoTournament"
  | "EndOfGame"
  | "FailedToLaunch"
  | "GameStart"
  | "InProgress"
  | "Lobby"
  | "Matchmaking"
  | "None"
  | "PreEndOfGame"
  | "ReadyCheck"
  | "Reconnect"
  | "TerminatedInError"
  | "WaitingForStats";
export interface LolUserExperienceGameflowSession {
  phase: LolUserExperienceGameflowPhase;
}
export interface LolYourshopAccessTokenResource {
  token: string;
  scopes: string[];
  expiry: number;
}
export interface LolYourshopCatalogItem {
  itemId: number;
  inventoryType: string;
  itemInstanceId?: string;
}
export interface LolYourshopClientCacheClearMessageDTO {
  regions: string[];
  clearAll: boolean;
  inventoryTypes: string[];
}
export interface LolYourshopCurrencyDTO {
  amount: number;
  subCurrencies: Map<string, number>;
}
export interface LolYourshopEndOfGameXp {
  PER_WIN: number;
}
export interface LolYourshopEndOfGameXpNotification {
  xp: LolYourshopEndOfGameXp;
}
export interface LolYourshopInventoryCacheEntry {
  signedInventoryJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolYourshopInventoryDTO {
  puuid: string;
  accountId: number;
  summonerId: number;
  items: Map<string, object>;
  expires: string;
  itemsJwt: string;
}
export interface LolYourshopInventoryItem {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolYourshopItemOwnershipType;
  expirationDate: string;
  wins: number;
}
export interface LolYourshopInventoryItemDTO {
  itemId: number;
  inventoryType: string;
  expirationDate: string;
  purchaseDate: string;
  quantity: number;
  ownedQuantity: number;
  usedInGameDate: string;
  entitlementId: string;
  entitlementTypeId: string;
  instanceId: string;
  instanceTypeId: string;
  payload: object;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  lsb: boolean;
  wins: number;
}
export interface LolYourshopInventoryItemWithPayload {
  uuid: string;
  itemId: number;
  inventoryType: string;
  purchaseDate: string;
  quantity: number;
  ownershipType: LolYourshopItemOwnershipType;
  expirationDate: string;
  f2p: boolean;
  rental: boolean;
  loyalty: boolean;
  loyaltySources: string[];
  owned: boolean;
  wins: number;
  payload: object;
}
export interface LolYourshopInventoryNotification {
  id: number;
  itemId: number;
  inventoryType: string;
  type: string;
  acknowledged: boolean;
}
export interface LolYourshopInventoryResponseDTO {
  data: LolYourshopInventoryDTO;
}
export interface LolYourshopItemKey {
  inventoryType: string;
  itemId: number;
}
export type LolYourshopItemOwnershipType =
  | "F2P"
  | "LOYALTY"
  | "OWNED"
  | "RENTED";
export interface LolYourshopLoginSession {
  state: LolYourshopLoginSessionStates;
  summonerId: number;
  accountId: number;
  idToken: string;
  puuid: string;
}
export type LolYourshopLoginSessionStates =
  | "ERROR"
  | "IN_PROGRESS"
  | "LOGGING_OUT"
  | "SUCCEEDED";
export interface LolYourshopLoyaltyRewards {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: Map<string, number>;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export interface LolYourshopLoyaltyRewardsSimplified {
  freeRewardedChampionsCount: number;
  championIds: number[];
  freeRewardedSkinsCount: number;
  skinIds: number[];
  ipBoost: number;
  xpBoost: number;
  loyaltyTFTMapSkinCount: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTDamageSkinCount: number;
  loyaltySources: Map<string, boolean>;
}
export type LolYourshopLoyaltyStatus =
  | "CHANGE"
  | "DISABLED"
  | "EXPIRY"
  | "LEGACY"
  | "REVOKE"
  | "REWARDS_GRANT";
export interface LolYourshopLoyaltyStatusNotification {
  status: LolYourshopLoyaltyStatus;
  rewards: LolYourshopLoyaltyRewardsSimplified;
  reloadInventory: boolean;
}
export interface LolYourshopOffer {
  offerId: string;
  inventoryType: string;
  itemId: number;
  originalPrice: number;
  discountPrice: number;
  name: string;
  owned: boolean;
  revealed: boolean;
  expirationDate: string;
  spotIndex: number;
}
export interface LolYourshopOfferData {
  offers: LolYourshopOffer[];
  promotion: LolYourshopPromotion;
}
export interface LolYourshopOfferId {
  offerId: string;
}
export interface LolYourshopOfferIds {
  offers: LolYourshopOfferId[];
}
export interface LolYourshopOfferRequest {
  offerId: string;
}
export interface LolYourshopOfferRequests {
  offers: LolYourshopOfferRequest[];
}
export interface LolYourshopPlayerNotification {
  critical: boolean;
  detailKey: string;
  source: string;
  state: string;
  titleKey: string;
  type: string;
  iconUrl: string;
}
export interface LolYourshopPlayerPermissions {
  useData: string;
}
export interface LolYourshopPromotion {
  name: string;
  startTime: string;
  endTime: string;
}
export interface LolYourshopPurchaseItem {
  offerId: string;
  inventoryType: string;
  itemId: number;
  pricePaid: number;
  orderId: string;
}
export type LolYourshopPurchaseOfferOrderStates =
  | "FAIL"
  | "IN_PROGRESS"
  | "NOT_STARTED"
  | "SUCCESS";
export interface LolYourshopPurchaseOfferOrderStatus {
  orderState: LolYourshopPurchaseOfferOrderStates;
  message: string;
}
export interface LolYourshopPurchaseOfferOrderStatuses {
  statuses: Map<string, LolYourshopPurchaseOfferOrderStatus>;
}
export interface LolYourshopPurchaseResponse {
  items: LolYourshopPurchaseItem[];
  wallet: LolYourshopWallet;
}
export interface LolYourshopRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface LolYourshopRmsEntitlementPayload {
  itemId: string;
  itemTypeId: string;
  entitlementTypeId: string;
  resourceOperation: string;
}
export interface LolYourshopRmsStoreEntitlementItem {
  inventoryType: string;
  itemId: string;
}
export interface LolYourshopRmsStoreEntitlementPayload {
  transactionId: string;
  items: LolYourshopRmsStoreEntitlementItem[];
}
export interface LolYourshopRmsWalletPayload {}
export interface LolYourshopRmsXboxSubscriptionChange {
  puuid: string;
  subscriptionId: string;
  active: string;
  identityProvider: string[];
}
export interface LolYourshopSimpleInventoryDTO {
  items: Map<string, object>;
  itemsJwt: string;
  expires: string;
}
export interface LolYourshopSimpleInventoryResponseDTO {
  data: LolYourshopSimpleInventoryDTO;
}
export interface LolYourshopSummonerIcon {
  itemId: number;
}
export interface LolYourshopUIOffer {
  id: string;
  originalPrice: number;
  discountPrice: number;
  type: string;
  skinName: string;
  championId: number;
  skinId: number;
  owned: boolean;
  revealed: boolean;
  purchasing: boolean;
  expirationDate: string;
}
export interface LolYourshopUIStatus {
  hubEnabled: boolean;
  name: string;
  startTime: string;
  endTime: string;
}
export interface LolYourshopWallet {
  rp: number;
}
export interface LolYourshopWalletCacheEntry {
  signedBalancesJwt: string;
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  valid: boolean;
}
export interface LolYourshopWalletDTO {
  puuid: string;
  accountId: number;
  expires: string;
  balances: Map<string, number>;
  balancesJwt: string;
}
export interface LolYourshopWalletResponseDTO {
  data: LolYourshopWalletDTO;
}
export interface LolYourshopXboxSubscriptionStatus {
  active: string;
  subscriptionId: string;
}
export interface LolYourshopYourshopConfig {
  Active: boolean;
  ThemedBackground: boolean;
  PromotionName: string;
  PromotionStartDate: string;
  PromotionEndDate: string;
}
export interface LootItemClientDTO {
  lootName: string;
  asset: string;
  type: string;
  rarity: string;
  value: number;
  storeItemId: number;
  upgradeLootName: string;
  expiryTime: number;
  tags: string;
  displayCategories: string;
  rentalSeconds: number;
  rentalGames: number;
}
export interface LootItemListClientDTO {
  lootItems: LootItemClientDTO[];
  lastUpdate: number;
}
export interface LootLcdsClientConfigurationDTO {
  lootItemsUsingBreakoutRecipeMenu: string[];
  lootMaterialsToAlwaysRender: string[];
  currenciesUsingCapWallets: string[];
  disabledRedemptions: string[];
}
export interface LootLcdsLootDescriptionDTO {
  lootName: string;
  childLootTableNames: string[];
  localizationMap: Map<string, string>;
  localizationLongDescriptionMap: Map<string, string>;
}
export interface LootLcdsRecipeClientDTO {
  recipeName: string;
  type: string;
  displayCategories: string;
  crafterName: string;
  slots: LootLcdsRecipeSlotClientDTO[];
  outputs: LootLcdsRecipeOutputDTO[];
  metadata: LootLcdsRecipeMetadata;
}
export interface LootLcdsRecipeListClientDTO {
  recipes: LootLcdsRecipeClientDTO[];
  lastUpdate: number;
}
export interface LootLcdsRecipeMetadata {
  guaranteedDescriptions: LootLcdsLootDescriptionDTO[];
  bonusDescriptions: LootLcdsLootDescriptionDTO[];
  tooltipsDisabled: boolean;
}
export interface LootLcdsRecipeOutputDTO {
  lootName: string;
  quantityExpression: string;
  probability: number;
  allowDuplicates: boolean;
}
export interface LootLcdsRecipeSlotClientDTO {
  slotNumber: number;
  query: string;
  quantityExpression: string;
}
export interface LootNameRefId {
  lootName: string;
  refId: string;
}
export interface LootOddsDTO {
  lootId: string;
  parentId: string;
  dropRate: number;
  quantity: number;
  label: string;
  lootOrder: number;
  children: LootOddsDTO[];
}
export interface LootProgressionRecipeConfigMap {
  lastUpdate: number;
  lootProgressionRecipeDTOMap: Map<string, LootProgressionRecipeConfiguration>;
}
export interface LootProgressionRecipeConfiguration {
  active: boolean;
  progressionUuid: string;
  recipeName: string;
  activationTime: string;
  deactivationTime: string;
  counterUuids: string[];
}
export interface LootSimpleDialogMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface MatchedPlayerDTO {
  rosterId: string;
  captain: PlayerInfoDTO;
  players: PlayerInfoDTO[];
}
export interface MatchmakingLcdsBustedLeaver {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
  accessToken: string;
  leaverPenaltyMillisRemaining: number;
}
export interface MatchmakingLcdsFailedJoinPlayer {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
}
export interface MatchmakingLcdsGameDTO {
  gameState: string;
  statusOfParticipants: string;
  terminatedCondition: string;
  teamOne: MatchmakingLcdsPlayerParticipant[];
  teamTwo: MatchmakingLcdsPlayerParticipant[];
}
export interface MatchmakingLcdsGameNotification {
  type: string;
  messageCode: string;
  messageArgument: string;
}
export interface MatchmakingLcdsMatchMakerParams {
  queueIds: number[];
  team: number[];
  invitationId?: string;
  lastMaestroMessage: string;
  languages?: string;
  botDifficulty: string;
  teamId: number;
}
export interface MatchmakingLcdsMatchMakerPayload {
  LEAVER_BUSTER_ACCESS_TOKEN: string;
}
export interface MatchmakingLcdsPlayerParticipant {
  summonerId: number;
}
export interface MatchmakingLcdsQueueDisabled {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
  queueId: number;
  message: string;
}
export interface MatchmakingLcdsQueueDodger {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
  dodgePenaltyRemainingTime: number;
}
export interface MatchmakingLcdsQueueInfo {
  queueId: number;
  waitTime: number;
}
export interface MatchmakingLcdsQueueRestricted {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
  queueId: number;
  message: string;
}
export interface MatchmakingLcdsQueueThrottled {
  summoner: MatchmakingLcdsSummoner;
  reasonFailed: string;
  queueId: number;
  message: string;
}
export interface MatchmakingLcdsSearchingForMatchNotification {
  joinedQueues: MatchmakingLcdsQueueInfo[];
  playerJoinFailures: object[];
}
export interface MatchmakingLcdsSummoner {
  sumId: number;
  name: string;
}
export interface MemberBanUnbanTournament {
  tournamentId: number;
  tournamentnameLocKey: string;
  tournamentnameLocKeySecondary: string;
  tournamentPhaseLockInTime: number;
}
export type MetricDataType =
  | "bool"
  | "float"
  | "int"
  | "string"
  | "uint"
  | "unknown";
export interface MetricMetadata {
  sample_window_ms: number;
  type: MetricType;
  data_type: MetricDataType;
  alerts: MetricMetadataAlert[];
  notify: MetricMetadataNotify;
  units: string;
  pretty_name: string;
  category: string;
  description: string;
  destination: string;
  info: string;
  transientAggregation: AggregationType;
  priority: MetricPriority;
  period: number;
}
export interface MetricMetadataAlert {
  level: string;
  min: number;
  max: number;
  notify: MetricMetadataNotify;
  pretty_name: string;
  description: string;
  info: string;
}
export interface MetricMetadataHipchatNotification {
  roomid: string;
  tags: string;
}
export interface MetricMetadataNotify {
  email: string[];
  hipchat: MetricMetadataHipchatNotification[];
  pagerduty: MetricMetadataPagerDutyNotification[];
}
export interface MetricMetadataPagerDutyNotification {
  apikey: string;
}
export type MetricPriority = "high" | "low" | "medium";
export type MetricType =
  | "count"
  | "duration"
  | "percentage"
  | "rate"
  | "unknown";
export interface MissionAlertDTO {
  type: string;
  message: string;
  alertTime: number;
}
export interface MissionDisplay {
  attributes: string[];
  locations: string[];
}
export interface MissionMetadata {
  tutorial: TutorialMetadata;
  npeRewardPack: NpeRewardPackMetadata;
  level: number;
}
export interface MissionProgressDTO {
  lastViewedProgress: number;
  currentProgress: number;
  totalCount: number;
}
export interface MissionRequirementDTO {
  expression: string;
}
export interface MissionsCompressedPayloadDTO {
  missionsCompressed: string;
}
export interface MucJwtDto {
  jwt: string;
  channelClaim: string;
  domain: string;
  targetRegion: string;
}
export interface MultipleReplayMetadataRequestV2 {
  platformId: string;
  gameIds: number[];
}
export interface MultipleReplayMetadataResponseItemV2 {
  gameId: number;
  status: ReplayResponseStatus;
  metadata: ReplayMetadataV2;
}
export interface MultipleReplayMetadataResponseV2 {
  metadataResponses: MultipleReplayMetadataResponseItemV2[];
}
export interface NonTimingEventV1 {
  when: number;
  eventName: string;
  value: string;
  unit: string;
}
export interface NotifyFailureRequest {
  availabilityItemName: string;
  failureInfo: string;
}
export interface NotifySuccessRequest {
  availabilityItemName: string;
}
export interface NpeReward {
  renderer: string;
  data: object;
}
export interface NpeRewardPackMetadata {
  index: number;
  premiumReward: boolean;
  rewardKey: string;
  majorReward: NpeReward;
  minorRewards: NpeReward[];
}
export interface OpenedTeamDTO {
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
  invitationId: string;
  captainId: number;
  tier: number;
  members: OpenedTeamMemberDTO[];
  invitees: PendingRosterInviteeDTO[];
  openPositions: Position[];
}
export interface OpenedTeamMemberDTO {
  playerId: number;
  position: Position;
  tier: number;
  friendship: number;
}
export interface PartiesVoiceDTO {
  jwt: string;
}
export interface PatcherChunkingPatcherEnvironment {
  game_patcher_available: boolean;
  game_patcher_enabled: boolean;
}
export interface PatcherComponentActionProgress {
  currentItem: string;
  total: PatcherComponentStateProgress;
  network: PatcherComponentStateProgress;
  primaryWork: PatcherComponentStateWorkType;
}
export interface PatcherComponentState {
  id: string;
  action: PatcherComponentStateAction;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  timeOfLastUpToDateCheckISO8601?: string;
  isCorrupted: boolean;
  progress?: PatcherComponentActionProgress;
}
export type PatcherComponentStateAction =
  | "CheckingForUpdates"
  | "Idle"
  | "Migrating"
  | "Patching"
  | "Repairing";
export interface PatcherComponentStateProgress {
  bytesComplete: number;
  bytesRequired: number;
  bytesPerSecond: number;
}
export type PatcherComponentStateWorkType = "Disk" | "Network" | "Scanning";
export interface PatcherNotification {
  id: string;
  notificationId: PatcherNotificationId;
  data: Map<string, object>;
}
export type PatcherNotificationId =
  | "BrokenPermissions"
  | "ConnectionError"
  | "DidRestoreClientBackup"
  | "FailedToWriteError"
  | "MissingFilesError"
  | "NotEnoughDiskSpace"
  | "UnspecifiedError";
export interface PatcherP2PStatus {
  isEnabledForPatchline: boolean;
  isAllowedByUser: boolean;
  requiresRestart: boolean;
}
export interface PatcherP2PStatusUpdate {
  isAllowedByUser: boolean;
}
export interface PatcherProductResource {
  id: string;
}
export interface PatcherProductState {
  id: string;
  action: PatcherComponentStateAction;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  isCorrupted: boolean;
  isStopped: boolean;
  percentPatched: number;
  components: PatcherComponentState[];
}
export interface PatcherStatus {
  connectedToPatchServer: boolean;
  successfullyInstalledVersion?: number;
}
export interface PatcherUxResource {
  visible: boolean;
}
export interface PaymentsFrontEndRequest {
  isPrepaid: boolean;
  localeId: string;
  summonerLevel: number;
  gifteeAccountId: string;
  gifteeMessage: string;
  rsoToken: string;
  usePmcSessions: boolean;
  game: string;
}
export interface PaymentsFrontEndResult {
  url: string;
}
export interface PaymentsPMCStartUrlRequest {
  isPrepaid: boolean;
  localeId: string;
  summonerLevel: number;
  gifteeAccountId: string;
  gifteeMessage: string;
  game: string;
}
export interface PaymentsPMCStartUrlResult {
  id: string;
  localeId: string;
  userId: string;
  summonerLevel: number;
  playerFacingId: string;
  pmcStartUrl: string;
  createdAt: string;
}
export interface PendingOpenedTeamDTO {
  invitationId: string;
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
  tier: number;
}
export interface PendingRosterDTO {
  version: number;
  tournamentId: number;
  invitationId: string;
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
  rewardLogos: RewardLogo[];
  tier: number;
  captainId: number;
  highTierVariance: boolean;
  members: PendingRosterMemberDTO[];
  invitees: PendingRosterInviteeDTO[];
  ticketOffers: TicketOfferDTO[];
  inviteFaileds: FailedInvite[];
  lft: boolean;
  mucJwtDto: MucJwtDto;
}
export interface PendingRosterInviteeDTO {
  inviteeId: number;
  inviteeState: PendingRosterInviteeState;
  inviter: number;
  inviteTime: number;
  inviteType: InviteType;
}
export type PendingRosterInviteeState =
  | "ACCEPTED"
  | "DECLINED"
  | "PENDING"
  | "REVOKED"
  | "SELFJOIN"
  | "SELFJOIN_DECLINED"
  | "SELFJOIN_REVOKED"
  | "SUGGESTED"
  | "SUGGEST_DECLINED"
  | "SUGGEST_REVOKED";
export interface PendingRosterMemberDTO {
  playerId: number;
  memberState: PendingRosterMemberState;
  bet: number;
  betType: TicketType;
  position: Position;
  joinTime: number;
  pendingPay: number;
  pendingPremiumPay: number;
  selfBet: number;
  tier: number;
}
export type PendingRosterMemberState =
  | "FORCED_NOT_READY"
  | "KICK"
  | "LEFT"
  | "NOT_READY"
  | "READY";
export interface PhaseInMember {
  playerId: number;
  bet: number;
  pendingPay: number;
  selfBet: number;
}
export interface PhaseRosterDTO {
  phaseId: number;
  period: number;
  bracketId: number;
  checkinTime: number;
  bracketDTO?: Bracket;
}
export type PickModes = "DONE" | "IN_PROGRESS" | "NOT_PICKING";
export interface PlayerBehaviorLcdsForcedClientShutdown {
  reason: string;
  additionalInfo: string;
}
export interface PlayerBehaviorLcdsSimpleMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface PlayerBehaviorSimpleMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface PlayerDTO {
  banned: boolean;
  tmntWins: number;
  tmntLosses: number;
  notifications: ClashOfflineNotification[];
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
}
export interface PlayerFinderDTO {
  playerId: number;
  tier: number;
  primaryPos: Position;
  secondaryPos: Position;
  type: PlayerFinderEnum;
  friendId: number;
}
export type PlayerFinderEnum = "FREEAGENT" | "FRIEND";
export interface PlayerInfoDTO {
  playerId: number;
  teamId: string;
  position: string;
  role: Role;
}
export interface PlayerInventory {
  wardSkins: number[];
  champions: number[];
  skins: number[];
  icons: number[];
  inventoryJwts: string[];
}
export interface PlayerLootDTO {
  lootName: string;
  refId: string;
  count: number;
  expiryTime: number;
}
export interface PlayerLootDefinitionsDTO {
  lootItemList: LootItemListClientDTO;
  recipeList: LootLcdsRecipeListClientDTO;
  queryResult: QueryResultDTO;
  playerLoot: PlayerLootDTO[];
}
export interface PlayerLootResultDTO {
  status: string;
  details: string;
  added: PlayerLootDTO[];
  removed: PlayerLootDTO[];
  redeemed: string[];
}
export interface PlayerMissionDTO {
  id: string;
  title: string;
  helperText: string;
  description: string;
  backgroundImageUrl: string;
  iconImageUrl: string;
  seriesName: string;
  locale: string;
  sequence: number;
  metadata: MissionMetadata;
  startTime: number;
  endTime: number;
  lastUpdatedTimestamp: number;
  objectives: PlayerMissionObjectiveDTO[];
  rewards: PlayerMissionRewardDTO[];
  expiringWarnings: MissionAlertDTO[];
  requirements: string[];
  rewardStrategy: RewardStrategy;
  display: MissionDisplay;
  completionExpression: string;
  viewed: boolean;
  isNew: boolean;
  status: string;
  missionType: string;
  displayType: string;
  earnedDate: number;
  completedDate: number;
  cooldownTimeMillis: number;
  celebrationType: string;
  clientNotifyLevel: string;
  internalName: string;
  media: Map<string, string>;
}
export interface PlayerMissionEligibilityData {
  level: number;
  loyaltyEnabled: boolean;
  playerInventory: PlayerInventory;
  userInfoToken?: string;
}
export interface PlayerMissionObjectiveDTO {
  type: string;
  description: string;
  progress: MissionProgressDTO;
  sequence: number;
  rewardGroups: string[];
  hasObjectiveBasedReward: boolean;
  status: string;
  requirements: string[];
}
export interface PlayerMissionRewardDTO {
  rewardType: string;
  rewardGroup: string;
  description: string;
  iconUrl: string;
  smallIconUrl: string;
  itemId: string;
  uniqueName: string;
  rewardFulfilled: boolean;
  rewardGroupSelected: boolean;
  sequence: number;
  quantity: number;
  isObjectiveBasedReward: boolean;
  media: Map<string, string>;
  iconNeedsFrame: boolean;
}
export interface PlayerNotificationsPlayerNotificationConfigResource {
  ExpirationCheckFrequency?: number;
}
export interface PlayerNotificationsPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: Map<string, string>;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
  dismissible: boolean;
}
export interface PlayerNotificationsRiotMessagingServiceMessage {
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
}
export interface PlayerParticipant {
  summonerId: number;
}
export interface PlayerRosterHistoryDTO {
  rosters: RosterMemberDTO[];
}
export interface PlayerTierDTO {
  playerId: number;
  tier: number;
  primaryPos: Position;
  secondPos: Position;
}
export interface PluginDescriptionResource {
  name: string;
  version: string;
  riotMeta: PluginMetadataResource;
  pluginDependencies: Map<string, string>;
}
export interface PluginLcdsEvent {
  clientId: string;
  subtopic: string;
  typeName: string;
  body: object;
}
export interface PluginLcdsResponse {
  typeName: string;
  body: object;
}
export interface PluginManagerResource {
  state: PluginManagerState;
}
export type PluginManagerState = "NotReady" | "PluginsInitialized";
export interface PluginMetadataResource {
  type: string;
  subtype: string;
  app: string;
  feature: string;
  mock: string;
  hasBundledAssets: boolean;
  globalAssetBundles: string[];
  perLocaleAssetBundles: Map<string, object>;
  implements: Map<string, string>;
  threading: PluginThreadingModel;
}
export interface PluginRegionLocaleChangedEvent {
  region: string;
  locale: string;
}
export interface PluginResource {
  fullName: string;
  shortName: string;
  version: string;
  supertype: string;
  subtype: string;
  app: string;
  feature: string;
  threadingModel: string;
  assetBundleNames: string[];
  mountedAssetBundles: Map<string, string>;
  orderWadFileMounted: number;
  dependencies: PluginResourceContract[];
  implementedContracts: PluginResourceContract[];
}
export interface PluginResourceContract {
  fullName: string;
  version: string;
}
export interface PluginResourceEvent {
  uri: string;
  eventType: PluginResourceEventType;
  data: object;
}
export type PluginResourceEventType = "Create" | "Delete" | "Update";
export interface PluginServiceProxyResponse {
  uuid: string;
  serviceName: string;
  methodName: string;
  payload: string;
  status: string;
  error: string;
}
export type PluginThreadingModel =
  | "concurrent"
  | "dedicated"
  | "parallel"
  | "sequential";
export type Position =
  | "BOTTOM"
  | "FILL"
  | "JUNGLE"
  | "MIDDLE"
  | "TOP"
  | "UNSELECTED"
  | "UTILITY";
export interface ProcessControlProcess {
  status: string;
}
export interface PublicRosterDTO {
  id: number;
  tournamentId: number;
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
  memberIds: number[];
}
export interface Punishment {
  punishedForChatLogs: string[];
  punishedForGameIds: number[];
  punishmentReason: string;
  punishmentType: string;
  punishedUntilDateMillis: number;
  punishmentLengthMillis: number;
  permaBan: boolean;
  punishmentLengthGames: number;
  playerFacingMessage: string;
}
export interface QueryEvaluationRequestDTO {
  query: string;
}
export interface QueryEvaluationResultDTO {
  lootItemNames: string[];
}
export interface QueryResultDTO {
  queryToLootNames: object;
  lastUpdate: number;
}
export interface RankedScoutingDTO {
  playerId: number;
  totalMasteryScore: number;
  topMasteries: ChampionMasteryPublicDTO[];
  topSeasonChampions: ChampionScoutingDTO[];
}
export interface RankedScoutingMemberDTO {
  playerId: number;
  championScoutingData: RankedScoutingTopChampionDTO[];
}
export interface RankedScoutingTopChampionDTO {
  championId: number;
  rank: number;
  winCount: number;
  gameCount: number;
  kda: number;
}
export interface RedeemLootTransactionDTO {
  clientId: string;
  puuid: string;
  playerId: number;
  accountId: number;
  lootName: string;
}
export interface RegionLocale {
  region: string;
  locale: string;
  webRegion: string;
  webLanguage: string;
}
/**
 * Help format for remoting functions and types. */
export type RemotingHelpFormat = "Brief" | "Console" | "Epytext" | "Full";
/**
 * Well-known privilege levels for bindable functions. */
export type RemotingPrivilege = "Admin" | "Local" | "None" | "User";
/**
 * Serialization format for remoting requests and results. */
export type RemotingSerializedFormat = "JSON" | "MsgPack" | "YAML";
export interface ReplayMetadataV2 {
  gameVersion: string;
  fileSize: number;
}
export type ReplayResponseStatus =
  | "BAD_REQUEST"
  | "EXPIRED"
  | "INTERNAL_SERVER_ERROR"
  | "NOT_FOUND"
  | "OK";
export interface RewardDetails {
  tournamentId: number;
  rosterId: number;
  teamMemberIds: number[];
}
export interface RewardLogo {
  logo: number;
  memberOwnedCount: number;
}
export interface RewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: number;
  selectMinGroupCount: number;
}
export interface RiotMessagingServiceAcknowledgeBody {
  id: string;
}
export interface RiotMessagingServiceEntitlementsToken {
  accessToken: string;
  token: string;
  subject: string;
  issuer: string;
  entitlements: string[];
}
export interface RiotMessagingServicePluginRegionLocaleChangedEvent {
  region: string;
  locale: string;
}
export interface RiotMessagingServiceSession {
  state: RiotMessagingServiceState;
  token: string;
  tokenType: RiotMessagingServiceTokenType;
}
export type RiotMessagingServiceState =
  | "Connected"
  | "Connecting"
  | "Disconnected"
  | "Disconnecting";
export type RiotMessagingServiceTokenType =
  | "Access"
  | "Identity"
  | "Unavailable";
export interface RmsMessage {
  id: string;
  resource: string;
  service: string;
  version: string;
  timestamp: number;
  payload: string;
  ackRequired: boolean;
}
export type Role = "CAPTAIN" | "MEMBER" | "NONE";
export interface RosterAggregatedStatsDTO {
  periodStats: RosterPeriodAggregatedStatsDTO[];
  playerStats: Map<string, RosterPlayerAggregatedStatsDTO>;
}
export interface RosterDTO {
  version: number;
  id: number;
  tournamentId: number;
  invitationId: string;
  name: string;
  shortName: string;
  logo: number;
  logoColor: number;
  tier: number;
  points: number;
  wins: number;
  losses: number;
  eliminated: boolean;
  captainId: number;
  members: RosterMemberDTO[];
  phases: PhaseRosterDTO[];
  dynamicState: RosterDynamicStateDTO;
  banned: boolean;
  mucJwtDto: MucJwtDto;
}
export interface RosterDynamicStateDTO {
  version: number;
  tournamentId: number;
  rosterId: number;
  phaseCheckinStates: number[];
  members: PhaseInMember[];
  ticketOffers: TicketOfferDTO[];
  withdraw: RosterWithdraw;
}
export interface RosterMatchAggregatedStatsDTO {
  round: number;
  duration: number;
  opponentShortName: string;
  opponentLogo: number;
  opponentLogoColor: number;
  win: boolean;
  loserBracket: boolean;
  gameId: number;
  kills: number;
  opponentKills: number;
  playerChampionIds: Map<string, number>;
}
export interface RosterMemberDTO {
  rosterId: number;
  playerId: number;
  tournamentId: number;
  currentBid: number;
  bidType: TicketType;
  pendingSpend: number;
  pendingPremiumSpend: number;
  position: Position;
  joinTime: number;
  tier: number;
}
export interface RosterPeriodAggregatedStatsDTO {
  period: number;
  bracketSize: number;
  time: number;
  matchStats: RosterMatchAggregatedStatsDTO[];
  playerBids: Map<string, number>;
}
export interface RosterPlayerAggregatedStatsDTO {
  rawStatsSum: Map<string, number>;
  rawStatsMax: Map<string, number>;
}
export interface RosterStatsDTO {
  rosterId: number;
  tournamentThemeId: number;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  scheduleTime: number;
  scheduleEndTime: number;
  tournamentPeriods: number;
  tier: number;
  rosterName: string;
  rosterShortName: string;
  rosterLogo: number;
  rosterLogoColor: number;
  stats: RosterAggregatedStatsDTO;
}
export interface RosterWithdraw {
  initVoteTime: number;
  initVoteMember: number;
  voteTimeoutMs: number;
  lockoutTimeMs: number;
  gameStartBufferMs: number;
  voteWithdrawMembers: number[];
  declineWithdrawMembers: number[];
}
export interface SLIBoolDiagnostic {
  key: string;
  value: boolean;
}
export interface SLICount {
  sliName: string;
  idempotencyKey: string;
  successes: number;
  failures: number;
  startTimeEpochMs: number;
  endTimeEpochMs: number;
  labels: Map<string, string>;
  boolDiagnostics: Map<string, boolean>;
  doubleDiagnostics: Map<string, number>;
  intDiagnostics: Map<string, number>;
  stringDiagnostics: Map<string, string>;
}
export interface SLIDoubleDiagnostic {
  key: string;
  value: number;
}
export interface SLIIntDiagnostic {
  key: string;
  value: number;
}
export interface SLILabel {
  key: string;
  value: string;
}
export interface SLIStringDiagnostic {
  key: string;
  value: string;
}
export interface SanitizerContainsSanitizedRequest {
  text: string;
  level?: number;
  aggressiveScan?: boolean;
}
export interface SanitizerContainsSanitizedResponse {
  contains: boolean;
}
export interface SanitizerSanitizeRequest {
  texts?: string[];
  text?: string;
  level?: number;
  aggressiveScan?: boolean;
}
export interface SanitizerSanitizeResponse {
  texts?: string[];
  text?: string;
  modified: boolean;
}
export interface SanitizerSanitizerStatus {
  ready: boolean;
  region: string;
  locale: string;
  filteredWordCountsByLevel: Map<string, number>;
  whitelistedWordCountsByLevel: Map<string, number>;
  breakingCharsCount: number;
  projectedCharsCount: number;
}
export interface SeriesDTO {
  id: string;
  internalName: string;
  parentInternalName: string;
  type: string;
  eligibilityType: string;
  displayType: string;
  title: string;
  description: string;
  optInButtonText: string;
  optOutButtonText: string;
  status: string;
  startDate: number;
  endDate: number;
  createdDate: number;
  lastUpdatedTimestamp: number;
  viewed: boolean;
  media: SeriesMediaDTO;
  tags: string[];
  warnings: AlertDTO[];
}
export interface SeriesMediaDTO {
  backgroundUrl: string;
  backgroundImageLargeUrl: string;
  backgroundImageSmallUrl: string;
  trackerIconUrl: string;
  trackerIcon: string;
  accentColor: string;
}
export interface ShutdownLcdsForcedClientShutdown {
  reason: string;
  additionalInfo: string;
}
export interface SimpleDialogMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface SimpleDialogMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface SpectatorLcdsSpectateAvailabilityDto {
  teamOrSummonerIds: string[];
}
export interface SpectatorLcdsSpectateAvailabilityResponseDto {
  availableForWatching: string[];
}
export interface StoreLcdsChampionDTO {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  sources: string[];
  active: boolean;
  botEnabled: boolean;
  championId: number;
  championSkins: StoreLcdsChampionSkinDTO[];
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  f2pRewardSources: string[];
  owned: boolean;
  rankedPlayEnabled: boolean;
}
export interface StoreLcdsChampionSkinDTO {
  endDate: number;
  purchaseDate: number;
  winCountRemaining: number;
  sources: string[];
  championId: number;
  freeToPlayReward: boolean;
  f2pRewardSources: string[];
  lastSelected: boolean;
  owned: boolean;
  skinId: number;
  stillObtainable: boolean;
}
export interface StoreLcdsSimpleDialogMessage {
  accountId: number;
  msgId: string;
  type: string;
  params: string[];
}
export interface StoreLcdsSimpleDialogMessageResponse {
  accountId: number;
  msgId: string;
  command: string;
}
export interface StoreLcdsStoreAccountBalanceNotification {
  ip: number;
  rp: number;
}
export interface StoreLcdsStoreFulfillmentNotification {
  inventoryType: string;
  rp: number;
  ip: number;
  data: object;
}
export interface ThemeVp {
  themeId: number;
  themeVp: number;
}
export interface TicketOfferDTO {
  offerPlayerId: number;
  receivePlayerId: number;
  count: number;
  type: TicketType;
  ticketOfferState: TicketOfferState;
}
export type TicketOfferState = "ACCEPTED" | "ACTIVE" | "REJECTED" | "REVOKED";
export type TicketType = "BASIC" | "PREMIUM";
export interface TierConfig {
  tier: number;
  delayTime: number;
  estimateTime: number;
}
export interface TimeSeriesEventBeginV1 {
  when: number;
  eventName: string;
}
export interface TimeSeriesEventEndV1 {
  when: number;
  eventName: string;
  suffix?: string;
}
export interface TimeSeriesEventMarkerV1 {
  when: number;
  eventName: string;
  markerName: string;
}
export interface TournamentDTO {
  id: number;
  scheduleTime: number;
  scheduleEndTime: number;
  rosterCreateDeadline: number;
  entryFee: number;
  rosterSize: number;
  themeId: number;
  nameLocKey: string;
  nameLocKeySecondary: string;
  buyInOptions: number[];
  buyInOptionsPremium: number[];
  queueId: number;
  scoutingTimeMs: number;
  lastThemeOfSeason: boolean;
  bracketSize: string;
  minGames: number;
  smsRestriction: boolean;
  honorRestriction: boolean;
  rankRestriction: boolean;
  voiceEnabled: boolean;
  phases: TournamentPhaseDTO[];
  rewardConfig: ClashRewardConfigClient[];
  tierConfigs: TierConfig[];
  bracketFormationInitDelayMs: number;
  bracketFormationIntervalMs: number;
  status: TournamentStatusEnum;
  resumeTime: number;
  lft: boolean;
  maxInvites: number;
  maxSuggestionsPerPlayer: number;
}
export interface TournamentHistoryAndWinnersDTO {
  tournamentHistory: TournamentDTO[];
  tournamentWinnersCompressed: string;
}
export interface TournamentInfoDTO {
  tournament: TournamentDTO;
  roster?: RosterDTO;
  pendingRoster?: PendingRosterDTO;
  inviteePendingRosters: PendingRosterDTO[];
  themeVp: number;
}
export interface TournamentInfoMinimalDTO {
  tournamentInfo: TournamentInfoDTO[];
  time: number;
}
export interface TournamentPhaseDTO {
  id: number;
  tournamentId: number;
  registrationTime: number;
  startTime: number;
  period: number;
  cancelled: boolean;
  limitTiers: number[];
  capacityStatus: CapacityEnum;
}
export interface TournamentPlayerInfoDTO {
  tournamentInfo: TournamentInfoDTO[];
  rosterStats: RosterStatsDTO[];
  player: PlayerDTO;
  seasonVp: number;
  themeVps: ThemeVp[];
  time: number;
  tier: number;
}
export type TournamentStatusEnum =
  | "CANCELLED"
  | "DEFAULT"
  | "PAUSED"
  | "PRERESUME";
export interface TracingCriticalFlowEventV1 {
  when: number;
  eventId: string;
  succeeded: boolean;
  payloadString: string;
}
export interface TracingEventV1 {
  when: number;
  name: string;
  src: string;
  dest: string;
  tags: string;
  details: string;
}
export type TracingModuleThreadingModelV1 =
  | "kConcurrent"
  | "kDedicated"
  | "kMainThread"
  | "kNone"
  | "kParallel"
  | "kSequential";
export type TracingModuleTypeV1 =
  | "kBackEndPlugin"
  | "kBackendOther"
  | "kFrontEndPlugin"
  | "kRemoteAppModule"
  | "kRemotingSource"
  | "kUnknown";
export interface TracingModuleV1 {
  moduleId: number;
  name: string;
  type: TracingModuleTypeV1;
  threadingModel: TracingModuleThreadingModelV1;
}
export interface TracingPhaseBeginV1 {
  when: number;
  name: string;
  importance: TracingPhaseImportanceV1;
}
export interface TracingPhaseEndV1 {
  when: number;
  name: string;
}
export type TracingPhaseImportanceV1 = "major" | "minor" | "trivial";
export interface TutorialMetadata {
  stepNumber: number;
  queueId: string;
  displayRewards: Map<string, string>;
  useQuickSearchMatchmaking: boolean;
  useChosenChampion: boolean;
}
export interface VerboseLootOddsDTO {
  recipeName: string;
  lastUpdated: string;
  chanceToContain: LootOddsDTO[];
  guaranteedToContain: LootOddsDTO[];
  hasPityRules: boolean;
  checksOwnership: boolean;
}
export interface YourshopLcdsChampionDTO {
  championId: number;
  owned: boolean;
}
export interface YourshopLcdsChampionSkinDTO {
  championId: number;
  owned: boolean;
  skinId: number;
}
export interface YourshopLcdsClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}
export interface YourshopStoreFulfillmentNotification {
  inventoryType: string;
  data: object;
}
/**
 * User Experience Settings Operating System Information */
export interface basicOperatingSystemInfo {
  edition: string;
  platform: string;
  versionMajor: string;
  versionMinor: string;
}
/**
 * User Experience Settings System Information */
export interface basicSystemInfo {
  operatingSystem: basicOperatingSystemInfo;
  physicalMemory: number;
  physicalProcessorCores: number;
}
export interface cookie {
  url: string;
  name: string;
  value: string;
  domain: string;
  path: string;
  secure: boolean;
  httponly: boolean;
  expires?: number;
}
