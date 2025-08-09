import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { cn, getRandomInterviewCover, getTechLogos } from "@/lib/utils";

// Server-safe DisplayTechIcons
const DisplayTechIcons = async ({ techStack }: { techStack: string[] }) => {
    if (!techStack?.length) return null;

    const logos = await getTechLogos(techStack);

    return (
        <div className="flex gap-2">
            {logos.map(({ tech, url }) => (
                <Image key={tech} src={url} alt={tech} width={24} height={24} />
            ))}
        </div>
    );
};

const InterviewCard = async ({
                                 interviewId,
                                 userId,
                                 role,
                                 type,
                                 techstack,
                                 createdAt,
                             }: InterviewCardProps) => {
    const feedback =
        userId && interviewId
            ? await getFeedbackByInterviewId({ interviewId, userId })
            : null;

    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

    // Capsule badge colors (now includes matching border)
    const badgeStyles: Record<string, string> = {
        Behavioral: "bg-light-400 text-black border-light-400",
        Mixed: "bg-light-600 text-black border-light-600",
        Technical: "bg-light-800 text-white border-light-800",
    };

    const badgeColor = badgeStyles[normalizedType] || "bg-light-600 text-black border-light-600";

    const formattedDate = dayjs(
        feedback?.createdAt || createdAt || Date.now()
    ).format("MMM D, YYYY");

    return (
        <div className="card-border w-[360px] max-sm:w-full flex flex-col overflow-hidden rounded-lg bg-dark-900">
            {/* Logo container */}
            <div className="relative flex items-center justify-center h-28 bg-dark-800">
                <Image
                    src={getRandomInterviewCover()}
                    alt="company-logo"
                    width={90}
                    height={90}
                    className="object-contain"
                />

                {/* Capsule Badge */}
                <div
                    className={cn(
                        "absolute top-3 right-3 px-4 py-1.5 rounded-full text-sm font-semibold border",
                        badgeColor
                    )}
                >
                    {normalizedType}
                </div>
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col justify-between flex-1">
                <h3 className="capitalize font-semibold">{role} Interview</h3>

                {/* Date & Score */}
                <div className="flex flex-row gap-5 mt-3 text-sm text-gray-300">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
                        <p>{formattedDate}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/star.svg" width={20} height={20} alt="star" />
                        <p>{feedback?.totalScore || "---"}/100</p>
                    </div>
                </div>

                {/* Feedback text */}
                <p className="line-clamp-2 mt-4 text-sm text-gray-400">
                    {feedback?.finalAssessment ||
                        "You haven't taken this interview yet. Take it now to improve your skills."}
                </p>

                {/* Footer */}
                <div className="flex flex-row justify-between items-center mt-5">
                    {/* @ts-expect-error Async Server Component */}
                    <DisplayTechIcons techStack={techstack} />

                    <Button className="btn-primary text-sm">
                        <Link
                            href={
                                feedback
                                    ? `/interview/${interviewId}/feedback`
                                    : `/interview/${interviewId}`
                            }
                        >
                            {feedback ? "Check Feedback" : "View Interview"}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InterviewCard;
