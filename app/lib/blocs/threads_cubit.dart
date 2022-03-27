import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/threads.dart';

import '../services/api.dart';

class ThreadsCubit extends Cubit<ThreadsModel?> {
  ThreadsCubit() : super(null);

  loadThreads(String topicId) async {
    final ThreadsModel? threads = await api.loadThreads(topicId);
    emit(threads);
  }
}
