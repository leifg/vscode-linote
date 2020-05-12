snippetList
  = snippet+

snippet
  = header:snippetHeader "\n" _ body:snippetBody {
    return {
      id: header.id,
      body: body
    }
  }

snippetHeader
  = "[//]: <> (" id:uuid ")" {
  return { id: id }
 }


uuid
  = $(uuidPart+)

uuidPart
  = [a-f]
  / [A-F]
  / [0-9]
  / "-"

snippetBody
  = $((!(snippetHeader) .)+)

 _
  = (whitespace)*

whitespace
  = "\t"
  / lineTerminator
  / "\v"
  / "\f"
  / " "
  / "\u00A0"
  / "\u200b"
  / "\uFEFF"

lineTerminator
  = [\n\r\u2028\u2029]
