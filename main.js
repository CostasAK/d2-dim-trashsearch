const exclude =
  '-tag:keep -tag:locked -is:inloadout -is:maxpower -crystocrene -dreambane'

const or_list = {
  tags_lists: '(is:trashlist or tag:junk) power:<powerfulcap',
  rare: '-is:legendary -is:exotic',
  sunset: 'sunsetsin:current',
  exotic_weapons: 'is:exotic is:weapon is:dupelower -hawkmoon',
  armor:
    '-crystocrene -dreambane -is:classitem -is:exotic ((is:legendary power:<=powerfulcap) or (is:rare power:<1310)) (basestat:total:<60 or basestat:custom:<40)',
  class_items: 'is:classitem (is:rare or powerlimit:<1410) power:<powerfulcap'
}

var search_string = exclude + ' ('

var is_first = true

for (let key in or_list) {
  if (is_first == false) {
    search_string += ' or '
  }
  is_first = false
  search_string += '(' + or_list[key] + ')'
}

search_string += ')'

console.log(search_string)
