import type {
  AggregationType,
  AlertDTO,
  BannedChampion,
  BasePlayerDTO,
  BindingAsyncCancelEvent,
  BindingAsyncFailureEvent,
  BindingAsyncState,
  BindingCallbackEvent,
  BindingFullApiHelp,
  BindingFullArgumentHelp,
  BindingFullEnumValueHelp,
  BindingFullEventHelp,
  BindingFullFieldHelp,
  BindingFullFunctionHelp,
  BindingFullTypeHelp,
  BindingFullTypeIdentifier,
  BindingGenericAsyncEvent,
  BindingGenericEvent,
  BindingHelpFormat,
  BoostTeamSkinRentalDTO,
  Bracket,
  BracketMatch,
  BracketRoster,
  BuildInfo,
  CapacityEnum,
  ChampSelectLcdsGameDTO,
  ChampSelectLcdsGameTimerDTO,
  ChampSelectLcdsObfuscatedParticipant,
  ChampSelectLcdsPlayerChampionSelectionDTO,
  ChampSelectLcdsPlayerParticipant,
  ChampSelectLcdsPointSummary,
  ChampSelectLcdsPotentialTradersDTO,
  ChampSelectLcdsRollResult,
  ChampSelectLcdsTradeContractDTO,
  ChampionMasteryPublicDTO,
  ChampionScoutingDTO,
  ClashEventData,
  ClashOfflineNotification,
  ClashRewardConfigClient,
  ClashRewardConfigEntry,
  ClashRewardDefinition,
  ClashRewardKeyType,
  ClashRewardOutput,
  ClashRewardSpec,
  ClashRewardTime,
  ClashRewardType,
  ClashSeasonRewardResult,
  ClientBracketMatchStatus,
  ClientConfigAuthenticatedConnection,
  ClientConfigBuildInfo,
  ClientConfigClientConfig,
  ClientConfigConfigNamespaceUpdate,
  ClientConfigConfigParams,
  ClientConfigConfigReadinessEnum,
  ClientConfigConfigStatus,
  ClientConfigConfigType,
  ClientConfigDataPaths,
  ClientConfigDepInjectorEntitlements,
  ClientConfigDepInjectorEntitlementsUpdate,
  ClientConfigDepInjectorEntitlementsUpdateType,
  ClientConfigEntitlements,
  ClientConfigEntitlementsUpdate,
  ClientConfigSession,
  ClientConfigUpdateType,
  ClientDynamicConfig,
  ClientRequestError,
  CollectionsLcdsChampionDTO,
  CollectionsLcdsChampionSkinDTO,
  CollectionsLcdsClientDynamicConfigurationNotification,
  CollectionsLcdsRentalUpdateNotification,
  CollectionsLcdsStoreFulfillmentNotification,
  ContentItemIdentifier,
  CraftLootRefTransactionDTO,
  CrashReportingEnvironment,
  CriticalFlowCapture,
  CriticalFlowExpectation,
  CriticalFlowSummary,
  DownloadUrlRequestV2,
  DownloadUrlResponseV2,
  ElevationAction,
  ElevationRequest,
  EndOfGameLcdsClientReportV1,
  EndOfGameLcdsEndOfGameStats,
  EndOfGameLcdsHarassmentReport,
  EndOfGameLcdsPlayerParticipantStatsSummary,
  EndOfGameLcdsPointsPenalty,
  EndOfGameLcdsRawStatDTO,
  EndOfGameLcdsSpell,
  EndOfGameLcdsTeamId,
  EndOfGameLcdsTeamInfo,
  EntitlementsToken,
  EogLcdsGameDTO,
  ExternalPluginsAvailability,
  ExternalPluginsResource,
  FailedInvite,
  GameQueuesLcdsAllowSpectators,
  GameQueuesLcdsGameQueueConfig,
  GameflowLcdsGameDTO,
  GameflowLcdsPlayerCredentialsDto,
  GameflowLcdsReconnectInfoDto,
  IdsDTO,
  InviteType,
  LCDSBroadcastNotification,
  LCDSChampionReward,
  LCDSGlobalRewards,
  LCDSLoyaltyRewards,
  LCDSLoyaltyStateChangeNotification,
  LCDSLoyaltyStateChangeNotificationCategory,
  LCDSPlayerMessagingSimpleMessage,
  LCDSPlayerMessagingSimpleMessageResponse,
  LcdsBotParticipant,
  LcdsFailedJoinPlayer,
  LcdsGameDTO,
  LcdsGameInviteBaseRuntimeException,
  LcdsGameMap,
  LcdsGameNotification,
  LcdsInvitationRequest,
  LcdsInvitationState,
  LcdsInviteFailed,
  LcdsInvitePrivileges,
  LcdsInvitee,
  LcdsInviteeState,
  LcdsInviter,
  LcdsLobbyStatus,
  LcdsMember,
  LcdsPayloadDto,
  LcdsPlayer,
  LcdsPlayerParticipant,
  LcdsPracticeGameConfig,
  LcdsPracticeGameSearchResult,
  LcdsRemovalReason,
  LcdsRemovedFromLobbyNotification,
  LcdsSimpleMessage,
  LcdsSimpleMessageResponse,
  LcdsStartChampSelectDto,
  LcdsSummoner,
  LobbyClientDynamicConfigurationNotification,
  LogEvent,
  LogSeverityLevels,
  LolAccountVerificationAVSConfig,
  LolAccountVerificationConfirmActivationPinRequest,
  LolAccountVerificationConfirmActivationPinResponse,
  LolAccountVerificationConfirmDeactivationPinRequest,
  LolAccountVerificationConfirmDeactivationPinResponse,
  LolAccountVerificationIsVerifiedResponse,
  LolAccountVerificationLoginSession,
  LolAccountVerificationLoginSessionState,
  LolAccountVerificationPhoneNumberObfuscated,
  LolAccountVerificationPhoneNumberResponse,
  LolAccountVerificationPhoneNumberResponseData,
  LolAccountVerificationPinResponseData,
  LolAccountVerificationResponseError,
  LolAccountVerificationSendActivationPinRequest,
  LolAccountVerificationSendActivationPinResponse,
  LolAccountVerificationSendActivationPinResponseData,
  LolAccountVerificationSendDeactivationPinRequest,
  LolAccountVerificationSendDeactivationPinResponse,
  LolActiveBoostsActiveBoosts,
  LolActiveBoostsEndOfGameStats,
  LolActiveBoostsInventoryItem,
  LolActiveBoostsInventoryItemDTO,
  LolActiveBoostsInventoryItemWithPayload,
  LolActiveBoostsItemOwnershipType,
  LolActiveBoostsLoginDataPacket,
  LolActiveBoostsLoyaltyRewardsSimplified,
  LolActiveBoostsLoyaltyStatus,
  LolActiveBoostsLoyaltyStatusNotification,
  LolAntiAddictionAntiAddictionState,
  LolAntiAddictionAntiAddictionToken,
  LolAntiAddictionPolicyType,
  LolBannersBannerFlag,
  LolBannersBannerFrame,
  LolBannersCapClashFlagEntitlementPayload,
  LolBannersCapClashFrameEntitlementPayload,
  LolBannersClashV2FlagRewardSpec,
  LolBannersClashV2FrameRewardSpec,
  LolBannersInventoryItemWithPayload,
  LolBannersInventoryItemsByType,
  LolBannersInventoryResponse,
  LolBannersLoadout,
  LolBannersLoadoutsSlot,
  LolBannersSummonerProfileUpdate,
  LolBannersTournamentFlagInventoryItem,
  LolBannersTournamentFrameInventoryItem,
  LolCareerStatsCareerStatsQueueType,
  LolCareerStatsChampionQueueStatsResponse,
  LolCareerStatsChampionStatistics,
  LolCareerStatsEntitlementsToken,
  LolCareerStatsExpertPlayer,
  LolCareerStatsPositionStatistics,
  LolCareerStatsPositionStatsQueryRequest,
  LolCareerStatsRankedTier,
  LolCareerStatsStatisticsByQueue,
  LolCareerStatsStatisticsPercentilesResponse,
  LolCareerStatsStatsQueryRequest,
  LolCareerStatsSummonersRiftPosition,
  LolCatalogBundled,
  LolCatalogBundledItem,
  LolCatalogBundledItemCost,
  LolCatalogCatalogItem,
  LolCatalogCatalogPluginItem,
  LolCatalogCatalogPluginItemAssets,
  LolCatalogCatalogPluginItemWithDetails,
  LolCatalogCatalogPluginPrice,
  LolCatalogCatalogPluginRetailDiscount,
  LolCatalogChampionSkinEmblem,
  LolCatalogChampionSkinEmblemPath,
  LolCatalogChampionSkinEmblemPosition,
  LolCatalogGameDataChampion,
  LolCatalogGameDataChampionChroma,
  LolCatalogGameDataChampionSkin,
  LolCatalogGameDataChampionSummary,
  LolCatalogGameDataItemReference,
  LolCatalogGameDataStatstone,
  LolCatalogGameDataStatstonePack,
  LolCatalogGameDataStatstoneSet,
  LolCatalogGameDataStatstonesInfo,
  LolCatalogGameDataSummonerEmote,
  LolCatalogGameDataSummonerIcon,
  LolCatalogGameDataWardSkin,
  LolCatalogInventoryContent,
  LolCatalogInventoryOwnership,
  LolCatalogItemChoiceDetails,
  LolCatalogItemCost,
  LolCatalogItemDetails,
  LolCatalogItemKey,
  LolCatalogItemLocalization,
  LolCatalogItemMetadataEntry,
  LolCatalogSale,
  LolCatalogSkinLineDescriptionInfo,
  LolCatalogSkinLineInfo,
  LolCatalogSkinLineTier,
  LolChallengesChallengeData,
  LolChallengesChallengeLevelData,
  LolChallengesChallengePlayerData,
  LolChallengesChallengePoints,
  LolChallengesChallengeRequirementMappingName,
  LolChallengesChallengeSeason,
  LolChallengesChallengeSignedUpdatePayload,
  LolChallengesChallengeThreshold,
  LolChallengesChallengeThresholdReward,
  LolChallengesChallengesPlayerPreferences,
  LolChallengesChallengesRMSNotification,
  LolChallengesChallengesRMSPayload,
  LolChallengesClientState,
  LolChallengesEndOfGameStats,
  LolChallengesFriendLevelsData,
  LolChallengesFriendResource,
  LolChallengesGameDataChallengeConfig,
  LolChallengesGameDataChallengeTitle,
  LolChallengesGameDataChallengesData,
  LolChallengesGameflowGameData,
  LolChallengesGameflowPhase,
  LolChallengesGameflowSession,
  LolChallengesInventoryItem,
  LolChallengesLcuChallengeNotification,
  LolChallengesLoginPlayerData,
  LolChallengesNotificationDisplayType,
  LolChallengesQueue,
  LolChallengesSequenceEvent,
  LolChallengesSource,
  LolChallengesUICategoryProgress,
  LolChallengesUIChallenge,
  LolChallengesUIChallengePenalty,
  LolChallengesUIChallengeReward,
  LolChallengesUIChallengeThreshold,
  LolChallengesUIPlayerSummary,
  LolChallengesUITitle,
  LolChallengesUserResource,
  LolChampSelectBenchChampion,
  LolChampSelectChampGridChampion,
  LolChampSelectChampSelectAction,
  LolChampSelectChampSelectBannedChampions,
  LolChampSelectChampSelectChatRoomDetails,
  LolChampSelectChampSelectMySelection,
  LolChampSelectChampSelectPinDropNotification,
  LolChampSelectChampSelectPinDropSummoner,
  LolChampSelectChampSelectPlayerSelection,
  LolChampSelectChampSelectSession,
  LolChampSelectChampSelectSummoner,
  LolChampSelectChampSelectSwapContract,
  LolChampSelectChampSelectSwapNotification,
  LolChampSelectChampSelectSwapState,
  LolChampSelectChampSelectTimer,
  LolChampSelectChampSelectTradeContract,
  LolChampSelectChampSelectTradeNotification,
  LolChampSelectChampSelectTradeState,
  LolChampSelectChampionQuestSkinInfo,
  LolChampSelectChampionSelection,
  LolChampSelectCollectionsChampionChroma,
  LolChampSelectCollectionsChampionMastery,
  LolChampSelectCollectionsChampionMinimal,
  LolChampSelectCollectionsChampionQuestSkin,
  LolChampSelectCollectionsChampionSkin,
  LolChampSelectCollectionsChampionSkinEmblem,
  LolChampSelectCollectionsChampionSkinEmblemPath,
  LolChampSelectCollectionsChampionSkinEmblemPosition,
  LolChampSelectCollectionsChampionSkinMinimal,
  LolChampSelectCollectionsOwnership,
  LolChampSelectCollectionsRental,
  LolChampSelectEntitledFeatureState,
  LolChampSelectGameDataSummonerSpell,
  LolChampSelectLegacyChampSelectAction,
  LolChampSelectLegacyChampSelectBannedChampions,
  LolChampSelectLegacyChampSelectChatRoomDetails,
  LolChampSelectLegacyChampSelectMySelection,
  LolChampSelectLegacyChampSelectPlayerSelection,
  LolChampSelectLegacyChampSelectSession,
  LolChampSelectLegacyChampSelectTimer,
  LolChampSelectLegacyChampSelectTradeContract,
  LolChampSelectLegacyChampSelectTradeState,
  LolChampSelectLegacyChampionSelectPreferences,
  LolChampSelectLegacyCollectionsChampion,
  LolChampSelectLegacyCollectionsOwnership,
  LolChampSelectLegacyCollectionsRental,
  LolChampSelectLegacyGameflowGameClient,
  LolChampSelectLegacyGameflowGameData,
  LolChampSelectLegacyGameflowGameDodge,
  LolChampSelectLegacyGameflowGameDodgeState,
  LolChampSelectLegacyGameflowPhase,
  LolChampSelectLegacyGameflowSession,
  LolChampSelectLegacyInventoryItemWithPayload,
  LolChampSelectLegacyLobbyStatus,
  LolChampSelectLegacyLoginSession,
  LolChampSelectLegacyLoginSessionStates,
  LolChampSelectLegacyMucJwtDto,
  LolChampSelectLegacyPlayerStatus,
  LolChampSelectLegacyQueue,
  LolChampSelectLegacyQueueGameTypeConfig,
  LolChampSelectLegacySettingCategoryResource,
  LolChampSelectLegacySummoner,
  LolChampSelectLegacyTeamBoost,
  LolChampSelectLoginSession,
  LolChampSelectMucJwtDto,
  LolChampSelectMutedPlayerInfo,
  LolChampSelectSettingsResource,
  LolChampSelectSfxNotification,
  LolChampSelectSkinSelectorChildSkin,
  LolChampSelectSkinSelectorInfo,
  LolChampSelectSkinSelectorSkin,
  LolChampSelectTeamBoost,
  LolChampionsChampionQuestSkinInfo,
  LolChampionsCollectionsChampion,
  LolChampionsCollectionsChampionChroma,
  LolChampionsCollectionsChampionMinimal,
  LolChampionsCollectionsChampionPlayableCounts,
  LolChampionsCollectionsChampionQuestSkin,
  LolChampionsCollectionsChampionSkin,
  LolChampionsCollectionsChampionSkinEmblem,
  LolChampionsCollectionsChampionSkinEmblemPath,
  LolChampionsCollectionsChampionSkinEmblemPosition,
  LolChampionsCollectionsChampionSkinMinimal,
  LolChampionsCollectionsChampionSpell,
  LolChampionsCollectionsChampionTacticalInfo,
  LolChampionsCollectionsOwnership,
  LolChampionsCollectionsRental,
  LolChampionsGameDataChampion,
  LolChampionsGameDataChampionChroma,
  LolChampionsGameDataChampionQuestSkin,
  LolChampionsGameDataChampionSkin,
  LolChampionsGameDataChampionSpell,
  LolChampionsGameDataChampionSummary,
  LolChampionsGameDataChampionTacticalInfo,
  LolChampionsGameDataQuestSkinDescriptionInfo,
  LolChampionsGameDataQuestSkinInfo,
  LolChampionsInventoryItemWithPayload,
  LolChampionsLcdsDynamicClientConfig,
  LolChampionsLoginSession,
  LolChampionsLoginSessionStates,
  LolChampionsLoyaltyStatus,
  LolChampionsLoyaltyStatusNotification,
  LolChampionsPlayerNotification,
  LolChampionsQuestSkinDescriptionInfo,
  LolChampionsSummoner,
  LolChatAccountState,
  LolChatActiveConversationResource,
  LolChatAuthResourceRsoAccessToken,
  LolChatAuthType,
  LolChatBlocked,
  LolChatBlockedList,
  LolChatBlockedPlayerResource,
  LolChatChampSelection,
  LolChatChatDomainConfig,
  LolChatChatFriendUpdate,
  LolChatChatMessage,
  LolChatChatMessageList,
  LolChatChatPlatformLoginSession,
  LolChatChatPlatformLoginSessionState,
  LolChatChatServiceDynamicClientConfig,
  LolChatChatSessionState,
  LolChatChatSettings,
  LolChatChatSummoner,
  LolChatChatWindowSettings,
  LolChatCidBody,
  LolChatConfigReadinessEnum,
  LolChatConfigStatus,
  LolChatConfigType,
  LolChatContentCookies,
  LolChatConversation,
  LolChatConversationJoinFederated,
  LolChatConversationList,
  LolChatConversationMessageResource,
  LolChatConversationResource,
  LolChatConversationUpdate,
  LolChatDebugResource,
  LolChatEndOfGamePlayer,
  LolChatEndOfGameStats,
  LolChatEndOfGameTeam,
  LolChatError,
  LolChatErrorList,
  LolChatErrorResource,
  LolChatFriend,
  LolChatFriendCountsResource,
  LolChatFriendGroup,
  LolChatFriendGroupCreate,
  LolChatFriendGroupList,
  LolChatFriendGroupOrder,
  LolChatFriendGroupUpdate,
  LolChatFriendList,
  LolChatFriendRequest,
  LolChatFriendRequestAdd,
  LolChatFriendRequestDirection,
  LolChatFriendRequestList,
  LolChatFriendRequestResource,
  LolChatFriendResource,
  LolChatFriendSubscriptionType,
  LolChatGameDataChampionSummary,
  LolChatGameflowGameData,
  LolChatGameflowGameMap,
  LolChatGameflowPhase,
  LolChatGameflowSession,
  LolChatGroupResource,
  LolChatIdBody,
  LolChatLcuSocialConfig,
  LolChatLeagueDivision,
  LolChatLeagueQueueType,
  LolChatLeagueTier,
  LolChatLobbyMember,
  LolChatLobbyPlayerStatus,
  LolChatLobbyStatus,
  LolChatMessage,
  LolChatMessageList,
  LolChatMessagePost,
  LolChatMessageSend,
  LolChatMessageType,
  LolChatMucJwtDto,
  LolChatMultiGamePresence,
  LolChatMultiGamePresenceList,
  LolChatMultiGamePresenceSharedPayload,
  LolChatMultiGamePresenceUpdate,
  LolChatMuteType,
  LolChatMutedPlayerInfo,
  LolChatNameBody,
  LolChatParticipant,
  LolChatParticipantList,
  LolChatPatchlineMetadata,
  LolChatPidBody,
  LolChatPlayerMuteStatus,
  LolChatPlayerMuteUpdate,
  LolChatPlayerPreferences,
  LolChatPluginRegionLocaleChangedEvent,
  LolChatPresenceProduct,
  LolChatProductMetadata,
  LolChatProductMetadataMap,
  LolChatQueue,
  LolChatQueueCustomGameSpectatorPolicy,
  LolChatQueueGameTypeConfig,
  LolChatRankedQueueStats,
  LolChatRankedStats,
  LolChatRsoAuthorization,
  LolChatSanitizeRequest,
  LolChatSanitizeResponse,
  LolChatSanitizerStatus,
  LolChatSession,
  LolChatSessionResource,
  LolChatSessionState,
  LolChatSettingsResource,
  LolChatSpectateGameInfoResource,
  LolChatSummonerStatus,
  LolChatTeamPlayerEntry,
  LolChatTranslateRequest,
  LolChatTranslateResponse,
  LolChatTranslateResult,
  LolChatUserResource,
  LolChatcookie,
  LolClashBlockedPlayerResource,
  LolClashBracket,
  LolClashBracketReadyNotification,
  LolClashBracketUpdateNotification,
  LolClashChangeIconRequest,
  LolClashChangeNameRequest,
  LolClashClashConfig,
  LolClashClashDisabledConfig,
  LolClashClashSettingCategory,
  LolClashClashState,
  LolClashClashVisibility,
  LolClashClientFailedInvite,
  LolClashClubsSummoner,
  LolClashEogPlayerUpdateDTO,
  LolClashFindPlayers,
  LolClashFindTeams,
  LolClashFoundationError,
  LolClashGameflowAvailability,
  LolClashGameflowGameDodge,
  LolClashGameflowPartiesRegistrationStatus,
  LolClashGameflowPhase,
  LolClashGameflowSession,
  LolClashKdaClassification,
  LolClashKickRequest,
  LolClashLftState,
  LolClashLoginSession,
  LolClashLoginSessionState,
  LolClashMatchmakingDodgeData,
  LolClashMatchmakingDodgeState,
  LolClashMatchmakingDodgeWarning,
  LolClashMatchmakingReadyCheckResource,
  LolClashMatchmakingReadyCheckResponse,
  LolClashMatchmakingReadyCheckState,
  LolClashMatchmakingSearchResource,
  LolClashMemberBanUnbanNotification,
  LolClashMucJwtDto,
  LolClashNoShowPingDTO,
  LolClashNoShowPingResponse,
  LolClashNoShowPingResponseData,
  LolClashNotifyReason,
  LolClashOfferTicketRequest,
  LolClashPendingRosterNotification,
  LolClashPlayerChatRoster,
  LolClashPlayerData,
  LolClashPlayerNotification,
  LolClashPlayerNotificationData,
  LolClashPlayerRewards,
  LolClashPlayerState,
  LolClashPlayerTournamentData,
  LolClashPlayerUpdateNotification,
  LolClashPlaymodeRestrictedInfo,
  LolClashPresenceState,
  LolClashProfileInfo,
  LolClashQueue,
  LolClashQueueAvailability,
  LolClashQueueGameCategory,
  LolClashQueueGameTypeConfig,
  LolClashQueueReward,
  LolClashRankedScoutingMember,
  LolClashRankedScoutingTopChampion,
  LolClashReadyCheckInfo,
  LolClashRegisteredRosterNotification,
  LolClashRoster,
  LolClashRosterDetails,
  LolClashRosterDynamicStateNotification,
  LolClashRosterMatchAggregatedStats,
  LolClashRosterMember,
  LolClashRosterMemberState,
  LolClashRosterNotifyReason,
  LolClashRosterPeriodAggregatedStats,
  LolClashRosterPhaseInfo,
  LolClashRosterPlayerAggregatedStats,
  LolClashRosterPlayerNotification,
  LolClashRosterStats,
  LolClashRosterWithdrawNotification,
  LolClashScoutingChampionMastery,
  LolClashScoutingChampions,
  LolClashScoutingSeasonChampion,
  LolClashSetPositionRequest,
  LolClashSetTicketRequest,
  LolClashSettingCategory,
  LolClashSimpleStateFlag,
  LolClashSimpleStateStatus,
  LolClashSuggestedInvite,
  LolClashSuggestionInvite,
  LolClashSuggestionInvitee,
  LolClashTeamOpenState,
  LolClashThemeVp,
  LolClashThirdPartyApiPlayer,
  LolClashThirdPartyApiRoster,
  LolClashTicketOffer,
  LolClashTournament,
  LolClashTournamentGameEnd,
  LolClashTournamentHistoryAndWinners,
  LolClashTournamentNotifyReason,
  LolClashTournamentPhase,
  LolClashTournamentPhaseProgressNotificationDTO,
  LolClashTournamentState,
  LolClashTournamentStateInfo,
  LolClashTournamentSummary,
  LolClashTournamentUpdatedNotification,
  LolClashTournamentUpdatedNotificationDTO,
  LolClashTournamentWinnerHistory,
  LolClashTournamentWinnerInfo,
  LolClashUserResource,
  LolCollectionsAccountIdAndSummonerId,
  LolCollectionsCollectionsChampionMastery,
  LolCollectionsCollectionsChestEligibility,
  LolCollectionsCollectionsOwnership,
  LolCollectionsCollectionsRental,
  LolCollectionsCollectionsSummonerBackdrop,
  LolCollectionsCollectionsSummonerBackdropType,
  LolCollectionsCollectionsSummonerSpells,
  LolCollectionsCollectionsTopChampionMasteries,
  LolCollectionsCollectionsWardSkin,
  LolCollectionsCollectionsWardSkinList,
  LolCollectionsGameDataChampionMasteries,
  LolCollectionsGameDataChampionMasteryGroup,
  LolCollectionsGameDataChampionMasteryRow,
  LolCollectionsGameDataChampionMasteryTree,
  LolCollectionsGameDataChampionQuestSkin,
  LolCollectionsGameDataChampionSkin,
  LolCollectionsGameDataChampionSummary,
  LolCollectionsGameDataQuestSkinInfo,
  LolCollectionsGameDataSplashMetadata,
  LolCollectionsInventoryItem,
  LolCollectionsInventoryItemDTO,
  LolCollectionsInventoryItemWithPayload,
  LolCollectionsItemOwnershipType,
  LolCollectionsLcdsDynamicClientConfig,
  LolCollectionsLoginSession,
  LolCollectionsLoginSessionStates,
  LolCollectionsNumberFormattingBehavior,
  LolCollectionsNumberFormattingData,
  LolCollectionsPlayerNotification,
  LolCollectionsSummoner,
  LolCollectionsSummonerProfile,
  LolCollectionsSummonerProfileUpdate,
  LolContentTargetingAccountIdAndSummonerId,
  LolContentTargetingCollectionsChampionMastery,
  LolContentTargetingContentTargetingFilterResponse,
  LolContentTargetingContentTargetingLocaleResponse,
  LolContentTargetingDataModelResponse,
  LolContentTargetingGameflowGameData,
  LolContentTargetingGameflowPhase,
  LolContentTargetingGameflowSession,
  LolContentTargetingGeoInfo,
  LolContentTargetingGeoInfoResponse,
  LolContentTargetingLoginSession,
  LolContentTargetingLoginSessionState,
  LolContentTargetingMission,
  LolContentTargetingPlatformConfig,
  LolContentTargetingQueue,
  LolContentTargetingQueueGameCategory,
  LolContentTargetingRankedDivision,
  LolContentTargetingRankedQueue,
  LolContentTargetingRankedQueueStats,
  LolContentTargetingRankedStats,
  LolContentTargetingRankedTier,
  LolContentTargetingRegionLocale,
  LolContentTargetingSettingsResource,
  LolContentTargetingSummoner,
  LolContentTargetingTargetingAttributes,
  LolContentTargetingToken,
  LolCosmeticsAccountSettingsCategoryDataResource,
  LolCosmeticsCapOffer,
  LolCosmeticsCompanionsGroupViewModel,
  LolCosmeticsCompanionsGroupedViewModel,
  LolCosmeticsCosmeticSettingsResource,
  LolCosmeticsCosmeticsCompanion,
  LolCosmeticsCosmeticsCompanionViewModel,
  LolCosmeticsCosmeticsOfferPrice,
  LolCosmeticsCosmeticsTFTDamageSkin,
  LolCosmeticsCosmeticsTFTDamageSkinViewModel,
  LolCosmeticsCosmeticsTFTMapSkin,
  LolCosmeticsCosmeticsTFTMapSkinViewModel,
  LolCosmeticsCosmeticsTFTPlaybook,
  LolCosmeticsCosmeticsTFTPlaybookAugment,
  LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount,
  LolCosmeticsCosmeticsTFTPlaybookViewModel,
  LolCosmeticsGameDataCompanion,
  LolCosmeticsGameDataTFTCosmeticsDefaults,
  LolCosmeticsGameDataTFTDamageSkin,
  LolCosmeticsGameDataTFTMapSkin,
  LolCosmeticsGameDataTFTPlaybook,
  LolCosmeticsLoadout,
  LolCosmeticsLoadoutItem,
  LolCosmeticsLoadoutUpdateDto,
  LolCosmeticsTFTDamageSkinGroupViewModel,
  LolCosmeticsTFTDamageSkinGroupedViewModel,
  LolCosmeticsTFTMapSkinGroupViewModel,
  LolCosmeticsTFTMapSkinGroupedViewModel,
  LolCosmeticsTFTPlaybookGroupViewModel,
  LolCosmeticsTFTPlaybookGroupedViewModel,
  LolCosmeticsTFTSettingsDataResource,
  LolCosmeticsTFTSettingsResource,
  LolCosmeticsUserResource,
  LolDiscordRpGameDataChampionSummary,
  LolDiscordRpPartyPresenceData,
  LolDropsCapDropsDropTablePityInfo,
  LolDropsCapDropsDropTableWithPityDTO,
  LolDropsCapDropsOddsListEntryDTO,
  LolDropsCapDropsOddsTreeNodeDTO,
  LolDropsCapDropsPityCountDTO,
  LolEmailVerificationAccessToken,
  LolEmailVerificationEmailUpdate,
  LolEmailVerificationEmailVerificationSession,
  LolEmailVerificationRegionLocale,
  LolEmailVerificationRemoteEmailVerificationSession,
  LolEmailVerificationValidationStatus,
  LolEndOfGameChampionMasteryGrade,
  LolEndOfGameChampionMasteryMini,
  LolEndOfGameChampionMasteryUpdate,
  LolEndOfGameEndOfGamePlayer,
  LolEndOfGameEndOfGamePoints,
  LolEndOfGameEndOfGameStats,
  LolEndOfGameEndOfGameTeam,
  LolEndOfGameEndOfGameTeamBoost,
  LolEndOfGameGameClientEndOfGame,
  LolEndOfGameGameClientEndOfGameStats,
  LolEndOfGameGameDataChampion,
  LolEndOfGameGameDataChampionQuestSkin,
  LolEndOfGameGameDataChampionSkin,
  LolEndOfGameGameDataChampionSummary,
  LolEndOfGameGameDataCompanion,
  LolEndOfGameGameDataQuestSkinInfo,
  LolEndOfGameGameDataSkinChroma,
  LolEndOfGameGameDataTftChampion,
  LolEndOfGameGameDataTftItem,
  LolEndOfGameGameDataTftPlaybook,
  LolEndOfGameGameDataTftTrait,
  LolEndOfGameGameflowAvailability,
  LolEndOfGameGameflowClient,
  LolEndOfGameGameflowGameData,
  LolEndOfGameGameflowPhase,
  LolEndOfGameGameflowSession,
  LolEndOfGameLobbyInvitation,
  LolEndOfGameLoginDataPacket,
  LolEndOfGameLoginSession,
  LolEndOfGameLoginSessionStates,
  LolEndOfGameMucJwtDto,
  LolEndOfGamePlayerReport,
  LolEndOfGameQueue,
  LolEndOfGameRerollDataBagForClientV1,
  LolEndOfGameSimpleMessage,
  LolEndOfGameSummoner,
  LolEndOfGameTFTEndOfGameCompanionViewModel,
  LolEndOfGameTFTEndOfGameItemViewModel,
  LolEndOfGameTFTEndOfGamePieceViewModel,
  LolEndOfGameTFTEndOfGamePlaybookViewModel,
  LolEndOfGameTFTEndOfGamePlayerViewModel,
  LolEndOfGameTFTEndOfGameTraitViewModel,
  LolEndOfGameTFTEndOfGameViewModel,
  LolEsportStreamNotificationsESportStreamNotificationsConfig,
  LolEsportStreamNotificationsESportsAPI_streamgroups,
  LolEsportStreamNotificationsESportsAPI_streamgroups_root,
  LolEsportStreamNotificationsESportsLiveStreams,
  LolEsportStreamNotificationsESportsStreams,
  LolEsportStreamNotificationsEsportsAPI_highlanderTournaments,
  LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets,
  LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches,
  LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster,
  LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters,
  LolEsportStreamNotificationsEsportsAPI_teams,
  LolEsportStreamNotificationsGameflowPhase,
  LolEsportStreamNotificationsGameflowSession,
  LolEsportStreamNotificationsLiveMatch,
  LolEsportStreamNotificationsLiveMatchTeam,
  LolEsportStreamNotificationsPlayerNotificationResource,
  LolEventShopAccessTokenResource,
  LolEventShopBalance,
  LolEventShopBaseSkinLineDto,
  LolEventShopBundleOfferUIData,
  LolEventShopBundledItemPricingInfo,
  LolEventShopBundledItemUIData,
  LolEventShopCapOffer,
  LolEventShopCapOfferPayloadEntry,
  LolEventShopCapOrdersDataDto,
  LolEventShopCapOrdersMetaDto,
  LolEventShopCapOrdersOfferContextDto,
  LolEventShopCapOrdersOfferDto,
  LolEventShopCapOrdersOrderDto,
  LolEventShopCapOrdersSubOrderDto,
  LolEventShopCapOrdersTypedIdentifierDto,
  LolEventShopCatalogEntry,
  LolEventShopCatalogItem,
  LolEventShopCatalogPluginItem,
  LolEventShopCatalogPluginItemAssets,
  LolEventShopCatalogPluginItemWithDetails,
  LolEventShopCatalogPluginPrice,
  LolEventShopCatalogPluginSale,
  LolEventShopCategoryOffersUIData,
  LolEventShopCelebrationType,
  LolEventShopCelebrationUIData,
  LolEventShopChampionSkinEmblem,
  LolEventShopChampionSkinEmblemPath,
  LolEventShopChampionSkinEmblemPosition,
  LolEventShopClaimSelectUIData,
  LolEventShopClientCacheClearMessageDTO,
  LolEventShopClientConfigContentDrop,
  LolEventShopContentDrop,
  LolEventShopCounter,
  LolEventShopCounterInstance,
  LolEventShopCurrencyDTO,
  LolEventShopDiscountPricingInfo,
  LolEventShopEndOfGameXp,
  LolEventShopEndOfGameXpNotification,
  LolEventShopEntityInstance,
  LolEventShopEventBackgroundUIData,
  LolEventShopEventDetailsUIData,
  LolEventShopEventShop,
  LolEventShopEventShopClientConfig,
  LolEventShopEventShopError,
  LolEventShopEventShopInfoUIData,
  LolEventShopExternalCatalogInventoryOwnership,
  LolEventShopExternalCatalogItemCost,
  LolEventShopExternalCatalogItemKey,
  LolEventShopExternalCatalogPluginItem,
  LolEventShopExternalCatalogPluginItemAssets,
  LolEventShopExternalCatalogPluginItemWithDetails,
  LolEventShopExternalCatalogPluginPrice,
  LolEventShopExternalCatalogPluginRetailDiscount,
  LolEventShopExternalCatalogSale,
  LolEventShopExternalItemMetadataEntry,
  LolEventShopGrantStatus,
  LolEventShopGrantorDescription,
  LolEventShopGroup,
  LolEventShopInventoryCacheEntry,
  LolEventShopInventoryDTO,
  LolEventShopInventoryItem,
  LolEventShopInventoryItemDTO,
  LolEventShopInventoryItemWithPayload,
  LolEventShopInventoryNotification,
  LolEventShopInventoryOwnership,
  LolEventShopInventoryResponseDTO,
  LolEventShopItem,
  LolEventShopItemChoiceDetails,
  LolEventShopItemChoices,
  LolEventShopItemCost,
  LolEventShopItemDefinition,
  LolEventShopItemDetails,
  LolEventShopItemKey,
  LolEventShopItemMetadataEntry,
  LolEventShopItemOrderDTO,
  LolEventShopItemOwnership,
  LolEventShopItemOwnershipType,
  LolEventShopItemPrice,
  LolEventShopItemSale,
  LolEventShopItemUIData,
  LolEventShopLargeSelectionDisplayUIData,
  LolEventShopLevelBoostPurchaseUIData,
  LolEventShopLoginSession,
  LolEventShopLoginSessionStates,
  LolEventShopLoyaltyRewards,
  LolEventShopLoyaltyRewardsSimplified,
  LolEventShopLoyaltyStatus,
  LolEventShopLoyaltyStatusNotification,
  LolEventShopMilestone,
  LolEventShopMilestoneInstance,
  LolEventShopNavigationButtonUIData,
  LolEventShopOffer,
  LolEventShopOfferCategory,
  LolEventShopOfferPromotionType,
  LolEventShopOfferStates,
  LolEventShopOfferUIData,
  LolEventShopOrderNotificationResource,
  LolEventShopPassOwnershipTypes,
  LolEventShopPlayerNotification,
  LolEventShopPlayerSettingsData,
  LolEventShopPriceDetail,
  LolEventShopPriceOptionDto,
  LolEventShopProgressInfoUIData,
  LolEventShopPurchasableItem,
  LolEventShopPurchaseItem,
  LolEventShopPurchaseOfferOrderStates,
  LolEventShopPurchaseOfferOrderStatus,
  LolEventShopPurchaseOfferOrderStatuses,
  LolEventShopPurchaseOfferRequest,
  LolEventShopPurchaseOfferRequestV3,
  LolEventShopPurchaseOfferResponseV3,
  LolEventShopPurchaseOption,
  LolEventShopPurchaseOrderRequestDTO,
  LolEventShopPurchaseOrderResponseDTO,
  LolEventShopPurchaseRequest,
  LolEventShopPurchaseResponse,
  LolEventShopPurchaseWidgetConfig,
  LolEventShopRMSPayload,
  LolEventShopRegionLocale,
  LolEventShopRepeat,
  LolEventShopRequestDTOSelectionRequestDTO,
  LolEventShopRequestDTOVectorSelectionRequestDTO,
  LolEventShopRequestMetadataDTO,
  LolEventShopResponseDTOSvcRewardGrant,
  LolEventShopResponseDTOMapRewardGroupIdSelectGrantStatus,
  LolEventShopResponseDTOVectorSvcRewardGrant,
  LolEventShopResponseDTOVectorSvcRewardGroup,
  LolEventShopResponseMetadataDTO,
  LolEventShopReward,
  LolEventShopRewardChoiceUIData,
  LolEventShopRewardGrant,
  LolEventShopRewardStatus,
  LolEventShopRewardStrategy,
  LolEventShopRewardTrack,
  LolEventShopRewardTrackConfiguration,
  LolEventShopRewardTrackItem,
  LolEventShopRewardTrackItemHeaderType,
  LolEventShopRewardTrackItemOption,
  LolEventShopRewardTrackItemStates,
  LolEventShopRewardTrackItemTag,
  LolEventShopRewardTrackProgress,
  LolEventShopRewardTrackXP,
  LolEventShopRewardsConfig,
  LolEventShopRiotMessagingServiceMessage,
  LolEventShopRmsEntitlementPayload,
  LolEventShopRmsStoreEntitlementItem,
  LolEventShopRmsStoreEntitlementPayload,
  LolEventShopRmsWalletPayload,
  LolEventShopRmsXboxSubscriptionChange,
  LolEventShopSale,
  LolEventShopSelectGrantStatusResponse,
  LolEventShopSelectionRequestDTO,
  LolEventShopSelectionStrategyConfig,
  LolEventShopSettingsResource,
  LolEventShopSimpleInventoryDTO,
  LolEventShopSimpleInventoryResponseDTO,
  LolEventShopSkinLineDescriptionDto,
  LolEventShopSkinLineDescriptionInfo,
  LolEventShopSkinLineInfo,
  LolEventShopSkinLineItemDto,
  LolEventShopSkinLineTier,
  LolEventShopSummonerIcon,
  LolEventShopSvcRewardGrant,
  LolEventShopSvcRewardGrantElement,
  LolEventShopSvcRewardGroup,
  LolEventShopTokenShop,
  LolEventShopTokenShopUIData,
  LolEventShopTokenUpsell,
  LolEventShopTokenUpsellLockedType,
  LolEventShopTransaction,
  LolEventShopTransactionResponseDTO,
  LolEventShopUnclaimedRewardsUIData,
  LolEventShopValidateOfferError,
  LolEventShopValidateOfferRequestV3,
  LolEventShopValidateOfferResponseV3,
  LolEventShopValidationError,
  LolEventShopValidationErrorEntry,
  LolEventShopValidationRequest,
  LolEventShopValidationRequestItem,
  LolEventShopValidationResponse,
  LolEventShopValidationResponseItem,
  LolEventShopWallet,
  LolEventShopWalletCacheEntry,
  LolEventShopWalletDTO,
  LolEventShopWalletResponseDTO,
  LolEventShopXboxSubscriptionStatus,
  LolFeaturedModesAccountIdAndSummonerId,
  LolFeaturedModesCollectionsOwnership,
  LolFeaturedModesCollectionsSummonerIcon,
  LolFeaturedModesEligibility,
  LolFeaturedModesEligibilityRestriction,
  LolFeaturedModesEligibilityRestrictionCode,
  LolFeaturedModesFeaturedModesConfig,
  LolFeaturedModesGameflowAvailability,
  LolFeaturedModesGameflowAvailabilityState,
  LolFeaturedModesGameflowPhase,
  LolFeaturedModesGameflowSession,
  LolFeaturedModesLoginSession,
  LolFeaturedModesLoginSessionStates,
  LolFeaturedModesMaps,
  LolFeaturedModesPlayerNotificationResource,
  LolFeaturedModesQueue,
  LolFeaturedModesQueueAvailability,
  LolFeaturedModesQueueGameCategory,
  LolGameClientChatGameClientChatMessageResource,
  LolGameClientChatMutedPlayerInfo,
  LolGameQueuesLoginDataPacket,
  LolGameQueuesLoginSession,
  LolGameQueuesLoginSessionStates,
  LolGameQueuesPlatformConfigEnabledMap,
  LolGameQueuesQueue,
  LolGameQueuesQueueAvailability,
  LolGameQueuesQueueCustomGame,
  LolGameQueuesQueueCustomGameSpectatorPolicy,
  LolGameQueuesQueueCustomGameSubcategory,
  LolGameQueuesQueueGameCategory,
  LolGameQueuesQueueGameTypeConfig,
  LolGameQueuesQueueReward,
  LolGameQueuesQueueTranslation,
  LolGameSettingsLoginSession,
  LolGameSettingsLoginSessionStates,
  LolGameSettingsgamesettingsgameclient,
  LolGameSettingsgamesettingsgameflowsession,
  LolGameflowCrashReportingSettings,
  LolGameflowGameModeSpellList,
  LolGameflowGameStateUpdate,
  LolGameflowGameflowAvailability,
  LolGameflowGameflowAvailabilityState,
  LolGameflowGameflowGameClient,
  LolGameflowGameflowGameData,
  LolGameflowGameflowGameDodge,
  LolGameflowGameflowGameDodgeState,
  LolGameflowGameflowGameMap,
  LolGameflowGameflowPhase,
  LolGameflowGameflowProcessInfo,
  LolGameflowGameflowSession,
  LolGameflowGameflowWatchPhase,
  LolGameflowInstallPaths,
  LolGameflowLobbyStatus,
  LolGameflowLoginSession,
  LolGameflowLoginSessionStates,
  LolGameflowPatcherProductState,
  LolGameflowPatcherProductStateAction,
  LolGameflowPlayerStatus,
  LolGameflowQueue,
  LolGameflowQueueAvailability,
  LolGameflowQueueCustomGameSpectatorPolicy,
  LolGameflowQueueGameCategory,
  LolGameflowQueueGameTypeConfig,
  LolGameflowQueueReward,
  LolGameflowRegionLocale,
  LolGameflowRegistrationStatus,
  LolGameflowReplaysSettingsData,
  LolGameflowReplaysSettingsResource,
  LolGameflowSpectateGameInfoResource,
  LolGeoinfoGeoInfo,
  LolGeoinfoGeoInfoConfig,
  LolGeoinfoGeoInfoResponse,
  LolGeoinfoLoginSession,
  LolGeoinfoLoginSessionState,
  LolGeoinfoWhereAmIRequest,
  LolGeoinfoWhereAmIResponse,
  LolHeartbeatLoginSession,
  LolHeartbeatLoginSessionStates,
  LolHighlightsHighlight,
  LolHighlightsHighlightsConfig,
  LolHighlightsHighlightsDynamicConfig,
  LolHighlightsHighlightsSettingsData,
  LolHighlightsHighlightsSettingsResource,
  LolHoneyfruitAccountClaimStatus,
  LolHoneyfruitAccountDetails,
  LolHoneyfruitGAMHSMatchHistoryData,
  LolHoneyfruitGAMHSMatchHistoryList,
  LolHoneyfruitGameflowPhase,
  LolHoneyfruitGarenaRegionLeagueAccount,
  LolHoneyfruitHoneyfruitActionType,
  LolHoneyfruitHoneyfruitAuthRedirectMock,
  LolHoneyfruitHoneyfruitLinkingAction,
  LolHoneyfruitHoneyfruitLinkingFailureReason,
  LolHoneyfruitHoneyfruitLinkingNotification,
  LolHoneyfruitHoneyfruitLinkingServiceResponse,
  LolHoneyfruitHoneyfruitLinkingState,
  LolHoneyfruitHoneyfruitLinkingStatus,
  LolHoneyfruitHoneyfruitLinkingStatusError,
  LolHoneyfruitHoneyfruitPublisher,
  LolHoneyfruitHoneyfruitRegionLocale,
  LolHoneyfruitHoneyfruitSettingCategoryResource,
  LolHoneyfruitHoneyfruitSettingCategoryResourceAccountClaim,
  LolHoneyfruitHoneyfruitSettings,
  LolHoneyfruitHoneyfruitSettingsAccountClaim,
  LolHoneyfruitHoneyfruitVNGPublisherSettings,
  LolHoneyfruitMatchHistoryGame,
  LolHoneyfruitMatchHistoryGameList,
  LolHoneyfruitMatchHistoryList,
  LolHoneyfruitSummoner,
  LolHoneyfruitV1AuthenticationRedirectInput,
  LolHoneyfruitV1AuthenticationResponse,
  LolHoneyfruitV1ResponseType,
  LolHoneyfruitV1SuccessResponseDetails,
  LolHoneyfruitVNGStatusResponse,
  LolHonorV2AccountIdAndSummonerId,
  LolHonorV2ApiHonorPlayerServerRequest,
  LolHonorV2Ballot,
  LolHonorV2DynamicHonorMessage,
  LolHonorV2EligiblePlayer,
  LolHonorV2EndOfGamePlayer,
  LolHonorV2EndOfGameStats,
  LolHonorV2EndOfGameTeam,
  LolHonorV2GameflowGameData,
  LolHonorV2GameflowPhase,
  LolHonorV2GameflowSession,
  LolHonorV2Honor,
  LolHonorV2HonorConfig,
  LolHonorV2HonorInteraction,
  LolHonorV2HonorRecipient,
  LolHonorV2HonorSummoner,
  LolHonorV2LoginSession,
  LolHonorV2LoginSessionStates,
  LolHonorV2MutualHonor,
  LolHonorV2MutualHonorPlayer,
  LolHonorV2ProfileInfo,
  LolHonorV2Queue,
  LolHonorV2RetrieveProfileResponse,
  LolHonorV2Reward,
  LolHonorV2SequenceEvent,
  LolHonorV2VendedHonorChange,
  LolHonorV2VendedHonorState,
  LolHonorV2VendedReward,
  LolHonorV2VoteCompletion,
  LolHovercardChatSession,
  LolHovercardContentCookies,
  LolHovercardFriendResult,
  LolHovercardHovercardUserInfo,
  LolHovercardPartyInfo,
  LolHovercardPatchlineMetadata,
  LolHovercardProductMetadata,
  LolHovercardProductMetadataMap,
  LolHovercardSummoner,
  LolHovercardSummonerIdAndIcon,
  LolHovercardSummonerIdAndName,
  LolHovercardTopChampionMastery,
  LolHovercardcookie,
  LolInventoryAccessTokenResource,
  LolInventoryCatalogItem,
  LolInventoryClientCacheClearMessageDTO,
  LolInventoryCurrencyDTO,
  LolInventoryEndOfGameXp,
  LolInventoryEndOfGameXpNotification,
  LolInventoryInventoryCacheEntry,
  LolInventoryInventoryDTO,
  LolInventoryInventoryItem,
  LolInventoryInventoryItemDTO,
  LolInventoryInventoryItemWithPayload,
  LolInventoryInventoryNotification,
  LolInventoryInventoryResponseDTO,
  LolInventoryItemKey,
  LolInventoryItemOwnershipType,
  LolInventoryLoginSession,
  LolInventoryLoginSessionStates,
  LolInventoryLoyaltyRewards,
  LolInventoryLoyaltyRewardsSimplified,
  LolInventoryLoyaltyStatus,
  LolInventoryLoyaltyStatusNotification,
  LolInventoryPlayerNotification,
  LolInventoryRiotMessagingServiceMessage,
  LolInventoryRmsEntitlementPayload,
  LolInventoryRmsStoreEntitlementItem,
  LolInventoryRmsStoreEntitlementPayload,
  LolInventoryRmsWalletPayload,
  LolInventoryRmsXboxSubscriptionChange,
  LolInventorySimpleInventoryDTO,
  LolInventorySimpleInventoryResponseDTO,
  LolInventorySummonerIcon,
  LolInventoryWallet,
  LolInventoryWalletCacheEntry,
  LolInventoryWalletDTO,
  LolInventoryWalletResponseDTO,
  LolInventoryXboxSubscriptionStatus,
  LolItemSetsGameDataChampion,
  LolItemSetsItemSet,
  LolItemSetsItemSetBlock,
  LolItemSetsItemSetItem,
  LolItemSetsItemSets,
  LolItemSetsLoginSession,
  LolItemSetsLoginSessionStates,
  LolItemSetsNamecheckAuthorization,
  LolItemSetsNamecheckLoginDataPacket,
  LolItemSetsNamecheckPayload,
  LolItemSetsNamecheckResponse,
  LolItemSetsPreferredItemSlot,
  LolItemSetsValidateItemSetNameInput,
  LolItemSetsValidateItemSetNameResponse,
  LolKickoutKickoutMessage,
  LolKrPlaytimeReminderPlaytimeReminder,
  LolKrShutdownLawAllQueueShutdownStatus,
  LolKrShutdownLawAntiAddictionState,
  LolKrShutdownLawPolicyType,
  LolKrShutdownLawQueueShutdownStatus,
  LolKrShutdownLawRatingScreenInfo,
  LolKrShutdownLawShutdownLawNotification,
  LolKrShutdownLawShutdownLawStatus,
  LolLeagueSessionAntiAddictionTokenEnvelope,
  LolLeagueSessionLeagueSessionRMSNotification,
  LolLeagueSessionLeagueSessionStatus,
  LolLeagueSessionLeagueSessionTokenEnvelope,
  LolLeaverBusterAllSummonerData,
  LolLeaverBusterLeaverBusterNotificationResource,
  LolLeaverBusterLeaverBusterNotificationType,
  LolLeaverBusterLoginDataPacket,
  LolLeaverBusterMatchmakingSearchErrorResource,
  LolLeaverBusterMatchmakingSearchResource,
  LolLeaverBusterPlayerNotificationResource,
  LolLeaverBusterSimpleMessage,
  LolLeaverBusterSummoner,
  LolLicenseAgreementLicenseAgreement,
  LolLicenseAgreementLicenseAgreementType,
  LolLicenseAgreementLicenseServeLocation,
  LolLicenseAgreementPluginRegionLocaleChangedEvent,
  LolLoadoutsAccessTokenResource,
  LolLoadoutsCreateLoadoutDTO,
  LolLoadoutsCreateLoadoutRequestDTO,
  LolLoadoutsCreateOrUpdateItemsRequest,
  LolLoadoutsFrontendInventoryResponse,
  LolLoadoutsGameflowGameData,
  LolLoadoutsGameflowPhase,
  LolLoadoutsGameflowSession,
  LolLoadoutsGetItemsRequest,
  LolLoadoutsInventoryDTO,
  LolLoadoutsInventoryItemDTO,
  LolLoadoutsInventoryResponseDTO,
  LolLoadoutsItemKey,
  LolLoadoutsLoadout,
  LolLoadoutsLoadoutRequestDTOBase,
  LolLoadoutsLoginSession,
  LolLoadoutsLoginSessionStates,
  LolLoadoutsQueue,
  LolLoadoutsScopedLoadout,
  LolLoadoutsSignGCORequestDTO,
  LolLoadoutsUpdateLoadoutDTO,
  LolLoadoutsUpdateLoadoutRequestDTO,
  LolLobbyAccountIdAndSummonerId,
  LolLobbyAmbassadorMessage,
  LolLobbyAutoFillQueueDto,
  LolLobbyBotParticipantDto,
  LolLobbyChampionSkinSelection,
  LolLobbyChatBlockedPlayerResource,
  LolLobbyChatFriend,
  LolLobbyChatFriendCounts,
  LolLobbyCollectionsChampion,
  LolLobbyCollectionsChampionMinimal,
  LolLobbyCollectionsOwnership,
  LolLobbyCollectionsRental,
  LolLobbyCustomEligibilityDto,
  LolLobbyCustomGameDto,
  LolLobbyCustomGameSettingsDto,
  LolLobbyCustomJoinOptionsDto,
  LolLobbyEligibility,
  LolLobbyEligibilityRestriction,
  LolLobbyEligibilityRestrictionCode,
  LolLobbyFriendAvailabilityAnalytics,
  LolLobbyGameDataChampionSummary,
  LolLobbyGameModeDto,
  LolLobbyGameflowGameClient,
  LolLobbyGameflowGameData,
  LolLobbyGameflowGameDodge,
  LolLobbyGameflowPhase,
  LolLobbyGameflowSampleDto,
  LolLobbyGameflowSampleTag,
  LolLobbyGameflowSession,
  LolLobbyGatekeeperRestrictionDto,
  LolLobbyInventoryCacheEntry,
  LolLobbyInventoryItem,
  LolLobbyInvitationType,
  LolLobbyJoinPartyAnalytics,
  LolLobbyLcdsDynamicClientConfig,
  LolLobbyLcdsGameMetaData,
  LolLobbyLcdsPartyRewardsConfig,
  LolLobbyLobby,
  LolLobbyLobbyBotChampion,
  LolLobbyLobbyBotDifficulty,
  LolLobbyLobbyBotParams,
  LolLobbyLobbyChangeGameDto,
  LolLobbyLobbyChangeQueue,
  LolLobbyLobbyCustomChampSelectStartResponse,
  LolLobbyLobbyCustomFailedPlayer,
  LolLobbyLobbyCustomGame,
  LolLobbyLobbyCustomGameConfiguration,
  LolLobbyLobbyCustomGameLobby,
  LolLobbyLobbyCustomJoinParameters,
  LolLobbyLobbyDto,
  LolLobbyLobbyGameConfigDto,
  LolLobbyLobbyInvitation,
  LolLobbyLobbyInvitationDto,
  LolLobbyLobbyInvitationState,
  LolLobbyLobbyLastQueuedLobby,
  LolLobbyLobbyLastQueuedMember,
  LolLobbyLobbyMatchmakingLowPriorityDataResource,
  LolLobbyLobbyMatchmakingSearchErrorResource,
  LolLobbyLobbyMatchmakingSearchResource,
  LolLobbyLobbyMatchmakingSearchState,
  LolLobbyLobbyMember,
  LolLobbyLobbyNotification,
  LolLobbyLobbyParticipantDto,
  LolLobbyLobbyPartyRewardType,
  LolLobbyLobbyPartyRewards,
  LolLobbyLobbyPositionPreferences,
  LolLobbyLobbyRemovedFromGameReason,
  LolLobbyLobbyStatus,
  LolLobbyLobbyTimer,
  LolLobbyLoginSession,
  LolLobbyLoginSessionStates,
  LolLobbyMatchmakingDodgeState,
  LolLobbyMucJwtDto,
  LolLobbyOpenPartyToggleAnalytics,
  LolLobbyPartiesInvitationAnalytics,
  LolLobbyPartiesInvitationPlayerAnalytics,
  LolLobbyPartyChatDto,
  LolLobbyPartyDto,
  LolLobbyPartyEogStatusCategory,
  LolLobbyPartyInviteAnalytics,
  LolLobbyPartyMemberDto,
  LolLobbyPartyMemberMetadataDto,
  LolLobbyPartyMemberRoleEnum,
  LolLobbyPartyNotificationEnvelopeDto,
  LolLobbyPartyPresenceData,
  LolLobbyPartyQueueEligibilityDto,
  LolLobbyPartyReward,
  LolLobbyPartyStatusDto,
  LolLobbyPlayerCollectionDto,
  LolLobbyPlayerDto,
  LolLobbyPlayerStatus,
  LolLobbyPlayerUpdateType,
  LolLobbyPremadeMemberDto,
  LolLobbyPremadePartyDto,
  LolLobbyPremadeRelationshipAnalytics,
  LolLobbyQueue,
  LolLobbyQueueAvailability,
  LolLobbyQueueCustomGame,
  LolLobbyQueueCustomGameSpectatorPolicy,
  LolLobbyQueueGameCategory,
  LolLobbyQueueGameTypeConfig,
  LolLobbyQueueRestrictionDto,
  LolLobbyQueueReward,
  LolLobbyQuickPlayPresetSlotDto,
  LolLobbyRankedPositionInfoDTO,
  LolLobbyRankedStatsUnsignedDTO,
  LolLobbyReadyDto,
  LolLobbyReceivedInvitationDto,
  LolLobbyReceivedInvitationGameConfigDto,
  LolLobbyRegistrationCredentials,
  LolLobbyRegistrationStatus,
  LolLobbyRiotMessagingServiceMessage,
  LolLobbyServiceProxyPayload,
  LolLobbySummoner,
  LolLobbyTeamBuilderActionV1,
  LolLobbyTeamBuilderAfkCheckStateV1,
  LolLobbyTeamBuilderBackwardsTransitionInfoV1,
  LolLobbyTeamBuilderBenchChampion,
  LolLobbyTeamBuilderCellV1,
  LolLobbyTeamBuilderCellsV1,
  LolLobbyTeamBuilderCeremonyV1,
  LolLobbyTeamBuilderChampSelectAction,
  LolLobbyTeamBuilderChampSelectChatRoomDetails,
  LolLobbyTeamBuilderChampSelectDevPanelData,
  LolLobbyTeamBuilderChampSelectMySelection,
  LolLobbyTeamBuilderChampSelectPlayerSelection,
  LolLobbyTeamBuilderChampSelectReport,
  LolLobbyTeamBuilderChampSelectReportV2,
  LolLobbyTeamBuilderChampSelectSession,
  LolLobbyTeamBuilderChampSelectSwapContract,
  LolLobbyTeamBuilderChampSelectSwapState,
  LolLobbyTeamBuilderChampSelectTimer,
  LolLobbyTeamBuilderChampSelectTradeContract,
  LolLobbyTeamBuilderChampSelectTradeState,
  LolLobbyTeamBuilderChampionBenchChampionV1,
  LolLobbyTeamBuilderChampionBenchStateV1,
  LolLobbyTeamBuilderChampionSelectPreferences,
  LolLobbyTeamBuilderChampionSelectStateV1,
  LolLobbyTeamBuilderCountdownTimer,
  LolLobbyTeamBuilderEntitledFeatureState,
  LolLobbyTeamBuilderEntitledFeatureStateV1,
  LolLobbyTeamBuilderGameModeSpellList,
  LolLobbyTeamBuilderGameflowGameClient,
  LolLobbyTeamBuilderGameflowGameMap,
  LolLobbyTeamBuilderGameflowSession,
  LolLobbyTeamBuilderGatekeeperRestricted,
  LolLobbyTeamBuilderGatekeeperRestriction,
  LolLobbyTeamBuilderLeaverBusterAbandoned,
  LolLobbyTeamBuilderLobby,
  LolLobbyTeamBuilderLobbyCountdownTimer,
  LolLobbyTeamBuilderLobbyInvitation,
  LolLobbyTeamBuilderLobbyMember,
  LolLobbyTeamBuilderLobbyPositionPreferences,
  LolLobbyTeamBuilderLobbyPositionPreferencesV2,
  LolLobbyTeamBuilderLobbyRemovedFromGameReason,
  LolLobbyTeamBuilderLockedEventsStateV1,
  LolLobbyTeamBuilderLoginSession,
  LolLobbyTeamBuilderLoginSessionState,
  LolLobbyTeamBuilderMatchmakingDodgeData,
  LolLobbyTeamBuilderMatchmakingDodgeState,
  LolLobbyTeamBuilderMatchmakingDodgeWarning,
  LolLobbyTeamBuilderMatchmakingLowPriorityData,
  LolLobbyTeamBuilderMatchmakingReadyCheckResource,
  LolLobbyTeamBuilderMatchmakingReadyCheckResponse,
  LolLobbyTeamBuilderMatchmakingReadyCheckState,
  LolLobbyTeamBuilderMatchmakingSearch,
  LolLobbyTeamBuilderMatchmakingSearchErrorResource,
  LolLobbyTeamBuilderMatchmakingSearchResource,
  LolLobbyTeamBuilderMatchmakingSearchState,
  LolLobbyTeamBuilderMucJwtDto,
  LolLobbyTeamBuilderPickOrderSwapV1,
  LolLobbyTeamBuilderQueue,
  LolLobbyTeamBuilderQueueAvailability,
  LolLobbyTeamBuilderQueueGameCategory,
  LolLobbyTeamBuilderQueueGameTypeConfig,
  LolLobbyTeamBuilderQueueReward,
  LolLobbyTeamBuilderRerollStateV1,
  LolLobbyTeamBuilderSettingCategoryResource,
  LolLobbyTeamBuilderTBDMatchmakingState,
  LolLobbyTeamBuilderTbLobbyStateResource,
  LolLobbyTeamBuilderTbRemovedFromServiceNotification,
  LolLobbyTeamBuilderTbdInventory,
  LolLobbyTeamBuilderTeamBoost,
  LolLobbyTeamBuilderTeamBuilderBoostInfo,
  LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse,
  LolLobbyTeamBuilderTradeV1,
  LolLobbyTeamBuilderUnlockedSkinsStateV1,
  LolLobbyUserInfoToken,
  LolLobbyUserResource,
  LolLoginAccessToken,
  LolLoginAccountStateResource,
  LolLoginAccountStateType,
  LolLoginAuthorization,
  LolLoginConfigReadinessEnum,
  LolLoginConfigStatus,
  LolLoginConfigType,
  LolLoginCrashReportingEnvironment,
  LolLoginIdToken,
  LolLoginLcdsResponse,
  LolLoginLcdsServiceProxyResponse,
  LolLoginLeagueSessionStatus,
  LolLoginLeagueSessionTokenEnvelope,
  LolLoginLoginConnectionMode,
  LolLoginLoginConnectionState,
  LolLoginLoginError,
  LolLoginLoginQueue,
  LolLoginLoginSession,
  LolLoginLoginSessionStates,
  LolLoginLoginSessionWallet,
  LolLoginPlatformGeneratedCredentials,
  LolLoginRSOConfigReadyState,
  LolLoginRSOPlayerCredentials,
  LolLoginSummonerCreatedResource,
  LolLoginSummonerSessionResource,
  LolLoginUsernameAndPassword,
  LolLootAccountIdAndSummonerId,
  LolLootCelebrationType,
  LolLootCollectionsChampionMinimal,
  LolLootCollectionsChampionSkinMinimal,
  LolLootCollectionsEmote,
  LolLootCollectionsOwnership,
  LolLootCollectionsRental,
  LolLootCollectionsStatstone,
  LolLootCollectionsSummonerIcon,
  LolLootCollectionsWardSkin,
  LolLootContextMenu,
  LolLootCosmeticsTFTDamageSkin,
  LolLootCosmeticsTFTDamageSkinViewModel,
  LolLootCosmeticsTFTMapSkinViewModel,
  LolLootCounter,
  LolLootCounterInstance,
  LolLootCurrencyConfiguration,
  LolLootEntityInstance,
  LolLootGameDataSummonerEmote,
  LolLootGameDataSummonerIcon,
  LolLootGameflowPhase,
  LolLootGameflowSession,
  LolLootGrantStatus,
  LolLootGrantorDescription,
  LolLootGroup,
  LolLootInventoryOwnership,
  LolLootItemKey,
  LolLootItemOwnershipStatus,
  LolLootLoginDataPacket,
  LolLootLoginSession,
  LolLootLoginSessionStates,
  LolLootLoginSimpleMessage,
  LolLootLootBundleContentGdsResource,
  LolLootLootBundleGdsResource,
  LolLootLootDataGdsResource,
  LolLootLootDescription,
  LolLootLootDropTableEntryGdsResource,
  LolLootLootGrantNotification,
  LolLootLootItem,
  LolLootLootItemGdsResource,
  LolLootLootMilestone,
  LolLootLootMilestoneClaimStatus,
  LolLootLootMilestoneRepeat,
  LolLootLootMilestoneReward,
  LolLootLootMilestones,
  LolLootLootMilestonesClaimResponse,
  LolLootLootMilestonesCounter,
  LolLootLootMilestonesDataGdsResource,
  LolLootLootOddsResponse,
  LolLootLootOutputGdsResource,
  LolLootLootRarity,
  LolLootLootRecipeGdsResource,
  LolLootLootTableGdsResource,
  LolLootLootType,
  LolLootMilestone,
  LolLootMilestoneInstance,
  LolLootMilestoneLootItemRewardGdsResource,
  LolLootMilestonesProgressionConfigRepeatGdsResource,
  LolLootMilestonesProgressionCounterGdsResource,
  LolLootMilestonesProgressionGroupRepeatGdsResource,
  LolLootMilestonesRecipeGdsResource,
  LolLootPlayerLoot,
  LolLootPlayerLootDelta,
  LolLootPlayerLootMap,
  LolLootPlayerLootNotification,
  LolLootPlayerLootUpdate,
  LolLootProgressionConfigGdsResource,
  LolLootProgressionConfigMilestoneGdsResource,
  LolLootProgressionConfigMilestonePropertiesGdsResource,
  LolLootProgressionConfigMilestoneRewardGdsResource,
  LolLootQueryEvaluatedLootItem,
  LolLootRMSPayload,
  LolLootRecipeMenuConfig,
  LolLootRecipeMetadata,
  LolLootRecipeOutput,
  LolLootRecipeSlot,
  LolLootRecipeWithMilestones,
  LolLootRedeemableStatus,
  LolLootRegionLocale,
  LolLootRepeat,
  LolLootRequestDTOSelectionRequestDTO,
  LolLootRequestDTOVectorSelectionRequestDTO,
  LolLootRequestMetadataDTO,
  LolLootResponseDTOSvcRewardGrant,
  LolLootResponseDTOMapRewardGroupIdSelectGrantStatus,
  LolLootResponseDTOVectorSvcRewardGrant,
  LolLootResponseDTOVectorSvcRewardGroup,
  LolLootResponseMetadataDTO,
  LolLootReward,
  LolLootRewardGrant,
  LolLootRewardStatus,
  LolLootRewardStrategy,
  LolLootRewardsConfig,
  LolLootSelectGrantStatusResponse,
  LolLootSelectionRequestDTO,
  LolLootSelectionStrategyConfig,
  LolLootSummoner,
  LolLootSvcRewardGrant,
  LolLootSvcRewardGrantElement,
  LolLootSvcRewardGroup,
  LolLootTFTDamageSkinGroupViewModel,
  LolLootTFTDamageSkinGroupedViewModel,
  LolLootTFTMapSkinGroupViewModel,
  LolLootTFTMapSkinGroupedViewModel,
  LolLootVerboseLootOddsResponse,
  LolLoyaltyAccessToken,
  LolLoyaltyGlobalRewards,
  LolLoyaltyInventoryDTO,
  LolLoyaltyInventoryItemDTO,
  LolLoyaltyInventoryResponseDTO,
  LolLoyaltyLoginSession,
  LolLoyaltyLoginSessionStates,
  LolLoyaltyLoyaltyRewards,
  LolLoyaltyLoyaltyRewardsSimplified,
  LolLoyaltyLoyaltyStatus,
  LolLoyaltyLoyaltyStatusNotification,
  LolLoyaltyPlayerNotification,
  LolLoyaltyRiotMessagingServiceMessage,
  LolLoyaltyRmsEntitlementPayload,
  LolMapsGameModeSpellList,
  LolMapsMaps,
  LolMapsTutorialCard,
  LolMatchHistoryAcsEndPoint,
  LolMatchHistoryAcsPlayer,
  LolMatchHistoryGAMHSMatchHistoryData,
  LolMatchHistoryGAMHSMatchHistoryList,
  LolMatchHistoryGAMHSMatchHistoryMetadata,
  LolMatchHistoryLoginSession,
  LolMatchHistoryLoginSessionStates,
  LolMatchHistoryMHSummoner,
  LolMatchHistoryMatchHistoryEvent,
  LolMatchHistoryMatchHistoryGame,
  LolMatchHistoryMatchHistoryGameList,
  LolMatchHistoryMatchHistoryList,
  LolMatchHistoryMatchHistoryParticipant,
  LolMatchHistoryMatchHistoryParticipantFrame,
  LolMatchHistoryMatchHistoryParticipantIdentities,
  LolMatchHistoryMatchHistoryParticipantIdentityPlayer,
  LolMatchHistoryMatchHistoryParticipantStatistics,
  LolMatchHistoryMatchHistoryPlayerChampMasteryDelta,
  LolMatchHistoryMatchHistoryPlayerDelta,
  LolMatchHistoryMatchHistoryPlayerGameDelta,
  LolMatchHistoryMatchHistoryPlayerLeagueDelta,
  LolMatchHistoryMatchHistoryPlayerPlatformDelta,
  LolMatchHistoryMatchHistoryPosition,
  LolMatchHistoryMatchHistoryTeam,
  LolMatchHistoryMatchHistoryTeamBan,
  LolMatchHistoryMatchHistoryTimeline,
  LolMatchHistoryMatchHistoryTimelineFrame,
  LolMatchHistoryMatchHistoryTimelineFrames,
  LolMatchHistoryRecentlyPlayedSummoner,
  LolMatchHistorySummoner,
  LolMatchmakingGameflowGameData,
  LolMatchmakingGameflowGameDodge,
  LolMatchmakingGameflowGameTypeConfig,
  LolMatchmakingGameflowPhase,
  LolMatchmakingGameflowQueue,
  LolMatchmakingGameflowSession,
  LolMatchmakingLobbyStatus,
  LolMatchmakingLoginSession,
  LolMatchmakingLoginSessionState,
  LolMatchmakingMatchmakingDodgeData,
  LolMatchmakingMatchmakingDodgeState,
  LolMatchmakingMatchmakingDodgeWarning,
  LolMatchmakingMatchmakingLowPriorityData,
  LolMatchmakingMatchmakingReadyCheckResource,
  LolMatchmakingMatchmakingReadyCheckResponse,
  LolMatchmakingMatchmakingReadyCheckState,
  LolMatchmakingMatchmakingSearchErrorResource,
  LolMatchmakingMatchmakingSearchResource,
  LolMatchmakingMatchmakingSearchState,
  LolMatchmakingPlayerStatus,
  LolMatchmakingQueue,
  LolMatchmakingQueueCustomGameSpectatorPolicy,
  LolMissionsCollectionsChampion,
  LolMissionsCollectionsChampionSkin,
  LolMissionsCollectionsOwnership,
  LolMissionsCollectionsRental,
  LolMissionsCollectionsSummoner,
  LolMissionsCollectionsSummonerIcons,
  LolMissionsCollectionsWardSkin,
  LolMissionsGameflowPhase,
  LolMissionsGameflowSession,
  LolMissionsGrantStatus,
  LolMissionsInventoryItemWithPayload,
  LolMissionsLoginSession,
  LolMissionsLoyaltyStatus,
  LolMissionsLoyaltyStatusNotification,
  LolMissionsMissionAsset,
  LolMissionsMissionsNotificationResource,
  LolMissionsMissionsSettingsDataResource,
  LolMissionsPlayerUpdateResponse,
  LolMissionsPluginRegionLocaleChangedEvent,
  LolMissionsRewardGrant,
  LolMissionsRewardGrantElement,
  LolMissionsRewardGrantInfo,
  LolMissionsRewardGroup,
  LolMissionsRewardGroupsSelection,
  LolMissionsRewardStatus,
  LolMissionsRewardStrategy,
  LolMissionsRewardsProductConfig,
  LolMissionsSelectionStrategyConfig,
  LolMissionsSeriesOpt,
  LolMissionsSvcReward,
  LolMissionsTftOrb,
  LolMissionsTftPaidBattlepass,
  LolMissionsTftPaidBattlepassInfo,
  LolMissionsTftPaidBattlepassMilestone,
  LolMissionsTftPaidBattlepassReward,
  LolMissionsTftWeeklyMissions,
  LolMissionsUserInfo,
  LolModeProgressionInventoryRewardItem,
  LolModeProgressionLoadout,
  LolModeProgressionLoadoutsSlot,
  LolNpeRewardsAccountSettingsData,
  LolNpeRewardsAccountSettingsPayload,
  LolNpeRewardsAllRewards,
  LolNpeRewardsChallengesProgress,
  LolNpeRewardsChallengesSettings,
  LolNpeRewardsLoginSeriesSettings,
  LolNpeRewardsMission,
  LolNpeRewardsMissionDisplay,
  LolNpeRewardsMissionSeries,
  LolNpeRewardsMissionSeriesOptIn,
  LolNpeRewardsMissionsRewardPackMetaData,
  LolNpeRewardsObjective,
  LolNpeRewardsProgress,
  LolNpeRewardsRequirements,
  LolNpeRewardsReward,
  LolNpeRewardsRewardPack,
  LolNpeRewardsRewardSeries,
  LolNpeRewardsRewardSeriesState,
  LolNpeRewardsSummoner,
  LolNpeTutorialPathAccountSettingsCategoryResource,
  LolNpeTutorialPathAccountSettingsTutorial,
  LolNpeTutorialPathCollectionsChampion,
  LolNpeTutorialPathCollectionsChampionSpell,
  LolNpeTutorialPathExpiringWarning,
  LolNpeTutorialPathGameflowPhase,
  LolNpeTutorialPathGameflowSession,
  LolNpeTutorialPathIds,
  LolNpeTutorialPathLobbyChangeQueue,
  LolNpeTutorialPathLobbyDto,
  LolNpeTutorialPathLobbyGameConfigDto,
  LolNpeTutorialPathMission,
  LolNpeTutorialPathMissionDisplay,
  LolNpeTutorialPathMissionMetadata,
  LolNpeTutorialPathObjective,
  LolNpeTutorialPathProgress,
  LolNpeTutorialPathRequirement,
  LolNpeTutorialPathReward,
  LolNpeTutorialPathRewardStrategy,
  LolNpeTutorialPathSeries,
  LolNpeTutorialPathSeriesOpt,
  LolNpeTutorialPathSummoner,
  LolNpeTutorialPathSummonerIcon,
  LolNpeTutorialPathTutorial,
  LolNpeTutorialPathTutorialMetadata,
  LolNpeTutorialPathTutorialReward,
  LolNpeTutorialPathTutorialStatus,
  LolNpeTutorialPathTutorialType,
  LolPatchChunkingPatcherEnvironment,
  LolPatchComponentActionProgress,
  LolPatchComponentState,
  LolPatchComponentStateAction,
  LolPatchComponentStateProgress,
  LolPatchComponentStateWorkType,
  LolPatchEntitlementsTokenResource,
  LolPatchInstallPaths,
  LolPatchNotification,
  LolPatchNotificationId,
  LolPatchPatchSieveCompatVersion,
  LolPatchPatchSieveDownload,
  LolPatchPatchSieveLabelValue,
  LolPatchPatchSieveQueryResponse,
  LolPatchPatchSieveRelease,
  LolPatchPatchSieveReleaseInfo,
  LolPatchPatcherInstallSettings,
  LolPatchPatcherRegionSettings,
  LolPatchPatcherSelfUpdateSettings,
  LolPatchPatcherSettings,
  LolPatchProductState,
  LolPatchRegionLocale,
  LolPatchScdCookie,
  LolPatchScdCookies,
  LolPatchScdEnabled,
  LolPatchStatus,
  LolPatchSupportedGameRelease,
  LolPatchSupportedGameReleases,
  LolPatchUxResource,
  LolPerksChampSelectAction,
  LolPerksChampSelectBannedChampions,
  LolPerksChampSelectChatRoomDetails,
  LolPerksChampSelectMySelection,
  LolPerksChampSelectPlayerSelection,
  LolPerksChampSelectSession,
  LolPerksChampSelectTimer,
  LolPerksChampSelectTradeContract,
  LolPerksChampSelectTradeState,
  LolPerksChampionPreferredStyle,
  LolPerksChampionRuneRecommendationsGDSResource,
  LolPerksDefaultStatModsPerSubStyle,
  LolPerksGameCustomizationDTO,
  LolPerksGameDataChampionSummary,
  LolPerksGameflowGameData,
  LolPerksGameflowPhase,
  LolPerksGameflowSession,
  LolPerksGetGameCustomizationDTO,
  LolPerksInventoryRunePageCount,
  LolPerksLoginSession,
  LolPerksLoginSessionState,
  LolPerksMucJwtDto,
  LolPerksNamecheckAuthorization,
  LolPerksNamecheckLoginDataPacket,
  LolPerksNamecheckPayload,
  LolPerksNamecheckResponse,
  LolPerksPerkBook,
  LolPerksPerkGDSResource,
  LolPerksPerkIdListResource,
  LolPerksPerkPageResource,
  LolPerksPerkSettingResource,
  LolPerksPerkSettings,
  LolPerksPerkStyleResource,
  LolPerksPerkStyleSlotResource,
  LolPerksPerkSubStyleBonusResource,
  LolPerksPerkUIPerk,
  LolPerksPerkUIRecommendedPage,
  LolPerksPerkUISlot,
  LolPerksPerkUIStyle,
  LolPerksPerksConfigDTO,
  LolPerksPlatformConfig,
  LolPerksPlayerInventory,
  LolPerksQueue,
  LolPerksRuneRecommendationGDSResource,
  LolPerksSettingsStorageContainer,
  LolPerksSummoner,
  LolPerksSummonerRerollPoints,
  LolPerksUISettings,
  LolPerksUpdatePageOrderRequest,
  LolPerksValidateItemSetNameResponse,
  LolPerksValidatePageNameData,
  LolPftGameClientEndOfGameStats,
  LolPftGameflowGameDodge,
  LolPftGameflowGameDodgeState,
  LolPftGameflowPhase,
  LolPftGameflowSession,
  LolPftLoginSession,
  LolPftLoginSessionStates,
  LolPftPFTEndOfGamePlayer,
  LolPftPFTEndOfGamePoints,
  LolPftPFTEndOfGameStats,
  LolPftPFTEndOfGameTeam,
  LolPftPFTEvent,
  LolPftPFTMetadata,
  LolPftPFTQuestionResponse,
  LolPftPFTSurvey,
  LolPftPFTSurveyResults,
  LolPftPFTSurveyV1,
  LolPftSummoner,
  LolPlayerBehaviorBanNotification,
  LolPlayerBehaviorCodeOfConductNotification,
  LolPlayerBehaviorGameflowPhase,
  LolPlayerBehaviorNotificationSource,
  LolPlayerBehaviorPlayerBehaviorConfig,
  LolPlayerBehaviorPlayerBehavior_GameflowSessionResource,
  LolPlayerBehaviorPlayerBehavior_SimpleMessage,
  LolPlayerBehaviorPlayerNotificationResource,
  LolPlayerBehaviorReformCard,
  LolPlayerBehaviorReformCardChatLogs,
  LolPlayerBehaviorReformCardV2,
  LolPlayerBehaviorReporterFeedback,
  LolPlayerBehaviorReporterFeedbackMessage,
  LolPlayerBehaviorRestrictionNotification,
  LolPlayerBehaviorSettingsResource,
  LolPlayerBehaviorUserInfo,
  LolPlayerBehaviorUserInfoBanData,
  LolPlayerBehaviorUserInfoRestriction,
  LolPlayerBehaviorUserInfoRestrictionData,
  LolPlayerBehaviorUserInfoRestrictionGameData,
  LolPlayerBehaviorUserInfoToken,
  LolPlayerLevelUpEndOfGameStats,
  LolPlayerLevelUpGameDataSummonerSpell,
  LolPlayerLevelUpLoginSession,
  LolPlayerLevelUpLoginSessionStates,
  LolPlayerLevelUpPlayerLevelUpEvent,
  LolPlayerLevelUpPlayerLevelUpEventAck,
  LolPlayerLevelUpQueue,
  LolPlayerMessagingDynamicCelebrationMessagingNotificationResource,
  LolPlayerMessagingLoginDataPacket,
  LolPlayerMessagingPlayerMessagingNotificationResource,
  LolPlayerMessagingSimpleMessage,
  LolPlayerPreferencesLoginSession,
  LolPlayerPreferencesLoginSessionStates,
  LolPlayerPreferencesPlayerPreferences,
  LolPlayerPreferencesPlayerPreferencesEndpoint,
  LolPlayerReportSenderChampSelectReport,
  LolPlayerReportSenderChampSelectSummonerInfo,
  LolPlayerReportSenderGameAgnosticReportPayload,
  LolPlayerReportSenderGameflowGameData,
  LolPlayerReportSenderGameflowPhase,
  LolPlayerReportSenderGameflowSession,
  LolPlayerReportSenderPlayerReport,
  LolPlayerReportSenderReportRecipientMode,
  LolPlayerReportSenderSummoner,
  LolPreEndOfGameGameflowPhase,
  LolPreEndOfGameSequenceEvent,
  LolPremadeVoiceAccountSettingsCategoryDataResource,
  LolPremadeVoiceAccountSettingsCategoryResource,
  LolPremadeVoiceAudioPropertiesResource,
  LolPremadeVoiceConfigReadinessEnum,
  LolPremadeVoiceConfigStatus,
  LolPremadeVoiceConfigType,
  LolPremadeVoiceDeviceResource,
  LolPremadeVoiceDeviceResourceRiotClient,
  LolPremadeVoiceEntitlementsToken,
  LolPremadeVoiceExternalSession,
  LolPremadeVoiceFirstExperience,
  LolPremadeVoiceGameEventHotkeys,
  LolPremadeVoiceGameInputSettings,
  LolPremadeVoiceGameflowGameClient,
  LolPremadeVoiceGameflowPhase,
  LolPremadeVoiceGameflowSession,
  LolPremadeVoiceInputMode,
  LolPremadeVoiceKeyCombo,
  LolPremadeVoiceKeycodePushToTalkResource,
  LolPremadeVoiceLocalSettingsCategoryDataResource,
  LolPremadeVoiceLocalSettingsCategoryResource,
  LolPremadeVoiceLoginSession,
  LolPremadeVoiceParticipantResource,
  LolPremadeVoicePartyDto,
  LolPremadeVoicePartyMemberRoleEnum,
  LolPremadeVoicePlayerDto,
  LolPremadeVoicePremadeVoiceParticipantDto,
  LolPremadeVoicePushToTalkKey,
  LolPremadeVoicePushToTalkResource,
  LolPremadeVoiceSessionResource,
  LolPremadeVoiceSessionStatus,
  LolPremadeVoiceSettingsResource,
  LolPremadeVoiceStateResource,
  LolPremadeVoiceSummoner,
  LolPremadeVoiceVoiceAvailability,
  LolProgressionCounter,
  LolProgressionCounterInstance,
  LolProgressionEntityInstance,
  LolProgressionGroup,
  LolProgressionMilestone,
  LolProgressionMilestoneInstance,
  LolProgressionRepeat,
  LolPublishingContentAccountData,
  LolPublishingContentBuildInfo,
  LolPublishingContentClientData,
  LolPublishingContentPubHubConfig,
  LolPublishingContentPubHubConfigAppContext,
  LolPublishingContentPubHubConfigEdge,
  LolPublishingContentPublishingLocaleSetting,
  LolPublishingContentPublishingLocaleSettingData,
  LolPublishingContentPublishingSettings,
  LolPublishingContentRegionLocale,
  LolPublishingContentSummonerInfo,
  LolPublishingContentSystemInfo,
  LolPublishingContentSystemInfoOperatingSystem,
  LolPurchaseWidgetBalance,
  LolPurchaseWidgetBaseSkinLineDto,
  LolPurchaseWidgetBundledItemPricingInfo,
  LolPurchaseWidgetCapOffer,
  LolPurchaseWidgetCapOfferPayloadEntry,
  LolPurchaseWidgetCapOrdersDataDto,
  LolPurchaseWidgetCapOrdersMetaDto,
  LolPurchaseWidgetCapOrdersOfferContextDto,
  LolPurchaseWidgetCapOrdersOfferDto,
  LolPurchaseWidgetCapOrdersOrderDto,
  LolPurchaseWidgetCapOrdersSubOrderDto,
  LolPurchaseWidgetCapOrdersTypedIdentifierDto,
  LolPurchaseWidgetCatalogPluginItem,
  LolPurchaseWidgetCatalogPluginItemAssets,
  LolPurchaseWidgetCatalogPluginItemWithDetails,
  LolPurchaseWidgetCatalogPluginPrice,
  LolPurchaseWidgetCatalogPluginSale,
  LolPurchaseWidgetChampionSkinEmblem,
  LolPurchaseWidgetChampionSkinEmblemPath,
  LolPurchaseWidgetChampionSkinEmblemPosition,
  LolPurchaseWidgetDiscountPricingInfo,
  LolPurchaseWidgetInventoryOwnership,
  LolPurchaseWidgetItemChoiceDetails,
  LolPurchaseWidgetItemChoices,
  LolPurchaseWidgetItemCost,
  LolPurchaseWidgetItemDefinition,
  LolPurchaseWidgetItemDetails,
  LolPurchaseWidgetItemKey,
  LolPurchaseWidgetItemMetadataEntry,
  LolPurchaseWidgetItemOwnership,
  LolPurchaseWidgetItemPrice,
  LolPurchaseWidgetItemSale,
  LolPurchaseWidgetLoginSession,
  LolPurchaseWidgetLoginSessionStates,
  LolPurchaseWidgetOrderNotificationResource,
  LolPurchaseWidgetPriceDetail,
  LolPurchaseWidgetPriceOptionDto,
  LolPurchaseWidgetPurchasableItem,
  LolPurchaseWidgetPurchaseItem,
  LolPurchaseWidgetPurchaseOfferOrderStates,
  LolPurchaseWidgetPurchaseOfferOrderStatus,
  LolPurchaseWidgetPurchaseOfferOrderStatuses,
  LolPurchaseWidgetPurchaseOfferRequestV3,
  LolPurchaseWidgetPurchaseOfferResponseV3,
  LolPurchaseWidgetPurchaseOption,
  LolPurchaseWidgetPurchaseRequest,
  LolPurchaseWidgetPurchaseResponse,
  LolPurchaseWidgetPurchaseWidgetConfig,
  LolPurchaseWidgetRiotMessagingServiceMessage,
  LolPurchaseWidgetSale,
  LolPurchaseWidgetSkinLineDescriptionDto,
  LolPurchaseWidgetSkinLineDescriptionInfo,
  LolPurchaseWidgetSkinLineInfo,
  LolPurchaseWidgetSkinLineItemDto,
  LolPurchaseWidgetSkinLineTier,
  LolPurchaseWidgetTransaction,
  LolPurchaseWidgetValidateOfferError,
  LolPurchaseWidgetValidateOfferRequestV3,
  LolPurchaseWidgetValidateOfferResponseV3,
  LolPurchaseWidgetValidationError,
  LolPurchaseWidgetValidationErrorEntry,
  LolPurchaseWidgetValidationRequest,
  LolPurchaseWidgetValidationRequestItem,
  LolPurchaseWidgetValidationResponse,
  LolPurchaseWidgetValidationResponseItem,
  LolPurchaseWidgetWallet,
  LolRankedAchievedTier,
  LolRankedEndOfGameStatsBlock,
  LolRankedEosNotificationResource,
  LolRankedEosNotificationType,
  LolRankedEosNotificationsConfig,
  LolRankedEosNotificationsConfigEntry,
  LolRankedEosRewardData,
  LolRankedEosRewardGroupsConfig,
  LolRankedEosRewardGroupsRewardsList,
  LolRankedEosRewardsConfig,
  LolRankedEosRewardsConfigEntry,
  LolRankedEosSettingsData,
  LolRankedEosSettingsResource,
  LolRankedGameflowGameData,
  LolRankedGameflowPhase,
  LolRankedGameflowSession,
  LolRankedGlobalNotification,
  LolRankedLcuLeagueNotification,
  LolRankedLeagueDivision,
  LolRankedLeagueDivisionInfo,
  LolRankedLeagueLadderDTO,
  LolRankedLeagueLadderEntryDTO,
  LolRankedLeagueLadderInfo,
  LolRankedLeagueNotification,
  LolRankedLeagueNotifications,
  LolRankedLeagueQueueType,
  LolRankedLeagueStanding,
  LolRankedLeagueTier,
  LolRankedLeagueTierAndRankDTO,
  LolRankedLeaguesSeasonRewardConfig,
  LolRankedLoginSession,
  LolRankedLoginSessionStates,
  LolRankedMiniseries,
  LolRankedNotificationDisplayType,
  LolRankedParticipantTiers,
  LolRankedQueue,
  LolRankedQueuesAndPuuidsPayload,
  LolRankedRankedQueueStats,
  LolRankedRankedQueueStatsDTO,
  LolRankedRankedQueueWarnings,
  LolRankedRankedQueueWarningsDTO,
  LolRankedRankedStats,
  LolRankedRankedStatsDTO,
  LolRankedRatedLadderEntryDTO,
  LolRankedRatedLadderInfo,
  LolRankedRatedLadderStanding,
  LolRankedRatedTier,
  LolRankedRewardNotification,
  LolRankedRewardsInfo,
  LolRankedSeasonDTO,
  LolRankedSeasonSplit,
  LolRankedSeasonSplitDTO,
  LolRankedSequenceEvent,
  LolRankedSeverity,
  LolRankedSignedRankedStatsDTO,
  LolRankedSocialLeaderboardRankedQueueStats,
  LolRankedSocialLeaderboardRankedQueueStatsDTO,
  LolRankedSplitPointsNotification,
  LolRankedSplitReward,
  LolRankedSplitRewardDTO,
  LolRankedSplitRewardGroup,
  LolRankedSplitRewardGroupDTO,
  LolRankedSplitRewardsMetaData,
  LolRankedSummoner,
  LolRankedVictoriousSkin,
  LolRankedVictoriousSkinDTO,
  LolRegaliaAccountIdAndSummonerId,
  LolRegaliaChatPresence,
  LolRegaliaChatPresenceExternal,
  LolRegaliaChatPresenceLolData,
  LolRegaliaGameDataRegalia,
  LolRegaliaInventoryItem,
  LolRegaliaItemKey,
  LolRegaliaLeagueDivision,
  LolRegaliaLeagueQueueType,
  LolRegaliaLeagueTier,
  LolRegaliaLoadout,
  LolRegaliaRankedQueueStats,
  LolRegaliaRankedStats,
  LolRegaliaRegalia,
  LolRegaliaRegaliaAsync,
  LolRegaliaRegaliaBannerType,
  LolRegaliaRegaliaCrestType,
  LolRegaliaRegaliaFrontendConfig,
  LolRegaliaRegaliaInventoryItem,
  LolRegaliaRegaliaLoadout,
  LolRegaliaRegaliaPlatformConfig,
  LolRegaliaRegaliaPreferences,
  LolRegaliaRegaliaRankedEntry,
  LolRegaliaRegaliaSettings,
  LolRegaliaRegaliaSettingsExternal,
  LolRegaliaRegaliaWithPreferences,
  LolRegaliaSummoner,
  LolRegaliaSummonerProfile,
  LolRegaliaSummonerProfileUpdate,
  LolReplaysClashPlaymodeRestrictedInfo,
  LolReplaysGameflowAvailability,
  LolReplaysGameflowGameClient,
  LolReplaysGameflowPhase,
  LolReplaysGameflowSession,
  LolReplaysGameflowWatchPhase,
  LolReplaysInstallPaths,
  LolReplaysMetadataState,
  LolReplaysReplayContextData,
  LolReplaysReplayCreateMetadata,
  LolReplaysReplayMetadata,
  LolReplaysReplaysConfiguration,
  LolReplaysReplaysDynamicConfig,
  LolReplaysReplaysSettingsData,
  LolReplaysReplaysSettingsResource,
  LolReplaysRoflFileMetadata,
  LolRewardsCelebrationType,
  LolRewardsGrantStatus,
  LolRewardsGrantorDescription,
  LolRewardsRMSPayload,
  LolRewardsRegionLocale,
  LolRewardsRequestDTOSelectionRequestDTO,
  LolRewardsRequestDTOVectorSelectionRequestDTO,
  LolRewardsRequestMetadataDTO,
  LolRewardsResponseDTOSvcRewardGrant,
  LolRewardsResponseDTOMapRewardGroupIdSelectGrantStatus,
  LolRewardsResponseDTOVectorSvcRewardGrant,
  LolRewardsResponseDTOVectorSvcRewardGroup,
  LolRewardsResponseMetadataDTO,
  LolRewardsReward,
  LolRewardsRewardGrant,
  LolRewardsRewardStatus,
  LolRewardsRewardStrategy,
  LolRewardsRewardsConfig,
  LolRewardsSelectGrantStatusResponse,
  LolRewardsSelectionRequestDTO,
  LolRewardsSelectionStrategyConfig,
  LolRewardsSvcRewardGrant,
  LolRewardsSvcRewardGrantElement,
  LolRewardsSvcRewardGroup,
  LolRiotMessagingServiceChampionMasteryLevelUp,
  LolRiotMessagingServiceGameflowPhase,
  LolRiotMessagingServiceGameflowSession,
  LolRiotclientUpgraderGameflowAvailability,
  LolRsoAuthAccessToken,
  LolRsoAuthAuthError,
  LolRsoAuthAuthHint,
  LolRsoAuthAuthHintType,
  LolRsoAuthAuthorization,
  LolRsoAuthAuthorizationRequest,
  LolRsoAuthAuthorizationResponse,
  LolRsoAuthConfigReadinessEnum,
  LolRsoAuthConfigStatus,
  LolRsoAuthConfigType,
  LolRsoAuthDeviceId,
  LolRsoAuthEntitlementsToken,
  LolRsoAuthIdToken,
  LolRsoAuthImplicitAuthorization,
  LolRsoAuthPublicClientConfig,
  LolRsoAuthRSOAuthorizationTrustLevel,
  LolRsoAuthRSOConfigReadyState,
  LolRsoAuthRSOJWTConfig,
  LolRsoAuthRSOPlayerCredentials,
  LolRsoAuthRegionStatus,
  LolRsoAuthSessionResponse,
  LolRsoAuthUserInfo,
  LolServiceStatusBroadcastMessage,
  LolServiceStatusBroadcastNotification,
  LolServiceStatusLegacyServiceStatusMessage,
  LolServiceStatusLegacyServiceStatusResponse,
  LolServiceStatusLegacyServiceStatusTranslation,
  LolServiceStatusLoginDataPacket,
  LolServiceStatusRegionLocaleResource,
  LolServiceStatusRiotStatusIncident,
  LolServiceStatusRiotStatusMaintenance,
  LolServiceStatusRiotStatusResource,
  LolServiceStatusRiotStatusTitle,
  LolServiceStatusRiotStatusTranslation,
  LolServiceStatusRiotStatusUpdate,
  LolServiceStatusServiceStatusResource,
  LolServiceStatusTickerMessage,
  LolSettingsLCUGameSettingsConfig,
  LolSettingsLoginSession,
  LolSettingsLoginSessionStates,
  LolSettingsPublisher,
  LolSettingsRegionLocale,
  LolSettingsReplaysConfig,
  LolSettingsSettingCategory,
  LolSettingsSettingsConfig,
  LolShutdownShutdownNotification,
  LolShutdownShutdownReason,
  LolSimpleDialogMessagesGameflowPhase,
  LolSimpleDialogMessagesGameflowSession,
  LolSimpleDialogMessagesLocalMessageRequest,
  LolSimpleDialogMessagesLoginDataPacket,
  LolSimpleDialogMessagesMessage,
  LolSimpleDialogMessagesSimpleMessage,
  LolSocialLeaderboardFriendResource,
  LolSocialLeaderboardGiftingFriend,
  LolSocialLeaderboardLeagueDivision,
  LolSocialLeaderboardLeagueQueueType,
  LolSocialLeaderboardLeagueTier,
  LolSocialLeaderboardRankedQueueStats,
  LolSocialLeaderboardRankedStats,
  LolSocialLeaderboardSocialLeaderboardData,
  LolSocialLeaderboardSocialLeaderboardRowData,
  LolSocialLeaderboardSummoner,
  LolSpectatorSpectateGameInfo,
  LolSpectatorSummonerOrTeamAvailabilty,
  LolStatstonesCatalogBundle,
  LolStatstonesCatalogBundlePrice,
  LolStatstonesCatalogItemDetails,
  LolStatstonesChampionStatstoneSetSummary,
  LolStatstonesChampionStatstoneSummary,
  LolStatstonesCollectionsChampion,
  LolStatstonesEogNotificationEnvelope,
  LolStatstonesGameDataItemReference,
  LolStatstonesGameDataStatstone,
  LolStatstonesGameDataStatstonePack,
  LolStatstonesGameDataStatstoneSet,
  LolStatstonesGameDataStatstonesInfo,
  LolStatstonesLoadout,
  LolStatstonesLoadoutItem,
  LolStatstonesMilestoneNotificationDto,
  LolStatstonesMilestoneProgressNotification,
  LolStatstonesNumberFormattingBehavior,
  LolStatstonesNumberFormattingData,
  LolStatstonesPersonalBestNotification,
  LolStatstonesPriceInfo,
  LolStatstonesProfileStatstoneSummary,
  LolStatstonesStatstone,
  LolStatstonesStatstoneCompletion,
  LolStatstonesStatstoneFeaturedRequest,
  LolStatstonesStatstoneMasteryVignette,
  LolStatstonesStatstoneNotificationDto,
  LolStatstonesStatstoneNotificationEnvelopeDto,
  LolStatstonesStatstonePlayerRecord,
  LolStatstonesStatstoneProgress,
  LolStatstonesStatstoneRekindledVignette,
  LolStatstonesStatstoneSet,
  LolStatstonesStatstoneSetCompleteVignette,
  LolStatstonesStatstoneVignetteNotificationEnvelopeDto,
  LolStatstonesSummoner,
  LolStoreAccessTokenResource,
  LolStoreAllSummonerData,
  LolStoreBundleItemDTO,
  LolStoreBundled,
  LolStoreBundledItem,
  LolStoreBundledItemCost,
  LolStoreCapOffer,
  LolStoreCatalogInstanceToItemKeyMap,
  LolStoreCatalogItem,
  LolStoreFeaturedPageDTO,
  LolStoreGetPlatformIdsFromInstanceIdsRequest,
  LolStoreGiftableResult,
  LolStoreGiftingConfig,
  LolStoreGiftingFriend,
  LolStoreItemCost,
  LolStoreItemKey,
  LolStoreItemLocalization,
  LolStoreItemMetadataEntry,
  LolStoreItemOrderDTO,
  LolStoreItemSale,
  LolStoreLoginDataPacket,
  LolStoreLoginSession,
  LolStoreLoginSessionStates,
  LolStoreNotification,
  LolStoreOrderNotificationResource,
  LolStorePageDTO,
  LolStorePageGroupingDTO,
  LolStorePlayer,
  LolStorePurchaseOrderRequestDTO,
  LolStorePurchaseOrderResponseDTO,
  LolStoreRiotMessagingServiceMessage,
  LolStoreSale,
  LolStoreServiceBalance,
  LolStoreServiceWallet,
  LolStoreSimpleDialogMessage,
  LolStoreStoreStatus,
  LolStoreSummoner,
  LolStoreSummonerLevelAndPoints,
  LolStoreTransactionResponseDTO,
  LolStoreWallet,
  LolSuggestedPlayersEndOfGamePlayer,
  LolSuggestedPlayersEndOfGameStats,
  LolSuggestedPlayersEndOfGameTeam,
  LolSuggestedPlayersGameflowPhase,
  LolSuggestedPlayersHonorInteraction,
  LolSuggestedPlayersSuggestedPlayersConfig,
  LolSuggestedPlayersSuggestedPlayersDynamicClientConfig,
  LolSuggestedPlayersSuggestedPlayersFriend,
  LolSuggestedPlayersSuggestedPlayersKudoedPlayer,
  LolSuggestedPlayersSuggestedPlayersLobbyStatus,
  LolSuggestedPlayersSuggestedPlayersPlayerStatus,
  LolSuggestedPlayersSuggestedPlayersQueue,
  LolSuggestedPlayersSuggestedPlayersReason,
  LolSuggestedPlayersSuggestedPlayersReportedPlayer,
  LolSuggestedPlayersSuggestedPlayersSuggestedPlayer,
  LolSuggestedPlayersSuggestedPlayersSummoner,
  LolSuggestedPlayersSuggestedPlayersVictoriousComrade,
  LolSummonerAccountIdAndSummonerId,
  LolSummonerAutoFillQueueDto,
  LolSummonerGameloopPlayerInfoV2,
  LolSummonerLevelField,
  LolSummonerLevelProgression,
  LolSummonerLoginSession,
  LolSummonerLoginSessionStates,
  LolSummonerPlayerNameMode,
  LolSummonerProfilePrivacy,
  LolSummonerProfilePrivacyEnabledState,
  LolSummonerProfilePrivacySetting,
  LolSummonerRerollDataBagForClientV1,
  LolSummonerStatus,
  LolSummonerSummoner,
  LolSummonerSummonerCacheData,
  LolSummonerSummonerCreateRequest,
  LolSummonerSummonerCreatedId,
  LolSummonerSummonerDTO,
  LolSummonerSummonerIcon,
  LolSummonerSummonerIdAndIcon,
  LolSummonerSummonerIdAndName,
  LolSummonerSummonerProfileUpdate,
  LolSummonerSummonerRequestedName,
  LolSummonerSummonerRerollPoints,
  LolSummonerSummonerSession,
  LolSummonerXpAndLevelMessage,
  LolTastesDataModelResponse,
  LolTftDataModelResponse,
  LolTftGameflowGameData,
  LolTftGameflowPhase,
  LolTftGameflowSession,
  LolTftLolTftBattlePassHub,
  LolTftLolTftEvent,
  LolTftLolTftEvents,
  LolTftLolTftHomeHub,
  LolTftLolTftNewsHub,
  LolTftLolTftPrimeGaming,
  LolTftLolTftPromoButton,
  LolTftLolTftPromoButtons,
  LolTftPublishingSettings,
  LolTftQueue,
  LolTftQueueGameCategory,
  LolTftSettingsResource,
  LolTftTeamPlannerChampion,
  LolTftTeamPlannerGameDataTFTSets,
  LolTftTeamPlannerGameflowGameData,
  LolTftTeamPlannerGameflowPhase,
  LolTftTeamPlannerGameflowSession,
  LolTftTeamPlannerQueue,
  LolTftTeamPlannerSettingsStorageContainer,
  LolTftTeamPlannerTFTMapSetData,
  LolTftTeamPlannerTFTModeData,
  LolTftTeamPlannerTFTTeamPlannerConfig,
  LolTftTeamPlannerTeamPlan,
  LolTftTeamPlannerTeamSettings,
  LolTftTrovesCapOrdersRequestDTO,
  LolTftTrovesCapOrdersRequestMetaDTO,
  LolTftTrovesCapOrdersResponseDTO,
  LolTftTrovesDropsDropTablePityInfo,
  LolTftTrovesDropsDropTableWithPityDTO,
  LolTftTrovesDropsOddsListEntryDTO,
  LolTftTrovesDropsOddsTreeNodeDTO,
  LolTftTrovesDropsPityCountDTO,
  LolTftTrovesGameDataTrovesActiveBanners,
  LolTftTrovesGameDataTrovesBanner,
  LolTftTrovesGameDataTrovesBannerReward,
  LolTftTrovesGameDataTrovesBannerTable,
  LolTftTrovesGameDataTrovesBannerTableEntry,
  LolTftTrovesInventoryItem,
  LolTftTrovesLoadoutsItem,
  LolTftTrovesLoginSession,
  LolTftTrovesLoginSessionStates,
  LolTftTrovesLootOddsResponse,
  LolTftTrovesLootRarity,
  LolTftTrovesOrderNotificationResource,
  LolTftTrovesPlayerLoot,
  LolTftTrovesRiotMessagingServiceMessage,
  LolTftTrovesTrovePurchaseResponse,
  LolTftTrovesTrovesBanner,
  LolTftTrovesTrovesCelebrationCurrencySegmentData,
  LolTftTrovesTrovesCelebrationHighlightSegmentData,
  LolTftTrovesTrovesCelebrationPortalSegmentData,
  LolTftTrovesTrovesCelebrationStandardSegmentData,
  LolTftTrovesTrovesCelebrationThemeData,
  LolTftTrovesTrovesConfig,
  LolTftTrovesTrovesPCSpriteAnimation,
  LolTftTrovesTrovesPurchaseRequest,
  LolTftTrovesTrovesReward,
  LolTftTrovesTrovesRewards,
  LolTftTrovesTrovesRewardsResponse,
  LolTftTrovesTrovesRollRequest,
  LolTftTrovesTrovesStatus,
  LolTftTrovesVerboseLootOddsResponse,
  LolTrophiesCapClashTrophyEntitlementPayload,
  LolTrophiesClashV2TrophyRewardSpec,
  LolTrophiesInventoryItemsByType,
  LolTrophiesInventoryResponse,
  LolTrophiesLoadout,
  LolTrophiesLoadoutItem,
  LolTrophiesOtherPlayerTrophyInventoryItem,
  LolTrophiesTournamentTrophyInventoryItem,
  LolTrophiesTrophyProfileData,
  LolUserExperienceGameflowPhase,
  LolUserExperienceGameflowSession,
  LolYourshopAccessTokenResource,
  LolYourshopCatalogItem,
  LolYourshopClientCacheClearMessageDTO,
  LolYourshopCurrencyDTO,
  LolYourshopEndOfGameXp,
  LolYourshopEndOfGameXpNotification,
  LolYourshopInventoryCacheEntry,
  LolYourshopInventoryDTO,
  LolYourshopInventoryItem,
  LolYourshopInventoryItemDTO,
  LolYourshopInventoryItemWithPayload,
  LolYourshopInventoryNotification,
  LolYourshopInventoryResponseDTO,
  LolYourshopItemKey,
  LolYourshopItemOwnershipType,
  LolYourshopLoginSession,
  LolYourshopLoginSessionStates,
  LolYourshopLoyaltyRewards,
  LolYourshopLoyaltyRewardsSimplified,
  LolYourshopLoyaltyStatus,
  LolYourshopLoyaltyStatusNotification,
  LolYourshopOffer,
  LolYourshopOfferData,
  LolYourshopOfferId,
  LolYourshopOfferIds,
  LolYourshopOfferRequest,
  LolYourshopOfferRequests,
  LolYourshopPlayerNotification,
  LolYourshopPlayerPermissions,
  LolYourshopPromotion,
  LolYourshopPurchaseItem,
  LolYourshopPurchaseOfferOrderStates,
  LolYourshopPurchaseOfferOrderStatus,
  LolYourshopPurchaseOfferOrderStatuses,
  LolYourshopPurchaseResponse,
  LolYourshopRiotMessagingServiceMessage,
  LolYourshopRmsEntitlementPayload,
  LolYourshopRmsStoreEntitlementItem,
  LolYourshopRmsStoreEntitlementPayload,
  LolYourshopRmsWalletPayload,
  LolYourshopRmsXboxSubscriptionChange,
  LolYourshopSimpleInventoryDTO,
  LolYourshopSimpleInventoryResponseDTO,
  LolYourshopSummonerIcon,
  LolYourshopUIOffer,
  LolYourshopUIStatus,
  LolYourshopWallet,
  LolYourshopWalletCacheEntry,
  LolYourshopWalletDTO,
  LolYourshopWalletResponseDTO,
  LolYourshopXboxSubscriptionStatus,
  LolYourshopYourshopConfig,
  LootItemClientDTO,
  LootItemListClientDTO,
  LootLcdsClientConfigurationDTO,
  LootLcdsLootDescriptionDTO,
  LootLcdsRecipeClientDTO,
  LootLcdsRecipeListClientDTO,
  LootLcdsRecipeMetadata,
  LootLcdsRecipeOutputDTO,
  LootLcdsRecipeSlotClientDTO,
  LootNameRefId,
  LootOddsDTO,
  LootProgressionRecipeConfigMap,
  LootProgressionRecipeConfiguration,
  LootSimpleDialogMessageResponse,
  MatchedPlayerDTO,
  MatchmakingLcdsBustedLeaver,
  MatchmakingLcdsFailedJoinPlayer,
  MatchmakingLcdsGameDTO,
  MatchmakingLcdsGameNotification,
  MatchmakingLcdsMatchMakerParams,
  MatchmakingLcdsMatchMakerPayload,
  MatchmakingLcdsPlayerParticipant,
  MatchmakingLcdsQueueDisabled,
  MatchmakingLcdsQueueDodger,
  MatchmakingLcdsQueueInfo,
  MatchmakingLcdsQueueRestricted,
  MatchmakingLcdsQueueThrottled,
  MatchmakingLcdsSearchingForMatchNotification,
  MatchmakingLcdsSummoner,
  MemberBanUnbanTournament,
  MetricDataType,
  MetricMetadata,
  MetricMetadataAlert,
  MetricMetadataHipchatNotification,
  MetricMetadataNotify,
  MetricMetadataPagerDutyNotification,
  MetricPriority,
  MetricType,
  MissionAlertDTO,
  MissionDisplay,
  MissionMetadata,
  MissionProgressDTO,
  MissionRequirementDTO,
  MissionsCompressedPayloadDTO,
  MucJwtDto,
  MultipleReplayMetadataRequestV2,
  MultipleReplayMetadataResponseItemV2,
  MultipleReplayMetadataResponseV2,
  NonTimingEventV1,
  NotifyFailureRequest,
  NotifySuccessRequest,
  NpeReward,
  NpeRewardPackMetadata,
  OpenedTeamDTO,
  OpenedTeamMemberDTO,
  PartiesVoiceDTO,
  PatcherChunkingPatcherEnvironment,
  PatcherComponentActionProgress,
  PatcherComponentState,
  PatcherComponentStateAction,
  PatcherComponentStateProgress,
  PatcherComponentStateWorkType,
  PatcherNotification,
  PatcherNotificationId,
  PatcherP2PStatus,
  PatcherP2PStatusUpdate,
  PatcherProductResource,
  PatcherProductState,
  PatcherStatus,
  PatcherUxResource,
  PaymentsFrontEndRequest,
  PaymentsFrontEndResult,
  PaymentsPMCStartUrlRequest,
  PaymentsPMCStartUrlResult,
  PendingOpenedTeamDTO,
  PendingRosterDTO,
  PendingRosterInviteeDTO,
  PendingRosterInviteeState,
  PendingRosterMemberDTO,
  PendingRosterMemberState,
  PhaseInMember,
  PhaseRosterDTO,
  PickModes,
  PlayerBehaviorLcdsForcedClientShutdown,
  PlayerBehaviorLcdsSimpleMessage,
  PlayerBehaviorSimpleMessageResponse,
  PlayerDTO,
  PlayerFinderDTO,
  PlayerFinderEnum,
  PlayerInfoDTO,
  PlayerInventory,
  PlayerLootDTO,
  PlayerLootDefinitionsDTO,
  PlayerLootResultDTO,
  PlayerMissionDTO,
  PlayerMissionEligibilityData,
  PlayerMissionObjectiveDTO,
  PlayerMissionRewardDTO,
  PlayerNotificationsPlayerNotificationConfigResource,
  PlayerNotificationsPlayerNotificationResource,
  PlayerNotificationsRiotMessagingServiceMessage,
  PlayerParticipant,
  PlayerRosterHistoryDTO,
  PlayerTierDTO,
  PluginDescriptionResource,
  PluginLcdsEvent,
  PluginLcdsResponse,
  PluginManagerResource,
  PluginManagerState,
  PluginMetadataResource,
  PluginRegionLocaleChangedEvent,
  PluginResource,
  PluginResourceContract,
  PluginResourceEvent,
  PluginResourceEventType,
  PluginServiceProxyResponse,
  PluginThreadingModel,
  Position,
  ProcessControlProcess,
  PublicRosterDTO,
  Punishment,
  QueryEvaluationRequestDTO,
  QueryEvaluationResultDTO,
  QueryResultDTO,
  RankedScoutingDTO,
  RankedScoutingMemberDTO,
  RankedScoutingTopChampionDTO,
  RedeemLootTransactionDTO,
  RegionLocale,
  RemotingHelpFormat,
  RemotingPrivilege,
  RemotingSerializedFormat,
  ReplayMetadataV2,
  ReplayResponseStatus,
  RewardDetails,
  RewardLogo,
  RewardStrategy,
  RiotMessagingServiceAcknowledgeBody,
  RiotMessagingServiceEntitlementsToken,
  RiotMessagingServicePluginRegionLocaleChangedEvent,
  RiotMessagingServiceSession,
  RiotMessagingServiceState,
  RiotMessagingServiceTokenType,
  RmsMessage,
  Role,
  RosterAggregatedStatsDTO,
  RosterDTO,
  RosterDynamicStateDTO,
  RosterMatchAggregatedStatsDTO,
  RosterMemberDTO,
  RosterPeriodAggregatedStatsDTO,
  RosterPlayerAggregatedStatsDTO,
  RosterStatsDTO,
  RosterWithdraw,
  SLIBoolDiagnostic,
  SLICount,
  SLIDoubleDiagnostic,
  SLIIntDiagnostic,
  SLILabel,
  SLIStringDiagnostic,
  SanitizerContainsSanitizedRequest,
  SanitizerContainsSanitizedResponse,
  SanitizerSanitizeRequest,
  SanitizerSanitizeResponse,
  SanitizerSanitizerStatus,
  SeriesDTO,
  SeriesMediaDTO,
  ShutdownLcdsForcedClientShutdown,
  SimpleDialogMessage,
  SimpleDialogMessageResponse,
  SpectatorLcdsSpectateAvailabilityDto,
  SpectatorLcdsSpectateAvailabilityResponseDto,
  StoreLcdsChampionDTO,
  StoreLcdsChampionSkinDTO,
  StoreLcdsSimpleDialogMessage,
  StoreLcdsSimpleDialogMessageResponse,
  StoreLcdsStoreAccountBalanceNotification,
  StoreLcdsStoreFulfillmentNotification,
  ThemeVp,
  TicketOfferDTO,
  TicketOfferState,
  TicketType,
  TierConfig,
  TimeSeriesEventBeginV1,
  TimeSeriesEventEndV1,
  TimeSeriesEventMarkerV1,
  TournamentDTO,
  TournamentHistoryAndWinnersDTO,
  TournamentInfoDTO,
  TournamentInfoMinimalDTO,
  TournamentPhaseDTO,
  TournamentPlayerInfoDTO,
  TournamentStatusEnum,
  TracingCriticalFlowEventV1,
  TracingEventV1,
  TracingModuleThreadingModelV1,
  TracingModuleTypeV1,
  TracingModuleV1,
  TracingPhaseBeginV1,
  TracingPhaseEndV1,
  TracingPhaseImportanceV1,
  TutorialMetadata,
  VerboseLootOddsDTO,
  YourshopLcdsChampionDTO,
  YourshopLcdsChampionSkinDTO,
  YourshopLcdsClientDynamicConfigurationNotification,
  YourshopStoreFulfillmentNotification,
  basicOperatingSystemInfo,
  basicSystemInfo,
  cookie,
} from "./types.d.ts";
type LCUEndpoints = {
  undefined: {
    UNDEFINED: [
      {
        format?: RemotingSerializedFormat;
      },
      object
    ];
  };
  "/lol-chat/v1/blocked-players/{id}": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
    GET: [
      {
        id: string;
      },
      LolChatBlockedPlayerResource
    ];
  };
  "/lol-chat/v1/conversations/active": {
    DELETE: [{}, object];
    GET: [{}, LolChatActiveConversationResource];
    PUT: [
      {
        activeConversation: LolChatActiveConversationResource;
      },
      object
    ];
  };
  "/lol-chat/v1/conversations/{id}": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
    GET: [
      {
        id: string;
      },
      LolChatConversationResource
    ];
    PUT: [
      {
        id: string;
        updatedConversation: LolChatConversationResource;
      },
      LolChatConversationResource
    ];
  };
  "/lol-chat/v1/conversations/{id}/messages": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
    GET: [
      {
        id: string;
      },
      LolChatConversationMessageResource[]
    ];
    POST: [
      {
        id: string;
        body: LolChatConversationMessageResource;
      },
      LolChatConversationMessageResource
    ];
  };
  "/lol-chat/v1/errors/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-chat/v1/friend-groups/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
    GET: [
      {
        id: number;
      },
      LolChatGroupResource
    ];
    PUT: [
      {
        id: number;
        group: LolChatGroupResource;
      },
      object
    ];
  };
  "/lol-chat/v1/friend-requests/{id}": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
    PUT: [
      {
        id: string;
        request: LolChatFriendRequestResource;
      },
      object
    ];
  };
  "/lol-chat/v1/friends/{id}": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
    GET: [
      {
        id: string;
      },
      LolChatFriendResource
    ];
    PUT: [
      {
        id: string;
        contact: LolChatFriendResource;
      },
      object
    ];
  };
  "/lol-chat/v1/player-mutes": {
    DELETE: [{}, object];
    GET: [{}, Map<string, LolChatPlayerMuteStatus>];
    POST: [
      {
        playerMuteUpdate: LolChatPlayerMuteUpdate;
      },
      object
    ];
  };
  "/lol-chat/v1/session": {
    DELETE: [{}, object];
    GET: [{}, LolChatSessionResource];
  };
  "/lol-chat/v1/settings/{key}": {
    DELETE: [
      {
        key: string;
        doAsync?: boolean;
      },
      object
    ];
    GET: [
      {
        key: string;
      },
      object
    ];
    PUT: [
      {
        key: string;
        value: object;
        doAsync?: boolean;
      },
      object
    ];
  };
  "/lol-clash/v1/voice": {
    DELETE: [{}, object];
    POST: [{}, object];
  };
  "/lol-clash/v1/voice-delay/{delaySeconds}": {
    DELETE: [
      {
        delaySeconds: number;
      },
      object
    ];
    POST: [
      {
        delaySeconds: number;
      },
      object
    ];
  };
  "/lol-cosmetics/v1/selection/companion": {
    DELETE: [{}, object];
    PUT: [
      {
        itemId: number;
      },
      object
    ];
  };
  "/lol-cosmetics/v1/selection/tft-damage-skin": {
    DELETE: [{}, object];
    PUT: [
      {
        itemId: number;
      },
      object
    ];
  };
  "/lol-cosmetics/v1/selection/tft-map-skin": {
    DELETE: [{}, object];
    PUT: [
      {
        itemId: number;
      },
      object
    ];
  };
  "/lol-gameflow/v1/early-exit-notifications/eog": {
    DELETE: [{}, undefined];
    GET: [{}, object[]];
  };
  "/lol-gameflow/v1/early-exit-notifications/eog/{key}": {
    DELETE: [
      {
        key: number;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/early-exit-notifications/missions": {
    DELETE: [{}, undefined];
    GET: [{}, object[]];
  };
  "/lol-gameflow/v1/early-exit-notifications/missions/{key}": {
    DELETE: [
      {
        key: number;
      },
      undefined
    ];
  };
  "/lol-highlights/v1/highlights/{id}": {
    DELETE: [
      {
        id: number;
      },
      LolHighlightsHighlight
    ];
    GET: [
      {
        id: number;
      },
      LolHighlightsHighlight
    ];
    PUT: [
      {
        id: number;
        highlight: LolHighlightsHighlight;
      },
      LolHighlightsHighlight
    ];
  };
  "/lol-honeyfruit/v1/account-claim/migration": {
    DELETE: [{}, object];
    GET: [{}, string];
    POST: [{}, string];
  };
  "/lol-leaver-buster/v1/notifications/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
    GET: [
      {
        id: number;
      },
      LolLeaverBusterLeaverBusterNotificationResource
    ];
  };
  "/lol-loadouts/v4/loadouts/{id}": {
    DELETE: [
      {
        id: string;
      },
      undefined
    ];
    PATCH: [
      {
        id: string;
        loadout: LolLoadoutsUpdateLoadoutDTO;
      },
      LolLoadoutsScopedLoadout
    ];
    PUT: [
      {
        id: string;
        loadout: LolLoadoutsUpdateLoadoutDTO;
      },
      LolLoadoutsScopedLoadout
    ];
  };
  "/lol-lobby/v1/clash": {
    DELETE: [{}, object];
    POST: [
      {
        token: string;
      },
      object
    ];
  };
  "/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}": {
    DELETE: [
      {
        summonerInternalName: string;
      },
      object
    ];
    POST: [
      {
        summonerInternalName: string;
        parameters: LolLobbyLobbyBotParams;
      },
      object
    ];
  };
  "/lol-lobby/v2/lobby": {
    DELETE: [{}, undefined];
    GET: [{}, LolLobbyLobbyDto];
    POST: [
      {
        lobbyChange: LolLobbyLobbyChangeGameDto;
      },
      LolLobbyLobbyDto
    ];
  };
  "/lol-lobby/v2/lobby/matchmaking/search": {
    DELETE: [{}, object];
    POST: [{}, object];
  };
  "/lol-lobby/v2/notifications/{notificationId}": {
    DELETE: [
      {
        notificationId: string;
      },
      object
    ];
  };
  "/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}": {
    DELETE: [
      {
        serviceName: string;
        methodName: string;
        pluginId: number;
      },
      undefined
    ];
    POST: [
      {
        serviceName: string;
        methodName: string;
        pluginId: number;
      },
      undefined
    ];
  };
  "/lol-login/v1/session": {
    DELETE: [{}, undefined];
    GET: [{}, LolLoginLoginSession];
    POST: [
      {
        UsernameAndPassword: LolLoginUsernameAndPassword;
      },
      LolLoginLoginSession
    ];
  };
  "/lol-login/v1/shutdown-locks/{lockName}": {
    DELETE: [
      {
        lockName: string;
      },
      undefined
    ];
    PUT: [
      {
        lockName: string;
      },
      undefined
    ];
  };
  "/lol-loot/v1/loot-grants/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-loot/v1/player-loot/{lootId}/new-notification": {
    DELETE: [
      {
        lootId: string;
      },
      object
    ];
  };
  "/lol-matchmaking/v1/search": {
    DELETE: [{}, object];
    GET: [{}, LolMatchmakingMatchmakingSearchResource];
    POST: [{}, object];
    PUT: [
      {
        search: LolMatchmakingMatchmakingSearchResource;
      },
      object
    ];
  };
  "/lol-patch/v1/notifications/{id}": {
    DELETE: [
      {
        id: string;
      },
      undefined
    ];
  };
  "/lol-perks/v1/pages": {
    DELETE: [{}, object];
    GET: [{}, LolPerksPerkPageResource[]];
    POST: [
      {
        page: LolPerksPerkPageResource;
      },
      LolPerksPerkPageResource
    ];
  };
  "/lol-perks/v1/pages/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
    GET: [
      {
        id: number;
      },
      LolPerksPerkPageResource
    ];
    PUT: [
      {
        id: number;
        page: LolPerksPerkPageResource;
      },
      LolPerksPerkPageResource
    ];
  };
  "/lol-perks/v1/pages/{id}/auto-modified-selections": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-player-behavior/v1/code-of-conduct-notification": {
    DELETE: [{}, object];
    GET: [{}, LolPlayerBehaviorCodeOfConductNotification];
  };
  "/lol-player-behavior/v1/reporter-feedback/{id}": {
    DELETE: [
      {
        id: string;
      },
      LolPlayerBehaviorReporterFeedback
    ];
    GET: [
      {
        id: string;
      },
      LolPlayerBehaviorReporterFeedback
    ];
  };
  "/lol-player-messaging/v1/celebration/notification/{id}/acknowledge": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-player-messaging/v1/notification/{id}/acknowledge": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-player-report-sender/v1/reported-players/gameId/{gameId}": {
    DELETE: [
      {
        gameId: number;
      },
      object
    ];
    GET: [
      {
        gameId: number;
      },
      string[]
    ];
  };
  "/lol-pre-end-of-game/v1/registration/{sequenceEventName}": {
    DELETE: [
      {
        sequenceEventName: string;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/mic-test": {
    DELETE: [{}, object];
    GET: [{}, LolPremadeVoiceAudioPropertiesResource];
    POST: [{}, object];
  };
  "/lol-premade-voice/v1/session": {
    DELETE: [{}, undefined];
    POST: [{}, undefined];
  };
  "/lol-rms/v1/champion-mastery-leaveup-update/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-rso-auth/v1/auth-hints/hint": {
    DELETE: [{}, undefined];
    GET: [{}, LolRsoAuthAuthHint];
  };
  "/lol-rso-auth/v1/authorization": {
    DELETE: [{}, undefined];
    GET: [{}, LolRsoAuthAuthorization];
  };
  "/lol-rso-auth/v1/session": {
    DELETE: [{}, undefined];
  };
  "/lol-rso-auth/v2/config": {
    DELETE: [{}, undefined];
    POST: [
      {
        config: LolRsoAuthPublicClientConfig;
      },
      undefined
    ];
  };
  "/lol-simple-dialog-messages/v1/messages/{messageId}": {
    DELETE: [
      {
        messageId: number;
      },
      object
    ];
  };
  "/lol-statstones/v1/vignette-notifications": {
    DELETE: [{}, undefined];
    GET: [{}, object[]];
  };
  "/lol-statstones/v1/vignette-notifications/{key}": {
    DELETE: [
      {
        key: number;
      },
      undefined
    ];
  };
  "/lol-suggested-players/v1/suggested-players/{summonerId}": {
    DELETE: [
      {
        summonerId: number;
      },
      object
    ];
  };
  "/lol-tft-team-planner/v1/team/champions": {
    DELETE: [{}, object];
    PATCH: [
      {
        indices: number[];
      },
      object
    ];
  };
  "/lol-tft-team-planner/v1/team/championsById/{championName}": {
    DELETE: [
      {
        championName: string;
      },
      object
    ];
    POST: [
      {
        championName: string;
      },
      object
    ];
  };
  "/lol-tft-team-planner/v1/team/champions/{index}": {
    DELETE: [
      {
        index: number;
      },
      object
    ];
    POST: [
      {
        index: number;
        championName: string;
      },
      object
    ];
  };
  "/lol-tft-team-planner/v1/team/dirty": {
    DELETE: [{}, undefined];
    GET: [{}, LolTftTeamPlannerTeamPlan];
  };
  "/lol-tft-troves/v1/roll-rewards": {
    DELETE: [{}, undefined];
    GET: [{}, undefined];
  };
  "/patcher/v1/notifications/{id}": {
    DELETE: [
      {
        id: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}": {
    DELETE: [
      {
        productId: string;
      },
      object
    ];
  };
  "/player-notifications/v1/notifications/{id}": {
    DELETE: [
      {
        id: number;
      },
      object
    ];
    GET: [
      {
        id: number;
      },
      PlayerNotificationsPlayerNotificationResource
    ];
    PUT: [
      {
        id: number;
        notification: object;
      },
      PlayerNotificationsPlayerNotificationResource
    ];
  };
  "/riot-messaging-service/v1/connect": {
    DELETE: [{}, undefined];
    POST: [
      {
        idToken: string;
      },
      undefined
    ];
  };
  "/riot-messaging-service/v1/entitlements": {
    DELETE: [{}, undefined];
    POST: [
      {
        token: RiotMessagingServiceEntitlementsToken;
      },
      undefined
    ];
  };
  "/riot-messaging-service/v1/session": {
    DELETE: [{}, undefined];
    GET: [{}, RiotMessagingServiceSession];
  };
  "/riotclient/affinity": {
    DELETE: [{}, undefined];
    GET: [{}, object];
    POST: [
      {
        newAffinity: string;
      },
      undefined
    ];
  };
  "/riotclient/splash": {
    DELETE: [{}, undefined];
    PUT: [
      {
        splash: string;
      },
      undefined
    ];
  };
  "/riotclient/v1/auth-tokens/{authToken}": {
    DELETE: [
      {
        authToken: string;
      },
      object
    ];
    PUT: [
      {
        authToken: string;
      },
      object
    ];
  };
  "/tracing/v1/performance/{name}": {
    DELETE: [
      {
        name: string;
      },
      undefined
    ];
    POST: [
      {
        name: string;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/time-series-event/{eventName}": {
    DELETE: [
      {
        eventName: string;
        when: number;
        suffix?: string;
      },
      undefined
    ];
    POST: [
      {
        eventName: string;
        when: number;
      },
      undefined
    ];
  };
  "/anti-addiction/v1/policies/{policyType}/anti-addiction-state": {
    GET: [
      {
        policyType: LolAntiAddictionPolicyType;
      },
      LolAntiAddictionAntiAddictionState
    ];
  };
  "/{plugin}/assets/{+path}": {
    GET: [
      {
        plugin: string;
        path: string;
        ifNoneMatch?: string;
      },
      object
    ];
    HEAD: [
      {
        plugin: string;
        path: string;
        ifNoneMatch?: string;
      },
      object
    ];
  };
  "/client-config/v1/config": {
    GET: [
      {
        type: ClientConfigConfigType;
        app?: string;
        version?: string;
        patchline?: string;
        region?: string;
        namespace?: string;
      },
      Map<string, object>
    ];
  };
  "/client-config/v1/config/{name}": {
    GET: [
      {
        name: string;
        type: ClientConfigConfigType;
        app?: string;
        version?: string;
        patchline?: string;
        region?: string;
      },
      object
    ];
  };
  "/client-config/v1/status/{type}": {
    GET: [
      {
        type: ClientConfigConfigType;
      },
      ClientConfigConfigStatus
    ];
  };
  "/client-config/v2/config/{name}": {
    GET: [
      {
        name: string;
      },
      object
    ];
  };
  "/client-config/v2/namespace/{namespace}": {
    GET: [
      {
        namespace: string;
      },
      Map<string, object>
    ];
  };
  "/client-config/v2/namespace/{namespace}/player": {
    GET: [
      {
        namespace: string;
      },
      Map<string, object>
    ];
  };
  "/client-config/v2/namespace/{namespace}/public": {
    GET: [
      {
        namespace: string;
      },
      Map<string, object>
    ];
  };
  "/config/v1/config": {
    GET: [{}, object];
  };
  "/cookie-jar/v1/cookies": {
    GET: [{}, cookie[]];
    POST: [
      {
        cookie: cookie[];
      },
      object
    ];
  };
  "/crash-reporting/v1/crash-status": {
    GET: [{}, boolean];
  };
  "/data-store/v1/install-dir": {
    GET: [{}, string];
  };
  "/data-store/v1/install-settings/{+path}": {
    GET: [
      {
        path: string;
      },
      object
    ];
    POST: [
      {
        path: string;
        data: object;
      },
      undefined
    ];
  };
  "/data-store/v1/system-settings/{+path}": {
    GET: [
      {
        path: string;
      },
      object
    ];
  };
  "/entitlements/v1/token": {
    GET: [{}, EntitlementsToken];
  };
  "/lol-account-verification/v1/is-verified": {
    GET: [{}, LolAccountVerificationIsVerifiedResponse];
  };
  "/lol-account-verification/v1/phone-number": {
    GET: [{}, LolAccountVerificationPhoneNumberResponse];
  };
  "/lol-active-boosts/v1/active-boosts": {
    GET: [{}, LolActiveBoostsActiveBoosts];
  };
  "/lol-anti-addiction/v1/anti-addiction-token": {
    GET: [{}, LolAntiAddictionAntiAddictionToken];
  };
  "/lol-banners/v1/current-summoner/flags": {
    GET: [{}, LolBannersBannerFlag[]];
  };
  "/lol-banners/v1/current-summoner/flags/equipped": {
    GET: [{}, LolBannersBannerFlag];
    PUT: [
      {
        flag: LolBannersBannerFlag;
      },
      LolBannersBannerFlag
    ];
  };
  "/lol-banners/v1/current-summoner/frames/equipped": {
    GET: [{}, LolBannersBannerFrame];
  };
  "/lol-banners/v1/players/{puuid}/flags/equipped": {
    GET: [
      {
        puuid: string;
      },
      LolBannersBannerFlag
    ];
  };
  "/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}": {
    GET: [
      {
        championId: number;
        position: LolCareerStatsSummonersRiftPosition;
        tier: LolCareerStatsRankedTier;
        queue: LolCareerStatsCareerStatsQueueType;
      },
      LolCareerStatsChampionQueueStatsResponse
    ];
  };
  "/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}": {
    GET: [
      {
        season: number;
        championId: number;
        position: LolCareerStatsSummonersRiftPosition;
        tier: LolCareerStatsRankedTier;
        queue: LolCareerStatsCareerStatsQueueType;
      },
      LolCareerStatsChampionQueueStatsResponse
    ];
  };
  "/lol-career-stats/v1/champion-experts/{championId}/{position}": {
    GET: [
      {
        championId: number;
        position: LolCareerStatsSummonersRiftPosition;
      },
      LolCareerStatsExpertPlayer[]
    ];
  };
  "/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}": {
    GET: [
      {
        season: number;
        championId: number;
        position: LolCareerStatsSummonersRiftPosition;
      },
      LolCareerStatsExpertPlayer[]
    ];
  };
  "/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}": {
    GET: [
      {
        position: LolCareerStatsSummonersRiftPosition;
        tier: LolCareerStatsRankedTier;
        queue: LolCareerStatsCareerStatsQueueType;
      },
      LolCareerStatsChampionQueueStatsResponse
    ];
  };
  "/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}": {
    GET: [
      {
        season: number;
        position: LolCareerStatsSummonersRiftPosition;
        tier: LolCareerStatsRankedTier;
        queue: LolCareerStatsCareerStatsQueueType;
      },
      LolCareerStatsChampionQueueStatsResponse
    ];
  };
  "/lol-career-stats/v1/position-experts/{position}": {
    GET: [
      {
        position: LolCareerStatsSummonersRiftPosition;
      },
      LolCareerStatsExpertPlayer[]
    ];
  };
  "/lol-career-stats/v1/position-experts/season/{season}/{position}": {
    GET: [
      {
        season: number;
        position: LolCareerStatsSummonersRiftPosition;
      },
      LolCareerStatsExpertPlayer[]
    ];
  };
  "/lol-career-stats/v1/summoner-games/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      object
    ];
  };
  "/lol-career-stats/v1/summoner-games/{puuid}/season/{season}": {
    GET: [
      {
        puuid: string;
        season: number;
      },
      object
    ];
  };
  "/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}": {
    GET: [
      {
        puuid: string;
        season: number;
        queue: LolCareerStatsCareerStatsQueueType;
        position: LolCareerStatsSummonersRiftPosition;
        championId?: number;
      },
      object
    ];
  };
  "/lol-catalog/v1/item-details": {
    GET: [
      {
        inventoryType: string;
        itemId: number;
      },
      LolCatalogCatalogPluginItemWithDetails
    ];
  };
  "/lol-catalog/v1/items": {
    GET: [
      {
        inventoryType: string;
        itemIds: number[];
      },
      LolCatalogItemChoiceDetails[]
    ];
  };
  "/lol-catalog/v1/items/{inventoryType}": {
    GET: [
      {
        inventoryType: string;
      },
      LolCatalogCatalogPluginItem[]
    ];
  };
  "/lol-catalog/v1/items-list-details/skip-cache": {
    GET: [
      {
        catalogItemsKeys: LolCatalogItemKey[];
      },
      LolCatalogCatalogPluginItemWithDetails[]
    ];
  };
  "/lol-challenges/v1/available-queue-ids": {
    GET: [{}, number[]];
  };
  "/lol-challenges/v1/challenges/category-data": {
    GET: [{}, Map<string, LolChallengesUIChallenge>];
  };
  "/lol-challenges/v1/challenges/local-player": {
    GET: [{}, Map<string, LolChallengesUIChallenge>];
  };
  "/lol-challenges/v1/client-state": {
    GET: [{}, LolChallengesClientState];
  };
  "/lol-challenges/v1/level-points": {
    GET: [{}, Map<string, number>];
  };
  "/lol-challenges/v1/my-updated-challenges/{gameId}": {
    GET: [
      {
        gameId: number;
      },
      Map<string, LolChallengesUIChallenge>
    ];
  };
  "/lol-challenges/v1/penalty": {
    GET: [{}, LolChallengesUIChallengePenalty];
  };
  "/lol-challenges/v1/seasons": {
    GET: [{}, LolChallengesChallengeSeason[]];
  };
  "/lol-challenges/v1/summary-player-data/local-player": {
    GET: [{}, LolChallengesUIPlayerSummary];
  };
  "/lol-challenges/v1/summary-player-data/player/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolChallengesUIPlayerSummary
    ];
  };
  "/lol-challenges/v1/summary-players-data/players": {
    GET: [
      {
        puuids: string[];
      },
      Map<string, LolChallengesUIPlayerSummary>
    ];
  };
  "/lol-challenges/v1/titles/all": {
    GET: [{}, Map<string, LolChallengesUITitle>];
  };
  "/lol-challenges/v1/titles/local-player": {
    GET: [{}, LolChallengesUITitle[]];
  };
  "/lol-challenges/v1/updated-challenges/{gameId}/{puuid}": {
    GET: [
      {
        gameId: number;
        puuid: string;
      },
      Map<string, LolChallengesUIChallenge>
    ];
  };
  "/lol-champ-select-legacy/v1/bannable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select-legacy/v1/current-champion": {
    GET: [{}, number];
  };
  "/lol-champ-select-legacy/v1/disabled-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select-legacy/v1/implementation-active": {
    GET: [{}, boolean];
  };
  "/lol-champ-select-legacy/v1/pickable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select-legacy/v1/pickable-skin-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select-legacy/v1/session": {
    GET: [{}, LolChampSelectLegacyChampSelectSession];
  };
  "/lol-champ-select-legacy/v1/session/my-selection": {
    GET: [{}, LolChampSelectLegacyChampSelectPlayerSelection];
    PATCH: [
      {
        selection: LolChampSelectLegacyChampSelectMySelection;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/timer": {
    GET: [{}, LolChampSelectLegacyChampSelectTimer];
  };
  "/lol-champ-select-legacy/v1/session/trades": {
    GET: [{}, LolChampSelectLegacyChampSelectTradeContract[]];
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}": {
    GET: [
      {
        id: number;
      },
      LolChampSelectLegacyChampSelectTradeContract
    ];
  };
  "/lol-champ-select-legacy/v1/team-boost": {
    GET: [{}, LolChampSelectLegacyTeamBoost];
  };
  "/lol-champ-select/v1/all-grid-champions": {
    GET: [{}, LolChampSelectChampGridChampion[]];
  };
  "/lol-champ-select/v1/bannable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select/v1/current-champion": {
    GET: [{}, number];
  };
  "/lol-champ-select/v1/disabled-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select/v1/grid-champions/{championId}": {
    GET: [
      {
        championId: number;
      },
      LolChampSelectChampGridChampion
    ];
  };
  "/lol-champ-select/v1/muted-players": {
    GET: [{}, LolChampSelectMutedPlayerInfo[]];
  };
  "/lol-champ-select/v1/ongoing-swap": {
    GET: [{}, LolChampSelectChampSelectSwapNotification];
  };
  "/lol-champ-select/v1/ongoing-trade": {
    GET: [{}, LolChampSelectChampSelectTradeNotification];
  };
  "/lol-champ-select/v1/pickable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select/v1/pickable-skin-ids": {
    GET: [{}, number[]];
  };
  "/lol-champ-select/v1/pin-drop-notification": {
    GET: [{}, LolChampSelectChampSelectPinDropNotification];
  };
  "/lol-champ-select/v1/session": {
    GET: [{}, LolChampSelectChampSelectSession];
  };
  "/lol-champ-select/v1/session/my-selection": {
    GET: [{}, LolChampSelectChampSelectPlayerSelection];
    PATCH: [
      {
        selection: LolChampSelectChampSelectMySelection;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/swaps": {
    GET: [{}, LolChampSelectChampSelectSwapContract[]];
  };
  "/lol-champ-select/v1/session/swaps/{id}": {
    GET: [
      {
        id: number;
      },
      LolChampSelectChampSelectSwapContract
    ];
  };
  "/lol-champ-select/v1/session/timer": {
    GET: [{}, LolChampSelectChampSelectTimer];
  };
  "/lol-champ-select/v1/session/trades": {
    GET: [{}, LolChampSelectChampSelectTradeContract[]];
  };
  "/lol-champ-select/v1/session/trades/{id}": {
    GET: [
      {
        id: number;
      },
      LolChampSelectChampSelectTradeContract
    ];
  };
  "/lol-champ-select/v1/sfx-notifications": {
    GET: [{}, LolChampSelectSfxNotification[]];
  };
  "/lol-champ-select/v1/skin-carousel-skins": {
    GET: [{}, LolChampSelectSkinSelectorSkin[]];
  };
  "/lol-champ-select/v1/skin-selector-info": {
    GET: [{}, LolChampSelectSkinSelectorInfo];
  };
  "/lol-champ-select/v1/summoners/{slotId}": {
    GET: [
      {
        slotId: number;
      },
      LolChampSelectChampSelectSummoner
    ];
  };
  "/lol-champ-select/v1/team-boost": {
    GET: [{}, LolChampSelectTeamBoost];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions": {
    GET: [
      {
        summonerId: number;
      },
      LolChampionsCollectionsChampion[]
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}": {
    GET: [
      {
        summonerId: number;
        championId: number;
      },
      LolChampionsCollectionsChampion
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins": {
    GET: [
      {
        summonerId: number;
        championId: number;
      },
      LolChampionsCollectionsChampionSkin[]
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}": {
    GET: [
      {
        summonerId: number;
        championId: number;
        championSkinId: number;
      },
      LolChampionsCollectionsChampionSkin
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas": {
    GET: [
      {
        summonerId: number;
        championId: number;
        skinId: number;
      },
      LolChampionsCollectionsChampionChroma[]
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions-minimal": {
    GET: [
      {
        summonerId: number;
      },
      LolChampionsCollectionsChampionMinimal[]
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/champions-playable-count": {
    GET: [
      {
        summonerId: number;
      },
      LolChampionsCollectionsChampionPlayableCounts
    ];
  };
  "/lol-champions/v1/inventories/{summonerId}/skins-minimal": {
    GET: [
      {
        summonerId: number;
      },
      LolChampionsCollectionsChampionSkinMinimal[]
    ];
  };
  "/lol-champions/v1/owned-champions-minimal": {
    GET: [{}, LolChampionsCollectionsChampionMinimal[]];
  };
  "/lol-chat/v1/blocked-players": {
    GET: [{}, LolChatBlockedPlayerResource[]];
    POST: [
      {
        blocked: LolChatBlockedPlayerResource;
      },
      object
    ];
  };
  "/lol-chat/v1/config": {
    GET: [{}, LolChatChatServiceDynamicClientConfig];
  };
  "/lol-chat/v1/conversations": {
    GET: [{}, LolChatConversationResource[]];
    POST: [
      {
        conversation: LolChatConversationResource;
      },
      LolChatConversationResource
    ];
  };
  "/lol-chat/v1/conversations/{id}/participants": {
    GET: [
      {
        id: string;
      },
      LolChatUserResource[]
    ];
    POST: [
      {
        id: string;
        invitee: LolChatUserResource;
      },
      object
    ];
  };
  "/lol-chat/v1/conversations/{id}/participants/{pid}": {
    GET: [
      {
        id: string;
        pid: string;
      },
      LolChatUserResource
    ];
  };
  "/lol-chat/v1/conversations/notify": {
    GET: [{}, string];
  };
  "/lol-chat/v1/errors": {
    GET: [{}, LolChatErrorResource[]];
  };
  "/lol-chat/v1/friend-counts": {
    GET: [{}, LolChatFriendCountsResource];
  };
  "/lol-chat/v1/friend-exists/{summonerId}": {
    GET: [
      {
        summonerId: number;
      },
      boolean
    ];
  };
  "/lol-chat/v1/friend-groups": {
    GET: [{}, LolChatGroupResource[]];
    POST: [
      {
        group: LolChatGroupResource;
      },
      object
    ];
  };
  "/lol-chat/v1/friend-groups/{id}/friends": {
    GET: [
      {
        id: number;
      },
      LolChatFriendResource[]
    ];
  };
  "/lol-chat/v1/friend-requests": {
    GET: [{}, LolChatFriendRequestResource[]];
    POST: [
      {
        request: LolChatFriendRequestResource;
      },
      object
    ];
  };
  "/lol-chat/v1/friends": {
    GET: [{}, LolChatFriendResource[]];
  };
  "/lol-chat/v1/me": {
    GET: [{}, LolChatUserResource];
    PUT: [
      {
        me: LolChatUserResource;
      },
      LolChatUserResource
    ];
  };
  "/lol-chat/v1/resources": {
    GET: [{}, LolChatProductMetadataMap];
  };
  "/lol-chat/v1/settings": {
    GET: [{}, object];
    PUT: [
      {
        data: object;
        doAsync?: boolean;
      },
      object
    ];
  };
  "/lol-clash/v1/all-tournaments": {
    GET: [{}, TournamentDTO[]];
  };
  "/lol-clash/v1/awaiting-resent-eog": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/bracket/{bracketId}": {
    GET: [
      {
        bracketId: number;
      },
      LolClashBracket
    ];
  };
  "/lol-clash/v1/checkin-allowed": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/currentTournamentIds": {
    GET: [{}, number[]];
  };
  "/lol-clash/v1/disabled-config": {
    GET: [{}, LolClashClashDisabledConfig];
  };
  "/lol-clash/v1/enabled": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/eog-player-update": {
    GET: [{}, LolClashEogPlayerUpdateDTO];
  };
  "/lol-clash/v1/event/{uuid}": {
    GET: [{}, ClashEventData];
  };
  "/lol-clash/v1/game-end": {
    GET: [{}, LolClashTournamentGameEnd];
  };
  "/lol-clash/v1/historyandwinners": {
    GET: [{}, LolClashTournamentHistoryAndWinners];
  };
  "/lol-clash/v1/iconconfig": {
    GET: [{}, object];
  };
  "/lol-clash/v1/invited-roster-ids": {
    GET: [{}, string[]];
  };
  "/lol-clash/v1/lft/team/requests": {
    GET: [{}, PendingOpenedTeamDTO[]];
  };
  "/lol-clash/v1/notifications": {
    GET: [{}, LolClashPlayerNotificationData];
  };
  "/lol-clash/v1/ping": {
    GET: [{}, object];
  };
  "/lol-clash/v1/player": {
    GET: [{}, LolClashPlayerData];
  };
  "/lol-clash/v1/player/chat-rosters": {
    GET: [{}, LolClashPlayerChatRoster[]];
  };
  "/lol-clash/v1/player/history": {
    GET: [{}, LolClashRosterStats[]];
  };
  "/lol-clash/v1/playmode-restricted": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/rewards": {
    GET: [{}, LolClashPlayerRewards];
  };
  "/lol-clash/v1/roster/{rosterId}": {
    GET: [
      {
        rosterId: string;
      },
      LolClashRoster
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/stats": {
    GET: [
      {
        rosterId: number;
      },
      LolClashRosterStats
    ];
  };
  "/lol-clash/v1/scouting/champions": {
    GET: [
      {
        summonerIds: number[];
      },
      LolClashScoutingChampions[]
    ];
  };
  "/lol-clash/v1/scouting/matchhistory": {
    GET: [
      {
        summonerIds: number[];
      },
      object
    ];
  };
  "/lol-clash/v1/season-rewards/{seasonId}": {
    GET: [
      {
        seasonId: number;
      },
      ClashSeasonRewardResult
    ];
  };
  "/lol-clash/v1/simple-state-flags": {
    GET: [{}, LolClashSimpleStateFlag[]];
  };
  "/lol-clash/v1/thirdparty/team-data": {
    GET: [{}, LolClashThirdPartyApiRoster];
  };
  "/lol-clash/v1/time": {
    GET: [{}, number];
  };
  "/lol-clash/v1/tournament/{tournamentId}": {
    GET: [
      {
        tournamentId: number;
      },
      LolClashTournament
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/get-player-tiers": {
    GET: [
      {
        tournamentId: number;
        summonerIds: number[];
      },
      PlayerTierDTO[]
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/player": {
    GET: [
      {
        tournamentId: number;
      },
      LolClashPlayerTournamentData
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted": {
    GET: [
      {
        tournamentId?: number;
      },
      boolean
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/stateInfo": {
    GET: [
      {
        tournamentId: number;
      },
      LolClashTournamentStateInfo
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/winners": {
    GET: [
      {
        tournamentId: number;
      },
      LolClashTournamentWinnerHistory
    ];
  };
  "/lol-clash/v1/tournament/cancelled": {
    GET: [{}, number[]];
  };
  "/lol-clash/v1/tournament/get-all-player-tiers": {
    GET: [{}, PlayerTierDTO[]];
  };
  "/lol-clash/v1/tournament-state-info": {
    GET: [{}, LolClashTournamentStateInfo[]];
  };
  "/lol-clash/v1/tournament-summary": {
    GET: [{}, LolClashTournamentSummary[]];
  };
  "/lol-clash/v1/visible": {
    GET: [{}, boolean];
  };
  "/lol-clash/v1/voice-enabled": {
    GET: [{}, boolean];
  };
  "/lol-clash/v2/playmode-restricted": {
    GET: [{}, LolClashPlaymodeRestrictedInfo];
  };
  "/lol-client-config/v3/client-config/{name}": {
    GET: [
      {
        name: string;
      },
      object
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/backdrop": {
    GET: [
      {
        summonerId: number;
      },
      LolCollectionsCollectionsSummonerBackdrop
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/champion-mastery": {
    GET: [
      {
        summonerId: number;
      },
      LolCollectionsCollectionsChampionMastery[]
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/champion-mastery/top": {
    GET: [
      {
        summonerId: number;
        limit: number;
        sortRule?: string;
      },
      LolCollectionsCollectionsTopChampionMasteries
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/spells": {
    GET: [
      {
        summonerId: number;
      },
      LolCollectionsCollectionsSummonerSpells
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/ward-skins": {
    GET: [
      {
        summonerId: number;
      },
      LolCollectionsCollectionsWardSkin[]
    ];
  };
  "/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}": {
    GET: [
      {
        summonerId: number;
        wardSkinId: number;
      },
      LolCollectionsCollectionsWardSkin
    ];
  };
  "/lol-collections/v1/inventories/chest-eligibility": {
    GET: [{}, LolCollectionsCollectionsChestEligibility];
  };
  "/lol-collections/v1/inventories/local-player/champion-mastery-score": {
    GET: [{}, number];
  };
  "/lol-collections/v1/inventories/scouting": {
    GET: [
      {
        summonerIds: number[];
      },
      RankedScoutingDTO[]
    ];
  };
  "/lol-content-targeting/v1/filters": {
    GET: [{}, LolContentTargetingContentTargetingFilterResponse];
  };
  "/lol-content-targeting/v1/locale": {
    GET: [{}, LolContentTargetingContentTargetingLocaleResponse];
  };
  "/lol-content-targeting/v1/protected_filters": {
    GET: [{}, LolContentTargetingContentTargetingFilterResponse];
  };
  "/lol-cosmetics/v1/inventories/{setName}/companions": {
    GET: [
      {
        setName: string;
      },
      LolCosmeticsCompanionsGroupedViewModel
    ];
  };
  "/lol-cosmetics/v1/inventories/{setName}/damage-skins": {
    GET: [
      {
        setName: string;
      },
      LolCosmeticsTFTDamageSkinGroupedViewModel
    ];
  };
  "/lol-cosmetics/v1/inventories/{setName}/map-skins": {
    GET: [
      {
        setName: string;
      },
      LolCosmeticsTFTMapSkinGroupedViewModel
    ];
  };
  "/lol-drops/v1/drop-tables": {
    GET: [{}, LolDropsCapDropsDropTableWithPityDTO[]];
  };
  "/lol-drops/v1/drop-tables/{dropTableId}": {
    GET: [
      {
        dropTableId: string;
      },
      LolDropsCapDropsDropTableWithPityDTO
    ];
  };
  "/lol-drops/v1/drop-tables/{dropTableId}/odds-list": {
    GET: [
      {
        dropTableId: string;
      },
      LolDropsCapDropsOddsListEntryDTO[]
    ];
  };
  "/lol-drops/v1/drop-tables/{dropTableId}/odds-tree": {
    GET: [
      {
        dropTableId: string;
      },
      LolDropsCapDropsOddsTreeNodeDTO
    ];
  };
  "/lol-drops/v1/drop-tables/{dropTableId}/players/{playerId}/pity-count": {
    GET: [
      {
        dropTableId: string;
        playerId: string;
      },
      LolDropsCapDropsPityCountDTO
    ];
  };
  "/lol-drops/v1/players/{playerId}/pity-counts": {
    GET: [
      {
        playerId: string;
      },
      LolDropsCapDropsPityCountDTO[]
    ];
  };
  "/lol-drops/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-email-verification/v1/email": {
    GET: [{}, LolEmailVerificationEmailVerificationSession];
    PUT: [
      {
        EmailUpdate: LolEmailVerificationEmailUpdate;
      },
      object
    ];
  };
  "/lol-end-of-game/v1/champion-mastery-updates": {
    GET: [{}, LolEndOfGameChampionMasteryUpdate];
  };
  "/lol-end-of-game/v1/eog-stats-block": {
    GET: [{}, LolEndOfGameEndOfGameStats];
  };
  "/lol-end-of-game/v1/gameclient-eog-stats-block": {
    GET: [{}, LolEndOfGameGameClientEndOfGameStats];
    POST: [
      {
        stats: LolEndOfGameGameClientEndOfGameStats;
      },
      object
    ];
  };
  "/lol-end-of-game/v1/tft-eog-stats": {
    GET: [{}, LolEndOfGameTFTEndOfGameViewModel];
  };
  "/lol-esport-stream-notifications/v1/live-streams": {
    GET: [{}, LolEsportStreamNotificationsESportsLiveStreams];
  };
  "/lol-esport-stream-notifications/v1/stream-url": {
    GET: [{}, string];
  };
  "/lol-event-shop/v1/categories-offers": {
    GET: [{}, LolEventShopCategoryOffersUIData[]];
  };
  "/lol-event-shop/v1/event-details-data": {
    GET: [{}, LolEventShopEventDetailsUIData];
  };
  "/lol-event-shop/v1/failure-loading-reward-track": {
    GET: [{}, LolEventShopEventShopError];
  };
  "/lol-event-shop/v1/failure-loading-token-shop": {
    GET: [{}, LolEventShopEventShopError];
  };
  "/lol-event-shop/v1/info": {
    GET: [{}, LolEventShopEventShopInfoUIData];
  };
  "/lol-event-shop/v1/is-grace-period": {
    GET: [{}, boolean];
  };
  "/lol-event-shop/v1/is-multi-purchase-enabled": {
    GET: [{}, boolean];
  };
  "/lol-event-shop/v1/is-pass-purchase-enabled": {
    GET: [{}, boolean];
  };
  "/lol-event-shop/v1/navigation-button-data": {
    GET: [{}, LolEventShopNavigationButtonUIData];
  };
  "/lol-event-shop/v1/pass-background-data": {
    GET: [{}, LolEventShopEventBackgroundUIData];
  };
  "/lol-event-shop/v1/pass-bundles": {
    GET: [{}, LolEventShopBundleOfferUIData[]];
  };
  "/lol-event-shop/v1/progress-info-data": {
    GET: [{}, LolEventShopProgressInfoUIData];
  };
  "/lol-event-shop/v1/reward-track-bonus-items": {
    GET: [{}, LolEventShopRewardTrackItem[]];
  };
  "/lol-event-shop/v1/reward-track-bonus-progress": {
    GET: [{}, LolEventShopRewardTrackProgress];
  };
  "/lol-event-shop/v1/reward-track-items": {
    GET: [{}, LolEventShopRewardTrackItem[]];
  };
  "/lol-event-shop/v1/reward-track-progress": {
    GET: [{}, LolEventShopRewardTrackProgress];
  };
  "/lol-event-shop/v1/reward-track-xp": {
    GET: [{}, LolEventShopRewardTrackXP];
  };
  "/lol-event-shop/v1/token-balance": {
    GET: [{}, number];
  };
  "/lol-event-shop/v1/token-shop-data": {
    GET: [{}, LolEventShopTokenShopUIData];
  };
  "/lol-event-shop/v1/token-upsell": {
    GET: [{}, LolEventShopTokenUpsell[]];
  };
  "/lol-event-shop/v1/unclaimed-rewards": {
    GET: [{}, LolEventShopUnclaimedRewardsUIData];
  };
  "/lol-game-client-chat/v1/buddies": {
    GET: [{}, string[]];
  };
  "/lol-game-client-chat/v1/ignored-summoners": {
    GET: [{}, number[]];
  };
  "/lol-game-client-chat/v1/muted-summoners": {
    GET: [{}, number[]];
  };
  "/lol-game-queues/v1/custom": {
    GET: [{}, LolGameQueuesQueueCustomGame];
  };
  "/lol-game-queues/v1/custom-non-default": {
    GET: [{}, LolGameQueuesQueueCustomGame];
  };
  "/lol-game-queues/v1/game-type-config/{gameTypeConfigId}": {
    GET: [
      {
        gameTypeConfigId: number;
      },
      LolGameQueuesQueueGameTypeConfig
    ];
  };
  "/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}": {
    GET: [
      {
        gameTypeConfigId: number;
        mapId: number;
      },
      LolGameQueuesQueueGameTypeConfig
    ];
  };
  "/lol-game-queues/v1/queues": {
    GET: [{}, LolGameQueuesQueue[]];
  };
  "/lol-game-queues/v1/queues/{id}": {
    GET: [
      {
        id: number;
      },
      LolGameQueuesQueue
    ];
  };
  "/lol-game-queues/v1/queues/type/{queueType}": {
    GET: [
      {
        queueType: string;
      },
      LolGameQueuesQueue
    ];
  };
  "/lol-game-settings/v1/didreset": {
    GET: [{}, boolean];
  };
  "/lol-game-settings/v1/game-settings": {
    GET: [{}, object];
    PATCH: [
      {
        settingsResource: object;
      },
      object
    ];
  };
  "/lol-game-settings/v1/game-settings-schema": {
    GET: [{}, object];
  };
  "/lol-game-settings/v1/input-settings": {
    GET: [{}, object];
    PATCH: [
      {
        settingsResource: object;
      },
      object
    ];
  };
  "/lol-game-settings/v1/input-settings-schema": {
    GET: [{}, object];
  };
  "/lol-game-settings/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-gameflow/v1/active-patcher-lock": {
    GET: [{}, boolean];
  };
  "/lol-gameflow/v1/availability": {
    GET: [{}, LolGameflowGameflowAvailability];
  };
  "/lol-gameflow/v1/basic-tutorial": {
    GET: [{}, boolean];
  };
  "/lol-gameflow/v1/battle-training": {
    GET: [{}, boolean];
  };
  "/lol-gameflow/v1/extra-game-client-args": {
    GET: [{}, string[]];
    POST: [
      {
        extraGameClientArgs: string[];
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/gameflow-metadata/player-status": {
    GET: [{}, LolGameflowPlayerStatus];
    POST: [
      {
        playerStatus: LolGameflowPlayerStatus;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/gameflow-metadata/registration-status": {
    GET: [{}, LolGameflowRegistrationStatus];
    POST: [
      {
        registrationStatus: LolGameflowRegistrationStatus;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/gameflow-phase": {
    GET: [{}, LolGameflowGameflowPhase];
  };
  "/lol-gameflow/v1/session": {
    GET: [{}, LolGameflowGameflowSession];
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/disallowed": {
    GET: [{}, Map<string, LolGameflowGameModeSpellList>];
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string": {
    GET: [{}, string];
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/required": {
    GET: [{}, Map<string, LolGameflowGameModeSpellList>];
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string": {
    GET: [{}, string];
  };
  "/lol-gameflow/v1/spectate": {
    GET: [{}, boolean];
  };
  "/lol-gameflow/v1/spectate/delayed-launch": {
    GET: [{}, undefined];
  };
  "/lol-gameflow/v1/watch": {
    GET: [{}, LolGameflowGameflowWatchPhase];
  };
  "/lol-geoinfo/v1/getlocation": {
    GET: [
      {
        ip_address: string;
      },
      LolGeoinfoGeoInfo
    ];
  };
  "/lol-geoinfo/v1/whereami": {
    GET: [{}, LolGeoinfoGeoInfoResponse];
  };
  "/lol-highlights/v1/config": {
    GET: [{}, LolHighlightsHighlightsConfig];
  };
  "/lol-highlights/v1/highlights": {
    GET: [{}, LolHighlightsHighlight[]];
    POST: [{}, LolHighlightsHighlight[]];
  };
  "/lol-highlights/v1/highlights-folder-path": {
    GET: [{}, string];
  };
  "/lol-highlights/v1/highlights-folder-path/default": {
    GET: [{}, string];
  };
  "/lol-honeyfruit/v1/account-claim/account-status/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolHoneyfruitAccountClaimStatus
    ];
  };
  "/lol-honeyfruit/v1/account-claim/auto-dismiss": {
    GET: [{}, boolean];
    PUT: [
      {
        shouldDismiss: boolean;
      },
      object
    ];
  };
  "/lol-honeyfruit/v1/linking-settings-button-available": {
    GET: [{}, boolean];
  };
  "/lol-honeyfruit/v1/vng-publisher-settings": {
    GET: [{}, LolHoneyfruitHoneyfruitVNGPublisherSettings];
    POST: [{}, object];
  };
  "/lol-honor-v2/v1/ballot": {
    GET: [{}, LolHonorV2Ballot];
  };
  "/lol-honor-v2/v1/config": {
    GET: [{}, LolHonorV2HonorConfig];
  };
  "/lol-honor-v2/v1/late-recognition": {
    GET: [{}, LolHonorV2Honor[]];
  };
  "/lol-honor-v2/v1/latest-eligible-game": {
    GET: [{}, number];
  };
  "/lol-honor-v2/v1/level-change": {
    GET: [{}, LolHonorV2VendedHonorChange];
  };
  "/lol-honor-v2/v1/mutual-honor": {
    GET: [{}, LolHonorV2MutualHonor];
  };
  "/lol-honor-v2/v1/profile": {
    GET: [{}, LolHonorV2ProfileInfo];
  };
  "/lol-honor-v2/v1/recognition": {
    GET: [{}, LolHonorV2Honor[]];
  };
  "/lol-honor-v2/v1/recognition-history": {
    GET: [{}, LolHonorV2HonorInteraction[]];
  };
  "/lol-honor-v2/v1/reward-granted": {
    GET: [{}, LolHonorV2VendedReward];
  };
  "/lol-honor-v2/v1/team-choices": {
    GET: [{}, number[]];
  };
  "/lol-honor-v2/v1/vote-completion": {
    GET: [{}, LolHonorV2VoteCompletion];
  };
  "/lol-hovercard/v1/friend-info/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolHovercardHovercardUserInfo
    ];
  };
  "/lol-hovercard/v1/friend-info-by-summoner/{summonerId}": {
    GET: [
      {
        summonerId: number;
      },
      LolHovercardHovercardUserInfo
    ];
  };
  "/lol-inventory/v1/champSelectInventory": {
    GET: [{}, string];
  };
  "/lol-inventory/v1/initial-configuration-complete": {
    GET: [{}, boolean];
  };
  "/lol-inventory/v1/inventory": {
    GET: [
      {
        inventoryTypes: string[];
      },
      LolInventoryInventoryItemWithPayload[]
    ];
  };
  "/lol-inventory/v1/inventory/emotes": {
    GET: [{}, LolInventoryInventoryItemWithPayload[]];
  };
  "/lol-inventory/v1/inventoryWithF2P": {
    GET: [
      {
        inventoryTypes: string[];
      },
      LolInventoryInventoryItemWithPayload[]
    ];
  };
  "/lol-inventory/v1/notifications/{inventoryType}": {
    GET: [
      {
        inventoryType: string;
      },
      LolInventoryInventoryNotification[]
    ];
  };
  "/lol-inventory/v1/players/{puuid}/inventory": {
    GET: [
      {
        puuid: string;
        inventoryTypes: string[];
      },
      LolInventoryInventoryItemWithPayload[]
    ];
  };
  "/lol-inventory/v1/signedInventory": {
    GET: [
      {
        inventoryTypes: string[];
      },
      Map<string, string>
    ];
  };
  "/lol-inventory/v1/signedInventoryCache": {
    GET: [{}, Map<string, LolInventoryInventoryCacheEntry>];
  };
  "/lol-inventory/v1/signedInventory/simple": {
    GET: [
      {
        inventoryTypes: string[];
        queryParams?: Map<string, string>;
      },
      string
    ];
  };
  "/lol-inventory/v1/signedInventory/tournamentlogos": {
    GET: [{}, Map<string, string>];
  };
  "/lol-inventory/v1/signedWallet": {
    GET: [
      {
        currencyTypes: string[];
      },
      Map<string, string>
    ];
  };
  "/lol-inventory/v1/signedWallet/{currencyType}": {
    GET: [
      {
        currencyType: string;
      },
      Map<string, string>
    ];
  };
  "/lol-inventory/v1/wallet": {
    GET: [
      {
        currencyTypes: string[];
      },
      Map<string, number>
    ];
  };
  "/lol-inventory/v1/wallet/{currencyType}": {
    GET: [
      {
        currencyType: string;
      },
      Map<string, number>
    ];
  };
  "/lol-inventory/v1/xbox-subscription-status": {
    GET: [{}, LolInventoryXboxSubscriptionStatus];
  };
  "/lol-inventory/v2/inventory/{inventoryType}": {
    GET: [
      {
        inventoryType: string;
      },
      LolInventoryInventoryItemWithPayload[]
    ];
  };
  "/lol-item-sets/v1/item-sets/{summonerId}/sets": {
    GET: [
      {
        summonerId: number;
      },
      LolItemSetsItemSets
    ];
    POST: [
      {
        summonerId: number;
        itemSet: LolItemSetsItemSet;
      },
      undefined
    ];
    PUT: [
      {
        summonerId: number;
        itemSets: LolItemSetsItemSets;
      },
      undefined
    ];
  };
  "/lol-kickout/v1/notification": {
    GET: [{}, LolKickoutKickoutMessage];
  };
  "/lol-kr-playtime-reminder/v1/message": {
    GET: [{}, string];
  };
  "/lol-kr-playtime-reminder/v1/playtime": {
    GET: [{}, LolKrPlaytimeReminderPlaytimeReminder];
  };
  "/lol-kr-shutdown-law/v1/custom-status": {
    GET: [{}, LolKrShutdownLawQueueShutdownStatus];
  };
  "/lol-kr-shutdown-law/v1/disabled-queues": {
    GET: [{}, number[]];
  };
  "/lol-kr-shutdown-law/v1/notification": {
    GET: [{}, LolKrShutdownLawShutdownLawNotification];
  };
  "/lol-kr-shutdown-law/v1/queue-status/{queue_id}": {
    GET: [
      {
        queue_id: number;
      },
      LolKrShutdownLawQueueShutdownStatus
    ];
  };
  "/lol-kr-shutdown-law/v1/rating-screen": {
    GET: [{}, LolKrShutdownLawRatingScreenInfo];
  };
  "/lol-kr-shutdown-law/v1/status": {
    GET: [{}, LolKrShutdownLawAllQueueShutdownStatus];
  };
  "/lol-league-session/v1/league-session-token": {
    GET: [{}, string];
  };
  "/lol-leaver-buster/v1/notifications": {
    GET: [{}, LolLeaverBusterLeaverBusterNotificationResource[]];
  };
  "/lol-license-agreement/v1/agreement": {
    GET: [{}, string];
  };
  "/lol-license-agreement/v1/agreements": {
    GET: [{}, LolLicenseAgreementLicenseAgreement[]];
  };
  "/lol-license-agreement/v1/all-agreements": {
    GET: [{}, LolLicenseAgreementLicenseAgreement[]];
  };
  "/lol-license-agreement/v1/privacy-policy": {
    GET: [{}, string];
  };
  "/lol-license-agreement/v1/serve-location": {
    GET: [{}, LolLicenseAgreementLicenseServeLocation];
  };
  "/lol-loadouts/v1/loadouts-ready": {
    GET: [{}, boolean];
  };
  "/lol-loadouts/v4/loadouts/{loadoutId}": {
    GET: [
      {
        loadoutId: string;
      },
      LolLoadoutsScopedLoadout
    ];
  };
  "/lol-loadouts/v4/loadouts/scope/account": {
    GET: [{}, LolLoadoutsScopedLoadout[]];
  };
  "/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}": {
    GET: [
      {
        scope: string;
        scopeItemId?: number;
      },
      LolLoadoutsScopedLoadout[]
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/current-champion": {
    GET: [{}, number];
  };
  "/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite": {
    GET: [{}, boolean];
  };
  "/lol-lobby-team-builder/champ-select/v1/implementation-active": {
    GET: [{}, boolean];
  };
  "/lol-lobby-team-builder/champ-select/v1/match-token": {
    GET: [{}, string];
  };
  "/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids": {
    GET: [{}, number[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids": {
    GET: [{}, number[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/preferences": {
    GET: [{}, LolLobbyTeamBuilderChampionSelectPreferences];
  };
  "/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled": {
    GET: [{}, boolean];
  };
  "/lol-lobby-team-builder/champ-select/v1/session": {
    GET: [{}, LolLobbyTeamBuilderChampSelectSession];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/my-selection": {
    GET: [{}, LolLobbyTeamBuilderChampSelectPlayerSelection];
    PATCH: [
      {
        selection: LolLobbyTeamBuilderChampSelectMySelection;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/obfuscated-summoner-ids": {
    GET: [{}, number[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps": {
    GET: [{}, LolLobbyTeamBuilderChampSelectSwapContract[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}": {
    GET: [
      {
        id: number;
      },
      LolLobbyTeamBuilderChampSelectSwapContract
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/timer": {
    GET: [{}, LolLobbyTeamBuilderChampSelectTimer];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades": {
    GET: [{}, LolLobbyTeamBuilderChampSelectTradeContract[]];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}": {
    GET: [
      {
        id: number;
      },
      LolLobbyTeamBuilderChampSelectTradeContract
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/team-boost": {
    GET: [{}, LolLobbyTeamBuilderTeamBoost];
  };
  "/lol-lobby-team-builder/v1/matchmaking": {
    GET: [{}, LolLobbyTeamBuilderMatchmakingSearchResource];
  };
  "/lol-lobby/v1/autofill-displayed": {
    GET: [{}, boolean];
    PUT: [{}, boolean];
  };
  "/lol-lobby/v1/custom-games": {
    GET: [{}, LolLobbyLobbyCustomGame[]];
  };
  "/lol-lobby/v1/custom-games/{id}": {
    GET: [
      {
        id: number;
      },
      LolLobbyLobbyCustomGame
    ];
  };
  "/lol-lobby/v1/lobby/availability": {
    GET: [{}, LolLobbyQueueAvailability];
  };
  "/lol-lobby/v1/lobby/countdown": {
    GET: [{}, number];
  };
  "/lol-lobby/v1/lobby/invitations": {
    GET: [{}, LolLobbyLobbyInvitation[]];
    POST: [
      {
        invitation: LolLobbyLobbyInvitation;
      },
      LolLobbyLobbyInvitation
    ];
  };
  "/lol-lobby/v1/lobby/invitations/{id}": {
    GET: [
      {
        id: string;
      },
      LolLobbyLobbyInvitation
    ];
  };
  "/lol-lobby/v1/parties/gamemode": {
    GET: [{}, LolLobbyGameModeDto];
  };
  "/lol-lobby/v1/parties/player": {
    GET: [{}, LolLobbyPlayerDto];
  };
  "/lol-lobby/v1/party-rewards": {
    GET: [{}, LolLobbyLobbyPartyRewards];
  };
  "/lol-lobby/v2/comms/members": {
    GET: [{}, LolLobbyPremadePartyDto];
  };
  "/lol-lobby/v2/comms/token": {
    GET: [{}, string];
  };
  "/lol-lobby/v2/eligibility/game-select-eligibility-hash": {
    GET: [{}, number];
  };
  "/lol-lobby/v2/eligibility/initial-configuration-complete": {
    GET: [{}, boolean];
  };
  "/lol-lobby/v2/lobby/custom/available-bots": {
    GET: [{}, LolLobbyLobbyBotChampion[]];
  };
  "/lol-lobby/v2/lobby/custom/bots-enabled": {
    GET: [{}, boolean];
  };
  "/lol-lobby/v2/lobby/invitations": {
    GET: [{}, LolLobbyLobbyInvitationDto[]];
    POST: [
      {
        invitations: LolLobbyLobbyInvitationDto[];
      },
      LolLobbyLobbyInvitationDto[]
    ];
  };
  "/lol-lobby/v2/lobby/matchmaking/search-state": {
    GET: [{}, LolLobbyLobbyMatchmakingSearchResource];
  };
  "/lol-lobby/v2/lobby/members": {
    GET: [{}, LolLobbyLobbyParticipantDto[]];
  };
  "/lol-lobby/v2/notifications": {
    GET: [{}, LolLobbyLobbyNotification[]];
    POST: [
      {
        notification: LolLobbyLobbyNotification;
      },
      undefined
    ];
  };
  "/lol-lobby/v2/party-active": {
    GET: [{}, boolean];
  };
  "/lol-lobby/v2/party/eog-status": {
    GET: [{}, LolLobbyPartyStatusDto];
  };
  "/lol-lobby/v2/received-invitations": {
    GET: [{}, LolLobbyReceivedInvitationDto[]];
  };
  "/lol-lobby/v2/registration-status": {
    GET: [{}, object];
  };
  "/lol-login/v1/account-state": {
    GET: [{}, LolLoginAccountStateResource];
    POST: [{}, undefined];
  };
  "/lol-login/v1/login-connection-state": {
    GET: [{}, LolLoginLoginConnectionState];
  };
  "/lol-login/v1/login-data-packet": {
    GET: [{}, object];
  };
  "/lol-login/v1/login-in-game-creds": {
    GET: [{}, object];
  };
  "/lol-login/v1/login-platform-credentials": {
    GET: [{}, LolLoginPlatformGeneratedCredentials];
  };
  "/lol-login/v1/login-queue-state": {
    GET: [{}, LolLoginLoginQueue];
  };
  "/lol-login/v1/wallet": {
    GET: [{}, LolLoginLoginSessionWallet];
  };
  "/lol-login/v2/league-session-init-token": {
    GET: [{}, LolLoginLeagueSessionTokenEnvelope];
  };
  "/lol-loot/v1/currency-configuration": {
    GET: [{}, undefined];
  };
  "/lol-loot/v1/enabled": {
    GET: [{}, boolean];
  };
  "/lol-loot/v1/loot-grants": {
    GET: [{}, LolLootLootGrantNotification[]];
  };
  "/lol-loot/v1/loot-items": {
    GET: [{}, LolLootLootItem[]];
  };
  "/lol-loot/v1/loot-odds/{recipeName}": {
    GET: [
      {
        recipeName: string;
      },
      LolLootVerboseLootOddsResponse
    ];
  };
  "/lol-loot/v1/milestones": {
    GET: [
      {
        minimizeResponse: boolean;
      },
      LolLootLootMilestones[]
    ];
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}": {
    GET: [
      {
        lootMilestonesId: string;
      },
      LolLootLootMilestones
    ];
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress": {
    GET: [
      {
        lootMilestonesId: string;
      },
      LolLootLootMilestonesClaimResponse
    ];
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/counter": {
    GET: [
      {
        lootMilestonesId: string;
      },
      LolLootLootMilestonesCounter
    ];
  };
  "/lol-loot/v1/milestones/counters": {
    GET: [{}, LolLootLootMilestonesCounter[]];
  };
  "/lol-loot/v1/milestones/items": {
    GET: [{}, string[]];
  };
  "/lol-loot/v1/new-player-check-done": {
    GET: [{}, boolean];
  };
  "/lol-loot/v1/player-display-categories": {
    GET: [{}, string[]];
  };
  "/lol-loot/v1/player-loot": {
    GET: [{}, LolLootPlayerLoot[]];
  };
  "/lol-loot/v1/player-loot/{lootId}": {
    GET: [
      {
        lootId: string;
      },
      LolLootPlayerLoot
    ];
  };
  "/lol-loot/v1/player-loot/{lootId}/context-menu": {
    GET: [
      {
        lootId: string;
      },
      LolLootContextMenu[]
    ];
    POST: [
      {
        lootId: string;
      },
      LolLootContextMenu[]
    ];
  };
  "/lol-loot/v1/player-loot-map": {
    GET: [{}, Map<string, LolLootPlayerLoot>];
  };
  "/lol-loot/v1/player-loot-notifications": {
    GET: [{}, LolLootPlayerLootNotification[]];
  };
  "/lol-loot/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-loot/v1/recipes/configuration": {
    GET: [{}, undefined];
  };
  "/lol-loot/v1/recipes/initial-item/{lootId}": {
    GET: [
      {
        lootId: string;
      },
      LolLootRecipeWithMilestones[]
    ];
    POST: [
      {
        lootId: string;
      },
      LolLootRecipeWithMilestones[]
    ];
  };
  "/lol-loot/v2/player-loot-map": {
    GET: [{}, LolLootPlayerLootMap];
  };
  "/lol-loyalty/v1/status-notification": {
    GET: [{}, LolLoyaltyLoyaltyStatusNotification];
  };
  "/lol-maps/v1/map/{id}": {
    GET: [
      {
        id: number;
      },
      LolMapsMaps
    ];
  };
  "/lol-maps/v1/maps": {
    GET: [{}, LolMapsMaps[]];
  };
  "/lol-maps/v2/map/{id}/{gameMode}": {
    GET: [
      {
        id: number;
        gameMode: string;
      },
      LolMapsMaps
    ];
  };
  "/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}": {
    GET: [
      {
        id: number;
        gameMode: string;
        gameMutator: string;
      },
      LolMapsMaps
    ];
  };
  "/lol-maps/v2/maps": {
    GET: [{}, LolMapsMaps[]];
  };
  "/lol-marketing-preferences/v1/partition/{partitionKey}": {
    GET: [
      {
        partitionKey: string;
      },
      Map<string, string>
    ];
    POST: [
      {
        partitionKey: string;
        body: Map<string, string>;
      },
      Map<string, string>
    ];
  };
  "/lol-marketing-preferences/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-match-history/v1/delta": {
    GET: [{}, LolMatchHistoryMatchHistoryPlayerDelta];
  };
  "/lol-match-history/v1/game-timelines/{gameId}": {
    GET: [
      {
        gameId: number;
      },
      LolMatchHistoryMatchHistoryTimelineFrames
    ];
  };
  "/lol-match-history/v1/games/{gameId}": {
    GET: [
      {
        gameId: number;
      },
      LolMatchHistoryMatchHistoryGame
    ];
  };
  "/lol-match-history/v1/products/lol/{puuid}/matches": {
    GET: [
      {
        puuid: string;
        begIndex?: number;
        endIndex?: number;
      },
      LolMatchHistoryMatchHistoryList
    ];
  };
  "/lol-match-history/v1/products/lol/current-summoner/matches": {
    GET: [
      {
        begIndex?: number;
        endIndex?: number;
      },
      LolMatchHistoryMatchHistoryList
    ];
  };
  "/lol-match-history/v1/products/tft/{puuid}/matches": {
    GET: [
      {
        puuid: string;
        begin?: number;
        count?: number;
        tag?: string;
      },
      LolMatchHistoryGAMHSMatchHistoryList
    ];
  };
  "/lol-match-history/v1/recently-played-summoners": {
    GET: [{}, LolMatchHistoryRecentlyPlayedSummoner[]];
  };
  "/lol-match-history/v1/web-url": {
    GET: [{}, string];
  };
  "/lol-match-history/v3/matchlist/account/{accountId}": {
    GET: [
      {
        accountId: number;
        begIndex?: number;
        endIndex?: number;
      },
      LolMatchHistoryMatchHistoryList
    ];
  };
  "/lol-matchmaking/v1/ready-check": {
    GET: [{}, LolMatchmakingMatchmakingReadyCheckResource];
  };
  "/lol-matchmaking/v1/search/errors": {
    GET: [{}, LolMatchmakingMatchmakingSearchErrorResource[]];
  };
  "/lol-matchmaking/v1/search/errors/{id}": {
    GET: [
      {
        id: number;
      },
      LolMatchmakingMatchmakingSearchErrorResource
    ];
  };
  "/lol-missions/v1/data": {
    GET: [{}, PlayerMissionEligibilityData];
  };
  "/lol-missions/v1/missions": {
    GET: [{}, PlayerMissionDTO[]];
  };
  "/lol-missions/v1/series": {
    GET: [{}, SeriesDTO[]];
  };
  "/lol-npe-rewards/v1/challenges/progress": {
    GET: [{}, LolNpeRewardsChallengesProgress];
  };
  "/lol-npe-rewards/v1/level-rewards": {
    GET: [{}, LolNpeRewardsRewardSeries];
  };
  "/lol-npe-rewards/v1/level-rewards/state": {
    GET: [{}, LolNpeRewardsRewardSeriesState];
  };
  "/lol-npe-rewards/v1/login-rewards": {
    GET: [{}, LolNpeRewardsRewardSeries];
  };
  "/lol-npe-rewards/v1/login-rewards/state": {
    GET: [{}, LolNpeRewardsRewardSeriesState];
  };
  "/lol-npe-tutorial-path/v1/rewards/champ": {
    GET: [{}, LolNpeTutorialPathCollectionsChampion];
  };
  "/lol-npe-tutorial-path/v1/settings": {
    GET: [{}, LolNpeTutorialPathAccountSettingsTutorial];
    PUT: [
      {
        settings: LolNpeTutorialPathAccountSettingsTutorial;
      },
      undefined
    ];
  };
  "/lol-npe-tutorial-path/v1/tutorials": {
    GET: [{}, LolNpeTutorialPathTutorial[]];
  };
  "/lol-patch/v1/checking-enabled": {
    GET: [{}, boolean];
  };
  "/lol-patch/v1/environment": {
    GET: [{}, LolPatchChunkingPatcherEnvironment];
  };
  "/lol-patch/v1/game-version": {
    GET: [{}, string];
  };
  "/lol-patch/v1/notifications": {
    GET: [{}, LolPatchNotification[]];
  };
  "/lol-patch/v1/products/league_of_legends/install-location": {
    GET: [{}, LolPatchInstallPaths];
  };
  "/lol-patch/v1/products/league_of_legends/state": {
    GET: [{}, LolPatchProductState];
  };
  "/lol-patch/v1/products/league_of_legends/supported-game-releases": {
    GET: [{}, LolPatchSupportedGameReleases];
  };
  "/lol-patch/v1/status": {
    GET: [{}, LolPatchStatus];
  };
  "/lol-perks/v1/currentpage": {
    GET: [{}, LolPerksPerkPageResource];
    PUT: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-perks/v1/inventory": {
    GET: [{}, LolPerksPlayerInventory];
  };
  "/lol-perks/v1/perks": {
    GET: [{}, LolPerksPerkUIPerk[]];
  };
  "/lol-perks/v1/perks/disabled": {
    GET: [{}, number[]];
  };
  "/lol-perks/v1/perks/gameplay-updated": {
    GET: [{}, number[]];
  };
  "/lol-perks/v1/recommended-pages/champion/{championId}/position/{position}/map/{mapId}": {
    GET: [
      {
        championId: number;
        position: string;
        mapId: number;
      },
      LolPerksPerkUIRecommendedPage[]
    ];
  };
  "/lol-perks/v1/recommended-pages-position/champion/{championId}": {
    GET: [
      {
        championId: number;
      },
      string
    ];
  };
  "/lol-perks/v1/rune-recommender-auto-select": {
    GET: [{}, boolean];
    POST: [{}, object];
  };
  "/lol-perks/v1/settings": {
    GET: [{}, LolPerksUISettings];
    PUT: [
      {
        showLongDescriptions: LolPerksUISettings;
      },
      object
    ];
  };
  "/lol-perks/v1/show-auto-modified-pages-notification": {
    GET: [{}, boolean];
    POST: [{}, object];
  };
  "/lol-perks/v1/styles": {
    GET: [{}, LolPerksPerkUIStyle[]];
  };
  "/lol-pft/v2/survey": {
    GET: [{}, LolPftPFTSurvey];
    POST: [
      {
        survey: LolPftPFTSurvey;
      },
      undefined
    ];
  };
  "/lol-platform-config/v1/initial-configuration-complete": {
    GET: [{}, boolean];
  };
  "/lol-platform-config/v1/namespaces": {
    GET: [{}, object];
  };
  "/lol-platform-config/v1/namespaces/{ns}": {
    GET: [
      {
        ns: string;
      },
      object
    ];
  };
  "/lol-platform-config/v1/namespaces/{ns}/{key}": {
    GET: [
      {
        ns: string;
        key: string;
      },
      object
    ];
  };
  "/lol-player-behavior/v1/ban": {
    GET: [{}, LolPlayerBehaviorBanNotification];
  };
  "/lol-player-behavior/v1/chat-restriction": {
    GET: [{}, LolPlayerBehaviorRestrictionNotification];
  };
  "/lol-player-behavior/v1/config": {
    GET: [{}, LolPlayerBehaviorPlayerBehaviorConfig];
  };
  "/lol-player-behavior/v1/ranked-restriction": {
    GET: [{}, LolPlayerBehaviorRestrictionNotification];
  };
  "/lol-player-behavior/v1/reform-card": {
    GET: [{}, LolPlayerBehaviorReformCard];
  };
  "/lol-player-behavior/v1/reporter-feedback": {
    GET: [{}, LolPlayerBehaviorReporterFeedback[]];
  };
  "/lol-player-behavior/v2/reform-card": {
    GET: [{}, LolPlayerBehaviorReformCardV2];
  };
  "/lol-player-behavior/v2/reporter-feedback": {
    GET: [{}, LolPlayerBehaviorReporterFeedbackMessage[]];
  };
  "/lol-player-behavior/v3/reform-cards": {
    GET: [{}, object];
  };
  "/lol-player-level-up/v1/level-up": {
    GET: [{}, LolPlayerLevelUpPlayerLevelUpEvent];
  };
  "/lol-player-level-up/v1/level-up-notifications/{pluginName}": {
    GET: [
      {
        pluginName: string;
      },
      LolPlayerLevelUpPlayerLevelUpEventAck
    ];
    POST: [
      {
        pluginName: string;
        levelUpEventAck: LolPlayerLevelUpPlayerLevelUpEventAck;
      },
      undefined
    ];
  };
  "/lol-player-messaging/v1/celebration/notification": {
    GET: [
      {},
      LolPlayerMessagingDynamicCelebrationMessagingNotificationResource
    ];
  };
  "/lol-player-messaging/v1/notification": {
    GET: [{}, LolPlayerMessagingPlayerMessagingNotificationResource];
  };
  "/lol-player-preferences/v1/player-preferences-ready": {
    GET: [{}, boolean];
  };
  "/lol-player-preferences/v1/preference/{type}": {
    GET: [
      {
        type: string;
      },
      object
    ];
  };
  "/lol-player-report-sender/v1/in-game-reports": {
    GET: [{}, LolPlayerReportSenderPlayerReport[]];
    POST: [
      {
        resource: LolPlayerReportSenderPlayerReport;
      },
      object
    ];
  };
  "/lol-pre-end-of-game/v1/currentSequenceEvent": {
    GET: [{}, LolPreEndOfGameSequenceEvent];
  };
  "/lol-premade-voice/v1/availability": {
    GET: [{}, LolPremadeVoiceVoiceAvailability];
  };
  "/lol-premade-voice/v1/capturedevices": {
    GET: [{}, LolPremadeVoiceDeviceResource[]];
    PUT: [
      {
        handle: string;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/first-experience": {
    GET: [{}, LolPremadeVoiceFirstExperience];
  };
  "/lol-premade-voice/v1/participant-records": {
    GET: [{}, LolPremadeVoicePremadeVoiceParticipantDto[]];
  };
  "/lol-premade-voice/v1/participants": {
    GET: [{}, LolPremadeVoicePremadeVoiceParticipantDto[]];
  };
  "/lol-premade-voice/v1/settings": {
    GET: [{}, LolPremadeVoiceSettingsResource];
  };
  "/lol-progression/v1/groups/{groupId}/configuration": {
    GET: [
      {
        groupId: string;
      },
      LolProgressionGroup
    ];
  };
  "/lol-progression/v1/groups/{groupId}/instanceData": {
    GET: [
      {
        groupId: string;
      },
      LolProgressionEntityInstance
    ];
  };
  "/lol-progression/v1/groups/configuration": {
    GET: [{}, LolProgressionGroup[]];
  };
  "/lol-progression/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-publishing-content/v1/listeners/allow-list/{region}": {
    GET: [
      {
        region: string;
      },
      string[]
    ];
  };
  "/lol-publishing-content/v1/listeners/client-data": {
    GET: [{}, LolPublishingContentClientData];
  };
  "/lol-publishing-content/v1/listeners/pubhub-config": {
    GET: [{}, LolPublishingContentPubHubConfig];
  };
  "/lol-publishing-content/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-publishing-content/v1/settings": {
    GET: [{}, LolPublishingContentPublishingSettings];
  };
  "/lol-publishing-content/v1/tft-hub-cards": {
    GET: [{}, object];
  };
  "/lol-purchase-widget/v1/configuration": {
    GET: [{}, LolPurchaseWidgetPurchaseWidgetConfig];
  };
  "/lol-purchase-widget/v1/order-notifications": {
    GET: [{}, LolPurchaseWidgetOrderNotificationResource[]];
  };
  "/lol-purchase-widget/v1/purchasable-item": {
    GET: [
      {
        inventoryType: string;
        itemId: number;
      },
      LolPurchaseWidgetPurchasableItem
    ];
  };
  "/lol-purchase-widget/v3/base-skin-line-data/{offerId}": {
    GET: [
      {
        offerId: string;
      },
      LolPurchaseWidgetBaseSkinLineDto
    ];
  };
  "/lol-purchase-widget/v3/purchase-offer-order-statuses": {
    GET: [{}, LolPurchaseWidgetPurchaseOfferOrderStatuses];
  };
  "/lol-ranked/v1/apex-leagues/{queueType}/{tier}": {
    GET: [
      {
        queueType: LolRankedLeagueQueueType;
        tier: LolRankedLeagueTier;
      },
      LolRankedLeagueLadderInfo
    ];
  };
  "/lol-ranked/v1/challenger-ladders-enabled": {
    GET: [{}, string[]];
  };
  "/lol-ranked/v1/current-lp-change-notification": {
    GET: [{}, LolRankedLcuLeagueNotification];
  };
  "/lol-ranked/v1/current-ranked-stats": {
    GET: [{}, LolRankedRankedStats];
  };
  "/lol-ranked/v1/eos-notifications": {
    GET: [{}, LolRankedEosNotificationResource[]];
  };
  "/lol-ranked/v1/eos-rewards": {
    GET: [{}, LolRankedEosRewardsConfig];
  };
  "/lol-ranked/v1/league-ladders/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolRankedLeagueLadderInfo[]
    ];
  };
  "/lol-ranked/v1/notifications": {
    GET: [{}, LolRankedLcuLeagueNotification[]];
  };
  "/lol-ranked/v1/ranked-stats/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolRankedRankedStats
    ];
  };
  "/lol-ranked/v1/rated-ladder/{queueType}": {
    GET: [
      {
        queueType: LolRankedLeagueQueueType;
      },
      LolRankedRatedLadderInfo
    ];
  };
  "/lol-ranked/v1/signed-ranked-stats": {
    GET: [{}, LolRankedSignedRankedStatsDTO];
  };
  "/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids": {
    GET: [
      {
        queueType: LolRankedLeagueQueueType;
        puuids: string[];
      },
      Map<string, LolRankedSocialLeaderboardRankedQueueStats>
    ];
  };
  "/lol-ranked/v1/splits-config": {
    GET: [{}, LolRankedRewardsInfo];
  };
  "/lol-ranked/v1/top-rated-ladders-enabled": {
    GET: [{}, string[]];
  };
  "/lol-ranked/v2/tiers": {
    GET: [
      {
        summonerIds: number[];
        queueTypes: LolRankedLeagueQueueType[];
      },
      LolRankedParticipantTiers[]
    ];
  };
  "/lol-regalia/v2/config": {
    GET: [{}, LolRegaliaRegaliaFrontendConfig];
  };
  "/lol-regalia/v2/current-summoner/regalia": {
    GET: [{}, LolRegaliaRegaliaWithPreferences];
    PUT: [
      {
        regalia: LolRegaliaRegaliaPreferences;
      },
      LolRegaliaRegaliaWithPreferences
    ];
  };
  "/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia": {
    GET: [
      {
        summonerId: number;
        queue: string;
        position: string;
      },
      LolRegaliaRegalia
    ];
  };
  "/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia": {
    GET: [
      {
        summonerId: number;
        queue: string;
      },
      LolRegaliaRegalia
    ];
  };
  "/lol-regalia/v2/summoners/{summonerId}/regalia": {
    GET: [
      {
        summonerId: number;
        hovercard: boolean;
      },
      LolRegaliaRegalia
    ];
  };
  "/lol-regalia/v2/summoners/{summonerId}/regalia/async": {
    GET: [
      {
        summonerId: number;
      },
      LolRegaliaRegaliaAsync
    ];
  };
  "/lol-regalia/v3/inventory/{inventoryType}": {
    GET: [
      {
        inventoryType: string;
      },
      Map<string, LolRegaliaRegaliaInventoryItem>
    ];
  };
  "/lol-regalia/v3/summoners/{summonerId}/regalia": {
    GET: [
      {
        summonerId: number;
      },
      LolRegaliaRegalia
    ];
  };
  "/lol-replays/v1/configuration": {
    GET: [{}, LolReplaysReplaysConfiguration];
  };
  "/lol-replays/v1/metadata/{gameId}": {
    GET: [
      {
        gameId: number;
      },
      LolReplaysReplayMetadata
    ];
  };
  "/lol-replays/v1/rofls/path": {
    GET: [{}, string];
  };
  "/lol-replays/v1/rofls/path/default": {
    GET: [{}, string];
  };
  "/lol-rewards/v1/grants": {
    GET: [
      {
        status?: LolRewardsGrantStatus;
      },
      LolRewardsRewardGrant[]
    ];
  };
  "/lol-rewards/v1/groups": {
    GET: [
      {
        types?: string[];
      },
      LolRewardsSvcRewardGroup[]
    ];
  };
  "/lol-rms/v1/champion-mastery-leaveup-update": {
    GET: [{}, LolRiotMessagingServiceChampionMasteryLevelUp[]];
  };
  "/lol-rso-auth/configuration/v3/ready-state": {
    GET: [{}, LolRsoAuthRSOConfigReadyState];
  };
  "/lol-rso-auth/v1/authorization/access-token": {
    GET: [{}, LolRsoAuthAccessToken];
  };
  "/lol-rso-auth/v1/authorization/error": {
    GET: [{}, LolRsoAuthAuthError];
  };
  "/lol-rso-auth/v1/authorization/id-token": {
    GET: [{}, LolRsoAuthIdToken];
  };
  "/lol-rso-auth/v1/authorization/userinfo": {
    GET: [{}, LolRsoAuthUserInfo];
    POST: [{}, LolRsoAuthUserInfo];
  };
  "/lol-rso-auth/v1/status/{platformId}": {
    GET: [
      {
        platformId: string;
      },
      LolRsoAuthRegionStatus
    ];
  };
  "/lol-service-status/v1/lcu-status": {
    GET: [{}, LolServiceStatusServiceStatusResource];
  };
  "/lol-service-status/v1/ticker-messages": {
    GET: [{}, LolServiceStatusTickerMessage[]];
  };
  "/lol-settings/v1/account/{category}": {
    GET: [
      {
        category: string;
      },
      object
    ];
    PATCH: [
      {
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
    PUT: [
      {
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
  };
  "/lol-settings/v1/account/didreset": {
    GET: [{}, boolean];
  };
  "/lol-settings/v1/local/{category}": {
    GET: [
      {
        category: string;
      },
      object
    ];
    PATCH: [
      {
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
  };
  "/lol-settings/v2/account/{ppType}/{category}": {
    GET: [
      {
        ppType: string;
        category: string;
      },
      object
    ];
    PATCH: [
      {
        ppType: string;
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
    PUT: [
      {
        ppType: string;
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
  };
  "/lol-settings/v2/config": {
    GET: [{}, LolSettingsSettingsConfig];
  };
  "/lol-settings/v2/didreset/{ppType}": {
    GET: [
      {
        ppType: string;
      },
      boolean
    ];
  };
  "/lol-settings/v2/local/{category}": {
    GET: [
      {
        category: string;
      },
      object
    ];
    PATCH: [
      {
        category: string;
        settingsResource: LolSettingsSettingCategory;
      },
      object
    ];
  };
  "/lol-settings/v2/ready": {
    GET: [{}, boolean];
  };
  "/lol-shutdown/v1/notification": {
    GET: [{}, LolShutdownShutdownNotification];
  };
  "/lol-simple-dialog-messages/v1/messages": {
    GET: [{}, LolSimpleDialogMessagesMessage[]];
    POST: [
      {
        messageRequest: LolSimpleDialogMessagesLocalMessageRequest;
      },
      object
    ];
  };
  "/lol-social-leaderboard/v1/leaderboard-next-update-time": {
    GET: [
      {
        queueType: LolSocialLeaderboardLeagueQueueType;
      },
      number
    ];
  };
  "/lol-social-leaderboard/v1/social-leaderboard-data": {
    GET: [
      {
        queueType: LolSocialLeaderboardLeagueQueueType;
      },
      LolSocialLeaderboardSocialLeaderboardData
    ];
  };
  "/lol-spectator/v1/spectate": {
    GET: [{}, LolSpectatorSpectateGameInfo];
  };
  "/lol-statstones/v1/eog-notifications/{gameId}": {
    GET: [
      {
        gameId: number;
      },
      LolStatstonesEogNotificationEnvelope
    ];
  };
  "/lol-statstones/v1/featured-champion-statstones/{championItemId}": {
    GET: [
      {
        championItemId: number;
      },
      LolStatstonesStatstone[]
    ];
  };
  "/lol-statstones/v1/profile-summary/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolStatstonesProfileStatstoneSummary[]
    ];
  };
  "/lol-statstones/v1/statstone/{contentId}/owned": {
    GET: [
      {
        contentId: string;
      },
      boolean
    ];
  };
  "/lol-statstones/v1/statstones-enabled-queue-ids": {
    GET: [{}, number[]];
  };
  "/lol-statstones/v2/player-statstones-self/{championItemId}": {
    GET: [
      {
        championItemId: number;
      },
      LolStatstonesStatstoneSet[]
    ];
  };
  "/lol-statstones/v2/player-summary-self": {
    GET: [{}, LolStatstonesChampionStatstoneSummary[]];
  };
  "/lol-store/v1/{pageType}": {
    GET: [
      {
        pageType: string;
      },
      object
    ];
  };
  "/lol-store/v1/catalog": {
    GET: [
      {
        inventoryType?: string[];
        itemId?: number[];
      },
      LolStoreCatalogItem[]
    ];
  };
  "/lol-store/v1/catalogByInstanceIds": {
    GET: [
      {
        instanceIds: string[];
      },
      LolStoreCatalogItem[]
    ];
  };
  "/lol-store/v1/catalog/{inventoryType}": {
    GET: [
      {
        inventoryType: string;
        itemIds: number[];
      },
      LolStoreCatalogItem[]
    ];
  };
  "/lol-store/v1/catalog/items/skip-cache": {
    GET: [
      {
        catalogItemKeys: LolStoreItemKey[];
      },
      LolStoreCatalogItem[]
    ];
  };
  "/lol-store/v1/catalog/sales": {
    GET: [{}, LolStoreItemSale[]];
  };
  "/lol-store/v1/getStoreUrl": {
    GET: [{}, string];
  };
  "/lol-store/v1/giftablefriends": {
    GET: [{}, LolStoreGiftingFriend[]];
  };
  "/lol-store/v1/itemKeysFromInstanceIds": {
    GET: [
      {
        instanceIds: string[];
      },
      Map<string, LolStoreItemKey>
    ];
  };
  "/lol-store/v1/itemKeysFromOfferIds": {
    GET: [
      {
        offerIds: string[];
      },
      Map<string, LolStoreItemKey>
    ];
  };
  "/lol-store/v1/lastPage": {
    GET: [{}, string];
    POST: [
      {
        pageType: string;
      },
      undefined
    ];
  };
  "/lol-store/v1/offers": {
    GET: [
      {
        inventoryTypeUUIDs?: string[];
      },
      LolStoreCapOffer[]
    ];
  };
  "/lol-store/v1/offers/{offerId}": {
    GET: [
      {
        offerId: string;
      },
      LolStoreCapOffer
    ];
  };
  "/lol-store/v1/order-notifications": {
    GET: [{}, LolStoreOrderNotificationResource[]];
  };
  "/lol-store/v1/order-notifications/{id}": {
    GET: [
      {
        id: number;
      },
      LolStoreOrderNotificationResource
    ];
  };
  "/lol-store/v1/paymentDetails": {
    GET: [
      {
        action: string;
        giftRecipientAccountId?: number;
        giftMessage?: string;
      },
      object
    ];
  };
  "/lol-store/v1/skins/{skinId}": {
    GET: [
      {
        skinId: number;
      },
      LolStoreCatalogItem
    ];
  };
  "/lol-store/v1/status": {
    GET: [{}, LolStoreStoreStatus];
  };
  "/lol-store/v1/store-ready": {
    GET: [{}, boolean];
  };
  "/lol-store/v1/wallet": {
    GET: [{}, LolStoreWallet];
  };
  "/lol-store/v2/offers": {
    GET: [
      {
        typeId?: string;
      },
      LolStoreCapOffer[]
    ];
  };
  "/lol-suggested-players/v1/suggested-players": {
    GET: [{}, LolSuggestedPlayersSuggestedPlayersSuggestedPlayer[]];
  };
  "/lol-summoner/v1/check-name-availability/{name}": {
    GET: [
      {
        name: string;
      },
      boolean
    ];
  };
  "/lol-summoner/v1/check-name-availability-new-summoners/{name}": {
    GET: [
      {
        name: string;
      },
      boolean
    ];
  };
  "/lol-summoner/v1/current-summoner": {
    GET: [{}, LolSummonerSummoner];
  };
  "/lol-summoner/v1/current-summoner/account-and-summoner-ids": {
    GET: [{}, LolSummonerAccountIdAndSummonerId];
  };
  "/lol-summoner/v1/current-summoner/autofill": {
    GET: [{}, LolSummonerAutoFillQueueDto[]];
  };
  "/lol-summoner/v1/current-summoner/jwt": {
    GET: [{}, string];
  };
  "/lol-summoner/v1/current-summoner/profile-privacy": {
    GET: [{}, LolSummonerProfilePrivacy];
    PUT: [
      {
        body: LolSummonerProfilePrivacySetting;
      },
      object
    ];
  };
  "/lol-summoner/v1/current-summoner/rerollPoints": {
    GET: [{}, LolSummonerSummonerRerollPoints];
  };
  "/lol-summoner/v1/current-summoner/summoner-profile": {
    GET: [{}, object];
    POST: [
      {
        body: LolSummonerSummonerProfileUpdate;
      },
      object
    ];
  };
  "/lol-summoner/v1/player-name-mode": {
    GET: [{}, LolSummonerPlayerNameMode];
  };
  "/lol-summoner/v1/player-name-mode-string": {
    GET: [{}, string];
  };
  "/lol-summoner/v1/profile-privacy-enabled": {
    GET: [{}, LolSummonerProfilePrivacyEnabledState];
  };
  "/lol-summoner/v1/status": {
    GET: [{}, LolSummonerStatus];
  };
  "/lol-summoner/v1/summoner-profile": {
    GET: [
      {
        puuid: string;
      },
      object
    ];
  };
  "/lol-summoner/v1/summoner-requests-ready": {
    GET: [{}, boolean];
  };
  "/lol-summoner/v1/summoners": {
    GET: [
      {
        name: string;
      },
      LolSummonerSummoner
    ];
    POST: [
      {
        name: LolSummonerSummonerRequestedName;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-summoner/v1/summoners/{id}": {
    GET: [
      {
        id: number;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-summoner/v1/summoners-by-puuid-cached/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-summoner/v2/summoner-icons": {
    GET: [
      {
        ids: number[];
      },
      LolSummonerSummonerIdAndIcon[]
    ];
  };
  "/lol-summoner/v2/summoner-names": {
    GET: [
      {
        ids: number[];
      },
      LolSummonerSummonerIdAndName[]
    ];
  };
  "/lol-summoner/v2/summoners": {
    GET: [
      {
        ids?: number[];
      },
      LolSummonerSummoner[]
    ];
  };
  "/lol-summoner/v2/summoners/puuid/{puuid}": {
    GET: [
      {
        puuid: string;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-tastes/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-tastes/v1/skins-model": {
    GET: [{}, LolTastesDataModelResponse];
  };
  "/lol-tastes/v1/tft-overview-model": {
    GET: [{}, LolTastesDataModelResponse];
  };
  "/lol-tft-team-planner/v1/config": {
    GET: [{}, LolTftTeamPlannerTFTTeamPlannerConfig];
  };
  "/lol-tft-team-planner/v1/team/local": {
    GET: [{}, LolTftTeamPlannerTeamSettings];
  };
  "/lol-tft-troves/v1/banners": {
    GET: [{}, LolTftTrovesTrovesBanner[]];
  };
  "/lol-tft-troves/v1/config": {
    GET: [{}, LolTftTrovesTrovesConfig];
  };
  "/lol-tft-troves/v1/loot-odds/{dropTableId}": {
    GET: [
      {
        dropTableId: string;
      },
      LolTftTrovesVerboseLootOddsResponse
    ];
  };
  "/lol-tft-troves/v1/status-notifications": {
    GET: [{}, undefined];
  };
  "/lol-tft/v1/tft/battlePassHub": {
    GET: [{}, LolTftLolTftBattlePassHub];
  };
  "/lol-tft/v1/tft/directToHub": {
    GET: [{}, boolean];
  };
  "/lol-tft/v1/tft/events": {
    GET: [{}, LolTftLolTftEvents];
  };
  "/lol-tft/v1/tft/homeHub": {
    GET: [{}, LolTftLolTftHomeHub];
  };
  "/lol-tft/v1/tft/newsHub": {
    GET: [{}, LolTftLolTftNewsHub];
  };
  "/lol-tft/v1/tft/promoButtons": {
    GET: [{}, LolTftLolTftPromoButtons];
  };
  "/lol-tft/v2/tft/battlepass": {
    GET: [{}, LolMissionsTftPaidBattlepass];
  };
  "/lol-trophies/v1/current-summoner/trophies/profile": {
    GET: [{}, LolTrophiesTrophyProfileData];
  };
  "/lol-trophies/v1/players/{puuid}/trophies/profile": {
    GET: [
      {
        puuid: string;
      },
      LolTrophiesTrophyProfileData
    ];
  };
  "/lol-yourshop/v1/has-permissions": {
    GET: [{}, boolean];
  };
  "/lol-yourshop/v1/modal": {
    GET: [{}, boolean];
  };
  "/lol-yourshop/v1/offers": {
    GET: [{}, LolYourshopUIOffer[]];
  };
  "/lol-yourshop/v1/ready": {
    GET: [{}, boolean];
  };
  "/lol-yourshop/v1/status": {
    GET: [{}, LolYourshopUIStatus];
  };
  "/lol-yourshop/v1/themed": {
    GET: [{}, boolean];
  };
  "/memory/v1/fe-processes-ready": {
    GET: [{}, boolean];
  };
  "/patcher/v1/notifications": {
    GET: [{}, PatcherNotification[]];
    POST: [
      {
        notificationId: PatcherNotificationId;
      },
      undefined
    ];
  };
  "/patcher/v1/p2p/status": {
    GET: [{}, PatcherP2PStatus];
    PATCH: [
      {
        data: PatcherP2PStatusUpdate;
      },
      object
    ];
  };
  "/patcher/v1/products": {
    GET: [{}, string[]];
  };
  "/patcher/v1/products/{product-id}/paths": {
    GET: [
      {
        productId: string;
      },
      Map<string, string>
    ];
  };
  "/patcher/v1/products/{product-id}/state": {
    GET: [
      {
        productId: string;
      },
      PatcherProductState
    ];
  };
  "/patcher/v1/products/{product-id}/tags": {
    GET: [
      {
        productId: string;
      },
      Map<string, string>
    ];
  };
  "/patcher/v1/status": {
    GET: [{}, PatcherStatus];
  };
  "/performance/v1/memory": {
    GET: [{}, object];
  };
  "/performance/v1/report": {
    GET: [{}, object[]];
  };
  "/performance/v1/system-info": {
    GET: [
      {
        full?: number;
      },
      object
    ];
  };
  "/player-notifications/v1/config": {
    GET: [{}, PlayerNotificationsPlayerNotificationConfigResource];
    PUT: [
      {
        config: PlayerNotificationsPlayerNotificationConfigResource;
      },
      PlayerNotificationsPlayerNotificationConfigResource
    ];
  };
  "/player-notifications/v1/notifications": {
    GET: [{}, PlayerNotificationsPlayerNotificationResource[]];
    POST: [
      {
        notification: PlayerNotificationsPlayerNotificationResource;
      },
      PlayerNotificationsPlayerNotificationResource
    ];
  };
  "/plugin-manager/v1/external-plugins/availability": {
    GET: [{}, ExternalPluginsResource];
  };
  "/plugin-manager/v1/status": {
    GET: [{}, PluginManagerResource];
  };
  "/plugin-manager/v2/descriptions": {
    GET: [{}, PluginDescriptionResource[]];
  };
  "/plugin-manager/v2/descriptions/{plugin}": {
    GET: [
      {
        plugin: string;
      },
      PluginDescriptionResource
    ];
  };
  "/plugin-manager/v2/plugins": {
    GET: [{}, PluginResource[]];
  };
  "/plugin-manager/v2/plugins/{plugin}": {
    GET: [
      {
        plugin: string;
      },
      PluginResource
    ];
  };
  "/plugin-manager/v3/plugins-manifest": {
    GET: [{}, object];
  };
  "/process-control/v1/process": {
    GET: [{}, ProcessControlProcess];
  };
  "/riot-messaging-service/v1/message/{a}": {
    GET: [
      {
        a: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/message/{a}/{b}": {
    GET: [
      {
        a: string;
        b: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}": {
    GET: [
      {
        a: string;
        b: string;
        c: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}": {
    GET: [
      {
        a: string;
        b: string;
        c: string;
        d: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}": {
    GET: [
      {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}": {
    GET: [
      {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
        f: string;
      },
      RmsMessage
    ];
  };
  "/riot-messaging-service/v1/state": {
    GET: [{}, RiotMessagingServiceState];
  };
  "/riotclient/app-name": {
    GET: [{}, string];
  };
  "/riotclient/app-port": {
    GET: [{}, number];
  };
  "/riotclient/auth-token": {
    GET: [{}, string];
  };
  "/riotclient/command-line-args": {
    GET: [{}, string[]];
  };
  "/riotclient/get_region_locale": {
    GET: [{}, RegionLocale];
  };
  "/riotclient/machine-id": {
    GET: [{}, string];
  };
  "/riotclient/region-locale": {
    GET: [{}, RegionLocale];
  };
  "/riotclient/system-info/v1/basic-info": {
    GET: [{}, basicSystemInfo];
  };
  "/riotclient/trace": {
    GET: [{}, object];
  };
  "/riotclient/ux-crash-count": {
    GET: [{}, number];
  };
  "/riotclient/ux-state": {
    GET: [{}, string];
  };
  "/riotclient/v1/crash-reporting/environment": {
    GET: [{}, CrashReportingEnvironment];
    PUT: [
      {
        environment: CrashReportingEnvironment;
      },
      undefined
    ];
  };
  "/riotclient/zoom-scale": {
    GET: [{}, number];
    POST: [
      {
        newZoomScale: number;
      },
      undefined
    ];
  };
  "/sanitizer/v1/status": {
    GET: [{}, SanitizerSanitizerStatus];
  };
  "/system/v1/builds": {
    GET: [{}, BuildInfo];
  };
  "/telemetry/v1/application-start-time": {
    GET: [{}, number];
  };
  "/tracing/v1/trace/payloads/enabled": {
    GET: [{}, boolean];
  };
  "/async/v1/status/{asyncToken}": {
    DELETE: [
      {
        asyncToken: number;
      },
      object
    ];
    GET: [
      {
        asyncToken: number;
      },
      object
    ];
  };
  "/async/v1/result/{asyncToken}": {
    GET: [
      {
        asyncToken: number;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/actions/{id}": {
    PATCH: [
      {
        id: number;
        data: LolChampSelectLegacyChampSelectAction;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/actions/{id}": {
    PATCH: [
      {
        id: number;
        data: LolChampSelectChampSelectAction;
      },
      object
    ];
  };
  "/lol-cosmetics/v1/recent/{type}": {
    PATCH: [
      {
        type: string;
        contentIds: string[];
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/actions/{id}": {
    PATCH: [
      {
        id: number;
        data: LolLobbyTeamBuilderChampSelectAction;
      },
      object
    ];
  };
  "/lol-npe-tutorial-path/v1/tutorials/init": {
    PATCH: [{}, undefined];
  };
  "/lol-rewards/v1/grants/{grantId}/view": {
    PATCH: [
      {
        grantId: string;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/add-bool-diagnostic": {
    PATCH: [
      {
        diagnostic: SLIBoolDiagnostic;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/add-double-diagnostic": {
    PATCH: [
      {
        diagnostic: SLIDoubleDiagnostic;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/add-int-diagnostic": {
    PATCH: [
      {
        diagnostic: SLIIntDiagnostic;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/add-label": {
    PATCH: [
      {
        label: SLILabel;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/add-string-diagnostic": {
    PATCH: [
      {
        diagnostic: SLIStringDiagnostic;
      },
      undefined
    ];
  };
  "/lol-account-verification/v1/confirmActivationPin": {
    POST: [
      {
        ConfirmActivationPinRequest: LolAccountVerificationConfirmActivationPinRequest;
      },
      undefined
    ];
  };
  "/lol-account-verification/v1/confirmDeactivationPin": {
    POST: [
      {
        ConfirmDeactivationPinRequest: LolAccountVerificationConfirmDeactivationPinRequest;
      },
      undefined
    ];
  };
  "/lol-account-verification/v1/sendActivationPin": {
    POST: [
      {
        SendActivationPinRequest: LolAccountVerificationSendActivationPinRequest;
      },
      undefined
    ];
  };
  "/lol-account-verification/v1/sendDeactivationPin": {
    POST: [
      {
        SendDeactivationPinRequest: any;
      },
      undefined
    ];
  };
  "/lol-career-stats/v1/champion-stats-percentiles": {
    POST: [
      {
        body: LolCareerStatsStatsQueryRequest[];
      },
      LolCareerStatsStatisticsPercentilesResponse[]
    ];
  };
  "/lol-career-stats/v1/position-stats-percentiles": {
    POST: [
      {
        body: LolCareerStatsPositionStatsQueryRequest[];
      },
      LolCareerStatsStatisticsPercentilesResponse[]
    ];
  };
  "/lol-challenges/v1/ack-challenge-update/{id}": {
    POST: [
      {
        id: number;
      },
      undefined
    ];
  };
  "/lol-challenges/v1/update-player-preferences": {
    POST: [
      {
        preferences: LolChallengesChallengesPlayerPreferences;
      },
      undefined
    ];
  };
  "/lol-champ-select-legacy/v1/battle-training/launch": {
    POST: [{}, object];
  };
  "/lol-champ-select-legacy/v1/session/actions/{id}/complete": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/my-selection/reroll": {
    POST: [{}, object];
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/accept": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/cancel": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/decline": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/request": {
    POST: [
      {
        id: number;
      },
      LolChampSelectLegacyChampSelectTradeContract
    ];
  };
  "/lol-champ-select/v1/battle-training/launch": {
    POST: [{}, object];
  };
  "/lol-champ-select/v1/ongoing-swap/{id}/clear": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/ongoing-trade/{id}/clear": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/retrieve-latest-game-dto": {
    POST: [{}, object];
  };
  "/lol-champ-select/v1/session/actions/{id}/complete": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/bench/swap/{championId}": {
    POST: [
      {
        championId: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/my-selection/reroll": {
    POST: [{}, object];
  };
  "/lol-champ-select/v1/session/simple-inventory": {
    POST: [{}, object];
  };
  "/lol-champ-select/v1/session/swaps/{id}/accept": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/swaps/{id}/cancel": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/swaps/{id}/decline": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/swaps/{id}/request": {
    POST: [
      {
        id: number;
      },
      LolChampSelectChampSelectSwapContract
    ];
  };
  "/lol-champ-select/v1/session/trades/{id}/accept": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/trades/{id}/cancel": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/trades/{id}/decline": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-champ-select/v1/session/trades/{id}/request": {
    POST: [
      {
        id: number;
      },
      LolChampSelectChampSelectTradeContract
    ];
  };
  "/lol-champ-select/v1/team-boost/purchase": {
    POST: [{}, object];
  };
  "/lol-champ-select/v1/toggle-favorite/{championId}/{position}": {
    POST: [
      {
        championId: number;
        position: string;
      },
      object
    ];
  };
  "/lol-champ-select/v1/toggle-player-muted": {
    POST: [
      {
        player: LolChampSelectMutedPlayerInfo;
      },
      object
    ];
  };
  "/lol-chat/v1/conversations/{id}/closed": {
    POST: [
      {
        id: string;
      },
      object
    ];
    PUT: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-chat/v1/conversations/eog-chat-toggle": {
    POST: [
      {
        isToggledOn: boolean;
      },
      object
    ];
  };
  "/lol-chat/v1/session/rso": {
    POST: [
      {
        auth: LolChatAuthResourceRsoAccessToken;
      },
      LolChatSessionResource
    ];
  };
  "/lol-chat/v1/system-mutes": {
    POST: [
      {
        playerMuteUpdate: LolChatPlayerMuteUpdate;
      },
      object
    ];
  };
  "/lol-clash/v1/eog-player-update/acknowledge": {
    POST: [{}, object];
  };
  "/lol-clash/v1/events": {
    POST: [
      {
        uuids: string[];
      },
      Map<string, ClashEventData>
    ];
  };
  "/lol-clash/v1/game-end/acknowledge": {
    POST: [{}, object];
  };
  "/lol-clash/v1/lft/player": {
    POST: [
      {
        lftState: LolClashLftState;
      },
      object
    ];
  };
  "/lol-clash/v1/lft/player/find": {
    POST: [
      {
        findPlayers: LolClashFindPlayers;
      },
      PlayerFinderDTO[]
    ];
  };
  "/lol-clash/v1/lft/team": {
    POST: [
      {
        teamOpenState: LolClashTeamOpenState;
      },
      object
    ];
  };
  "/lol-clash/v1/lft/team/{rosterId}/request": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/lft/team/fetch-requests": {
    POST: [
      {
        tournamentId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/lft/team/find": {
    POST: [
      {
        findTeams: LolClashFindTeams;
      },
      OpenedTeamDTO[]
    ];
  };
  "/lol-clash/v1/notifications/acknowledge": {
    POST: [{}, object];
  };
  "/lol-clash/v1/refresh": {
    POST: [{}, object];
  };
  "/lol-clash/v1/roster/{rosterId}/accept": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/cancel-withdraw": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/change-all-details": {
    POST: [
      {
        rosterId: string;
        rosterDetails: LolClashRosterDetails;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/change-icon": {
    POST: [
      {
        rosterId: string;
        changeIconRequest: LolClashChangeIconRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/change-name": {
    POST: [
      {
        rosterId: string;
        changeNameRequest: LolClashChangeNameRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/change-short-name": {
    POST: [
      {
        rosterId: string;
        changeNameRequest: LolClashChangeNameRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/decline": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/disband": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/invite": {
    POST: [
      {
        rosterId: string;
        summonerIds: number[];
      },
      LolClashClientFailedInvite[]
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/kick": {
    POST: [
      {
        rosterId: string;
        kickRequest: LolClashKickRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/leave": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/lockin": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/set-position": {
    POST: [
      {
        rosterId: string;
        setPositionRequest: LolClashSetPositionRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/set-ticket": {
    POST: [
      {
        rosterId: string;
        setTicketRequest: LolClashSetTicketRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/suggest": {
    POST: [
      {
        rosterId: string;
        summonerIds: number[];
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
        offerTicketRequest: LolClashOfferTicketRequest;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke": {
    POST: [
      {
        rosterId: string;
        summonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/transfer-captain": {
    POST: [
      {
        rosterId: string;
        newCaptainSummonerId: number;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/unlockin": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/unwithdraw": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/update-logos": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/roster/{rosterId}/withdraw": {
    POST: [
      {
        rosterId: string;
      },
      object
    ];
  };
  "/lol-clash/v1/simple-state-flags/{id}/acknowledge": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-clash/v1/tournament/{tournamentId}/create-roster": {
    POST: [
      {
        tournamentId: number;
        rosterDetails: LolClashRosterDetails;
      },
      object
    ];
  };
  "/lol-clash/v1/update-logos": {
    POST: [{}, object];
  };
  "/lol-email-verification/v1/confirm-email": {
    POST: [{}, object];
  };
  "/lol-end-of-game/v1/state/dismiss-stats": {
    POST: [{}, object];
  };
  "/lol-end-of-game/v2/player-reports": {
    POST: [
      {
        report: LolEndOfGamePlayerReport;
      },
      LolEndOfGamePlayerReport
    ];
  };
  "/lol-esport-stream-notifications/v1/send-stats": {
    POST: [
      {
        eventType: string;
        matchId: string;
      },
      undefined
    ];
  };
  "/lol-event-shop/v1/claim-select-all": {
    POST: [{}, undefined];
  };
  "/lol-event-shop/v1/claim-select-bonus-iteration": {
    POST: [{}, undefined];
  };
  "/lol-event-shop/v1/purchase-item": {
    POST: [
      {
        item: LolEventShopItemOrderDTO;
      },
      LolEventShopPurchaseOrderResponseDTO
    ];
  };
  "/lol-event-shop/v1/purchase-offer": {
    POST: [
      {
        offerId: LolEventShopPurchaseOfferRequest;
      },
      LolEventShopPurchaseOfferResponseV3
    ];
  };
  "/lol-game-client-chat/v1/instant-messages": {
    POST: [
      {
        summonerName: string;
        message: string;
      },
      undefined
    ];
  };
  "/lol-game-client-chat/v1/party-messages": {
    POST: [
      {
        message: string;
      },
      undefined
    ];
  };
  "/lol-game-settings/v1/reload-post-game": {
    POST: [{}, undefined];
  };
  "/lol-game-settings/v1/save": {
    POST: [{}, boolean];
  };
  "/lol-gameflow/v1/ack-failed-to-launch": {
    POST: [{}, undefined];
  };
  "/lol-gameflow/v1/basic-tutorial/start": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/battle-training/start": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/battle-training/stop": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/client-received-message": {
    POST: [
      {
        messsage: string;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/early-exit": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/pre-end-game-transition": {
    POST: [
      {
        enabled: boolean;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/reconnect": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/session/dodge": {
    POST: [
      {
        dodgeData: LolGameflowGameflowGameDodge;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/session/event": {
    POST: [
      {
        session: string;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/session/game-configuration": {
    POST: [
      {
        queue: LolGameflowQueue;
      },
      undefined
    ];
  };
  "/lol-gameflow/v1/session/request-enter-gameflow": {
    POST: [
      {
        eventType: string;
      },
      boolean
    ];
  };
  "/lol-gameflow/v1/session/request-lobby": {
    POST: [{}, boolean];
  };
  "/lol-gameflow/v1/session/request-tournament-checkin": {
    POST: [{}, boolean];
  };
  "/lol-gameflow/v1/session/tournament-ended": {
    POST: [{}, undefined];
  };
  "/lol-gameflow/v1/spectate/launch": {
    POST: [
      {
        targetSummonerName?: string;
      },
      object
    ];
  };
  "/lol-gameflow/v1/spectate/quit": {
    POST: [{}, object];
  };
  "/lol-gameflow/v1/tick": {
    POST: [{}, undefined];
  };
  "/lol-gameflow/v1/watch/launch": {
    POST: [
      {
        args: string[];
      },
      object
    ];
  };
  "/lol-gameflow/v2/spectate/launch": {
    POST: [
      {
        args: LolGameflowSpectateGameInfoResource;
      },
      object
    ];
  };
  "/lol-highlights/v1/file-browser/{highlightId}": {
    POST: [
      {
        highlightId: number;
      },
      object
    ];
  };
  "/lol-honeyfruit/v1/account-claim/linking-redirect": {
    POST: [{}, undefined];
  };
  "/lol-honor-v2/v1/honor-player": {
    POST: [
      {
        honorPlayerRequest: LolHonorV2ApiHonorPlayerServerRequest;
      },
      string
    ];
  };
  "/lol-honor-v2/v1/late-recognition/ack": {
    POST: [{}, undefined];
  };
  "/lol-honor-v2/v1/level-change/ack": {
    POST: [{}, undefined];
  };
  "/lol-honor-v2/v1/mutual-honor/ack": {
    POST: [{}, undefined];
  };
  "/lol-honor-v2/v1/reward-granted/ack": {
    POST: [{}, undefined];
  };
  "/lol-inventory/v1/notification/acknowledge": {
    POST: [
      {
        id: number;
      },
      undefined
    ];
  };
  "/lol-item-sets/v1/item-sets/validate": {
    POST: [
      {
        input: LolItemSetsValidateItemSetNameInput;
      },
      LolItemSetsValidateItemSetNameResponse
    ];
  };
  "/lol-kr-shutdown-law/v1/rating-screen/acknowledge": {
    POST: [{}, undefined];
  };
  "/lol-license-agreement/v1/agreements/{id}/accept": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-license-agreement/v1/agreements/{id}/decline": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-loadouts/v4/loadouts": {
    POST: [
      {
        loadout: LolLoadoutsCreateLoadoutDTO;
      },
      LolLoadoutsScopedLoadout
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto": {
    POST: [{}, object];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}": {
    POST: [
      {
        championId: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll": {
    POST: [{}, object];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/accept": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/cancel": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/decline": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/request": {
    POST: [
      {
        id: number;
      },
      LolLobbyTeamBuilderChampSelectSwapContract
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request": {
    POST: [
      {
        id: number;
      },
      LolLobbyTeamBuilderChampSelectTradeContract
    ];
  };
  "/lol-lobby-team-builder/champ-select/v1/simple-inventory": {
    POST: [{}, undefined];
  };
  "/lol-lobby-team-builder/champ-select/v1/team-boost/purchase": {
    POST: [{}, object];
  };
  "/lol-lobby-team-builder/v1/ready-check/accept": {
    POST: [{}, object];
  };
  "/lol-lobby-team-builder/v1/ready-check/decline": {
    POST: [{}, object];
  };
  "/lol-lobby/v1/custom-games/{id}/join": {
    POST: [
      {
        id: number;
        parameters: LolLobbyLobbyCustomJoinParameters;
      },
      object
    ];
  };
  "/lol-lobby/v1/custom-games/refresh": {
    POST: [{}, object];
  };
  "/lol-lobby/v1/lobby/custom/bots": {
    POST: [
      {
        parameters: LolLobbyLobbyBotParams;
      },
      object
    ];
  };
  "/lol-lobby/v1/lobby/custom/cancel-champ-select": {
    POST: [{}, object];
  };
  "/lol-lobby/v1/lobby/custom/start-champ-select": {
    POST: [{}, LolLobbyLobbyCustomChampSelectStartResponse];
  };
  "/lol-lobby/v1/lobby/custom/switch-teams": {
    POST: [
      {
        team?: string;
      },
      object
    ];
  };
  "/lol-lobby/v1/tournaments/{id}/join": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-lobby/v2/eligibility/party": {
    POST: [{}, LolLobbyEligibility[]];
  };
  "/lol-lobby/v2/eligibility/self": {
    POST: [{}, LolLobbyEligibility[]];
  };
  "/lol-lobby/v2/eog-invitations": {
    POST: [
      {
        invitations: LolLobbyLobbyInvitationDto[];
      },
      LolLobbyLobbyInvitationDto[]
    ];
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/grant-invite": {
    POST: [
      {
        summonerId: number;
      },
      number
    ];
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/kick": {
    POST: [
      {
        summonerId: number;
      },
      number
    ];
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/promote": {
    POST: [
      {
        summonerId: number;
      },
      number
    ];
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite": {
    POST: [
      {
        summonerId: number;
      },
      number
    ];
  };
  "/lol-lobby/v2/lobby/team/{team}": {
    POST: [
      {
        team: string;
      },
      undefined
    ];
  };
  "/lol-lobby/v2/matchmaking/quick-search": {
    POST: [
      {
        lobbyChange: LolLobbyLobbyChangeGameDto;
      },
      object
    ];
  };
  "/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues": {
    POST: [
      {
        enabledForTeambuilderQueues: boolean;
      },
      undefined
    ];
  };
  "/lol-lobby/v2/party/{partyId}/join": {
    POST: [
      {
        partyId: string;
        joinOptions?: LolLobbyCustomJoinOptionsDto;
      },
      object
    ];
  };
  "/lol-lobby/v2/play-again": {
    POST: [{}, object];
  };
  "/lol-lobby/v2/play-again-decline": {
    POST: [{}, object];
  };
  "/lol-lobby/v2/received-invitations/{invitationId}/accept": {
    POST: [
      {
        invitationId: string;
      },
      undefined
    ];
  };
  "/lol-lobby/v2/received-invitations/{invitationId}/decline": {
    POST: [
      {
        invitationId: string;
      },
      undefined
    ];
  };
  "/lol-login/v1/change-summoner-name": {
    POST: [
      {
        name: string;
      },
      object
    ];
  };
  "/lol-login/v1/delete-rso-on-close": {
    POST: [{}, object];
  };
  "/lol-login/v1/leagueSessionStatus": {
    POST: [
      {
        LeagueSession: LolLoginLeagueSessionStatus;
      },
      undefined
    ];
  };
  "/lol-login/v1/service-proxy-uuid-requests": {
    POST: [
      {
        serviceName: string;
        methodName: string;
        pluginId: number;
        timeoutMillis: number;
        payload: string;
      },
      string
    ];
  };
  "/lol-login/v1/session/invoke": {
    POST: [
      {
        destination: string;
        method: string;
        args: object[];
      },
      LolLoginLcdsResponse
    ];
  };
  "/lol-login/v1/summoner-session": {
    POST: [
      {
        summonerSession: LolLoginSummonerSessionResource;
      },
      object
    ];
  };
  "/lol-login/v1/summoner-session-failed": {
    POST: [
      {
        responseCode: number;
      },
      object
    ];
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/claim": {
    POST: [
      {
        lootMilestonesId: string;
      },
      undefined
    ];
  };
  "/lol-loot/v1/new-player-check-done/{newValue}": {
    POST: [
      {
        newValue: boolean;
      },
      string
    ];
  };
  "/lol-loot/v1/player-loot/{lootName}/redeem": {
    POST: [
      {
        lootName: string;
      },
      LolLootPlayerLootUpdate
    ];
  };
  "/lol-loot/v1/player-loot-notifications/{id}/acknowledge": {
    POST: [
      {
        id: string;
      },
      string
    ];
  };
  "/lol-loot/v1/recipes/{recipeName}/craft": {
    POST: [
      {
        recipeName: string;
        playerLootList: string[];
        repeat?: number;
      },
      LolLootPlayerLootUpdate
    ];
  };
  "/lol-loot/v1/refresh": {
    POST: [
      {
        force: boolean;
      },
      string
    ];
  };
  "/lol-loyalty/v1/updateLoyaltyInventory": {
    POST: [
      {
        loyaltyRewards: LolLoyaltyLoyaltyRewards;
      },
      undefined
    ];
  };
  "/lol-maps/v1/map": {
    POST: [
      {
        map: LolMapsMaps;
      },
      undefined
    ];
  };
  "/lol-match-history/v1/acs-endpoint-override": {
    POST: [
      {
        data: LolMatchHistoryAcsEndPoint;
      },
      object
    ];
  };
  "/lol-matchmaking/v1/ready-check/accept": {
    POST: [{}, object];
  };
  "/lol-matchmaking/v1/ready-check/decline": {
    POST: [{}, object];
  };
  "/lol-missions/v1/force": {
    POST: [{}, undefined];
  };
  "/lol-npe-rewards/v1/challenges/opt": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/detect-corruption-request": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/partial-repair-request": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/start-checking-request": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/start-patching-request": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/stop-checking-request": {
    POST: [{}, undefined];
  };
  "/lol-patch/v1/products/league_of_legends/stop-patching-request": {
    POST: [
      {
        restart: boolean;
      },
      undefined
    ];
  };
  "/lol-perks/v1/recommended-pages-position/champion/{championId}/position/{position}": {
    POST: [
      {
        championId: number;
        position: string;
      },
      object
    ];
  };
  "/lol-perks/v1/update-page-order": {
    POST: [
      {
        request: LolPerksUpdatePageOrderRequest;
      },
      object
    ];
  };
  "/lol-pft/v2/events": {
    POST: [
      {
        pftEvent: LolPftPFTEvent;
      },
      object
    ];
  };
  "/lol-player-behavior/v2/reporter-feedback/{key}": {
    POST: [
      {
        key: string;
      },
      undefined
    ];
  };
  "/lol-player-preferences/v1/player-preferences-endpoint-override": {
    POST: [
      {
        preferences: LolPlayerPreferencesPlayerPreferencesEndpoint;
      },
      object
    ];
  };
  "/lol-player-report-sender/v1/champ-select-reports/category/{category}": {
    POST: [
      {
        category: string;
        champSelectSummonerInfo: LolPlayerReportSenderChampSelectSummonerInfo;
      },
      object
    ];
  };
  "/lol-player-report-sender/v1/end-of-game-reports": {
    POST: [
      {
        resource: LolPlayerReportSenderPlayerReport;
      },
      object
    ];
  };
  "/lol-player-report-sender/v1/match-history-reports": {
    POST: [
      {
        resource: LolPlayerReportSenderPlayerReport;
      },
      object
    ];
  };
  "/lol-pre-end-of-game/v1/complete/{sequenceEventName}": {
    POST: [
      {
        sequenceEventName: string;
      },
      undefined
    ];
  };
  "/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}": {
    POST: [
      {
        sequenceEventName: string;
        priority: number;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/first-experience/game": {
    POST: [{}, undefined];
  };
  "/lol-premade-voice/v1/first-experience/lcu": {
    POST: [{}, undefined];
  };
  "/lol-premade-voice/v1/first-experience/reset": {
    POST: [{}, undefined];
  };
  "/lol-premade-voice/v1/gameClientUpdatedPTTKey": {
    POST: [
      {
        newKey: string;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/push-to-talk/check-available": {
    POST: [
      {
        prompt: number;
      },
      boolean
    ];
  };
  "/lol-premade-voice/v1/settings/reset": {
    POST: [{}, undefined];
  };
  "/lol-purchase-widget/v1/purchasable-items/{inventoryType}": {
    POST: [
      {
        inventoryType: string;
        itemIds: number[];
      },
      LolPurchaseWidgetItemChoices
    ];
  };
  "/lol-purchase-widget/v2/purchaseItems": {
    POST: [
      {
        purchaseRequest: LolPurchaseWidgetPurchaseRequest;
      },
      object
    ];
  };
  "/lol-purchase-widget/v3/purchaseOffer": {
    POST: [
      {
        purchaseOfferRequest: LolPurchaseWidgetPurchaseOfferRequestV3;
      },
      LolPurchaseWidgetPurchaseOfferResponseV3
    ];
  };
  "/lol-purchase-widget/v3/validateOffer": {
    POST: [
      {
        validateOfferRequest: LolPurchaseWidgetValidateOfferRequestV3;
      },
      LolPurchaseWidgetValidateOfferResponseV3
    ];
  };
  "/lol-ranked/v1/eos-notifications/{id}/acknowledge": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-ranked/v1/notifications/{id}/acknowledge": {
    POST: [
      {
        id: number;
      },
      object
    ];
  };
  "/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}": {
    POST: [
      {
        gameId: number;
        gameVersion: string;
        gameType: string;
        queueId: number;
      },
      undefined
    ];
  };
  "/lol-replays/v1/rofls/{gameId}/download": {
    POST: [
      {
        gameId: number;
        contextData: LolReplaysReplayContextData;
      },
      undefined
    ];
  };
  "/lol-replays/v1/rofls/{gameId}/download/graceful": {
    POST: [
      {
        gameId: number;
        contextData: LolReplaysReplayContextData;
      },
      undefined
    ];
  };
  "/lol-replays/v1/rofls/{gameId}/watch": {
    POST: [
      {
        gameId: number;
        contextData: LolReplaysReplayContextData;
      },
      undefined
    ];
  };
  "/lol-replays/v1/rofls/scan": {
    POST: [{}, undefined];
  };
  "/lol-replays/v2/metadata/{gameId}/create": {
    POST: [
      {
        gameId: number;
        request: LolReplaysReplayCreateMetadata;
      },
      undefined
    ];
  };
  "/lol-rewards/v1/grants/{grantId}/select": {
    POST: [
      {
        grantId: string;
        selection: LolRewardsSelectionRequestDTO;
      },
      LolRewardsRewardGrant
    ];
  };
  "/lol-rewards/v1/select-bulk": {
    POST: [
      {
        selection: LolRewardsSelectionRequestDTO[];
      },
      Map<string, LolRewardsSelectGrantStatusResponse>
    ];
  };
  "/lol-rso-auth/v1/authorization/gas": {
    POST: [
      {
        creds: LolRsoAuthRSOPlayerCredentials;
      },
      LolRsoAuthAuthorization
    ];
  };
  "/lol-rso-auth/v1/authorization/refresh": {
    POST: [{}, LolRsoAuthAuthorization];
  };
  "/lol-rso-auth/v1/device-id": {
    POST: [{}, LolRsoAuthDeviceId];
  };
  "/lol-settings/v1/account/save": {
    POST: [{}, undefined];
  };
  "/lol-settings/v2/reload/{ppType}": {
    POST: [
      {
        ppType: string;
      },
      undefined
    ];
  };
  "/lol-spectator/v1/buddy/spectate": {
    POST: [
      {
        summonerOrTeamNames: string[];
      },
      LolSpectatorSummonerOrTeamAvailabilty
    ];
  };
  "/lol-spectator/v1/spectate/launch": {
    POST: [
      {
        spectateGameInfo: LolSpectatorSpectateGameInfo;
      },
      object
    ];
  };
  "/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}": {
    POST: [
      {
        championItemId: number;
        statstoneId: string;
        featuredInfo: LolStatstonesStatstoneFeaturedRequest;
      },
      object
    ];
  };
  "/lol-store/v1/notifications/acknowledge": {
    POST: [
      {
        id: string;
      },
      object
    ];
  };
  "/lol-store/v3/purchase": {
    POST: [
      {
        items: LolStoreItemOrderDTO[];
      },
      LolStorePurchaseOrderResponseDTO
    ];
  };
  "/lol-suggested-players/v1/reported-player": {
    POST: [
      {
        resource: LolSuggestedPlayersSuggestedPlayersReportedPlayer;
      },
      undefined
    ];
  };
  "/lol-suggested-players/v1/victorious-comrade": {
    POST: [
      {
        resource: LolSuggestedPlayersSuggestedPlayersVictoriousComrade;
      },
      undefined
    ];
  };
  "/lol-summoner/v1/current-summoner/name": {
    POST: [
      {
        name: string;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-summoner/v2/summoners/names": {
    POST: [
      {
        summonerNames: string[];
      },
      LolSummonerSummoner[]
    ];
  };
  "/lol-summoner/v2/summoners/puuid": {
    POST: [
      {
        puuids: string[];
      },
      LolSummonerSummoner[]
    ];
  };
  "/lol-tft-troves/v1/purchase": {
    POST: [
      {
        purchaseData: LolTftTrovesTrovesPurchaseRequest;
      },
      LolTftTrovesCapOrdersResponseDTO
    ];
  };
  "/lol-tft-troves/v1/roll": {
    POST: [
      {
        rollData: LolTftTrovesTrovesRollRequest;
      },
      LolTftTrovesCapOrdersResponseDTO
    ];
  };
  "/lol-tft/v1/tft/homeHub/redirect": {
    POST: [{}, undefined];
  };
  "/lol-yourshop/v1/offers/{id}/purchase": {
    POST: [
      {
        id: string;
      },
      LolYourshopPurchaseResponse
    ];
  };
  "/lol-yourshop/v1/offers/{id}/reveal": {
    POST: [
      {
        id: string;
      },
      LolYourshopUIOffer[]
    ];
  };
  "/lol-yourshop/v1/permissions": {
    POST: [
      {
        permissionRequest: LolYourshopPlayerPermissions;
      },
      LolYourshopPlayerPermissions
    ];
  };
  "/memory/v1/notify-fe-processes-ready": {
    POST: [{}, undefined];
  };
  "/memory/v1/snapshot": {
    POST: [
      {
        processIds: number[];
        context: string;
      },
      undefined
    ];
  };
  "/patcher/v1/products/{product-id}/detect-corruption-request": {
    POST: [
      {
        productId: string;
      },
      PatcherProductState
    ];
  };
  "/patcher/v1/products/{product-id}/partial-repair-request": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}/signal-start-patching-delayed": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}/start-checking-request": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}/start-patching-request": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}/stop-checking-request": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/patcher/v1/products/{product-id}/stop-patching-request": {
    POST: [
      {
        productId: string;
      },
      object
    ];
  };
  "/payments/v1/pmc-start-url": {
    POST: [
      {
        options: PaymentsFrontEndRequest;
      },
      PaymentsFrontEndResult
    ];
  };
  "/performance/v1/process/{processId}": {
    POST: [
      {
        processId: number;
      },
      undefined
    ];
  };
  "/performance/v1/report/restart": {
    POST: [
      {
        sampleLength?: number;
        sampleCount?: number;
      },
      object[]
    ];
  };
  "/process-control/v1/process/quit": {
    POST: [{}, undefined];
  };
  "/riotclient/addorupdatemetric": {
    POST: [
      {
        group: string;
        object: string;
        name: string;
        value: number;
      },
      undefined
    ];
  };
  "/riotclient/kill-and-restart-ux": {
    POST: [{}, undefined];
  };
  "/riotclient/kill-ux": {
    POST: [{}, undefined];
  };
  "/riotclient/launch-ux": {
    POST: [{}, undefined];
  };
  "/riotclient/new-args": {
    POST: [
      {
        args: string[];
      },
      undefined
    ];
  };
  "/riotclient/open-url-in-browser": {
    POST: [
      {
        url: string;
      },
      undefined
    ];
  };
  "/riotclient/show-swagger": {
    POST: [{}, undefined];
  };
  "/riotclient/unload": {
    POST: [{}, undefined];
  };
  "/riotclient/ux-allow-foreground": {
    POST: [{}, undefined];
  };
  "/riotclient/ux-flash": {
    POST: [{}, undefined];
  };
  "/riotclient/ux-minimize": {
    POST: [{}, undefined];
  };
  "/riotclient/ux-show": {
    POST: [{}, undefined];
  };
  "/riotclient/v1/crash-reporting/logs": {
    POST: [
      {
        logFilePath: string;
      },
      undefined
    ];
  };
  "/riotclient/v1/elevation-requests": {
    POST: [
      {
        request: ElevationRequest;
      },
      undefined
    ];
  };
  "/sanitizer/v1/containsSanitized": {
    POST: [
      {
        request: SanitizerContainsSanitizedRequest;
      },
      SanitizerContainsSanitizedResponse
    ];
  };
  "/sanitizer/v1/sanitize": {
    POST: [
      {
        request: SanitizerSanitizeRequest;
      },
      SanitizerSanitizeResponse
    ];
  };
  "/telemetry/v1/common-data/{key}": {
    POST: [
      {
        key: string;
        value: string;
      },
      undefined
    ];
  };
  "/telemetry/v1/events/{eventType}": {
    POST: [
      {
        eventType: string;
        eventData: Map<string, object>;
      },
      undefined
    ];
  };
  "/telemetry/v1/events-with-perf-info/{eventType}": {
    POST: [
      {
        eventType: string;
        eventData: Map<string, object>;
      },
      undefined
    ];
  };
  "/telemetry/v3/events/{eventType}": {
    POST: [
      {
        eventType: string;
        eventData: Map<string, object>;
      },
      undefined
    ];
  };
  "/telemetry/v3/events-once/{eventType}/{onceTag}": {
    POST: [
      {
        eventType: string;
        onceTag: string;
        eventData: Map<string, string>;
      },
      undefined
    ];
  };
  "/telemetry/v3/slis/counts": {
    POST: [
      {
        sliCount: SLICount;
      },
      undefined
    ];
  };
  "/telemetry/v3/uptime-tracking/notify-failure": {
    POST: [
      {
        request: NotifyFailureRequest;
      },
      undefined
    ];
  };
  "/telemetry/v3/uptime-tracking/notify-success": {
    POST: [
      {
        request: NotifySuccessRequest;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/critical-flow": {
    POST: [
      {
        criticalFlowEvent: TracingCriticalFlowEventV1;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/event": {
    POST: [
      {
        tracingEvent: TracingEventV1;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/module": {
    POST: [
      {
        module: TracingModuleV1;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/non-timing-event/{eventName}": {
    POST: [
      {
        eventName: string;
        when: number;
        value: string;
        unit: string;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/phase/begin": {
    POST: [
      {
        phaseBegin: TracingPhaseBeginV1;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/phase/end": {
    POST: [
      {
        phaseEnd: TracingPhaseEndV1;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/step-event": {
    POST: [
      {
        eventName: string;
      },
      undefined
    ];
  };
  "/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}": {
    POST: [
      {
        eventName: string;
        markerName: string;
        when: number;
      },
      undefined
    ];
  };
  "/client-config/v1/entitlements-token": {
    PUT: [
      {
        update: ClientConfigEntitlementsUpdate;
      },
      undefined
    ];
  };
  "/client-config/v1/refresh-config-status": {
    PUT: [{}, undefined];
  };
  "/client-config/v2/namespace-changes": {
    PUT: [
      {
        namespaces: ClientConfigConfigNamespaceUpdate;
      },
      undefined
    ];
  };
  "/lol-chat/v1/friend-groups/order": {
    PUT: [
      {
        order: LolChatFriendGroupOrder;
      },
      object
    ];
  };
  "/lol-lobby/v1/lobby/members/localMember/player-slots": {
    PUT: [
      {
        playerSlots: LolLobbyQuickPlayPresetSlotDto[];
      },
      object
    ];
  };
  "/lol-lobby/v1/lobby/members/localMember/position-preferences": {
    PUT: [
      {
        positionPreferences: LolLobbyLobbyPositionPreferences;
      },
      object
    ];
  };
  "/lol-lobby/v1/parties/active": {
    PUT: [
      {
        active: number;
      },
      undefined
    ];
  };
  "/lol-lobby/v1/parties/{partyId}/members/{puuid}/role": {
    PUT: [
      {
        partyId: string;
        puuid: string;
        role: string;
      },
      undefined
    ];
  };
  "/lol-lobby/v1/parties/metadata": {
    PUT: [
      {
        metadata: LolLobbyPartyMemberMetadataDto;
      },
      undefined
    ];
  };
  "/lol-lobby/v1/parties/queue": {
    PUT: [
      {
        queueId: number;
      },
      undefined
    ];
  };
  "/lol-lobby/v1/parties/ready": {
    PUT: [
      {
        ready: number;
      },
      undefined
    ];
  };
  "/lol-lobby/v2/lobby/members/localMember/position-preferences": {
    PUT: [
      {
        positionPreferences: LolLobbyLobbyPositionPreferences;
      },
      object
    ];
  };
  "/lol-lobby/v2/lobby/partyType": {
    PUT: [
      {
        partyType: string;
      },
      object
    ];
  };
  "/lol-loot/v1/loot-odds/evaluateQuery": {
    PUT: [
      {
        request: QueryEvaluationRequestDTO;
      },
      LolLootQueryEvaluatedLootItem[]
    ];
  };
  "/lol-missions/v1/player": {
    PUT: [
      {
        ids: IdsDTO;
      },
      undefined
    ];
  };
  "/lol-missions/v1/player/{missionId}": {
    PUT: [
      {
        missionId: string;
        rewardGroups: LolMissionsRewardGroupsSelection;
      },
      undefined
    ];
  };
  "/lol-missions/v2/player/opt": {
    PUT: [
      {
        seriesOpt: LolMissionsSeriesOpt;
      },
      undefined
    ];
  };
  "/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view": {
    PUT: [
      {
        tutorialId: string;
      },
      undefined
    ];
  };
  "/lol-patch/v1/game-patch-url": {
    PUT: [
      {
        url: string;
      },
      undefined
    ];
  };
  "/lol-patch/v1/ux": {
    PUT: [
      {
        ux: LolPatchUxResource;
      },
      undefined
    ];
  };
  "/lol-perks/v1/pages/validate": {
    PUT: [
      {
        pageData: LolPerksValidatePageNameData;
      },
      LolPerksValidateItemSetNameResponse
    ];
  };
  "/lol-perks/v1/perks/ack-gameplay-updated": {
    PUT: [
      {
        ids: number[];
      },
      object
    ];
  };
  "/lol-player-behavior/v3/reform-card/{id}": {
    PUT: [
      {
        id: string;
      },
      undefined
    ];
  };
  "/lol-player-preferences/v1/preference": {
    PUT: [
      {
        preferences: LolPlayerPreferencesPlayerPreferences;
      },
      object
    ];
  };
  "/lol-premade-voice/v1/participants/{puuid}/mute": {
    PUT: [
      {
        puuid: string;
        muted: number;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/participants/{puuid}/volume": {
    PUT: [
      {
        puuid: string;
        volume: number;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/self/activationSensitivity": {
    PUT: [
      {
        sensitivity: number;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/self/inputMode": {
    PUT: [
      {
        inputMode: LolPremadeVoiceInputMode;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/self/micLevel": {
    PUT: [
      {
        micLevel: number;
      },
      undefined
    ];
  };
  "/lol-premade-voice/v1/self/mute": {
    PUT: [
      {
        muted: number;
      },
      undefined
    ];
  };
  "/lol-summoner/v1/current-summoner/icon": {
    PUT: [
      {
        body: LolSummonerSummonerIcon;
      },
      LolSummonerSummoner
    ];
  };
  "/lol-tft-team-planner/v1/team": {
    PUT: [{}, object];
  };
  "/lol-tft/v1/tft_experiment_bucket": {
    PUT: [
      {
        value: number;
      },
      object
    ];
  };
  "/patcher/v1/ux": {
    PUT: [
      {
        ux: PatcherUxResource;
      },
      undefined
    ];
  };
  "/riotclient/ux-load-complete": {
    PUT: [{}, undefined];
  };
  "/riotclient/ux-state/ack": {
    PUT: [
      {
        requestId: number;
      },
      undefined
    ];
  };
};
const lcuMethod = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"] as const;
type LCUMethod = (typeof lcuMethod)[number];

type Endpoint = {
  [key in LCUMethod]?: [Array<any>, any];
};

type EndpointTypes<T extends Endpoint> = T;

type _LCUEndpoint<
  E extends keyof LCUEndpoints,
  M extends keyof LCUEndpoints[E]
> = LCUEndpoints[E][M];

type _First<T extends [any, any]> = T[0];
type _Second<T extends [any, any]> = T[1];
export type LCUEndpointArgs<
  E extends keyof LCUEndpoints,
  M extends keyof LCUEndpoints[E]
> = _First<_LCUEndpoint<E, M>> extends any[]
  ? _First<_LCUEndpoint<E, M>>
  : never;
export type LCUEndpointReturn<
  E extends keyof LCUEndpoints,
  M extends keyof LCUEndpoints[E]
> = _Second<_LCUEndpoint<E, M>>;

export type LCUEndpointUrl = keyof LCUEndpoints;
export type LCUEndpointMethods<U extends LCUEndpointUrl> =
  keyof LCUEndpoints[U];

// export type LCUEndpoints = {
//   "/lol-chat/v1/blocked-players/{id}": {
//     DELETE: [[id: string], object];
//     GET: [[id: string], LolChatBlockedPlayerResource];
//   };

//   const get = <E extends LCUEndpointUrl, M extends LCUEndpointMethods<E>>(
//   url: E,
//   method: M,
//   ...args: LCUEndpointArgs<E, M>
// ): LCUEndpointReturn<E, M> => {
//   return {} as any;
// };
