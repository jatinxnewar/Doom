"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Music, Brain, Users } from "lucide-react";

export default function Home() {
    const [file, setFile] = useState(null);
    const [song, setSong] = useState(null);

    const songs = [
        { title: "Song 1", url: "/songs/song1.mp3" },
        { title: "Song 2", url: "/songs/song2.mp3" },
        { title: "Song 3", url: "/songs/song3.mp3" },
        { title: "Song 4", url: "/songs/song4.mp3" },
        { title: "Song 5", url: "/songs/song5.mp3" },
        { title: "Song 6", url: "/songs/song6.mp3" },
        { title: "Song 7", url: "/songs/song7.mp3" },
        { title: "Song 8", url: "/songs/song8.mp3" },
        { title: "Song 9", url: "/songs/song9.mp3" },
        { title: "Song 10", url: "/songs/song10.mp3" },
    ];

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            setSong(randomSong);
            console.log("Uploading file:", file.name);
            setFile(null);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 to-purple-500">
            <main className="flex-grow flex items-center justify-center p-4 w-full">
                <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-7xl">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                        PEGASIS
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        AI-Powered Song Recommendations Based on Facial Expressions
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                        <div className="space-y-2">
                            <Label
                                htmlFor="image"
                                className="text-lg font-medium text-gray-700"
                            >
                                Upload Your Photo
                            </Label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                        document.getElementById("image").click()
                                    }
                                    className="w-full"
                                >
                                    <Upload className="mr-2 h-4 w-4" />
                                    {file ? file.name : "Choose file"}
                                </Button>
                                {file && (
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => setFile(null)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Clear
                                    </Button>
                                )}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!file}
                        >
                            Get Song Recommendations
                        </Button>
                    </form>

                    {song && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold text-center mb-4">
                                Now Playing: {song.title}
                            </h2>
                            <audio controls className="w-full">
                                <source src={song.url} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Brain className="mr-2" /> How It Works
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    PEGASIS uses advanced AI and Large Language
                                    Models (LLMs) to analyze facial expressions
                                    in uploaded photos. It then generates
                                    personalized song recommendations based on
                                    the detected emotions and mood.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Music className="mr-2" /> Features
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Instant song recommendations</li>
                                    <li>Emotion-based music matching</li>
                                    <li>
                                        Integration with popular music streaming
                                        platforms
                                    </li>
                                    <li>Personalized playlist generation</li>
                                    <li>
                                        Multi-face analysis for group photos
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Users className="mr-2" /> Development Team
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    PEGASIS is developed by a diverse team of AI
                                    researchers, music enthusiasts, and software
                                    engineers. Our mission is to create
                                    innovative ways to connect emotions with
                                    music, enhancing the listening experience
                                    for users worldwide.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 text-white py-4 w-full">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} PEGASIS. All rights
                        reserved.                
                        Developed By JATIN NEWAR
                    </p>
                </div>
            </footer>
        </div>
    );
}
