import { Badge } from "@/components/ui/badge";
import { ExternalLink, Radio, Video } from "lucide-react";
import { musicVideos } from "./musicData";

const MusicVideosSection = () => {
  // Format date nicely
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Episodes &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live Streams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through Trance and Techno soundscapes
          </p>
        </div>

        {/* Video List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {musicVideos.map((video, index) => {
            const Icon = video.type === 'live-stream' ? Radio : Video;

            return (
              <div
                key={video.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Card */}
                    <div className="relative glass border border-border rounded-3xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          {/* Type badge and date */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant={video.type === 'live-stream' ? 'default' : 'secondary'}>
                              <Icon className="h-3 w-3 mr-1" />
                              {video.type === 'live-stream' ? 'Live Stream' : 'Video'}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {formatDate(video.date)}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {video.title}
                          </h3>

                          {/* Description */}
                          {video.description && (
                            <p className="text-sm text-muted-foreground">
                              {video.description}
                            </p>
                          )}
                        </div>

                        {/* External link icon */}
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Empty state (if no videos) */}
        {musicVideos.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-lg">No episodes yet. Check back soon!</p>
            <p className="text-sm mt-2">
              Subscribe to{" "}
              <a
                href="https://www.youtube.com/@trancefjord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @trancefjord
              </a>
              {" "}on YouTube to stay updated
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MusicVideosSection;
