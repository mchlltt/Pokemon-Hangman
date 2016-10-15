pokemon <- read.csv(file = "~/cbc/week-3-game/assets/pokemon/pokemon.csv",stringsAsFactors = FALSE)
types <- read.csv(file = "~/cbc/week-3-game/assets/pokemon/pokemon_types.csv",stringsAsFactors = FALSE)
typemap <- read.csv(file = "~/cbc/week-3-game/assets/pokemon/types.csv",stringsAsFactors = FALSE)

pokemon <- pokemon[,1:2]
types <- types[,1:2]
typemap <- typemap[,1:2]

typed <- merge.data.frame(types,typemap,by.x='type_id',by.y='id',all.x = TRUE)
typed <- typed[,2:3]

typed <- aggregate(typed[2], typed[1], FUN = function(X) paste(unique(X),collapse = ", "))

final <- merge.data.frame(typed,pokemon,by.x='pokemon_id',by.y='id',all.y = TRUE)
final$type <- final$identifier.x
final$name <- final$identifier.y
final$identifier.x <- NULL
final$identifier.y <- NULL

finalJSON <- toJSON(final)

writeLines(finalJSON,"~/cbc/week-3-game/assets/pokemon/pokemon_cleaned.json")