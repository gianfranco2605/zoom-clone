"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isSchedualeMeeting" | "isJoiningMeeting" | "isInstanceMeeting" | undefined
  >();

  const createMeeting = () => {};
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstanceMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => "isJoiningMeeting"}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isSchedualeMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meetings recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-yellow-1"
      />
      <MeetingModal
        isOpen={meetingState === "isInstanceMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instance meeting"
        className="text-center"
        buttontext="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
