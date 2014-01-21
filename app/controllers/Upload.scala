package controllers

import play.modules.reactivemongo.MongoController
import play.api.mvc.{Action, Controller}
import play.api.libs.json.Json

/**
 * Created by sdjamaa on 17/01/14.
 */
object Upload extends Controller with MongoController {

  def uploadPhoto = Action(parse.multipartFormData) { request =>

    Console.println("KIKOO " + request.body)

    request.body.file("file").map { picture =>
      import java.io.File
      val filename = picture.filename

    Console.println(filename + "MDR")

      val contentType = picture.contentType
      picture.ref.moveTo(new File(s"ui/app/images/$filename"))
      Ok(Json.toJson(Map("filename" -> filename)))
    }.getOrElse {
      Redirect(routes.Application.index).flashing(
        "error" -> "Missing file")
    }
  }

}
