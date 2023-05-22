import { LolChatFriendRequestResource, LolChatFriendResource } from "./types";

const _request = (
  url: string,
  method: string,
  args?: { [key: string]: any }
): any => {
  return {};
};

export namespace chat {
  export const deleteBlockedPlayers = (id: string): object =>
    _request(`/lol-chat/v1/blocked-players/${id}`, "DELETE");
  export const postFriendRequests = (request: LolChatFriendRequestResource) =>
    _request(`/lol-chat/v1/friend-requests`, "POST", { request: request });
  export const putFriends = (id: string, contact: LolChatFriendResource) =>
    _request(`/lol-chat/v1/friends/${id}`, "PUT", { contact: contact });
}
