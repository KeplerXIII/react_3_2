function getQuantityLevel(quantity: number): string {
    if (quantity <= 10) {
        return "level-low";
    } else if (quantity <= 20) {
        return "level-medium";
    } else {
        return "level-high";
    }
}

export function Level({ qty }: { qty: number }): React.ReactNode {
    return (
        <p className={"item-quantity" + " " + getQuantityLevel(qty)}>{qty}</p>
    )
}