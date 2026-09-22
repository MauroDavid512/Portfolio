import React from "react";
import "./About.css";
import "./initanimation.css";
import aboutmebutton from "../imgs/aboutmebutton.png";
import aboutmebuttonES from "../imgs/aboutmebuttonES.png";
import dibumile from "../imgs/dibumile.png";
import fotomile from "../imgs/fotomile.png";
import grape from "../imgs/grape.png";
import ligalogo from "../imgs/ligalogo.png";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function About() {
  const { darkMode, lang } = useSelector((state) => state);
  const [stickerPosition, setStickerPosition] = useState({
    x: 0,
    y: 0,
    rotation: 0,
  });
  const [isDraggingSticker, setIsDraggingSticker] = useState(false);
  const resetStickerTimer = useRef(null);
  const dragStart = useRef({ pointerX: 0, pointerY: 0, x: 0, y: 0 });

  useEffect(() => {
    return () => {
      if (resetStickerTimer.current) {
        clearTimeout(resetStickerTimer.current);
      }
    };
  }, []);

  const clearStickerReset = () => {
    if (resetStickerTimer.current) {
      clearTimeout(resetStickerTimer.current);
      resetStickerTimer.current = null;
    }
  };

  const handleStickerPointerDown = (event) => {
    event.preventDefault();
    clearStickerReset();

    dragStart.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: stickerPosition.x,
      y: stickerPosition.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDraggingSticker(true);
  };

  const handleStickerPointerMove = (event) => {
    if (!isDraggingSticker) {
      return;
    }

    const deltaX = event.clientX - dragStart.current.pointerX;
    const deltaY = event.clientY - dragStart.current.pointerY;

    setStickerPosition({
      x: dragStart.current.x + deltaX,
      y: dragStart.current.y + deltaY,
      rotation: Math.max(-18, Math.min(18, deltaX * 0.08)),
    });
  };

  const releaseSticker = (event) => {
    if (!isDraggingSticker) {
      return;
    }

    if (event?.currentTarget?.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDraggingSticker(false);
    clearStickerReset();
    resetStickerTimer.current = setTimeout(() => {
      setStickerPosition({ x: 0, y: 0, rotation: 0 });
      resetStickerTimer.current = null;
    }, 7000);
  };

  return (
    <div className="initanimation">
      <img
        className={`imgtitle ${darkMode ? "darkletter" : "lightletter"}`}
        src={lang === "EN" ? aboutmebutton : aboutmebuttonES}
        alt=""
      />
      <br />
      <div className="photocontainer">
        <img className="dibumile photo" src={fotomile} alt="" />
        <img
          className={`dibumile draw ${isDraggingSticker ? "stickerDragging" : ""}`}
          src={dibumile}
          alt=""
          draggable="false"
          style={{
            transform: `translate(${stickerPosition.x}px, ${stickerPosition.y}px) rotate(${stickerPosition.rotation}deg)`,
          }}
          onPointerDown={handleStickerPointerDown}
          onPointerMove={handleStickerPointerMove}
          onPointerUp={releaseSticker}
          onPointerCancel={releaseSticker}
        />
      </div>
      <div className="aboutcontainer">
        {lang === "EN" ? (
          <div className="abouttext">
            <div className="paragraph">
              My name is Mauro Alós. I am a Full Stack Developer with a frontend
              focus and professional experience building products and websites
              with React, Next.js and TypeScript. I work independently on
              interfaces, integrations, authentication, analytics, performance
              and deployments, and I participate in backend development when the
              project requires it.
            </div>
            <br />
            <div className="paragraph">
              <img className="grape" src={grape} alt="" />
              I'm from Mendoza, Argentina. The land of the Sun and good wine.
              And I like wine... So much. I love my country and I invite you to
              know more about it.
            </div>
            <br />
            <div className="paragraph">
              <img className="ligalogo" src={ligalogo} alt="" />I enjoy doing
              theater. I'm a member of the Mendoza Improvisation League. The
              cast for which I created their official website (You can see it in
              this portfolio).
            </div>
          </div>
        ) : (
          <div className="abouttext">
            <div className="paragraph">
              Mi nombre es Mauro Alós. Soy Full Stack Developer con fuerte
              orientación al frontend y experiencia profesional desarrollando
              productos y sitios web con React, Next.js y TypeScript. Trabajo
              con autonomía en interfaces, integraciones, autenticación,
              analítica, performance y despliegues, y participo en backend
              cuando el proyecto lo requiere.
            </div>
            <br />
            <div className="paragraph">
              <img className="grape" src={grape} alt="" />
              Soy de Mendoza, Argentina. La tierra del Sol y del buen vino. Y me
              gusta el vino... bastante. Amo a mi país por lo que te invito a
              conocer más del mismo.
            </div>
            <br />
            <div className="paragraph">
              <img className="ligalogo" src={ligalogo} alt="" />I enjoy doing
              theater. I'm a member of the Mendoza Improvisation League. The
              cast for which I created their official website. Adoro hacer
              teatro. Soy miembro de la Liga Mendocina de Improvisación. Elenco
              del cual he creado su sitio oficial (Podés verlo en este
              portafolio).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
