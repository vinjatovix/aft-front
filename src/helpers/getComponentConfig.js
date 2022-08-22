export const getComponentConfig = (type, { bookId }) => {
  const confirmationQuestion =
    type === "scene"
      ? "¿Quieres eliminar esta escena?"
      : "¿Quieres eliminar este personaje?";

  const navigateButtonPath =
    type === "scene" ? `/book/${bookId}/characters` : `/book/${bookId}/scenes`;

  const navigateButtonText = type === "scene" ? "🎭 Personajes" : "🎬 Escenas";

  const title = type === "scene" ? "Escenas:" : "Personajes:";

  return {
    confirmationQuestion,
    navigateButtonPath,
    navigateButtonText,
    title,
  };
};
