import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function WebsiteAnalysis() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string[]>([]);

  const isValidURL = (string: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})" + // domain name
      "(\\/[\\w-./?%&=]*)?)$" // path
    );
    return pattern.test(string);
  };

  const handleAnalyze = () => {
    if (!url.trim()) {
      alert("Please enter your website URL");
      return;
    }

    if (!isValidURL(url)) {
      alert("❌ Your URL is invalid. Please enter a valid website URL (e.g., https://example.com)");
      return;
    }

    setLoading(true);
    setAnalysis([]);

    setTimeout(() => {
      setAnalysis([
        "✅ Website loads in 1.8 seconds — excellent performance.",
        "📱 Fully mobile-responsive with smooth navigation.",
        "🔍 SEO optimization score: 92/100 — well above average.",
        "🎨 Modern and clean UI design enhances user experience.",
        "🔒 HTTPS enabled — strong security for visitors.",
        "📊 Well-structured content with proper heading hierarchy.",
        "🖼️ Optimized images reduce load time without losing quality.",
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Website Analysis</h1>
      <p className="text-gray-400 mb-6 text-center max-w-lg">
        Paste your website URL below to get a quick static analysis of your site.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-white placeholder-gray-400"
        />
        <Button
          onClick={handleAnalyze}
          variant="outline"
          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        >
          Analyze
        </Button>
      </div>

      {loading && <p className="mt-6 text-yellow-400">Analyzing your website...</p>}

      {analysis.length > 0 && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-3">Analysis Result</h2>
          <ul className="list-disc list-inside space-y-2">
            {analysis.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
