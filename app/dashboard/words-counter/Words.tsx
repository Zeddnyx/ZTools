"use client";
import React, { useState } from "react";
import Input from "@/components/Input";

export default function Color() {
    const [length, setLength] = useState<number>(0);

    const handleCount = (words: string) => {
        let word = words.trim();
        let wordsCount = word.split(/\s+/).filter((word: any) => word).length;
        setLength(wordsCount);
    };

    return (
        <>
            <div className="w-3/4 mx-auto lg:w-full">
                <Input
                label="words"
                type="text"
                name="words"
                onChange={(e) =>
                    handleCount(e.target.value)
                }
                />

                <h1 className="my-8">Total words: {length}</h1>
            </div>
        </>
    );
}
