import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/threads.dart';

class ThreadsCubit extends Cubit<ThreadsModel?> {
  ThreadsCubit() : super(null);

  loadThreads() async {
    final ThreadsModel threads = ThreadsModel.fromJson(const {
      "objects": [
        {
          "id": "4545345",
          "name": "Why me?",
          "datetime": 1648318509890000,
          "topic": {"id": "36473647364464", "name": "Neglect"},
          "author": {
            "id": "3647473673464",
            "username": "xenikii"
          }
        },
      ]
    });
    emit(threads);
  }
}
