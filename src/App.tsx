import { useEffect, useRef, useState } from "react";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music.mp3");

    audio.volume = 0.08;
    audio.loop = true;
    audio.preload = "auto";

    audioRef.current = audio;

    const playMusic = async () => {
      try {
        await audio.play();
      } catch {
        const resumeAudio = () => {
          audio.play();

          window.removeEventListener("click", resumeAudio);
          window.removeEventListener("keydown", resumeAudio);
        };

        window.addEventListener("click", resumeAudio);
        window.addEventListener("keydown", resumeAudio);
      }
    };

    playMusic();

    return () => {
      audio.pause();
    };
  }, []);

  const cardStyle = {
    width: selectedVideo ? "240px" : "350px",
    transform: selectedVideo ? "scale(0.92)" : "scale(1)",
    opacity: selectedVideo ? 0.55 : 1,
    transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
    background: "rgba(28, 0, 58, 0.92)",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 0 28px rgba(180,120,255,0.25)",
    border: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    flexShrink: 0,
  };

  const playButtonStyle = {
    width: "85px",
    height: "85px",
    borderRadius: "999px",
    background: "rgba(255,230,255,0.9)",
    border: "none",
    fontSize: "34px",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 0 22px rgba(255,200,255,0.35)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
        fontFamily: "'Trebuchet MS', sans-serif",
        background: "#070018",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Dancing+Script:wght@700&display=swap');

          body {
            margin: 0;
            overflow-x: hidden;
            background: #070018;
          }

          * {
            box-sizing: border-box;
          }

          button:hover {
            transform: scale(1.04);
          }
        `}
      </style>

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.72,
          filter: "brightness(0.92)",
        }}
      >
        <source src="/background.webm" type="video/webm" />
      </video>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,0,20,0.28), rgba(8,0,20,0.58))",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10px",
            marginBottom: "-60px",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "430px",
              maxWidth: "92%",
              objectFit: "contain",
              filter:
                "drop-shadow(0 0 25px rgba(255,190,255,0.6)) drop-shadow(0 0 50px rgba(180,120,255,0.4))",
            }}
          />
        </div>

        <div
          style={{
            width: "760px",
            maxWidth: "90%",
            margin: "0 auto",
            marginTop: "-20px",
            marginBottom: "18px",
            background: "rgba(35, 0, 70, 0.92)",
            borderRadius: "38px",
            padding: "40px 42px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 35px rgba(120,70,255,0.22)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              color: "#fff",
              marginBottom: "12px",
              marginTop: "0px",
              fontFamily: "'Baloo 2', cursive",
              fontWeight: "700",
              lineHeight: "1.1",
            }}
          >
            💜Ethereal & Lethal💜
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "24px",
              lineHeight: "1.7",
              fontFamily: "'Baloo 2', cursive",
              margin: 0,
            }}
          >
            Moonlit queues & cozy vibes, I enjoy playing snipers
            <br />
            and support roles in most games.
            <br />
            Feel free to add me, my name is put on display when u click on a
            game u might be interested in and that I play.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "22px",
            marginBottom: "10px",
          }}
        >
          <a
            href="https://www.twitch.tv/amy_inari"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "260px",
                height: "95px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                background:
                  "linear-gradient(135deg, #9b5cff 0%, #b87dff 100%)",
                boxShadow: "0 0 25px rgba(180,120,255,0.7)",
              }}
            >
              🎮 Twitch
            </button>
          </a>

          <a
            href="https://www.tiktok.com/@amy_kitsu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "260px",
                height: "95px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                background:
                  "linear-gradient(135deg, #ca74ff 0%, #ff6bcf 100%)",
                boxShadow: "0 0 25px rgba(255,120,220,0.4)",
              }}
            >
              🎵 TikTok
            </button>
          </a>

          <a
            href="https://discord.gg/zujPV3h4Ss"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "260px",
                height: "95px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                background:
                  "linear-gradient(135deg, #a678ff 0%, #c69bff 100%)",
                boxShadow: "0 0 25px rgba(200,150,255,0.35)",
              }}
            >
              💬 Discord
            </button>
          </a>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "88px",
            color: "#f7c7ff",
            marginTop: "6px",
            marginBottom: selectedVideo ? "18px" : "24px",
            fontFamily: "'Dancing Script', cursive",
            textShadow: "0 0 25px rgba(255,180,255,0.5)",
          }}
        >
          Gameplay Videos
        </h2>

        {selectedVideo && (
          <div
            style={{
              width: "1200px",
              maxWidth: "94%",
              margin: "0 auto 40px auto",
              background: "rgba(24, 0, 45, 0.92)",
              borderRadius: "40px",
              padding: "22px",
              border: "2px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 0 50px rgba(190,120,255,0.28), inset 0 0 30px rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setSelectedVideo(null);

                if (audioRef.current) {
                  audioRef.current.play();
                }
              }}
              style={{
                position: "absolute",
                top: "-22px",
                right: "-22px",
                width: "70px",
                height: "70px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, rgba(255,210,255,0.95), rgba(255,170,255,0.92))",
                color: "#4b005f",
                fontSize: "34px",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 999,
                boxShadow:
                  "0 0 30px rgba(255,180,255,0.45), inset 0 0 10px rgba(255,255,255,0.4)",
              }}
            >
              ✕
            </button>

            {(selectedVideo === "valo-local-video" ||
              selectedVideo === "lol-local-video") && (
              <div
                style={{
                  textAlign: "center",
                  color: "#ffd7ff",
                  fontSize: "34px",
                  marginBottom: "18px",
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                🌸 Riot Games : Inari Okami#Amy 🌸
              </div>
            )}

            {selectedVideo === "valo-local-video" ? (
              <video
                controls
                autoPlay
                playsInline
                onPlay={() => {
                  if (audioRef.current) {
                    audioRef.current.pause();
                  }
                }}
                onPause={() => {
                  if (audioRef.current && selectedVideo === null) {
                    audioRef.current.play();
                  }
                }}
                onEnded={() => {
                  if (audioRef.current) {
                    audioRef.current.play();
                  }
                }}
                style={{
                  width: "100%",
                  borderRadius: "28px",
                }}
              >
                <source src="/valo-display.mp4" type="video/mp4" />
              </video>
            ) : selectedVideo === "lol-local-video" ? (
              <video
                controls
                autoPlay
                playsInline
                onPlay={() => {
                  if (audioRef.current) {
                    audioRef.current.pause();
                  }
                }}
                onPause={() => {
                  if (audioRef.current && selectedVideo === null) {
                    audioRef.current.play();
                  }
                }}
                onEnded={() => {
                  if (audioRef.current) {
                    audioRef.current.play();
                  }
                }}
                style={{
                  width: "100%",
                  borderRadius: "28px",
                }}
              >
                <source src="/lol-display.mp4" type="video/mp4" />
              </video>
            ) : null}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: selectedVideo ? "14px" : "35px",
            flexWrap: "nowrap",
            padding: "0 20px",
          }}
        >
          <div
            style={cardStyle}
            onClick={() => setSelectedVideo("lol-local-video")}
          >
            <img
              src="/league.jpg"
              alt="League"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#ffd9ff",
                  fontSize: "28px",
                  marginBottom: "18px",
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                🌸League🌸
              </h3>

              <button style={playButtonStyle}>▶</button>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/cozy.jpg"
              alt="Me"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "24px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#ffd9ff",
                  fontSize: "28px",
                  marginBottom: "20px",
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                🌸Me🌸
              </h3>

              <div
                style={{
                  padding: "14px 26px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, rgba(255,210,255,0.18), rgba(190,120,255,0.18))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#ffd9ff",
                  fontSize: "22px",
                  fontFamily: "'Baloo 2', cursive",
                  boxShadow: "0 0 18px rgba(255,180,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                ✨ Coming soon... ✨
              </div>
            </div>
          </div>

          <div
            style={cardStyle}
            onClick={() => setSelectedVideo("valo-local-video")}
          >
            <img
              src="/valorant.jpg"
              alt="Valorant"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#ffd9ff",
                  fontSize: "28px",
                  marginBottom: "18px",
                  fontFamily: "'Baloo 2', cursive",
                }}
              >
                🌸Valorant🌸
              </h3>

              <button style={playButtonStyle}>▶</button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "55px",
            marginBottom: "30px",
          }}
        >
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=RL6BCXCKL668L"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                padding: "16px 38px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(255,210,255,0.16), rgba(190,120,255,0.16))",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 0 22px rgba(255,180,255,0.18)",
                color: "#ffd9ff",
                fontSize: "22px",
                fontFamily: "'Baloo 2', cursive",
              }}
            >
              💜 Donation 💜
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}