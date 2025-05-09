"use client";
import React, { useState } from "react";
import { IoIosAttach, IoIosSend } from "react-icons/io";
import { FaArrowLeft, FaUser } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";
import { GoReply } from "react-icons/go";
import {
  useGetSupportInfoQuery,
  useReplySupportMutation,
} from "@/app/store/api/supportApi";
import { format } from "date-fns";
import toast from "react-hot-toast";

const TicketDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [replyMessage, setReplyMessage] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const { data, refetch } = useGetSupportInfoQuery(id);
  const [replySupport] = useReplySupportMutation();

  const messages = [
    {
      id: 1,
      type: "admin",
      user: {
        name: "Admin Support",
        image: "",
      },
      subject: "Replied to conversation",
      message:
        "Hi,\n\nI have to leave the city for a week and I'm afraid nobody will be there to collect my order (#248) when it arrives. Is there a way I can change my shopping address?\n\nThanks.",
      timestamp: "Wed 08 2018 at 08:15AM",
    },
    {
      id: 2,
      type: "user",
      user: {
        name: "John Hunter",
        image: "",
      },
      subject: "Facing Issues with my subscription plan! Need help!",
      message:
        "Hi,\n\nI have to leave the city for a week and I'm afraid nobody will be there to collect my order (#248) when it arrives. Is there a way I can change my shopping address?\n\nThanks.",
      timestamp: "Wed 08 2018 at 08:15AM",
    },
  ];

  const handleFileAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };
  const handleSendReply = async () => {
    const replyData = {
      content: replyMessage,
    };
    try {
      const response = await replySupport({
        id,
        content: replyData,
      }).unwrap();
      refetch();
      setReplyMessage("");
      setShowReply(false);
      toast.success("Reply Sended Successfully");
    } catch (error) {
      console.error("Failed to send reply:", error);
    }
  };
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className=" font-semibold">Back</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <h2 className="text-md">
          <span className="font-semibold ">Ticket ID:</span>{" "}
          {data?.data?.ticket_id}
        </h2>

        {/* Messages */}
        <div className=" p-4 rounded-lg col-span-4">
          <h2 className="text-lg font-medium mb-4">Conversation</h2>
          <div className="space-y-6">
            {data?.data?.messages?.map((message) => (
              <div key={message.id} className=" p-4 bg-white rounded-lg">
                <div className="flex items-start gap-4">
                  {/* Message Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2 border-b pb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          {/* {message?.user?.image ? (
                            <img
                              src={message.user.image}
                              alt={message.user.name.slice(0, 2)}
                              className="w-10 h-10 rounded-full"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <p className="text-gray-600">
                                {message.user.name.slice(0, 2)}
                              </p>
                            </div>
                          )} */}
                          <div className="bg-gray-100 w-10 h-10 border rounded-full flex justify-center items-center text-gray-400">
                            <FaUser size={20} />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm mb-1">
                              {" "}
                              {message?.is_from_user
                                ? data?.data?.subject
                                : "Admin Support"}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {message?.is_from_user ? "user" : "admin"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {format(
                          new Date(message.created_at),
                          "dd MMMM yyyy HH:mm"
                        )}
                      </span>
                    </div>
                    <div className="whitespace-pre-wrap text-gray-700">
                      {message?.content}
                    </div>

                    {/* Reply Button */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showReply ? (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowReply(true)}
                className="bg-black text-white px-4 py-2 rounded hover:opacity-90 flex gap-2 text-[14px] cursor-pointer"
              >
                <GoReply size={20} /> Reply
              </button>
            </div>
          ) : (
            <div className="mt-6 bg-white p-4 rounded-lg">
              {messages[0].user.image ? (
                <img
                  src={messages[0].user.image}
                  alt={messages[0].user.name.slice(0, 2)}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">
                    {messages[0].user.name.slice(0, 2)}
                  </p>
                </div>
              )}
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2 mb-4 ml-2">
                <GoReply size={18} /> {messages[0].subject}
              </p>
              <textarea
                placeholder="Type here..."
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                className="w-full rounded-lg p-3 h-32 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
              />

              {/* File Attachments Section */}
              <div className="mb-4">
                {/* Show attached files */}
                {attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="flex-1 truncate">{file.name}</div>
                        <button
                          onClick={() =>
                            setAttachments(
                              attachments.filter((_, i) => i !== index)
                            )
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-start gap-6">
                <button
                  disabled={replyMessage.length === 0}
                  onClick={handleSendReply}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90 flex items-center gap-2 text-[14px] cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <IoIosSend size={18} /> Send
                </button>
                {/* <input
                  type="file"
                  multiple
                  id="file-attachment"
                  className="hidden"
                  onChange={handleFileAttachment}
                />
                <label
                  htmlFor="file-attachment"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  <div className="hover:text-blue-500 p-1 rounded-full">
                    <IoIosAttach size={24} />
                  </div>
                </label> */}
                <button
                  onClick={() => {
                    setShowReply(false);
                    setAttachments([]);
                  }}
                  className="px-4 py-2 rounded hover:bg-gray-100 text-[14px]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
