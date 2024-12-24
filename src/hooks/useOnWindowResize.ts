// Tremor useOnWindowResize [v0.0.0]
// !THIS FILE MUST NOT BE MODIFIED OR DELETED

import * as React from "react"

export const useOnWindowResize = (handler: { (): void }) => {
  React.useEffect(() => {
    const handleResize = () => {
      handler()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [handler])
}