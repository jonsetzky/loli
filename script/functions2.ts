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
const _request = (
  url: string,
  method: string,
  args?: { [key: string]: any }
): any => {
  return {};
};
export namespace chat {
  export function deleteBlockedPlayers(id: string): object {
    return _request(`/lol-chat/v1/blocked-players/${id}`, "DELETE", {});
  }
  export function deleteConversations(id: string): object {
    return _request(`/lol-chat/v1/conversations/${id}`, "DELETE", {});
  }
  export function deleteErrors(id: number): object {
    return _request(`/lol-chat/v1/errors/${id}`, "DELETE", {});
  }
  export function deleteFriendGroups(id: number): object {
    return _request(`/lol-chat/v1/friend-groups/${id}`, "DELETE", {});
  }
  export function deleteFriendRequests(id: string): object {
    return _request(`/lol-chat/v1/friend-requests/${id}`, "DELETE", {});
  }
  export function deleteFriends(id: string): object {
    return _request(`/lol-chat/v1/friends/${id}`, "DELETE", {});
  }
  export function deletePlayerMutes(): object {
    return _request(`/lol-chat/v1/player-mutes`, "DELETE", {});
  }
  export function deleteSession(): object {
    return _request(`/lol-chat/v1/session`, "DELETE", {});
  }
  export function deleteSettings(key: string, doAsync?: boolean): object {
    return _request(`/lol-chat/v1/settings/${key}`, "DELETE", { doAsync });
  }
  export function getBlockedPlayers(id: string): LolChatBlockedPlayerResource {
    return _request(`/lol-chat/v1/blocked-players/${id}`, "GET", {});
  }
  export function getConfig(): LolChatChatServiceDynamicClientConfig {
    return _request(`/lol-chat/v1/config`, "GET", {});
  }
  export function getConversations(id: string): LolChatConversationResource {
    return _request(`/lol-chat/v1/conversations/${id}`, "GET", {});
  }
  export function getErrors(): LolChatErrorResource[] {
    return _request(`/lol-chat/v1/errors`, "GET", {});
  }
  export function getFriendCounts(): LolChatFriendCountsResource {
    return _request(`/lol-chat/v1/friend-counts`, "GET", {});
  }
  export function getFriendExists(summonerId: number): boolean {
    return _request(`/lol-chat/v1/friend-exists/${summonerId}`, "GET", {});
  }
  export function getFriendGroups(id: number): LolChatGroupResource {
    return _request(`/lol-chat/v1/friend-groups/${id}`, "GET", {});
  }
  export function getFriendRequests(): LolChatFriendRequestResource[] {
    return _request(`/lol-chat/v1/friend-requests`, "GET", {});
  }
  export function getFriends(id: string): LolChatFriendResource {
    return _request(`/lol-chat/v1/friends/${id}`, "GET", {});
  }
  export function getMe(): LolChatUserResource {
    return _request(`/lol-chat/v1/me`, "GET", {});
  }
  export function getPlayerMutes(): Map<string, LolChatPlayerMuteStatus> {
    return _request(`/lol-chat/v1/player-mutes`, "GET", {});
  }
  export function getResources(): LolChatProductMetadataMap {
    return _request(`/lol-chat/v1/resources`, "GET", {});
  }
  export function getSession(): LolChatSessionResource {
    return _request(`/lol-chat/v1/session`, "GET", {});
  }
  export function getSettings(key: string): object {
    return _request(`/lol-chat/v1/settings/${key}`, "GET", {});
  }
  export function postBlockedPlayers(
    blocked: LolChatBlockedPlayerResource
  ): object {
    return _request(`/lol-chat/v1/blocked-players`, "POST", { blocked });
  }
  export function postConversations(
    conversation: LolChatConversationResource
  ): LolChatConversationResource {
    return _request(`/lol-chat/v1/conversations`, "POST", { conversation });
  }
  export function postFriendGroups(group: LolChatGroupResource): object {
    return _request(`/lol-chat/v1/friend-groups`, "POST", { group });
  }
  export function postFriendRequests(
    request: LolChatFriendRequestResource
  ): object {
    return _request(`/lol-chat/v1/friend-requests`, "POST", { request });
  }
  export function postPlayerMutes(
    playerMuteUpdate: LolChatPlayerMuteUpdate
  ): object {
    return _request(`/lol-chat/v1/player-mutes`, "POST", { playerMuteUpdate });
  }
  export function postSystemMutes(
    playerMuteUpdate: LolChatPlayerMuteUpdate
  ): object {
    return _request(`/lol-chat/v1/system-mutes`, "POST", { playerMuteUpdate });
  }
  export function putConversations(
    id: string,
    updatedConversation: LolChatConversationResource
  ): LolChatConversationResource {
    return _request(`/lol-chat/v1/conversations/${id}`, "PUT", {
      updatedConversation,
    });
  }
  export function putFriendGroups(
    id: number,
    group: LolChatGroupResource
  ): object {
    return _request(`/lol-chat/v1/friend-groups/${id}`, "PUT", { group });
  }
  export function putFriendRequests(
    id: string,
    request: LolChatFriendRequestResource
  ): object {
    return _request(`/lol-chat/v1/friend-requests/${id}`, "PUT", { request });
  }
  export function putFriends(
    id: string,
    contact: LolChatFriendResource
  ): object {
    return _request(`/lol-chat/v1/friends/${id}`, "PUT", { contact });
  }
  export function putMe(me: LolChatUserResource): LolChatUserResource {
    return _request(`/lol-chat/v1/me`, "PUT", { me });
  }
  export function putSettings(
    key: string,
    value: object,
    doAsync?: boolean
  ): object {
    return _request(`/lol-chat/v1/settings/${key}`, "PUT", { value, doAsync });
  }
}
export namespace clash {
  export function deleteVoice(): object {
    return _request(`/lol-clash/v1/voice`, "DELETE", {});
  }
  export function deleteVoiceDelay(delaySeconds: number): object {
    return _request(`/lol-clash/v1/voice-delay/${delaySeconds}`, "DELETE", {});
  }
  export function getAllTournaments(): TournamentDTO[] {
    return _request(`/lol-clash/v1/all-tournaments`, "GET", {});
  }
  export function getAwaitingResentEog(): boolean {
    return _request(`/lol-clash/v1/awaiting-resent-eog`, "GET", {});
  }
  export function getBracket(bracketId: number): LolClashBracket {
    return _request(`/lol-clash/v1/bracket/${bracketId}`, "GET", {});
  }
  export function getCheckinAllowed(): boolean {
    return _request(`/lol-clash/v1/checkin-allowed`, "GET", {});
  }
  export function getCurrentTournamentIds(): number[] {
    return _request(`/lol-clash/v1/currentTournamentIds`, "GET", {});
  }
  export function getDisabledConfig(): LolClashClashDisabledConfig {
    return _request(`/lol-clash/v1/disabled-config`, "GET", {});
  }
  export function getEnabled(): boolean {
    return _request(`/lol-clash/v1/enabled`, "GET", {});
  }
  export function getEogPlayerUpdate(): LolClashEogPlayerUpdateDTO {
    return _request(`/lol-clash/v1/eog-player-update`, "GET", {});
  }
  export function getEvent(): ClashEventData {
    return _request(`/lol-clash/v1/event/{uuid}`, "GET", {});
  }
  export function getGameEnd(): LolClashTournamentGameEnd {
    return _request(`/lol-clash/v1/game-end`, "GET", {});
  }
  export function getHistoryandwinners(): LolClashTournamentHistoryAndWinners {
    return _request(`/lol-clash/v1/historyandwinners`, "GET", {});
  }
  export function getIconconfig(): object {
    return _request(`/lol-clash/v1/iconconfig`, "GET", {});
  }
  export function getInvitedRosterIds(): string[] {
    return _request(`/lol-clash/v1/invited-roster-ids`, "GET", {});
  }
  export function getNotifications(): LolClashPlayerNotificationData {
    return _request(`/lol-clash/v1/notifications`, "GET", {});
  }
  export function getPing(): object {
    return _request(`/lol-clash/v1/ping`, "GET", {});
  }
  export function getPlayer(): LolClashPlayerData {
    return _request(`/lol-clash/v1/player`, "GET", {});
  }
  export function getPlaymodeRestricted(): LolClashPlaymodeRestrictedInfo {
    return _request(`/lol-clash/v2/playmode-restricted`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-clash/v1/ready`, "GET", {});
  }
  export function getRewards(): LolClashPlayerRewards {
    return _request(`/lol-clash/v1/rewards`, "GET", {});
  }
  export function getRoster(rosterId: string): LolClashRoster {
    return _request(`/lol-clash/v1/roster/${rosterId}`, "GET", {});
  }
  export function getSeasonRewards(seasonId: number): ClashSeasonRewardResult {
    return _request(`/lol-clash/v1/season-rewards/${seasonId}`, "GET", {});
  }
  export function getSimpleStateFlags(): LolClashSimpleStateFlag[] {
    return _request(`/lol-clash/v1/simple-state-flags`, "GET", {});
  }
  export function getTime(): number {
    return _request(`/lol-clash/v1/time`, "GET", {});
  }
  export function getTournament(tournamentId: number): LolClashTournament {
    return _request(`/lol-clash/v1/tournament/${tournamentId}`, "GET", {});
  }
  export function getTournamentStateInfo(): LolClashTournamentStateInfo[] {
    return _request(`/lol-clash/v1/tournament-state-info`, "GET", {});
  }
  export function getTournamentSummary(): LolClashTournamentSummary[] {
    return _request(`/lol-clash/v1/tournament-summary`, "GET", {});
  }
  export function getVisible(): boolean {
    return _request(`/lol-clash/v1/visible`, "GET", {});
  }
  export function getVoiceEnabled(): boolean {
    return _request(`/lol-clash/v1/voice-enabled`, "GET", {});
  }
  export function postEvents(uuids: string[]): Map<string, ClashEventData> {
    return _request(`/lol-clash/v1/events`, "POST", { uuids });
  }
  export function postRefresh(): object {
    return _request(`/lol-clash/v1/refresh`, "POST", {});
  }
  export function postUpdateLogos(): object {
    return _request(`/lol-clash/v1/update-logos`, "POST", {});
  }
  export function postVoice(): object {
    return _request(`/lol-clash/v1/voice`, "POST", {});
  }
  export function postVoiceDelay(delaySeconds: number): object {
    return _request(`/lol-clash/v1/voice-delay/${delaySeconds}`, "POST", {});
  }
}
export namespace cosmetics {
  export function patchRecent(type: string, contentIds: string[]): object {
    return _request(`/lol-cosmetics/v1/recent/${type}`, "PATCH", {
      contentIds,
    });
  }
}
export namespace gameflow {
  export function getActivePatcherLock(): boolean {
    return _request(`/lol-gameflow/v1/active-patcher-lock`, "GET", {});
  }
  export function getAvailability(): LolGameflowGameflowAvailability {
    return _request(`/lol-gameflow/v1/availability`, "GET", {});
  }
  export function getBasicTutorial(): boolean {
    return _request(`/lol-gameflow/v1/basic-tutorial`, "GET", {});
  }
  export function getBattleTraining(): boolean {
    return _request(`/lol-gameflow/v1/battle-training`, "GET", {});
  }
  export function getExtraGameClientArgs(): string[] {
    return _request(`/lol-gameflow/v1/extra-game-client-args`, "GET", {});
  }
  export function getGameflowPhase(): LolGameflowGameflowPhase {
    return _request(`/lol-gameflow/v1/gameflow-phase`, "GET", {});
  }
  export function getSession(): LolGameflowGameflowSession {
    return _request(`/lol-gameflow/v1/session`, "GET", {});
  }
  export function getSpectate(): boolean {
    return _request(`/lol-gameflow/v1/spectate`, "GET", {});
  }
  export function getWatch(): LolGameflowGameflowWatchPhase {
    return _request(`/lol-gameflow/v1/watch`, "GET", {});
  }
  export function postAckFailedToLaunch() {
    return _request(`/lol-gameflow/v1/ack-failed-to-launch`, "POST", {});
  }
  export function postClientReceivedMessage(messsage: string) {
    return _request(`/lol-gameflow/v1/client-received-message`, "POST", {
      messsage,
    });
  }
  export function postEarlyExit(): object {
    return _request(`/lol-gameflow/v1/early-exit`, "POST", {});
  }
  export function postExtraGameClientArgs(extraGameClientArgs: string[]) {
    return _request(`/lol-gameflow/v1/extra-game-client-args`, "POST", {
      extraGameClientArgs,
    });
  }
  export function postPreEndGameTransition(enabled: boolean) {
    return _request(`/lol-gameflow/v1/pre-end-game-transition`, "POST", {
      enabled,
    });
  }
  export function postReconnect(): object {
    return _request(`/lol-gameflow/v1/reconnect`, "POST", {});
  }
  export function postTick() {
    return _request(`/lol-gameflow/v1/tick`, "POST", {});
  }
}
export namespace highlights {
  export function deleteHighlights(id: number): LolHighlightsHighlight {
    return _request(`/lol-highlights/v1/highlights/${id}`, "DELETE", {});
  }
  export function getConfig(): LolHighlightsHighlightsConfig {
    return _request(`/lol-highlights/v1/config`, "GET", {});
  }
  export function getHighlights(id: number): LolHighlightsHighlight {
    return _request(`/lol-highlights/v1/highlights/${id}`, "GET", {});
  }
  export function getHighlightsFolderPath(): string {
    return _request(`/lol-highlights/v1/highlights-folder-path`, "GET", {});
  }
  export function postFileBrowser(highlightId: number): object {
    return _request(
      `/lol-highlights/v1/file-browser/${highlightId}`,
      "POST",
      {}
    );
  }
  export function postHighlights(): LolHighlightsHighlight[] {
    return _request(`/lol-highlights/v1/highlights`, "POST", {});
  }
  export function putHighlights(
    id: number,
    highlight: LolHighlightsHighlight
  ): LolHighlightsHighlight {
    return _request(`/lol-highlights/v1/highlights/${id}`, "PUT", {
      highlight,
    });
  }
}
export namespace honeyfruit {
  export function getLinkingSettingsButtonAvailable(): boolean {
    return _request(
      `/lol-honeyfruit/v1/linking-settings-button-available`,
      "GET",
      {}
    );
  }
  export function getVngPublisherSettings(): LolHoneyfruitHoneyfruitVNGPublisherSettings {
    return _request(`/lol-honeyfruit/v1/vng-publisher-settings`, "GET", {});
  }
  export function postVngPublisherSettings(): object {
    return _request(`/lol-honeyfruit/v1/vng-publisher-settings`, "POST", {});
  }
}
export namespace leaver_buster {
  export function deleteNotifications(id: number): object {
    return _request(`/lol-leaver-buster/v1/notifications/${id}`, "DELETE", {});
  }
  export function getNotifications(
    id: number
  ): LolLeaverBusterLeaverBusterNotificationResource {
    return _request(`/lol-leaver-buster/v1/notifications/${id}`, "GET", {});
  }
}
export namespace loadouts {
  export function deleteLoadouts(id: string) {
    return _request(`/lol-loadouts/v4/loadouts/${id}`, "DELETE", {});
  }
  export function getLoadoutsReady(): boolean {
    return _request(`/lol-loadouts/v1/loadouts-ready`, "GET", {});
  }
  export function getLoadouts(loadoutId: string): LolLoadoutsScopedLoadout {
    return _request(`/lol-loadouts/v4/loadouts/${loadoutId}`, "GET", {});
  }
  export function patchLoadouts(
    id: string,
    loadout: LolLoadoutsUpdateLoadoutDTO
  ): LolLoadoutsScopedLoadout {
    return _request(`/lol-loadouts/v4/loadouts/${id}`, "PATCH", { loadout });
  }
  export function postLoadouts(
    loadout: LolLoadoutsCreateLoadoutDTO
  ): LolLoadoutsScopedLoadout {
    return _request(`/lol-loadouts/v4/loadouts`, "POST", { loadout });
  }
  export function putLoadouts(
    id: string,
    loadout: LolLoadoutsUpdateLoadoutDTO
  ): LolLoadoutsScopedLoadout {
    return _request(`/lol-loadouts/v4/loadouts/${id}`, "PUT", { loadout });
  }
}
export namespace lobby {
  export function deleteClash(): object {
    return _request(`/lol-lobby/v1/clash`, "DELETE", {});
  }
  export function deleteLobby() {
    return _request(`/lol-lobby/v2/lobby`, "DELETE", {});
  }
  export function deleteNotifications(notificationId: string): object {
    return _request(
      `/lol-lobby/v2/notifications/${notificationId}`,
      "DELETE",
      {}
    );
  }
  export function getAutofillDisplayed(): boolean {
    return _request(`/lol-lobby/v1/autofill-displayed`, "GET", {});
  }
  export function getCustomGames(id: number): LolLobbyLobbyCustomGame {
    return _request(`/lol-lobby/v1/custom-games/${id}`, "GET", {});
  }
  export function getPartyRewards(): LolLobbyLobbyPartyRewards {
    return _request(`/lol-lobby/v1/party-rewards`, "GET", {});
  }
  export function getLobby(): LolLobbyLobbyDto {
    return _request(`/lol-lobby/v2/lobby`, "GET", {});
  }
  export function getNotifications(): LolLobbyLobbyNotification[] {
    return _request(`/lol-lobby/v2/notifications`, "GET", {});
  }
  export function getPartyActive(): boolean {
    return _request(`/lol-lobby/v2/party-active`, "GET", {});
  }
  export function getReceivedInvitations(): LolLobbyReceivedInvitationDto[] {
    return _request(`/lol-lobby/v2/received-invitations`, "GET", {});
  }
  export function getRegistrationStatus(): object {
    return _request(`/lol-lobby/v2/registration-status`, "GET", {});
  }
  export function postClash(token: string): object {
    return _request(`/lol-lobby/v1/clash`, "POST", { token });
  }
  export function postEogInvitations(
    invitations: LolLobbyLobbyInvitationDto[]
  ): LolLobbyLobbyInvitationDto[] {
    return _request(`/lol-lobby/v2/eog-invitations`, "POST", { invitations });
  }
  export function postLobby(
    lobbyChange: LolLobbyLobbyChangeGameDto
  ): LolLobbyLobbyDto {
    return _request(`/lol-lobby/v2/lobby`, "POST", { lobbyChange });
  }
  export function postNotifications(notification: LolLobbyLobbyNotification) {
    return _request(`/lol-lobby/v2/notifications`, "POST", { notification });
  }
  export function postPlayAgain(): object {
    return _request(`/lol-lobby/v2/play-again`, "POST", {});
  }
  export function postPlayAgainDecline(): object {
    return _request(`/lol-lobby/v2/play-again-decline`, "POST", {});
  }
  export function putAutofillDisplayed(): boolean {
    return _request(`/lol-lobby/v1/autofill-displayed`, "PUT", {});
  }
}
export namespace login {
  export function deleteServiceProxyAsyncRequests(
    serviceName: string,
    methodName: string,
    pluginId: number
  ) {
    return _request(
      `/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`,
      "DELETE",
      { pluginId }
    );
  }
  export function deleteSession() {
    return _request(`/lol-login/v1/session`, "DELETE", {});
  }
  export function deleteShutdownLocks(lockName: string) {
    return _request(`/lol-login/v1/shutdown-locks/${lockName}`, "DELETE", {});
  }
  export function getAccountState(): LolLoginAccountStateResource {
    return _request(`/lol-login/v1/account-state`, "GET", {});
  }
  export function getLoginConnectionState(): LolLoginLoginConnectionState {
    return _request(`/lol-login/v1/login-connection-state`, "GET", {});
  }
  export function getLoginDataPacket(): object {
    return _request(`/lol-login/v1/login-data-packet`, "GET", {});
  }
  export function getLoginInGameCreds(): object {
    return _request(`/lol-login/v1/login-in-game-creds`, "GET", {});
  }
  export function getLoginPlatformCredentials(): LolLoginPlatformGeneratedCredentials {
    return _request(`/lol-login/v1/login-platform-credentials`, "GET", {});
  }
  export function getLoginQueueState(): LolLoginLoginQueue {
    return _request(`/lol-login/v1/login-queue-state`, "GET", {});
  }
  export function getSession(): LolLoginLoginSession {
    return _request(`/lol-login/v1/session`, "GET", {});
  }
  export function getWallet(): LolLoginLoginSessionWallet {
    return _request(`/lol-login/v1/wallet`, "GET", {});
  }
  export function getLeagueSessionInitToken(): LolLoginLeagueSessionTokenEnvelope {
    return _request(`/lol-login/v2/league-session-init-token`, "GET", {});
  }
  export function postAccountState() {
    return _request(`/lol-login/v1/account-state`, "POST", {});
  }
  export function postChangeSummonerName(name: string): object {
    return _request(`/lol-login/v1/change-summoner-name`, "POST", { name });
  }
  export function postDeleteRsoOnClose(): object {
    return _request(`/lol-login/v1/delete-rso-on-close`, "POST", {});
  }
  export function postLeagueSessionStatus(
    LeagueSession: LolLoginLeagueSessionStatus
  ) {
    return _request(`/lol-login/v1/leagueSessionStatus`, "POST", {
      LeagueSession,
    });
  }
  export function postServiceProxyAsyncRequests(
    serviceName: string,
    methodName: string,
    pluginId: number
  ) {
    return _request(
      `/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`,
      "POST",
      { pluginId }
    );
  }
  export function postServiceProxyUuidRequests(
    serviceName: string,
    methodName: string,
    pluginId: number,
    timeoutMillis: number,
    payload: string
  ): string {
    return _request(`/lol-login/v1/service-proxy-uuid-requests`, "POST", {
      serviceName,
      methodName,
      pluginId,
      timeoutMillis,
      payload,
    });
  }
  export function postSession(
    UsernameAndPassword: LolLoginUsernameAndPassword
  ): LolLoginLoginSession {
    return _request(`/lol-login/v1/session`, "POST", { UsernameAndPassword });
  }
  export function postSummonerSession(
    summonerSession: LolLoginSummonerSessionResource
  ): object {
    return _request(`/lol-login/v1/summoner-session`, "POST", {
      summonerSession,
    });
  }
  export function postSummonerSessionFailed(responseCode: number): object {
    return _request(`/lol-login/v1/summoner-session-failed`, "POST", {
      responseCode,
    });
  }
  export function putShutdownLocks(lockName: string) {
    return _request(`/lol-login/v1/shutdown-locks/${lockName}`, "PUT", {});
  }
}
export namespace loot {
  export function deleteLootGrants(id: number): object {
    return _request(`/lol-loot/v1/loot-grants/${id}`, "DELETE", {});
  }
  export function getCurrencyConfiguration() {
    return _request(`/lol-loot/v1/currency-configuration`, "GET", {});
  }
  export function getEnabled(): boolean {
    return _request(`/lol-loot/v1/enabled`, "GET", {});
  }
  export function getLootGrants(): LolLootLootGrantNotification[] {
    return _request(`/lol-loot/v1/loot-grants`, "GET", {});
  }
  export function getLootItems(): LolLootLootItem[] {
    return _request(`/lol-loot/v1/loot-items`, "GET", {});
  }
  export function getLootOdds(
    recipeName: string
  ): LolLootVerboseLootOddsResponse {
    return _request(`/lol-loot/v1/loot-odds/${recipeName}`, "GET", {});
  }
  export function getMilestones(
    lootMilestonesId: string
  ): LolLootLootMilestones {
    return _request(`/lol-loot/v1/milestones/${lootMilestonesId}`, "GET", {});
  }
  export function getNewPlayerCheckDone(): boolean {
    return _request(`/lol-loot/v1/new-player-check-done`, "GET", {});
  }
  export function getPlayerDisplayCategories(): string[] {
    return _request(`/lol-loot/v1/player-display-categories`, "GET", {});
  }
  export function getPlayerLoot(lootId: string): LolLootPlayerLoot {
    return _request(`/lol-loot/v1/player-loot/${lootId}`, "GET", {});
  }
  export function getPlayerLootMap(): LolLootPlayerLootMap {
    return _request(`/lol-loot/v2/player-loot-map`, "GET", {});
  }
  export function getPlayerLootNotifications(): LolLootPlayerLootNotification[] {
    return _request(`/lol-loot/v1/player-loot-notifications`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-loot/v1/ready`, "GET", {});
  }
  export function postNewPlayerCheckDone(newValue: boolean): string {
    return _request(
      `/lol-loot/v1/new-player-check-done/${newValue}`,
      "POST",
      {}
    );
  }
  export function postRefresh(force: boolean): string {
    return _request(`/lol-loot/v1/refresh`, "POST", { force });
  }
}
export namespace matchmaking {
  export function deleteSearch(): object {
    return _request(`/lol-matchmaking/v1/search`, "DELETE", {});
  }
  export function getReadyCheck(): LolMatchmakingMatchmakingReadyCheckResource {
    return _request(`/lol-matchmaking/v1/ready-check`, "GET", {});
  }
  export function getSearch(): LolMatchmakingMatchmakingSearchResource {
    return _request(`/lol-matchmaking/v1/search`, "GET", {});
  }
  export function postSearch(): object {
    return _request(`/lol-matchmaking/v1/search`, "POST", {});
  }
  export function putSearch(
    search: LolMatchmakingMatchmakingSearchResource
  ): object {
    return _request(`/lol-matchmaking/v1/search`, "PUT", { search });
  }
}
export namespace patch {
  export function deleteNotifications(id: string) {
    return _request(`/lol-patch/v1/notifications/${id}`, "DELETE", {});
  }
  export function getCheckingEnabled(): boolean {
    return _request(`/lol-patch/v1/checking-enabled`, "GET", {});
  }
  export function getEnvironment(): LolPatchChunkingPatcherEnvironment {
    return _request(`/lol-patch/v1/environment`, "GET", {});
  }
  export function getGameVersion(): string {
    return _request(`/lol-patch/v1/game-version`, "GET", {});
  }
  export function getNotifications(): LolPatchNotification[] {
    return _request(`/lol-patch/v1/notifications`, "GET", {});
  }
  export function getStatus(): LolPatchStatus {
    return _request(`/lol-patch/v1/status`, "GET", {});
  }
  export function putGamePatchUrl(url: string) {
    return _request(`/lol-patch/v1/game-patch-url`, "PUT", { url });
  }
  export function putUx(ux: LolPatchUxResource) {
    return _request(`/lol-patch/v1/ux`, "PUT", { ux });
  }
}
export namespace perks {
  export function deletePages(id: number): object {
    return _request(`/lol-perks/v1/pages/${id}`, "DELETE", {});
  }
  export function getCurrentpage(): LolPerksPerkPageResource {
    return _request(`/lol-perks/v1/currentpage`, "GET", {});
  }
  export function getInventory(): LolPerksPlayerInventory {
    return _request(`/lol-perks/v1/inventory`, "GET", {});
  }
  export function getPages(id: number): LolPerksPerkPageResource {
    return _request(`/lol-perks/v1/pages/${id}`, "GET", {});
  }
  export function getPerks(): LolPerksPerkUIPerk[] {
    return _request(`/lol-perks/v1/perks`, "GET", {});
  }
  export function getRuneRecommenderAutoSelect(): boolean {
    return _request(`/lol-perks/v1/rune-recommender-auto-select`, "GET", {});
  }
  export function getSettings(): LolPerksUISettings {
    return _request(`/lol-perks/v1/settings`, "GET", {});
  }
  export function getShowAutoModifiedPagesNotification(): boolean {
    return _request(
      `/lol-perks/v1/show-auto-modified-pages-notification`,
      "GET",
      {}
    );
  }
  export function getStyles(): LolPerksPerkUIStyle[] {
    return _request(`/lol-perks/v1/styles`, "GET", {});
  }
  export function postPages(
    page: LolPerksPerkPageResource
  ): LolPerksPerkPageResource {
    return _request(`/lol-perks/v1/pages`, "POST", { page });
  }
  export function postRuneRecommenderAutoSelect(): object {
    return _request(`/lol-perks/v1/rune-recommender-auto-select`, "POST", {});
  }
  export function postShowAutoModifiedPagesNotification(): object {
    return _request(
      `/lol-perks/v1/show-auto-modified-pages-notification`,
      "POST",
      {}
    );
  }
  export function postUpdatePageOrder(
    request: LolPerksUpdatePageOrderRequest
  ): object {
    return _request(`/lol-perks/v1/update-page-order`, "POST", { request });
  }
  export function putCurrentpage(id: number): object {
    return _request(`/lol-perks/v1/currentpage`, "PUT", { id });
  }
  export function putPages(
    id: number,
    page: LolPerksPerkPageResource
  ): LolPerksPerkPageResource {
    return _request(`/lol-perks/v1/pages/${id}`, "PUT", { page });
  }
  export function putSettings(
    showLongDescriptions: LolPerksUISettings
  ): object {
    return _request(`/lol-perks/v1/settings`, "PUT", { showLongDescriptions });
  }
}
export namespace player_behavior {
  export function deleteCodeOfConductNotification(): object {
    return _request(
      `/lol-player-behavior/v1/code-of-conduct-notification`,
      "DELETE",
      {}
    );
  }
  export function deleteReporterFeedback(
    id: string
  ): LolPlayerBehaviorReporterFeedback {
    return _request(
      `/lol-player-behavior/v1/reporter-feedback/${id}`,
      "DELETE",
      {}
    );
  }
  export function getBan(): LolPlayerBehaviorBanNotification {
    return _request(`/lol-player-behavior/v1/ban`, "GET", {});
  }
  export function getChatRestriction(): LolPlayerBehaviorRestrictionNotification {
    return _request(`/lol-player-behavior/v1/chat-restriction`, "GET", {});
  }
  export function getCodeOfConductNotification(): LolPlayerBehaviorCodeOfConductNotification {
    return _request(
      `/lol-player-behavior/v1/code-of-conduct-notification`,
      "GET",
      {}
    );
  }
  export function getConfig(): LolPlayerBehaviorPlayerBehaviorConfig {
    return _request(`/lol-player-behavior/v1/config`, "GET", {});
  }
  export function getRankedRestriction(): LolPlayerBehaviorRestrictionNotification {
    return _request(`/lol-player-behavior/v1/ranked-restriction`, "GET", {});
  }
  export function getReformCard(): LolPlayerBehaviorReformCardV2 {
    return _request(`/lol-player-behavior/v2/reform-card`, "GET", {});
  }
  export function getReporterFeedback(): LolPlayerBehaviorReporterFeedbackMessage[] {
    return _request(`/lol-player-behavior/v2/reporter-feedback`, "GET", {});
  }
  export function getReformCards(): object {
    return _request(`/lol-player-behavior/v3/reform-cards`, "GET", {});
  }
  export function postReporterFeedback(key: string) {
    return _request(
      `/lol-player-behavior/v2/reporter-feedback/${key}`,
      "POST",
      {}
    );
  }
  export function putReformCard(id: string) {
    return _request(`/lol-player-behavior/v3/reform-card/${id}`, "PUT", {});
  }
}
export namespace player_messaging {
  export function getNotification(): LolPlayerMessagingPlayerMessagingNotificationResource {
    return _request(`/lol-player-messaging/v1/notification`, "GET", {});
  }
}
export namespace player_report_sender {
  export function getInGameReports(): LolPlayerReportSenderPlayerReport[] {
    return _request(`/lol-player-report-sender/v1/in-game-reports`, "GET", {});
  }
  export function postEndOfGameReports(
    resource: LolPlayerReportSenderPlayerReport
  ): object {
    return _request(
      `/lol-player-report-sender/v1/end-of-game-reports`,
      "POST",
      { resource }
    );
  }
  export function postInGameReports(
    resource: LolPlayerReportSenderPlayerReport
  ): object {
    return _request(`/lol-player-report-sender/v1/in-game-reports`, "POST", {
      resource,
    });
  }
  export function postMatchHistoryReports(
    resource: LolPlayerReportSenderPlayerReport
  ): object {
    return _request(
      `/lol-player-report-sender/v1/match-history-reports`,
      "POST",
      { resource }
    );
  }
}
export namespace pre_end_of_game {
  export function deleteRegistration(sequenceEventName: string) {
    return _request(
      `/lol-pre-end-of-game/v1/registration/${sequenceEventName}`,
      "DELETE",
      {}
    );
  }
  export function getCurrentSequenceEvent(): LolPreEndOfGameSequenceEvent {
    return _request(`/lol-pre-end-of-game/v1/currentSequenceEvent`, "GET", {});
  }
  export function postComplete(sequenceEventName: string) {
    return _request(
      `/lol-pre-end-of-game/v1/complete/${sequenceEventName}`,
      "POST",
      {}
    );
  }
  export function postRegistration(
    sequenceEventName: string,
    priority: number
  ) {
    return _request(
      `/lol-pre-end-of-game/v1/registration/${sequenceEventName}/${priority}`,
      "POST",
      {}
    );
  }
}
export namespace premade_voice {
  export function deleteMicTest(): object {
    return _request(`/lol-premade-voice/v1/mic-test`, "DELETE", {});
  }
  export function deleteSession() {
    return _request(`/lol-premade-voice/v1/session`, "DELETE", {});
  }
  export function getAvailability(): LolPremadeVoiceVoiceAvailability {
    return _request(`/lol-premade-voice/v1/availability`, "GET", {});
  }
  export function getCapturedevices(): LolPremadeVoiceDeviceResource[] {
    return _request(`/lol-premade-voice/v1/capturedevices`, "GET", {});
  }
  export function getFirstExperience(): LolPremadeVoiceFirstExperience {
    return _request(`/lol-premade-voice/v1/first-experience`, "GET", {});
  }
  export function getMicTest(): LolPremadeVoiceAudioPropertiesResource {
    return _request(`/lol-premade-voice/v1/mic-test`, "GET", {});
  }
  export function getParticipantRecords(): LolPremadeVoicePremadeVoiceParticipantDto[] {
    return _request(`/lol-premade-voice/v1/participant-records`, "GET", {});
  }
  export function getParticipants(): LolPremadeVoicePremadeVoiceParticipantDto[] {
    return _request(`/lol-premade-voice/v1/participants`, "GET", {});
  }
  export function getSettings(): LolPremadeVoiceSettingsResource {
    return _request(`/lol-premade-voice/v1/settings`, "GET", {});
  }
  export function postGameClientUpdatedPTTKey(newKey: string) {
    return _request(`/lol-premade-voice/v1/gameClientUpdatedPTTKey`, "POST", {
      newKey,
    });
  }
  export function postMicTest(): object {
    return _request(`/lol-premade-voice/v1/mic-test`, "POST", {});
  }
  export function postSession() {
    return _request(`/lol-premade-voice/v1/session`, "POST", {});
  }
  export function putCapturedevices(handle: string) {
    return _request(`/lol-premade-voice/v1/capturedevices`, "PUT", { handle });
  }
}
export namespace rms {
  export function deleteChampionMasteryLeaveupUpdate(id: number): object {
    return _request(
      `/lol-rms/v1/champion-mastery-leaveup-update/${id}`,
      "DELETE",
      {}
    );
  }
  export function getChampionMasteryLeaveupUpdate(): LolRiotMessagingServiceChampionMasteryLevelUp[] {
    return _request(`/lol-rms/v1/champion-mastery-leaveup-update`, "GET", {});
  }
}
export namespace rso_auth {
  export function deleteAuthorization() {
    return _request(`/lol-rso-auth/v1/authorization`, "DELETE", {});
  }
  export function deleteSession() {
    return _request(`/lol-rso-auth/v1/session`, "DELETE", {});
  }
  export function deleteConfig() {
    return _request(`/lol-rso-auth/v2/config`, "DELETE", {});
  }
  export function getAuthorization(): LolRsoAuthAuthorization {
    return _request(`/lol-rso-auth/v1/authorization`, "GET", {});
  }
  export function getStatus(platformId: string): LolRsoAuthRegionStatus {
    return _request(`/lol-rso-auth/v1/status/${platformId}`, "GET", {});
  }
  export function postDeviceId(): LolRsoAuthDeviceId {
    return _request(`/lol-rso-auth/v1/device-id`, "POST", {});
  }
  export function postConfig(config: LolRsoAuthPublicClientConfig) {
    return _request(`/lol-rso-auth/v2/config`, "POST", { config });
  }
}
export namespace simple_dialog_messages {
  export function deleteMessages(messageId: number): object {
    return _request(
      `/lol-simple-dialog-messages/v1/messages/${messageId}`,
      "DELETE",
      {}
    );
  }
  export function getMessages(): LolSimpleDialogMessagesMessage[] {
    return _request(`/lol-simple-dialog-messages/v1/messages`, "GET", {});
  }
  export function postMessages(
    messageRequest: LolSimpleDialogMessagesLocalMessageRequest
  ): object {
    return _request(`/lol-simple-dialog-messages/v1/messages`, "POST", {
      messageRequest,
    });
  }
}
export namespace statstones {
  export function deleteVignetteNotifications(key: number) {
    return _request(
      `/lol-statstones/v1/vignette-notifications/${key}`,
      "DELETE",
      {}
    );
  }
  export function getEogNotifications(
    gameId: number
  ): LolStatstonesEogNotificationEnvelope {
    return _request(
      `/lol-statstones/v1/eog-notifications/${gameId}`,
      "GET",
      {}
    );
  }
  export function getFeaturedChampionStatstones(
    championItemId: number
  ): LolStatstonesStatstone[] {
    return _request(
      `/lol-statstones/v1/featured-champion-statstones/${championItemId}`,
      "GET",
      {}
    );
  }
  export function getProfileSummary(
    puuid: string
  ): LolStatstonesProfileStatstoneSummary[] {
    return _request(`/lol-statstones/v1/profile-summary/${puuid}`, "GET", {});
  }
  export function getStatstonesEnabledQueueIds(): number[] {
    return _request(
      `/lol-statstones/v1/statstones-enabled-queue-ids`,
      "GET",
      {}
    );
  }
  export function getVignetteNotifications(): object[] {
    return _request(`/lol-statstones/v1/vignette-notifications`, "GET", {});
  }
  export function getPlayerStatstonesSelf(
    championItemId: number
  ): LolStatstonesStatstoneSet[] {
    return _request(
      `/lol-statstones/v2/player-statstones-self/${championItemId}`,
      "GET",
      {}
    );
  }
  export function getPlayerSummarySelf(): LolStatstonesChampionStatstoneSummary[] {
    return _request(`/lol-statstones/v2/player-summary-self`, "GET", {});
  }
  export function postFeaturedChampionStatstones(
    championItemId: number,
    statstoneId: string,
    featuredInfo: LolStatstonesStatstoneFeaturedRequest
  ): object {
    return _request(
      `/lol-statstones/v1/featured-champion-statstones/${championItemId}/${statstoneId}`,
      "POST",
      { featuredInfo }
    );
  }
}
export namespace suggested_players {
  export function deleteSuggestedPlayers(summonerId: number): object {
    return _request(
      `/lol-suggested-players/v1/suggested-players/${summonerId}`,
      "DELETE",
      {}
    );
  }
  export function getSuggestedPlayers(): LolSuggestedPlayersSuggestedPlayersSuggestedPlayer[] {
    return _request(`/lol-suggested-players/v1/suggested-players`, "GET", {});
  }
  export function postReportedPlayer(
    resource: LolSuggestedPlayersSuggestedPlayersReportedPlayer
  ) {
    return _request(`/lol-suggested-players/v1/reported-player`, "POST", {
      resource,
    });
  }
  export function postVictoriousComrade(
    resource: LolSuggestedPlayersSuggestedPlayersVictoriousComrade
  ) {
    return _request(`/lol-suggested-players/v1/victorious-comrade`, "POST", {
      resource,
    });
  }
}
export namespace tft_team_planner {
  export function getConfig(): LolTftTeamPlannerTFTTeamPlannerConfig {
    return _request(`/lol-tft-team-planner/v1/config`, "GET", {});
  }
  export function putTeam(): object {
    return _request(`/lol-tft-team-planner/v1/team`, "PUT", {});
  }
}
export namespace tft_troves {
  export function deleteRollRewards() {
    return _request(`/lol-tft-troves/v1/roll-rewards`, "DELETE", {});
  }
  export function getBanners(): LolTftTrovesTrovesBanner[] {
    return _request(`/lol-tft-troves/v1/banners`, "GET", {});
  }
  export function getConfig(): LolTftTrovesTrovesConfig {
    return _request(`/lol-tft-troves/v1/config`, "GET", {});
  }
  export function getLootOdds(
    dropTableId: string
  ): LolTftTrovesVerboseLootOddsResponse {
    return _request(`/lol-tft-troves/v1/loot-odds/${dropTableId}`, "GET", {});
  }
  export function getRollRewards() {
    return _request(`/lol-tft-troves/v1/roll-rewards`, "GET", {});
  }
  export function getStatusNotifications() {
    return _request(`/lol-tft-troves/v1/status-notifications`, "GET", {});
  }
  export function postPurchase(
    purchaseData: LolTftTrovesTrovesPurchaseRequest
  ): LolTftTrovesCapOrdersResponseDTO {
    return _request(`/lol-tft-troves/v1/purchase`, "POST", { purchaseData });
  }
  export function postRoll(
    rollData: LolTftTrovesTrovesRollRequest
  ): LolTftTrovesCapOrdersResponseDTO {
    return _request(`/lol-tft-troves/v1/roll`, "POST", { rollData });
  }
}
export namespace patcher {
  export function deleteNotifications(id: string): object {
    return _request(`/patcher/v1/notifications/${id}`, "DELETE", {});
  }
  export function deleteProducts(productId: string): object {
    return _request(`/patcher/v1/products/${productId}`, "DELETE", {});
  }
  export function getNotifications(): PatcherNotification[] {
    return _request(`/patcher/v1/notifications`, "GET", {});
  }
  export function getProducts(): string[] {
    return _request(`/patcher/v1/products`, "GET", {});
  }
  export function getStatus(): PatcherStatus {
    return _request(`/patcher/v1/status`, "GET", {});
  }
  export function postNotifications(notificationId: PatcherNotificationId) {
    return _request(`/patcher/v1/notifications`, "POST", { notificationId });
  }
  export function putUx(ux: PatcherUxResource) {
    return _request(`/patcher/v1/ux`, "PUT", { ux });
  }
}
export namespace player_notifications {
  export function deleteNotifications(id: number): object {
    return _request(
      `/player-notifications/v1/notifications/${id}`,
      "DELETE",
      {}
    );
  }
  export function getConfig(): PlayerNotificationsPlayerNotificationConfigResource {
    return _request(`/player-notifications/v1/config`, "GET", {});
  }
  export function getNotifications(
    id: number
  ): PlayerNotificationsPlayerNotificationResource {
    return _request(`/player-notifications/v1/notifications/${id}`, "GET", {});
  }
  export function postNotifications(
    notification: PlayerNotificationsPlayerNotificationResource
  ): PlayerNotificationsPlayerNotificationResource {
    return _request(`/player-notifications/v1/notifications`, "POST", {
      notification,
    });
  }
  export function putConfig(
    config: PlayerNotificationsPlayerNotificationConfigResource
  ): PlayerNotificationsPlayerNotificationConfigResource {
    return _request(`/player-notifications/v1/config`, "PUT", { config });
  }
  export function putNotifications(
    id: number,
    notification: object
  ): PlayerNotificationsPlayerNotificationResource {
    return _request(`/player-notifications/v1/notifications/${id}`, "PUT", {
      notification,
    });
  }
}
export namespace riot_messaging_service {
  export function deleteConnect() {
    return _request(`/riot-messaging-service/v1/connect`, "DELETE", {});
  }
  export function deleteEntitlements() {
    return _request(`/riot-messaging-service/v1/entitlements`, "DELETE", {});
  }
  export function deleteSession() {
    return _request(`/riot-messaging-service/v1/session`, "DELETE", {});
  }
  export function getMessage(
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
    f: string
  ): RmsMessage {
    return _request(
      `/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}/${e}/${f}`,
      "GET",
      {}
    );
  }
  export function getSession(): RiotMessagingServiceSession {
    return _request(`/riot-messaging-service/v1/session`, "GET", {});
  }
  export function getState(): RiotMessagingServiceState {
    return _request(`/riot-messaging-service/v1/state`, "GET", {});
  }
  export function postConnect(idToken: string) {
    return _request(`/riot-messaging-service/v1/connect`, "POST", { idToken });
  }
  export function postEntitlements(
    token: RiotMessagingServiceEntitlementsToken
  ) {
    return _request(`/riot-messaging-service/v1/entitlements`, "POST", {
      token,
    });
  }
}
export namespace riotclient {
  export function deleteAffinity() {
    return _request(`/riotclient/affinity`, "DELETE", {});
  }
  export function deleteSplash() {
    return _request(`/riotclient/splash`, "DELETE", {});
  }
  export function deleteAuthTokens(authToken: string): object {
    return _request(`/riotclient/v1/auth-tokens/${authToken}`, "DELETE", {});
  }
  export function getAffinity(): object {
    return _request(`/riotclient/affinity`, "GET", {});
  }
  export function getAppName(): string {
    return _request(`/riotclient/app-name`, "GET", {});
  }
  export function getAppPort(): number {
    return _request(`/riotclient/app-port`, "GET", {});
  }
  export function getAuthToken(): string {
    return _request(`/riotclient/auth-token`, "GET", {});
  }
  export function getCommandLineArgs(): string[] {
    return _request(`/riotclient/command-line-args`, "GET", {});
  }
  export function getGet_region_locale(): RegionLocale {
    return _request(`/riotclient/get_region_locale`, "GET", {});
  }
  export function getMachineId(): string {
    return _request(`/riotclient/machine-id`, "GET", {});
  }
  export function getRegionLocale(): RegionLocale {
    return _request(`/riotclient/region-locale`, "GET", {});
  }
  export function getTrace(): object {
    return _request(`/riotclient/trace`, "GET", {});
  }
  export function getUxCrashCount(): number {
    return _request(`/riotclient/ux-crash-count`, "GET", {});
  }
  export function getUxState(): string {
    return _request(`/riotclient/ux-state`, "GET", {});
  }
  export function getZoomScale(): number {
    return _request(`/riotclient/zoom-scale`, "GET", {});
  }
  export function postAddorupdatemetric(
    group: string,
    object: string,
    name: string,
    value: number
  ) {
    return _request(`/riotclient/addorupdatemetric`, "POST", {
      group,
      object,
      name,
      value,
    });
  }
  export function postAffinity(newAffinity: string) {
    return _request(`/riotclient/affinity`, "POST", { newAffinity });
  }
  export function postKillAndRestartUx() {
    return _request(`/riotclient/kill-and-restart-ux`, "POST", {});
  }
  export function postKillUx() {
    return _request(`/riotclient/kill-ux`, "POST", {});
  }
  export function postLaunchUx() {
    return _request(`/riotclient/launch-ux`, "POST", {});
  }
  export function postNewArgs(args: string[]) {
    return _request(`/riotclient/new-args`, "POST", { args });
  }
  export function postOpenUrlInBrowser(url: string) {
    return _request(`/riotclient/open-url-in-browser`, "POST", { url });
  }
  export function postShowSwagger() {
    return _request(`/riotclient/show-swagger`, "POST", {});
  }
  export function postUnload() {
    return _request(`/riotclient/unload`, "POST", {});
  }
  export function postUxAllowForeground() {
    return _request(`/riotclient/ux-allow-foreground`, "POST", {});
  }
  export function postUxFlash() {
    return _request(`/riotclient/ux-flash`, "POST", {});
  }
  export function postUxMinimize() {
    return _request(`/riotclient/ux-minimize`, "POST", {});
  }
  export function postUxShow() {
    return _request(`/riotclient/ux-show`, "POST", {});
  }
  export function postElevationRequests(request: ElevationRequest) {
    return _request(`/riotclient/v1/elevation-requests`, "POST", { request });
  }
  export function postZoomScale(newZoomScale: number) {
    return _request(`/riotclient/zoom-scale`, "POST", { newZoomScale });
  }
  export function putSplash(splash: string) {
    return _request(`/riotclient/splash`, "PUT", { splash });
  }
  export function putUxLoadComplete() {
    return _request(`/riotclient/ux-load-complete`, "PUT", {});
  }
  export function putAuthTokens(authToken: string): object {
    return _request(`/riotclient/v1/auth-tokens/${authToken}`, "PUT", {});
  }
}
export namespace tracing {
  export function deletePerformance(name: string) {
    return _request(`/tracing/v1/performance/${name}`, "DELETE", {});
  }
  export function postPerformance(name: string) {
    return _request(`/tracing/v1/performance/${name}`, "POST", {});
  }
}
export namespace anti_addiction {
  export function getAntiAddictionToken(): LolAntiAddictionAntiAddictionToken {
    return _request(`/lol-anti-addiction/v1/anti-addiction-token`, "GET", {});
  }
}
export function getAssets(
  plugin: string,
  path: string,
  ifNoneMatch?: string
): object {
  return _request(`/${plugin}/assets/${path}`, "GET", {
    path,
    "if-none-match": ifNoneMatch,
  });
}
export namespace client_config {
  export function getConfig(name: string): object {
    return _request(`/client-config/v2/config/${name}`, "GET", {});
  }
  export function getStatus(
    type: ClientConfigConfigType
  ): ClientConfigConfigStatus {
    return _request(`/client-config/v1/status/${type}`, "GET", {});
  }
  export function getNamespace(namespace: string): Map<string, object> {
    return _request(`/client-config/v2/namespace/${namespace}`, "GET", {});
  }
  export function getClientConfig(name: string): object {
    return _request(`/lol-client-config/v3/client-config/${name}`, "GET", {});
  }
  export function putEntitlementsToken(update: ClientConfigEntitlementsUpdate) {
    return _request(`/client-config/v1/entitlements-token`, "PUT", { update });
  }
  export function putRefreshConfigStatus() {
    return _request(`/client-config/v1/refresh-config-status`, "PUT", {});
  }
  export function putNamespaceChanges(
    namespaces: ClientConfigConfigNamespaceUpdate
  ) {
    return _request(`/client-config/v2/namespace-changes`, "PUT", {
      namespaces,
    });
  }
}
export namespace config {
  export function getConfig(): object {
    return _request(`/config/v1/config`, "GET", {});
  }
}
export namespace cookie_jar {
  export function getCookies(): cookie[] {
    return _request(`/cookie-jar/v1/cookies`, "GET", {});
  }
  export function postCookies(cookie: cookie[]): object {
    return _request(`/cookie-jar/v1/cookies`, "POST", { cookie });
  }
}
export namespace crash_reporting {
  export function getCrashStatus(): boolean {
    return _request(`/crash-reporting/v1/crash-status`, "GET", {});
  }
}
export namespace data_store {
  export function getInstallDir(): string {
    return _request(`/data-store/v1/install-dir`, "GET", {});
  }
  export function getInstallSettings(path: string): object {
    return _request(`/data-store/v1/install-settings/${path}`, "GET", { path });
  }
  export function getSystemSettings(path: string): object {
    return _request(`/data-store/v1/system-settings/${path}`, "GET", { path });
  }
  export function postInstallSettings(path: string, data: object) {
    return _request(`/data-store/v1/install-settings/${path}`, "POST", {
      path,
      data,
    });
  }
}
export namespace entitlements {
  export function getToken(): EntitlementsToken {
    return _request(`/entitlements/v1/token`, "GET", {});
  }
}
export namespace account_verification {
  export function getIsVerified(): LolAccountVerificationIsVerifiedResponse {
    return _request(`/lol-account-verification/v1/is-verified`, "GET", {});
  }
  export function getPhoneNumber(): LolAccountVerificationPhoneNumberResponse {
    return _request(`/lol-account-verification/v1/phone-number`, "GET", {});
  }
  export function postConfirmActivationPin(
    ConfirmActivationPinRequest: LolAccountVerificationConfirmActivationPinRequest
  ) {
    return _request(
      `/lol-account-verification/v1/confirmActivationPin`,
      "POST",
      { ConfirmActivationPinRequest }
    );
  }
  export function postConfirmDeactivationPin(
    ConfirmDeactivationPinRequest: LolAccountVerificationConfirmDeactivationPinRequest
  ) {
    return _request(
      `/lol-account-verification/v1/confirmDeactivationPin`,
      "POST",
      { ConfirmDeactivationPinRequest }
    );
  }
  export function postSendActivationPin(
    SendActivationPinRequest: LolAccountVerificationSendActivationPinRequest
  ) {
    return _request(`/lol-account-verification/v1/sendActivationPin`, "POST", {
      SendActivationPinRequest,
    });
  }
  export function postSendDeactivationPin(SendDeactivationPinRequest) {
    return _request(
      `/lol-account-verification/v1/sendDeactivationPin`,
      "POST",
      { SendDeactivationPinRequest }
    );
  }
}
export namespace active_boosts {
  export function getActiveBoosts(): LolActiveBoostsActiveBoosts {
    return _request(`/lol-active-boosts/v1/active-boosts`, "GET", {});
  }
}
export namespace banners {}
export namespace career_stats {
  export function getChampionAverages(
    championId: number,
    position: LolCareerStatsSummonersRiftPosition,
    tier: LolCareerStatsRankedTier,
    queue: LolCareerStatsCareerStatsQueueType
  ): LolCareerStatsChampionQueueStatsResponse {
    return _request(
      `/lol-career-stats/v1/champion-averages/${championId}/${position}/${tier}/${queue}`,
      "GET",
      {}
    );
  }
  export function getChampionExperts(
    championId: number,
    position: LolCareerStatsSummonersRiftPosition
  ): LolCareerStatsExpertPlayer[] {
    return _request(
      `/lol-career-stats/v1/champion-experts/${championId}/${position}`,
      "GET",
      {}
    );
  }
  export function getPositionAverages(
    position: LolCareerStatsSummonersRiftPosition,
    tier: LolCareerStatsRankedTier,
    queue: LolCareerStatsCareerStatsQueueType
  ): LolCareerStatsChampionQueueStatsResponse {
    return _request(
      `/lol-career-stats/v1/position-averages/${position}/${tier}/${queue}`,
      "GET",
      {}
    );
  }
  export function getPositionExperts(
    position: LolCareerStatsSummonersRiftPosition
  ): LolCareerStatsExpertPlayer[] {
    return _request(
      `/lol-career-stats/v1/position-experts/${position}`,
      "GET",
      {}
    );
  }
  export function getSummonerGames(puuid: string): object {
    return _request(`/lol-career-stats/v1/summoner-games/${puuid}`, "GET", {});
  }
  export function getSummonerStats(
    puuid: string,
    season: number,
    queue: LolCareerStatsCareerStatsQueueType,
    position: LolCareerStatsSummonersRiftPosition,
    championId?: number
  ): object {
    return _request(
      `/lol-career-stats/v1/summoner-stats/${puuid}/${season}/${queue}/${position}`,
      "GET",
      { championId }
    );
  }
  export function postChampionStatsPercentiles(
    body: LolCareerStatsStatsQueryRequest[]
  ): LolCareerStatsStatisticsPercentilesResponse[] {
    return _request(`/lol-career-stats/v1/champion-stats-percentiles`, "POST", {
      body,
    });
  }
  export function postPositionStatsPercentiles(
    body: LolCareerStatsPositionStatsQueryRequest[]
  ): LolCareerStatsStatisticsPercentilesResponse[] {
    return _request(`/lol-career-stats/v1/position-stats-percentiles`, "POST", {
      body,
    });
  }
}
export namespace catalog {
  export function getItemDetails(
    inventoryType: string,
    itemId: number
  ): LolCatalogCatalogPluginItemWithDetails {
    return _request(`/lol-catalog/v1/item-details`, "GET", {
      inventoryType,
      itemId,
    });
  }
  export function getItems(
    inventoryType: string
  ): LolCatalogCatalogPluginItem[] {
    return _request(`/lol-catalog/v1/items/${inventoryType}`, "GET", {});
  }
}
export namespace challenges {
  export function getAvailableQueueIds(): number[] {
    return _request(`/lol-challenges/v1/available-queue-ids`, "GET", {});
  }
  export function getClientState(): LolChallengesClientState {
    return _request(`/lol-challenges/v1/client-state`, "GET", {});
  }
  export function getLevelPoints(): Map<string, number> {
    return _request(`/lol-challenges/v1/level-points`, "GET", {});
  }
  export function getMyUpdatedChallenges(
    gameId: number
  ): Map<string, LolChallengesUIChallenge> {
    return _request(
      `/lol-challenges/v1/my-updated-challenges/${gameId}`,
      "GET",
      {}
    );
  }
  export function getPenalty(): LolChallengesUIChallengePenalty {
    return _request(`/lol-challenges/v1/penalty`, "GET", {});
  }
  export function getSeasons(): LolChallengesChallengeSeason[] {
    return _request(`/lol-challenges/v1/seasons`, "GET", {});
  }
  export function getUpdatedChallenges(
    gameId: number,
    puuid: string
  ): Map<string, LolChallengesUIChallenge> {
    return _request(
      `/lol-challenges/v1/updated-challenges/${gameId}/${puuid}`,
      "GET",
      {}
    );
  }
  export function postAckChallengeUpdate(id: number) {
    return _request(
      `/lol-challenges/v1/ack-challenge-update/${id}`,
      "POST",
      {}
    );
  }
  export function postUpdatePlayerPreferences(
    preferences: LolChallengesChallengesPlayerPreferences
  ) {
    return _request(`/lol-challenges/v1/update-player-preferences`, "POST", {
      preferences,
    });
  }
}
export namespace champ_select_legacy {
  export function getBannableChampionIds(): number[] {
    return _request(
      `/lol-champ-select-legacy/v1/bannable-champion-ids`,
      "GET",
      {}
    );
  }
  export function getCurrentChampion(): number {
    return _request(`/lol-champ-select-legacy/v1/current-champion`, "GET", {});
  }
  export function getDisabledChampionIds(): number[] {
    return _request(
      `/lol-champ-select-legacy/v1/disabled-champion-ids`,
      "GET",
      {}
    );
  }
  export function getImplementationActive(): boolean {
    return _request(
      `/lol-champ-select-legacy/v1/implementation-active`,
      "GET",
      {}
    );
  }
  export function getPickableChampionIds(): number[] {
    return _request(
      `/lol-champ-select-legacy/v1/pickable-champion-ids`,
      "GET",
      {}
    );
  }
  export function getPickableSkinIds(): number[] {
    return _request(`/lol-champ-select-legacy/v1/pickable-skin-ids`, "GET", {});
  }
  export function getSession(): LolChampSelectLegacyChampSelectSession {
    return _request(`/lol-champ-select-legacy/v1/session`, "GET", {});
  }
  export function getTeamBoost(): LolChampSelectLegacyTeamBoost {
    return _request(`/lol-champ-select-legacy/v1/team-boost`, "GET", {});
  }
}
export namespace champ_select {
  export function getAllGridChampions(): LolChampSelectChampGridChampion[] {
    return _request(`/lol-champ-select/v1/all-grid-champions`, "GET", {});
  }
  export function getBannableChampionIds(): number[] {
    return _request(`/lol-champ-select/v1/bannable-champion-ids`, "GET", {});
  }
  export function getCurrentChampion(): number {
    return _request(`/lol-champ-select/v1/current-champion`, "GET", {});
  }
  export function getDisabledChampionIds(): number[] {
    return _request(`/lol-champ-select/v1/disabled-champion-ids`, "GET", {});
  }
  export function getGridChampions(
    championId: number
  ): LolChampSelectChampGridChampion {
    return _request(
      `/lol-champ-select/v1/grid-champions/${championId}`,
      "GET",
      {}
    );
  }
  export function getMutedPlayers(): LolChampSelectMutedPlayerInfo[] {
    return _request(`/lol-champ-select/v1/muted-players`, "GET", {});
  }
  export function getOngoingSwap(): LolChampSelectChampSelectSwapNotification {
    return _request(`/lol-champ-select/v1/ongoing-swap`, "GET", {});
  }
  export function getOngoingTrade(): LolChampSelectChampSelectTradeNotification {
    return _request(`/lol-champ-select/v1/ongoing-trade`, "GET", {});
  }
  export function getPickableChampionIds(): number[] {
    return _request(`/lol-champ-select/v1/pickable-champion-ids`, "GET", {});
  }
  export function getPickableSkinIds(): number[] {
    return _request(`/lol-champ-select/v1/pickable-skin-ids`, "GET", {});
  }
  export function getPinDropNotification(): LolChampSelectChampSelectPinDropNotification {
    return _request(`/lol-champ-select/v1/pin-drop-notification`, "GET", {});
  }
  export function getSession(): LolChampSelectChampSelectSession {
    return _request(`/lol-champ-select/v1/session`, "GET", {});
  }
  export function getSfxNotifications(): LolChampSelectSfxNotification[] {
    return _request(`/lol-champ-select/v1/sfx-notifications`, "GET", {});
  }
  export function getSkinCarouselSkins(): LolChampSelectSkinSelectorSkin[] {
    return _request(`/lol-champ-select/v1/skin-carousel-skins`, "GET", {});
  }
  export function getSkinSelectorInfo(): LolChampSelectSkinSelectorInfo {
    return _request(`/lol-champ-select/v1/skin-selector-info`, "GET", {});
  }
  export function getSummoners(
    slotId: number
  ): LolChampSelectChampSelectSummoner {
    return _request(`/lol-champ-select/v1/summoners/${slotId}`, "GET", {});
  }
  export function getTeamBoost(): LolChampSelectTeamBoost {
    return _request(`/lol-champ-select/v1/team-boost`, "GET", {});
  }
  export function postRetrieveLatestGameDto(): object {
    return _request(
      `/lol-champ-select/v1/retrieve-latest-game-dto`,
      "POST",
      {}
    );
  }
  export function postToggleFavorite(
    championId: number,
    position: string
  ): object {
    return _request(
      `/lol-champ-select/v1/toggle-favorite/${championId}/${position}`,
      "POST",
      {}
    );
  }
  export function postTogglePlayerMuted(
    player: LolChampSelectMutedPlayerInfo
  ): object {
    return _request(`/lol-champ-select/v1/toggle-player-muted`, "POST", {
      player,
    });
  }
}
export namespace champions {
  export function getOwnedChampionsMinimal(): LolChampionsCollectionsChampionMinimal[] {
    return _request(`/lol-champions/v1/owned-champions-minimal`, "GET", {});
  }
}
export namespace collections {}
export namespace content_targeting {
  export function getFilters(): LolContentTargetingContentTargetingFilterResponse {
    return _request(`/lol-content-targeting/v1/filters`, "GET", {});
  }
  export function getLocale(): LolContentTargetingContentTargetingLocaleResponse {
    return _request(`/lol-content-targeting/v1/locale`, "GET", {});
  }
  export function getProtected_filters(): LolContentTargetingContentTargetingFilterResponse {
    return _request(`/lol-content-targeting/v1/protected_filters`, "GET", {});
  }
}
export namespace drops {
  export function getDropTables(
    dropTableId: string
  ): LolDropsCapDropsDropTableWithPityDTO {
    return _request(`/lol-drops/v1/drop-tables/${dropTableId}`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-drops/v1/ready`, "GET", {});
  }
}
export namespace email_verification {
  export function getEmail(): LolEmailVerificationEmailVerificationSession {
    return _request(`/lol-email-verification/v1/email`, "GET", {});
  }
  export function postConfirmEmail(): object {
    return _request(`/lol-email-verification/v1/confirm-email`, "POST", {});
  }
  export function putEmail(
    EmailUpdate: LolEmailVerificationEmailUpdate
  ): object {
    return _request(`/lol-email-verification/v1/email`, "PUT", { EmailUpdate });
  }
}
export namespace end_of_game {
  export function getChampionMasteryUpdates(): LolEndOfGameChampionMasteryUpdate {
    return _request(`/lol-end-of-game/v1/champion-mastery-updates`, "GET", {});
  }
  export function getEogStatsBlock(): LolEndOfGameEndOfGameStats {
    return _request(`/lol-end-of-game/v1/eog-stats-block`, "GET", {});
  }
  export function getGameclientEogStatsBlock(): LolEndOfGameGameClientEndOfGameStats {
    return _request(
      `/lol-end-of-game/v1/gameclient-eog-stats-block`,
      "GET",
      {}
    );
  }
  export function getTftEogStats(): LolEndOfGameTFTEndOfGameViewModel {
    return _request(`/lol-end-of-game/v1/tft-eog-stats`, "GET", {});
  }
  export function postGameclientEogStatsBlock(
    stats: LolEndOfGameGameClientEndOfGameStats
  ): object {
    return _request(`/lol-end-of-game/v1/gameclient-eog-stats-block`, "POST", {
      stats,
    });
  }
  export function postPlayerReports(
    report: LolEndOfGamePlayerReport
  ): LolEndOfGamePlayerReport {
    return _request(`/lol-end-of-game/v2/player-reports`, "POST", { report });
  }
}
export namespace esport_stream_notifications {
  export function getLiveStreams(): LolEsportStreamNotificationsESportsLiveStreams {
    return _request(
      `/lol-esport-stream-notifications/v1/live-streams`,
      "GET",
      {}
    );
  }
  export function getStreamUrl(): string {
    return _request(
      `/lol-esport-stream-notifications/v1/stream-url`,
      "GET",
      {}
    );
  }
  export function postSendStats(eventType: string, matchId: string) {
    return _request(`/lol-esport-stream-notifications/v1/send-stats`, "POST", {
      eventType,
      matchId,
    });
  }
}
export namespace event_shop {
  export function getCategoriesOffers(): LolEventShopCategoryOffersUIData[] {
    return _request(`/lol-event-shop/v1/categories-offers`, "GET", {});
  }
  export function getEventDetailsData(): LolEventShopEventDetailsUIData {
    return _request(`/lol-event-shop/v1/event-details-data`, "GET", {});
  }
  export function getFailureLoadingRewardTrack(): LolEventShopEventShopError {
    return _request(
      `/lol-event-shop/v1/failure-loading-reward-track`,
      "GET",
      {}
    );
  }
  export function getFailureLoadingTokenShop(): LolEventShopEventShopError {
    return _request(`/lol-event-shop/v1/failure-loading-token-shop`, "GET", {});
  }
  export function getInfo(): LolEventShopEventShopInfoUIData {
    return _request(`/lol-event-shop/v1/info`, "GET", {});
  }
  export function getIsGracePeriod(): boolean {
    return _request(`/lol-event-shop/v1/is-grace-period`, "GET", {});
  }
  export function getIsMultiPurchaseEnabled(): boolean {
    return _request(`/lol-event-shop/v1/is-multi-purchase-enabled`, "GET", {});
  }
  export function getIsPassPurchaseEnabled(): boolean {
    return _request(`/lol-event-shop/v1/is-pass-purchase-enabled`, "GET", {});
  }
  export function getNavigationButtonData(): LolEventShopNavigationButtonUIData {
    return _request(`/lol-event-shop/v1/navigation-button-data`, "GET", {});
  }
  export function getPassBackgroundData(): LolEventShopEventBackgroundUIData {
    return _request(`/lol-event-shop/v1/pass-background-data`, "GET", {});
  }
  export function getPassBundles(): LolEventShopBundleOfferUIData[] {
    return _request(`/lol-event-shop/v1/pass-bundles`, "GET", {});
  }
  export function getProgressInfoData(): LolEventShopProgressInfoUIData {
    return _request(`/lol-event-shop/v1/progress-info-data`, "GET", {});
  }
  export function getRewardTrackBonusItems(): LolEventShopRewardTrackItem[] {
    return _request(`/lol-event-shop/v1/reward-track-bonus-items`, "GET", {});
  }
  export function getRewardTrackBonusProgress(): LolEventShopRewardTrackProgress {
    return _request(
      `/lol-event-shop/v1/reward-track-bonus-progress`,
      "GET",
      {}
    );
  }
  export function getRewardTrackItems(): LolEventShopRewardTrackItem[] {
    return _request(`/lol-event-shop/v1/reward-track-items`, "GET", {});
  }
  export function getRewardTrackProgress(): LolEventShopRewardTrackProgress {
    return _request(`/lol-event-shop/v1/reward-track-progress`, "GET", {});
  }
  export function getRewardTrackXp(): LolEventShopRewardTrackXP {
    return _request(`/lol-event-shop/v1/reward-track-xp`, "GET", {});
  }
  export function getTokenBalance(): number {
    return _request(`/lol-event-shop/v1/token-balance`, "GET", {});
  }
  export function getTokenShopData(): LolEventShopTokenShopUIData {
    return _request(`/lol-event-shop/v1/token-shop-data`, "GET", {});
  }
  export function getTokenUpsell(): LolEventShopTokenUpsell[] {
    return _request(`/lol-event-shop/v1/token-upsell`, "GET", {});
  }
  export function getUnclaimedRewards(): LolEventShopUnclaimedRewardsUIData {
    return _request(`/lol-event-shop/v1/unclaimed-rewards`, "GET", {});
  }
  export function postClaimSelectAll() {
    return _request(`/lol-event-shop/v1/claim-select-all`, "POST", {});
  }
  export function postClaimSelectBonusIteration() {
    return _request(
      `/lol-event-shop/v1/claim-select-bonus-iteration`,
      "POST",
      {}
    );
  }
  export function postPurchaseItem(
    item: LolEventShopItemOrderDTO
  ): LolEventShopPurchaseOrderResponseDTO {
    return _request(`/lol-event-shop/v1/purchase-item`, "POST", { item });
  }
  export function postPurchaseOffer(
    offerId: LolEventShopPurchaseOfferRequest
  ): LolEventShopPurchaseOfferResponseV3 {
    return _request(`/lol-event-shop/v1/purchase-offer`, "POST", { offerId });
  }
}
export namespace game_client_chat {
  export function getBuddies(): string[] {
    return _request(`/lol-game-client-chat/v1/buddies`, "GET", {});
  }
  export function getIgnoredSummoners(): number[] {
    return _request(`/lol-game-client-chat/v1/ignored-summoners`, "GET", {});
  }
  export function getMutedSummoners(): number[] {
    return _request(`/lol-game-client-chat/v1/muted-summoners`, "GET", {});
  }
  export function postInstantMessages(summonerName: string, message: string) {
    return _request(`/lol-game-client-chat/v1/instant-messages`, "POST", {
      summonerName,
      message,
    });
  }
  export function postPartyMessages(message: string) {
    return _request(`/lol-game-client-chat/v1/party-messages`, "POST", {
      message,
    });
  }
}
export namespace game_queues {
  export function getCustom(): LolGameQueuesQueueCustomGame {
    return _request(`/lol-game-queues/v1/custom`, "GET", {});
  }
  export function getCustomNonDefault(): LolGameQueuesQueueCustomGame {
    return _request(`/lol-game-queues/v1/custom-non-default`, "GET", {});
  }
  export function getGameTypeConfig(
    gameTypeConfigId: number
  ): LolGameQueuesQueueGameTypeConfig {
    return _request(
      `/lol-game-queues/v1/game-type-config/${gameTypeConfigId}`,
      "GET",
      {}
    );
  }
  export function getQueues(id: number): LolGameQueuesQueue {
    return _request(`/lol-game-queues/v1/queues/${id}`, "GET", {});
  }
}
export namespace game_settings {
  export function getDidreset(): boolean {
    return _request(`/lol-game-settings/v1/didreset`, "GET", {});
  }
  export function getGameSettings(): object {
    return _request(`/lol-game-settings/v1/game-settings`, "GET", {});
  }
  export function getGameSettingsSchema(): object {
    return _request(`/lol-game-settings/v1/game-settings-schema`, "GET", {});
  }
  export function getInputSettings(): object {
    return _request(`/lol-game-settings/v1/input-settings`, "GET", {});
  }
  export function getInputSettingsSchema(): object {
    return _request(`/lol-game-settings/v1/input-settings-schema`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-game-settings/v1/ready`, "GET", {});
  }
  export function patchGameSettings(settingsResource: object): object {
    return _request(`/lol-game-settings/v1/game-settings`, "PATCH", {
      settingsResource,
    });
  }
  export function patchInputSettings(settingsResource: object): object {
    return _request(`/lol-game-settings/v1/input-settings`, "PATCH", {
      settingsResource,
    });
  }
  export function postReloadPostGame() {
    return _request(`/lol-game-settings/v1/reload-post-game`, "POST", {});
  }
  export function postSave(): boolean {
    return _request(`/lol-game-settings/v1/save`, "POST", {});
  }
}
export namespace geoinfo {
  export function getGetlocation(ip_address: string): LolGeoinfoGeoInfo {
    return _request(`/lol-geoinfo/v1/getlocation`, "GET", { ip_address });
  }
  export function getWhereami(): LolGeoinfoGeoInfoResponse {
    return _request(`/lol-geoinfo/v1/whereami`, "GET", {});
  }
}
export namespace honor_v2 {
  export function getBallot(): LolHonorV2Ballot {
    return _request(`/lol-honor-v2/v1/ballot`, "GET", {});
  }
  export function getConfig(): LolHonorV2HonorConfig {
    return _request(`/lol-honor-v2/v1/config`, "GET", {});
  }
  export function getLateRecognition(): LolHonorV2Honor[] {
    return _request(`/lol-honor-v2/v1/late-recognition`, "GET", {});
  }
  export function getLatestEligibleGame(): number {
    return _request(`/lol-honor-v2/v1/latest-eligible-game`, "GET", {});
  }
  export function getLevelChange(): LolHonorV2VendedHonorChange {
    return _request(`/lol-honor-v2/v1/level-change`, "GET", {});
  }
  export function getMutualHonor(): LolHonorV2MutualHonor {
    return _request(`/lol-honor-v2/v1/mutual-honor`, "GET", {});
  }
  export function getProfile(): LolHonorV2ProfileInfo {
    return _request(`/lol-honor-v2/v1/profile`, "GET", {});
  }
  export function getRecognition(): LolHonorV2Honor[] {
    return _request(`/lol-honor-v2/v1/recognition`, "GET", {});
  }
  export function getRecognitionHistory(): LolHonorV2HonorInteraction[] {
    return _request(`/lol-honor-v2/v1/recognition-history`, "GET", {});
  }
  export function getRewardGranted(): LolHonorV2VendedReward {
    return _request(`/lol-honor-v2/v1/reward-granted`, "GET", {});
  }
  export function getTeamChoices(): number[] {
    return _request(`/lol-honor-v2/v1/team-choices`, "GET", {});
  }
  export function getVoteCompletion(): LolHonorV2VoteCompletion {
    return _request(`/lol-honor-v2/v1/vote-completion`, "GET", {});
  }
  export function postHonorPlayer(
    honorPlayerRequest: LolHonorV2ApiHonorPlayerServerRequest
  ): string {
    return _request(`/lol-honor-v2/v1/honor-player`, "POST", {
      honorPlayerRequest,
    });
  }
}
export namespace hovercard {
  export function getFriendInfo(puuid: string): LolHovercardHovercardUserInfo {
    return _request(`/lol-hovercard/v1/friend-info/${puuid}`, "GET", {});
  }
  export function getFriendInfoBySummoner(
    summonerId: number
  ): LolHovercardHovercardUserInfo {
    return _request(
      `/lol-hovercard/v1/friend-info-by-summoner/${summonerId}`,
      "GET",
      {}
    );
  }
}
export namespace inventory {
  export function getChampSelectInventory(): string {
    return _request(`/lol-inventory/v1/champSelectInventory`, "GET", {});
  }
  export function getInitialConfigurationComplete(): boolean {
    return _request(
      `/lol-inventory/v1/initial-configuration-complete`,
      "GET",
      {}
    );
  }
  export function getInventory(
    inventoryType: string
  ): LolInventoryInventoryItemWithPayload[] {
    return _request(`/lol-inventory/v2/inventory/${inventoryType}`, "GET", {});
  }
  export function getInventoryWithF2P(
    inventoryTypes: string[]
  ): LolInventoryInventoryItemWithPayload[] {
    return _request(`/lol-inventory/v1/inventoryWithF2P`, "GET", {
      inventoryTypes,
    });
  }
  export function getNotifications(
    inventoryType: string
  ): LolInventoryInventoryNotification[] {
    return _request(
      `/lol-inventory/v1/notifications/${inventoryType}`,
      "GET",
      {}
    );
  }
  export function getSignedInventory(
    inventoryTypes: string[]
  ): Map<string, string> {
    return _request(`/lol-inventory/v1/signedInventory`, "GET", {
      inventoryTypes,
    });
  }
  export function getSignedInventoryCache(): Map<
    string,
    LolInventoryInventoryCacheEntry
  > {
    return _request(`/lol-inventory/v1/signedInventoryCache`, "GET", {});
  }
  export function getSignedWallet(currencyType: string): Map<string, string> {
    return _request(
      `/lol-inventory/v1/signedWallet/${currencyType}`,
      "GET",
      {}
    );
  }
  export function getWallet(currencyType: string): Map<string, number> {
    return _request(`/lol-inventory/v1/wallet/${currencyType}`, "GET", {});
  }
  export function getXboxSubscriptionStatus(): LolInventoryXboxSubscriptionStatus {
    return _request(`/lol-inventory/v1/xbox-subscription-status`, "GET", {});
  }
}
export namespace item_sets {}
export namespace kickout {
  export function getNotification(): LolKickoutKickoutMessage {
    return _request(`/lol-kickout/v1/notification`, "GET", {});
  }
}
export namespace kr_playtime_reminder {
  export function getMessage(): string {
    return _request(`/lol-kr-playtime-reminder/v1/message`, "GET", {});
  }
  export function getPlaytime(): LolKrPlaytimeReminderPlaytimeReminder {
    return _request(`/lol-kr-playtime-reminder/v1/playtime`, "GET", {});
  }
}
export namespace kr_shutdown_law {
  export function getCustomStatus(): LolKrShutdownLawQueueShutdownStatus {
    return _request(`/lol-kr-shutdown-law/v1/custom-status`, "GET", {});
  }
  export function getDisabledQueues(): number[] {
    return _request(`/lol-kr-shutdown-law/v1/disabled-queues`, "GET", {});
  }
  export function getNotification(): LolKrShutdownLawShutdownLawNotification {
    return _request(`/lol-kr-shutdown-law/v1/notification`, "GET", {});
  }
  export function getQueueStatus(
    queue_id: number
  ): LolKrShutdownLawQueueShutdownStatus {
    return _request(
      `/lol-kr-shutdown-law/v1/queue-status/${queue_id}`,
      "GET",
      {}
    );
  }
  export function getRatingScreen(): LolKrShutdownLawRatingScreenInfo {
    return _request(`/lol-kr-shutdown-law/v1/rating-screen`, "GET", {});
  }
  export function getStatus(): LolKrShutdownLawAllQueueShutdownStatus {
    return _request(`/lol-kr-shutdown-law/v1/status`, "GET", {});
  }
}
export namespace league_session {
  export function getLeagueSessionToken(): string {
    return _request(`/lol-league-session/v1/league-session-token`, "GET", {});
  }
}
export namespace license_agreement {
  export function getAgreement(): string {
    return _request(`/lol-license-agreement/v1/agreement`, "GET", {});
  }
  export function getAgreements(): LolLicenseAgreementLicenseAgreement[] {
    return _request(`/lol-license-agreement/v1/agreements`, "GET", {});
  }
  export function getAllAgreements(): LolLicenseAgreementLicenseAgreement[] {
    return _request(`/lol-license-agreement/v1/all-agreements`, "GET", {});
  }
  export function getPrivacyPolicy(): string {
    return _request(`/lol-license-agreement/v1/privacy-policy`, "GET", {});
  }
  export function getServeLocation(): LolLicenseAgreementLicenseServeLocation {
    return _request(`/lol-license-agreement/v1/serve-location`, "GET", {});
  }
}
export namespace lobby_team_builder {
  export function getMatchmaking(): LolLobbyTeamBuilderMatchmakingSearchResource {
    return _request(`/lol-lobby-team-builder/v1/matchmaking`, "GET", {});
  }
}
export namespace loyalty {
  export function getStatusNotification(): LolLoyaltyLoyaltyStatusNotification {
    return _request(`/lol-loyalty/v1/status-notification`, "GET", {});
  }
  export function postUpdateLoyaltyInventory(
    loyaltyRewards: LolLoyaltyLoyaltyRewards
  ) {
    return _request(`/lol-loyalty/v1/updateLoyaltyInventory`, "POST", {
      loyaltyRewards,
    });
  }
}
export namespace maps {
  export function getMap(
    id: number,
    gameMode: string,
    gameMutator: string
  ): LolMapsMaps {
    return _request(
      `/lol-maps/v2/map/${id}/${gameMode}/${gameMutator}`,
      "GET",
      {}
    );
  }
  export function getMaps(): LolMapsMaps[] {
    return _request(`/lol-maps/v2/maps`, "GET", {});
  }
  export function postMap(map: LolMapsMaps) {
    return _request(`/lol-maps/v1/map`, "POST", { map });
  }
}
export namespace marketing_preferences {
  export function getPartition(partitionKey: string): Map<string, string> {
    return _request(
      `/lol-marketing-preferences/v1/partition/${partitionKey}`,
      "GET",
      {}
    );
  }
  export function getReady(): boolean {
    return _request(`/lol-marketing-preferences/v1/ready`, "GET", {});
  }
  export function postPartition(
    partitionKey: string,
    body: Map<string, string>
  ): Map<string, string> {
    return _request(
      `/lol-marketing-preferences/v1/partition/${partitionKey}`,
      "POST",
      { body }
    );
  }
}
export namespace match_history {
  export function getDelta(): LolMatchHistoryMatchHistoryPlayerDelta {
    return _request(`/lol-match-history/v1/delta`, "GET", {});
  }
  export function getGameTimelines(
    gameId: number
  ): LolMatchHistoryMatchHistoryTimelineFrames {
    return _request(
      `/lol-match-history/v1/game-timelines/${gameId}`,
      "GET",
      {}
    );
  }
  export function getGames(gameId: number): LolMatchHistoryMatchHistoryGame {
    return _request(`/lol-match-history/v1/games/${gameId}`, "GET", {});
  }
  export function getRecentlyPlayedSummoners(): LolMatchHistoryRecentlyPlayedSummoner[] {
    return _request(
      `/lol-match-history/v1/recently-played-summoners`,
      "GET",
      {}
    );
  }
  export function getWebUrl(): string {
    return _request(`/lol-match-history/v1/web-url`, "GET", {});
  }
  export function postAcsEndpointOverride(
    data: LolMatchHistoryAcsEndPoint
  ): object {
    return _request(`/lol-match-history/v1/acs-endpoint-override`, "POST", {
      data,
    });
  }
}
export namespace missions {
  export function getData(): PlayerMissionEligibilityData {
    return _request(`/lol-missions/v1/data`, "GET", {});
  }
  export function getMissions(): PlayerMissionDTO[] {
    return _request(`/lol-missions/v1/missions`, "GET", {});
  }
  export function getSeries(): SeriesDTO[] {
    return _request(`/lol-missions/v1/series`, "GET", {});
  }
  export function postForce() {
    return _request(`/lol-missions/v1/force`, "POST", {});
  }
  export function putPlayer(
    missionId: string,
    rewardGroups: LolMissionsRewardGroupsSelection
  ) {
    return _request(`/lol-missions/v1/player/${missionId}`, "PUT", {
      rewardGroups,
    });
  }
}
export namespace npe_rewards {
  export function getLevelRewards(): LolNpeRewardsRewardSeries {
    return _request(`/lol-npe-rewards/v1/level-rewards`, "GET", {});
  }
  export function getLoginRewards(): LolNpeRewardsRewardSeries {
    return _request(`/lol-npe-rewards/v1/login-rewards`, "GET", {});
  }
}
export namespace npe_tutorial_path {
  export function getSettings(): LolNpeTutorialPathAccountSettingsTutorial {
    return _request(`/lol-npe-tutorial-path/v1/settings`, "GET", {});
  }
  export function getTutorials(): LolNpeTutorialPathTutorial[] {
    return _request(`/lol-npe-tutorial-path/v1/tutorials`, "GET", {});
  }
  export function putSettings(
    settings: LolNpeTutorialPathAccountSettingsTutorial
  ) {
    return _request(`/lol-npe-tutorial-path/v1/settings`, "PUT", { settings });
  }
}
export namespace pft {
  export function getSurvey(): LolPftPFTSurvey {
    return _request(`/lol-pft/v2/survey`, "GET", {});
  }
  export function postEvents(pftEvent: LolPftPFTEvent): object {
    return _request(`/lol-pft/v2/events`, "POST", { pftEvent });
  }
  export function postSurvey(survey: LolPftPFTSurvey) {
    return _request(`/lol-pft/v2/survey`, "POST", { survey });
  }
}
export namespace platform_config {
  export function getInitialConfigurationComplete(): boolean {
    return _request(
      `/lol-platform-config/v1/initial-configuration-complete`,
      "GET",
      {}
    );
  }
  export function getNamespaces(ns: string, key: string): object {
    return _request(
      `/lol-platform-config/v1/namespaces/${ns}/${key}`,
      "GET",
      {}
    );
  }
}
export namespace player_level_up {
  export function getLevelUp(): LolPlayerLevelUpPlayerLevelUpEvent {
    return _request(`/lol-player-level-up/v1/level-up`, "GET", {});
  }
  export function getLevelUpNotifications(
    pluginName: string
  ): LolPlayerLevelUpPlayerLevelUpEventAck {
    return _request(
      `/lol-player-level-up/v1/level-up-notifications/${pluginName}`,
      "GET",
      {}
    );
  }
  export function postLevelUpNotifications(
    pluginName: string,
    levelUpEventAck: LolPlayerLevelUpPlayerLevelUpEventAck
  ) {
    return _request(
      `/lol-player-level-up/v1/level-up-notifications/${pluginName}`,
      "POST",
      { levelUpEventAck }
    );
  }
}
export namespace player_preferences {
  export function getPlayerPreferencesReady(): boolean {
    return _request(
      `/lol-player-preferences/v1/player-preferences-ready`,
      "GET",
      {}
    );
  }
  export function getPreference(type: string): object {
    return _request(`/lol-player-preferences/v1/preference/${type}`, "GET", {});
  }
  export function postPlayerPreferencesEndpointOverride(
    preferences: LolPlayerPreferencesPlayerPreferencesEndpoint
  ): object {
    return _request(
      `/lol-player-preferences/v1/player-preferences-endpoint-override`,
      "POST",
      { preferences }
    );
  }
  export function putPreference(
    preferences: LolPlayerPreferencesPlayerPreferences
  ): object {
    return _request(`/lol-player-preferences/v1/preference`, "PUT", {
      preferences,
    });
  }
}
export namespace progression {
  export function getReady(): boolean {
    return _request(`/lol-progression/v1/ready`, "GET", {});
  }
}
export namespace publishing_content {
  export function getReady(): boolean {
    return _request(`/lol-publishing-content/v1/ready`, "GET", {});
  }
  export function getSettings(): LolPublishingContentPublishingSettings {
    return _request(`/lol-publishing-content/v1/settings`, "GET", {});
  }
  export function getTftHubCards(): object {
    return _request(`/lol-publishing-content/v1/tft-hub-cards`, "GET", {});
  }
}
export namespace purchase_widget {
  export function getConfiguration(): LolPurchaseWidgetPurchaseWidgetConfig {
    return _request(`/lol-purchase-widget/v1/configuration`, "GET", {});
  }
  export function getOrderNotifications(): LolPurchaseWidgetOrderNotificationResource[] {
    return _request(`/lol-purchase-widget/v1/order-notifications`, "GET", {});
  }
  export function getPurchasableItem(
    inventoryType: string,
    itemId: number
  ): LolPurchaseWidgetPurchasableItem {
    return _request(`/lol-purchase-widget/v1/purchasable-item`, "GET", {
      inventoryType,
      itemId,
    });
  }
  export function getBaseSkinLineData(
    offerId: string
  ): LolPurchaseWidgetBaseSkinLineDto {
    return _request(
      `/lol-purchase-widget/v3/base-skin-line-data/${offerId}`,
      "GET",
      {}
    );
  }
  export function getPurchaseOfferOrderStatuses(): LolPurchaseWidgetPurchaseOfferOrderStatuses {
    return _request(
      `/lol-purchase-widget/v3/purchase-offer-order-statuses`,
      "GET",
      {}
    );
  }
  export function postPurchasableItems(
    inventoryType: string,
    itemIds: number[]
  ): LolPurchaseWidgetItemChoices {
    return _request(
      `/lol-purchase-widget/v1/purchasable-items/${inventoryType}`,
      "POST",
      { itemIds }
    );
  }
  export function postPurchaseItems(
    purchaseRequest: LolPurchaseWidgetPurchaseRequest
  ): object {
    return _request(`/lol-purchase-widget/v2/purchaseItems`, "POST", {
      purchaseRequest,
    });
  }
  export function postPurchaseOffer(
    purchaseOfferRequest: LolPurchaseWidgetPurchaseOfferRequestV3
  ): LolPurchaseWidgetPurchaseOfferResponseV3 {
    return _request(`/lol-purchase-widget/v3/purchaseOffer`, "POST", {
      purchaseOfferRequest,
    });
  }
  export function postValidateOffer(
    validateOfferRequest: LolPurchaseWidgetValidateOfferRequestV3
  ): LolPurchaseWidgetValidateOfferResponseV3 {
    return _request(`/lol-purchase-widget/v3/validateOffer`, "POST", {
      validateOfferRequest,
    });
  }
}
export namespace ranked {
  export function getApexLeagues(
    queueType: LolRankedLeagueQueueType,
    tier: LolRankedLeagueTier
  ): LolRankedLeagueLadderInfo {
    return _request(
      `/lol-ranked/v1/apex-leagues/${queueType}/${tier}`,
      "GET",
      {}
    );
  }
  export function getChallengerLaddersEnabled(): string[] {
    return _request(`/lol-ranked/v1/challenger-ladders-enabled`, "GET", {});
  }
  export function getCurrentLpChangeNotification(): LolRankedLcuLeagueNotification {
    return _request(`/lol-ranked/v1/current-lp-change-notification`, "GET", {});
  }
  export function getCurrentRankedStats(): LolRankedRankedStats {
    return _request(`/lol-ranked/v1/current-ranked-stats`, "GET", {});
  }
  export function getEosNotifications(): LolRankedEosNotificationResource[] {
    return _request(`/lol-ranked/v1/eos-notifications`, "GET", {});
  }
  export function getEosRewards(): LolRankedEosRewardsConfig {
    return _request(`/lol-ranked/v1/eos-rewards`, "GET", {});
  }
  export function getLeagueLadders(puuid: string): LolRankedLeagueLadderInfo[] {
    return _request(`/lol-ranked/v1/league-ladders/${puuid}`, "GET", {});
  }
  export function getNotifications(): LolRankedLcuLeagueNotification[] {
    return _request(`/lol-ranked/v1/notifications`, "GET", {});
  }
  export function getRankedStats(puuid: string): LolRankedRankedStats {
    return _request(`/lol-ranked/v1/ranked-stats/${puuid}`, "GET", {});
  }
  export function getRatedLadder(
    queueType: LolRankedLeagueQueueType
  ): LolRankedRatedLadderInfo {
    return _request(`/lol-ranked/v1/rated-ladder/${queueType}`, "GET", {});
  }
  export function getSignedRankedStats(): LolRankedSignedRankedStatsDTO {
    return _request(`/lol-ranked/v1/signed-ranked-stats`, "GET", {});
  }
  export function getSocialLeaderboardRankedQueueStatsForPuuids(
    queueType: LolRankedLeagueQueueType,
    puuids: string[]
  ): Map<string, LolRankedSocialLeaderboardRankedQueueStats> {
    return _request(
      `/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids`,
      "GET",
      { queueType, puuids }
    );
  }
  export function getSplitsConfig(): LolRankedRewardsInfo {
    return _request(`/lol-ranked/v1/splits-config`, "GET", {});
  }
  export function getTopRatedLaddersEnabled(): string[] {
    return _request(`/lol-ranked/v1/top-rated-ladders-enabled`, "GET", {});
  }
  export function getTiers(
    summonerIds: number[],
    queueTypes: LolRankedLeagueQueueType[]
  ): LolRankedParticipantTiers[] {
    return _request(`/lol-ranked/v2/tiers`, "GET", { summonerIds, queueTypes });
  }
}
export namespace regalia {
  export function getConfig(): LolRegaliaRegaliaFrontendConfig {
    return _request(`/lol-regalia/v2/config`, "GET", {});
  }
  export function getInventory(
    inventoryType: string
  ): Map<string, LolRegaliaRegaliaInventoryItem> {
    return _request(`/lol-regalia/v3/inventory/${inventoryType}`, "GET", {});
  }
}
export namespace replays {
  export function getConfiguration(): LolReplaysReplaysConfiguration {
    return _request(`/lol-replays/v1/configuration`, "GET", {});
  }
  export function getMetadata(gameId: number): LolReplaysReplayMetadata {
    return _request(`/lol-replays/v1/metadata/${gameId}`, "GET", {});
  }
}
export namespace rewards {
  export function getGrants(
    status?: LolRewardsGrantStatus
  ): LolRewardsRewardGrant[] {
    return _request(`/lol-rewards/v1/grants`, "GET", { status });
  }
  export function getGroups(types?: string[]): LolRewardsSvcRewardGroup[] {
    return _request(`/lol-rewards/v1/groups`, "GET", { types });
  }
  export function postSelectBulk(
    selection: LolRewardsSelectionRequestDTO[]
  ): Map<string, LolRewardsSelectGrantStatusResponse> {
    return _request(`/lol-rewards/v1/select-bulk`, "POST", { selection });
  }
}
export namespace service_status {
  export function getLcuStatus(): LolServiceStatusServiceStatusResource {
    return _request(`/lol-service-status/v1/lcu-status`, "GET", {});
  }
  export function getTickerMessages(): LolServiceStatusTickerMessage[] {
    return _request(`/lol-service-status/v1/ticker-messages`, "GET", {});
  }
}
export namespace settings {
  export function getAccount(ppType: string, category: string): object {
    return _request(
      `/lol-settings/v2/account/${ppType}/${category}`,
      "GET",
      {}
    );
  }
  export function getLocal(category: string): object {
    return _request(`/lol-settings/v2/local/${category}`, "GET", {});
  }
  export function getConfig(): LolSettingsSettingsConfig {
    return _request(`/lol-settings/v2/config`, "GET", {});
  }
  export function getDidreset(ppType: string): boolean {
    return _request(`/lol-settings/v2/didreset/${ppType}`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-settings/v2/ready`, "GET", {});
  }
  export function patchAccount(
    ppType: string,
    category: string,
    settingsResource: LolSettingsSettingCategory
  ): object {
    return _request(`/lol-settings/v2/account/${ppType}/${category}`, "PATCH", {
      settingsResource,
    });
  }
  export function patchLocal(
    category: string,
    settingsResource: LolSettingsSettingCategory
  ): object {
    return _request(`/lol-settings/v2/local/${category}`, "PATCH", {
      settingsResource,
    });
  }
  export function postReload(ppType: string) {
    return _request(`/lol-settings/v2/reload/${ppType}`, "POST", {});
  }
  export function putAccount(
    ppType: string,
    category: string,
    settingsResource: LolSettingsSettingCategory
  ): object {
    return _request(`/lol-settings/v2/account/${ppType}/${category}`, "PUT", {
      settingsResource,
    });
  }
}
export namespace shutdown {
  export function getNotification(): LolShutdownShutdownNotification {
    return _request(`/lol-shutdown/v1/notification`, "GET", {});
  }
}
export namespace social_leaderboard {
  export function getLeaderboardNextUpdateTime(
    queueType: LolSocialLeaderboardLeagueQueueType
  ): number {
    return _request(
      `/lol-social-leaderboard/v1/leaderboard-next-update-time`,
      "GET",
      { queueType }
    );
  }
  export function getSocialLeaderboardData(
    queueType: LolSocialLeaderboardLeagueQueueType
  ): LolSocialLeaderboardSocialLeaderboardData {
    return _request(
      `/lol-social-leaderboard/v1/social-leaderboard-data`,
      "GET",
      { queueType }
    );
  }
}
export namespace spectator {
  export function getSpectate(): LolSpectatorSpectateGameInfo {
    return _request(`/lol-spectator/v1/spectate`, "GET", {});
  }
}
export namespace store {
  export function getV1(pageType: string): object {
    return _request(`/lol-store/v1/${pageType}`, "GET", {});
  }
  export function getCatalog(
    inventoryType: string,
    itemIds: number[]
  ): LolStoreCatalogItem[] {
    return _request(`/lol-store/v1/catalog/${inventoryType}`, "GET", {
      itemIds,
    });
  }
  export function getCatalogByInstanceIds(
    instanceIds: string[]
  ): LolStoreCatalogItem[] {
    return _request(`/lol-store/v1/catalogByInstanceIds`, "GET", {
      instanceIds,
    });
  }
  export function getGetStoreUrl(): string {
    return _request(`/lol-store/v1/getStoreUrl`, "GET", {});
  }
  export function getGiftablefriends(): LolStoreGiftingFriend[] {
    return _request(`/lol-store/v1/giftablefriends`, "GET", {});
  }
  export function getItemKeysFromInstanceIds(
    instanceIds: string[]
  ): Map<string, LolStoreItemKey> {
    return _request(`/lol-store/v1/itemKeysFromInstanceIds`, "GET", {
      instanceIds,
    });
  }
  export function getItemKeysFromOfferIds(
    offerIds: string[]
  ): Map<string, LolStoreItemKey> {
    return _request(`/lol-store/v1/itemKeysFromOfferIds`, "GET", { offerIds });
  }
  export function getLastPage(): string {
    return _request(`/lol-store/v1/lastPage`, "GET", {});
  }
  export function getOffers(typeId?: string): LolStoreCapOffer[] {
    return _request(`/lol-store/v2/offers`, "GET", { typeId });
  }
  export function getOrderNotifications(
    id: number
  ): LolStoreOrderNotificationResource {
    return _request(`/lol-store/v1/order-notifications/${id}`, "GET", {});
  }
  export function getPaymentDetails(
    action: string,
    giftRecipientAccountId?: number,
    giftMessage?: string
  ): object {
    return _request(`/lol-store/v1/paymentDetails`, "GET", {
      action,
      giftRecipientAccountId,
      giftMessage,
    });
  }
  export function getSkins(skinId: number): LolStoreCatalogItem {
    return _request(`/lol-store/v1/skins/${skinId}`, "GET", {});
  }
  export function getStatus(): LolStoreStoreStatus {
    return _request(`/lol-store/v1/status`, "GET", {});
  }
  export function getStoreReady(): boolean {
    return _request(`/lol-store/v1/store-ready`, "GET", {});
  }
  export function getWallet(): LolStoreWallet {
    return _request(`/lol-store/v1/wallet`, "GET", {});
  }
  export function postLastPage(pageType: string) {
    return _request(`/lol-store/v1/lastPage`, "POST", { pageType });
  }
  export function postPurchase(
    items: LolStoreItemOrderDTO[]
  ): LolStorePurchaseOrderResponseDTO {
    return _request(`/lol-store/v3/purchase`, "POST", { items });
  }
}
export namespace summoner {
  export function getCheckNameAvailability(name: string): boolean {
    return _request(
      `/lol-summoner/v1/check-name-availability/${name}`,
      "GET",
      {}
    );
  }
  export function getCheckNameAvailabilityNewSummoners(name: string): boolean {
    return _request(
      `/lol-summoner/v1/check-name-availability-new-summoners/${name}`,
      "GET",
      {}
    );
  }
  export function getCurrentSummoner(): LolSummonerSummoner {
    return _request(`/lol-summoner/v1/current-summoner`, "GET", {});
  }
  export function getPlayerNameMode(): LolSummonerPlayerNameMode {
    return _request(`/lol-summoner/v1/player-name-mode`, "GET", {});
  }
  export function getPlayerNameModeString(): string {
    return _request(`/lol-summoner/v1/player-name-mode-string`, "GET", {});
  }
  export function getProfilePrivacyEnabled(): LolSummonerProfilePrivacyEnabledState {
    return _request(`/lol-summoner/v1/profile-privacy-enabled`, "GET", {});
  }
  export function getStatus(): LolSummonerStatus {
    return _request(`/lol-summoner/v1/status`, "GET", {});
  }
  export function getSummonerProfile(puuid: string): object {
    return _request(`/lol-summoner/v1/summoner-profile`, "GET", { puuid });
  }
  export function getSummonerRequestsReady(): boolean {
    return _request(`/lol-summoner/v1/summoner-requests-ready`, "GET", {});
  }
  export function getSummoners(ids?: number[]): LolSummonerSummoner[] {
    return _request(`/lol-summoner/v2/summoners`, "GET", { ids });
  }
  export function getSummonersByPuuidCached(
    puuid: string
  ): LolSummonerSummoner {
    return _request(
      `/lol-summoner/v1/summoners-by-puuid-cached/${puuid}`,
      "GET",
      {}
    );
  }
  export function getSummonerIcons(
    ids: number[]
  ): LolSummonerSummonerIdAndIcon[] {
    return _request(`/lol-summoner/v2/summoner-icons`, "GET", { ids });
  }
  export function getSummonerNames(
    ids: number[]
  ): LolSummonerSummonerIdAndName[] {
    return _request(`/lol-summoner/v2/summoner-names`, "GET", { ids });
  }
  export function postSummoners(
    name: LolSummonerSummonerRequestedName
  ): LolSummonerSummoner {
    return _request(`/lol-summoner/v1/summoners`, "POST", { name });
  }
}
export namespace tastes {
  export function getReady(): boolean {
    return _request(`/lol-tastes/v1/ready`, "GET", {});
  }
  export function getSkinsModel(): LolTastesDataModelResponse {
    return _request(`/lol-tastes/v1/skins-model`, "GET", {});
  }
  export function getTftOverviewModel(): LolTastesDataModelResponse {
    return _request(`/lol-tastes/v1/tft-overview-model`, "GET", {});
  }
}
export namespace tft {
  export function putTft_experiment_bucket(value: number): object {
    return _request(`/lol-tft/v1/tft_experiment_bucket`, "PUT", { value });
  }
}
export namespace trophies {}
export namespace yourshop {
  export function getHasPermissions(): boolean {
    return _request(`/lol-yourshop/v1/has-permissions`, "GET", {});
  }
  export function getModal(): boolean {
    return _request(`/lol-yourshop/v1/modal`, "GET", {});
  }
  export function getOffers(): LolYourshopUIOffer[] {
    return _request(`/lol-yourshop/v1/offers`, "GET", {});
  }
  export function getReady(): boolean {
    return _request(`/lol-yourshop/v1/ready`, "GET", {});
  }
  export function getStatus(): LolYourshopUIStatus {
    return _request(`/lol-yourshop/v1/status`, "GET", {});
  }
  export function getThemed(): boolean {
    return _request(`/lol-yourshop/v1/themed`, "GET", {});
  }
  export function postPermissions(
    permissionRequest: LolYourshopPlayerPermissions
  ): LolYourshopPlayerPermissions {
    return _request(`/lol-yourshop/v1/permissions`, "POST", {
      permissionRequest,
    });
  }
}
export namespace memory {
  export function getFeProcessesReady(): boolean {
    return _request(`/memory/v1/fe-processes-ready`, "GET", {});
  }
  export function postNotifyFeProcessesReady() {
    return _request(`/memory/v1/notify-fe-processes-ready`, "POST", {});
  }
  export function postSnapshot(processIds: number[], context: string) {
    return _request(`/memory/v1/snapshot`, "POST", { processIds, context });
  }
}
export namespace performance {
  export function getMemory(): object {
    return _request(`/performance/v1/memory`, "GET", {});
  }
  export function getReport(): object[] {
    return _request(`/performance/v1/report`, "GET", {});
  }
  export function getSystemInfo(full?: number): object {
    return _request(`/performance/v1/system-info`, "GET", { full });
  }
  export function postProcess(processId: number) {
    return _request(`/performance/v1/process/${processId}`, "POST", {});
  }
}
export namespace plugin_manager {
  export function getStatus(): PluginManagerResource {
    return _request(`/plugin-manager/v1/status`, "GET", {});
  }
  export function getDescriptions(plugin: string): PluginDescriptionResource {
    return _request(`/plugin-manager/v2/descriptions/${plugin}`, "GET", {});
  }
  export function getPlugins(plugin: string): PluginResource {
    return _request(`/plugin-manager/v2/plugins/${plugin}`, "GET", {});
  }
  export function getPluginsManifest(): object {
    return _request(`/plugin-manager/v3/plugins-manifest`, "GET", {});
  }
}
export namespace process_control {
  export function getProcess(): ProcessControlProcess {
    return _request(`/process-control/v1/process`, "GET", {});
  }
}
export namespace sanitizer {
  export function getStatus(): SanitizerSanitizerStatus {
    return _request(`/sanitizer/v1/status`, "GET", {});
  }
  export function postContainsSanitized(
    request: SanitizerContainsSanitizedRequest
  ): SanitizerContainsSanitizedResponse {
    return _request(`/sanitizer/v1/containsSanitized`, "POST", { request });
  }
  export function postSanitize(
    request: SanitizerSanitizeRequest
  ): SanitizerSanitizeResponse {
    return _request(`/sanitizer/v1/sanitize`, "POST", { request });
  }
}
export namespace system {
  export function getBuilds(): BuildInfo {
    return _request(`/system/v1/builds`, "GET", {});
  }
}
export namespace telemetry {
  export function getApplicationStartTime(): number {
    return _request(`/telemetry/v1/application-start-time`, "GET", {});
  }
  export function postCommonData(key: string, value: string) {
    return _request(`/telemetry/v1/common-data/${key}`, "POST", { value });
  }
  export function postEvents(
    eventType: string,
    eventData: Map<string, object>
  ) {
    return _request(`/telemetry/v3/events/${eventType}`, "POST", { eventData });
  }
  export function postEventsWithPerfInfo(
    eventType: string,
    eventData: Map<string, object>
  ) {
    return _request(
      `/telemetry/v1/events-with-perf-info/${eventType}`,
      "POST",
      { eventData }
    );
  }
  export function postEventsOnce(
    eventType: string,
    onceTag: string,
    eventData: Map<string, string>
  ) {
    return _request(
      `/telemetry/v3/events-once/${eventType}/${onceTag}`,
      "POST",
      { eventData }
    );
  }
}
export function headAssets(
  plugin: string,
  path: string,
  ifNoneMatch?: string
): object {
  return _request(`/${plugin}/assets/${path}`, "HEAD", {
    path,
    "if-none-match": ifNoneMatch,
  });
}
export namespace async {
  export function deleteStatus(asyncToken: number): object {
    return _request(`/async/v1/status/${asyncToken}`, "DELETE", {});
  }
  export function getResult(asyncToken: number): object {
    return _request(`/async/v1/result/${asyncToken}`, "GET", {});
  }
  export function getStatus(asyncToken: number): object {
    return _request(`/async/v1/status/${asyncToken}`, "GET", {});
  }
}
export namespace payments {
  export function postPmcStartUrl(
    options: PaymentsFrontEndRequest
  ): PaymentsFrontEndResult {
    return _request(`/payments/v1/pmc-start-url`, "POST", { options });
  }
}
