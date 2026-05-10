"use client";

import { useMemo, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconCheck,
  IconCopy,
  IconMail,
} from "@tabler/icons-react";

import { Button, buttonVariants } from "@/components/ui/button";
import type { CvData } from "@/lib/cv-data";
import { cn } from "@/lib/utils";

const conversationOptions = [
  {
    id: "internship",
    label: "Internship",
    message:
      "Hi Arlan, I saw your portfolio and would like to discuss an internship opportunity.",
  },
  {
    id: "project",
    label: "Project",
    message:
      "Hi Arlan, I saw your portfolio and would like to talk about a web project.",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    message:
      "Hi Arlan, I saw your portfolio and would like to discuss a collaboration.",
  },
] as const;

type ConversationId = (typeof conversationOptions)[number]["id"];

type ConnectSectionProps = {
  links: CvData["links"];
  profile: CvData["profile"];
};

export function ConnectSection({ links, profile }: ConnectSectionProps) {
  const [selected, setSelected] = useState<ConversationId>("internship");
  const [message, setMessage] = useState<string>(conversationOptions[0].message);
  const [copied, setCopied] = useState(false);
  const githubLink = links.find((link) => link.label === "GitHub");
  const linkedInLink = links.find((link) => link.label === "LinkedIn");
  const telegramLink = links.find((link) => link.label === "Telegram");
  const selectedOption = useMemo(
    () => conversationOptions.find((option) => option.id === selected),
    [selected],
  );
  const telegramHref = telegramLink
    ? `${telegramLink.href}?text=${encodeURIComponent(message)}`
    : undefined;
  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio contact",
  )}&body=${encodeURIComponent(message)}`;

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  const selectConversation = (id: ConversationId) => {
    setSelected(id);
    setMessage(
      conversationOptions.find((option) => option.id === id)?.message ??
        conversationOptions[0].message,
    );
    setCopied(false);
  };

  return (
    <section
      id="connect"
      className="scroll-mt-24 rounded-lg border border-border bg-card text-card-foreground"
    >
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Connect
          </p>
          <h2 className="mt-2 font-heading text-3xl tracking-tight">
            Start a Conversation
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Interested in working together or discussing an internship
            opportunity? Contact me by email, Telegram, or LinkedIn.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {conversationOptions.map((option) => {
              const isSelected = selected === option.id;

              return (
                <Button
                  key={option.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => selectConversation(option.id)}
                >
                  {isSelected ? <IconCheck aria-hidden="true" /> : null}
                  {option.label}
                </Button>
              );
            })}
          </div>

          <label
            htmlFor="connect-message"
            className="mt-5 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id="connect-message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setCopied(false);
            }}
            rows={4}
            className="mt-2 min-h-32 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm leading-7 text-foreground outline-none transition placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            placeholder={selectedOption?.message}
          />
        </div>

        <div className="flex flex-col justify-end gap-2">
          <a
            href={emailHref}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "w-full",
            })}
          >
            <IconMail aria-hidden="true" />
            Email Me
          </a>
          <a
            href={telegramHref ?? emailHref}
            target={telegramHref ? "_blank" : undefined}
            rel={telegramHref ? "noreferrer" : undefined}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full",
            })}
          >
            <IconBrandTelegram aria-hidden="true" />
            Telegram
          </a>
          {linkedInLink ? (
            <a
              href={linkedInLink.href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full",
              })}
            >
              <IconBrandLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          ) : null}
          {githubLink ? (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full",
              })}
            >
              <IconBrandGithub aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={copyMessage}
            className={cn("w-full", copied && "bg-muted text-foreground")}
          >
            {copied ? <IconCheck aria-hidden="true" /> : <IconCopy aria-hidden="true" />}
            {copied ? "Copied" : "Copy Message"}
          </Button>
        </div>
      </div>
    </section>
  );
}
