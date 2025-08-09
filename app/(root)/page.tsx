import React from "react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/app/components/InterviewCard";

const Page = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>

                    <p className="text-lg">
                        Practice on real interviews with AI-powered feedback.
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/">Start an Interview</Link>
                    </Button>
                </div>

                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            {/* Your Interviews Section */}
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                <div className="flex flex-wrap gap-6">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview} />
                    ))}
                </div>
            </section>

            {/* Take an Interview Section */}
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="flex flex-wrap gap-6">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={`take-${interview.id}`} {...interview} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Page;
