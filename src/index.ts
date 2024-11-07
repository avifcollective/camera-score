interface packageInfo {
    msrp: number,
    plannedPrice: number,
    lens: {
        glass: LensGlass,
        bodyDamage: GenericBodyDamage,
    }
}

enum LensGlass {
    NOT_SCRATCHED,
    MINIMALLY_SCRATCHED,
    LIGHTLY_SCRATCHED,
    NOTICEABLY_SCRATCHED,
    HEAVILY_SCRATCHED,
    BROKEN_BUT_USABLE,
    BROKEN_BUT_REPAIRABLE,
    BROKEN
}

enum GenericBodyDamage {
    PRISTINE,
    UNNOTICEABLE_SCUFFS,
    SMALL_SCUFFS,
    SCRATCHED,
    SMALL_DENTS,
    BIG_DENTS,
    CRACKED,
    HEAVILY_CRACKED
}

enum GenericRubberDamage {
    PRISTINE,
    UNNOTICEABLE_SCUFFS,
    SMALL_SCUFFS,
    SCRATCHED,
    HARD,
    CRACKING,
    FALLING_OFF,
    TORN_OFF,
}

function calculateScore(camera: packageInfo) {

}