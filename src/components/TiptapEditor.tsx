"use client";

import {
  EditorContent,
  Editor,
  Content,
  EditorContentProps,
} from "@tiptap/react";
import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaSmile,
  FaHeading,
  FaQuoteRight,
  FaCode,
  FaParagraph,
} from "react-icons/fa";

type TiptapEditorProps = Readonly<EditorContentProps>;

export default function TiptapEditor({ editor, ...props }: TiptapEditorProps) {
  if (!editor) return null;

  return (
    <div className="space-y-4 flex-1 flex flex-col">
      <div className="flex flex-wrap gap-2 border-b pb-2">
        <EditorButton editor={editor} action="bold" icon={<FaBold />} />
        <EditorButton editor={editor} action="italic" icon={<FaItalic />} />
        <EditorButton
          editor={editor}
          action="strike"
          icon={<FaStrikethrough />}
        />
        <EditorButton
          editor={editor}
          action="paragraph"
          icon={<FaParagraph />}
        />
        <EditorButton editor={editor} action="heading1" icon={<FaHeading />} />
        <EditorButton
          editor={editor}
          action="heading2"
          icon={<FaHeading className="text-sm" />}
        />
        <EditorButton editor={editor} action="bulletList" icon={<FaListUl />} />
        <EditorButton
          editor={editor}
          action="orderedList"
          icon={<FaListOl />}
        />
        <EditorButton
          editor={editor}
          action="blockquote"
          icon={<FaQuoteRight />}
        />
        <EditorButton editor={editor} action="code" icon={<FaCode />} />
        <EditorButton editor={editor} action="emoji" icon={<FaSmile />} />
      </div>

      <EditorContent
        editor={editor}
        {...props}
        className={
          "border p-4 bg-white rounded-md min-h-[120px] " +
          (props.className ?? "")
        }
      />
    </div>
  );
}

interface EditorButtonProps {
  readonly editor: Editor;
  readonly action:
    | "bold"
    | "italic"
    | "strike"
    | "paragraph"
    | "heading1"
    | "heading2"
    | "bulletList"
    | "orderedList"
    | "blockquote"
    | "code"
    | "emoji";
  readonly icon: React.ReactNode;
}

function EditorButton({ editor, action, icon }: EditorButtonProps) {
  const isActive = (() => {
    switch (action) {
      case "heading1":
        return editor.isActive("heading", { level: 1 });
      case "heading2":
        return editor.isActive("heading", { level: 2 });
      default:
        return editor.isActive(action);
    }
  })();

  const [showPicker, setShowPicker] = useState(false);

  const toggle = () => {
    switch (action) {
      case "bold":
        editor.chain().focus().toggleBold().run();
        break;
      case "italic":
        editor.chain().focus().toggleItalic().run();
        break;
      case "strike":
        editor.chain().focus().toggleStrike().run();
        break;
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        break;
      case "heading1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "heading2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "bulletList":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "orderedList":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "blockquote":
        editor.chain().focus().toggleBlockquote().run();
        break;
      case "code":
        editor.chain().focus().toggleCodeBlock().run();
        break;
      case "emoji":
        setShowPicker(!showPicker);
        break;
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggle}
        className={`p-2 border rounded hover:bg-gray-200 transition ${
          isActive ? "bg-gray-300" : ""
        }`}
      >
        {icon}
      </button>
      {action === "emoji" && showPicker && (
        <div className="absolute z-10">
          <Picker
            data={data}
            onEmojiSelect={(emoji: { native: Content }) => {
              editor.chain().focus().insertContent(emoji.native).run();
              setShowPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
