interface packageInfo {
    msrp: number,
    plannedPrice: number,
    lens: {
        included: boolean, // If not included, lowers the general score
        detachable: boolean, // If detachable, glass and bodyDamage wont affect the rating as harshly
        glass: LensGlass,
        bodyDamage: GenericBodyDamage,
    },
    media: {
        storage: MediaType,
        usable: MediaUsable
    }, 
    battery: {
        included: boolean,
        tested: boolean,
        batteryType: BatteryType,
        coinBatteryRequired: boolean,
    }
}

enum BatteryType {
    HARD_PLASTIC,
    SOFT_PLASTIC,
    STANDARD_BATTERY // AA, AAA, etc...
}

enum MediaUsable {
    YES,
    BLOCKED,
    OPTICAL_SCRATCHED,
    TAPE_MECHANISM_BROKEN,
    STUCK,
}

enum MediaType {
    TAPE,
    SD,
    MICROSD,
    DISC,
    PROPRIETARY,
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