library(rjson)

pokemon <- read.csv(file = "~/cbc/week-3-game/assets/data/pokemon.csv",stringsAsFactors = FALSE)
types <- read.csv(file = "~/cbc/week-3-game/assets/data/pokemon_types.csv",stringsAsFactors = FALSE)
typemap <- read.csv(file = "~/cbc/week-3-game/assets/data/types.csv",stringsAsFactors = FALSE)

pokemon <- pokemon[,1:2]
types <- types[,1:2]
typemap <- typemap[,1:2]

typed <- merge.data.frame(types,typemap,by.x='type_id',by.y='id',all.x = TRUE)
typed <- typed[,2:3]

typed <- aggregate(typed[2], typed[1], FUN = function(X) paste(unique(X),collapse = ", "))

merged <- merge.data.frame(typed,pokemon,by.x='pokemon_id',by.y='id',all.y = TRUE)
merged$type <- merged$identifier.x
merged$name <- merged$identifier.y
merged$identifier.x <- NULL
merged$identifier.y <- NULL

final <- merged[1:493,]

for (i in 1:length(final$name)) {
  if (!grepl('^[A-Za-z]+$', final$name[i])) {
    final$name[i] <- NA
  }
}

final <- na.omit(final)

object = ""
for (i in 1:length(final$pokemon_id)) {
  line = paste0("{id=",final$pokemon_id[i],",name='",final$name[i],"',type='",final$type[i],"'},")
  object <- append(object,line)
}

writeLines(object,con = "output.txt")

finalJSON <- toJSON(final)

writeLines(finalJSON,"~/cbc/week-3-game/assets/pokemon/pokemon_cleaned.json")