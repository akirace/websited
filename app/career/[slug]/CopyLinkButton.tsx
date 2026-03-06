"use client";

export default function CopyLinkButton() {
    return (
        <button
            onClick={() => {
                if (typeof window !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                }
            }}
            className="w-full px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
        >
            Copy Link
        </button>
    );
}
